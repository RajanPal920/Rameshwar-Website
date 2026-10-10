Add-Type -AssemblyName System.Runtime.WindowsRuntime

$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { 
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' 
} | Select-Object -First 1

function Await-Async($asyncOp, $type) {
    $method = $asTaskGeneric.MakeGenericMethod($type)
    $task = $method.Invoke($null, @($asyncOp))
    $task.Wait()
    return $task.Result
}

$lang = New-Object Windows.Globalization.Language('en-US')
$ocrEngine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)

$images = Get-ChildItem scratch/catalogue_images/*.jpg | Where-Object { $_.Length -gt 150000 }

foreach ($img in $images) {
    Write-Host "================== $($img.Name) =================="
    try {
        $file = Await-Async ([Windows.Storage.StorageFile]::GetFileFromPathAsync($img.FullName)) ([Windows.Storage.StorageFile])
        $stream = Await-Async ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
        $decoder = Await-Async ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
        $bitmap = Await-Async ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
        $result = Await-Async ($ocrEngine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
        Write-Host $result.Text
    } catch {
        Write-Host "Error: $_"
    }
}
