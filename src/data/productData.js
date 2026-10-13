// Verified Product & Catalogue Data for Rameshwar Industries
// Extracted from public/catelogue/ram-catalogue.pdf & Verified Workshop Specifications

export const CATALOGUE_DOWNLOAD_URL = "/catelogue/ram-catalogue.pdf";

const RAW_PRODUCTS = [
  // ==========================================
  // GROUP 1: METAL INDUSTRIAL NAME PLATES & LABELS
  // ==========================================
  {
    id: "machine-name-plates",
    slug: "name-plate-manufacturer-in-mumbai",
    seoUrl: "/name-plate-manufacturer-in-mumbai",
    aliases: ["machine-name-plates", "products/machine-name-plates", "machine-name-plates/manufacturer-in-india", "industrial-metal-name-plates", "machine-rating-plates", "name-plate-manufacturer-in-mumbai"],
    number: "01",
    title: "Machine Name Plates",
    metaTitle: "Name Plate Manufacturer in Mumbai | Rameshwar Industries",
    metaDescription: "Manufacturer of custom industrial machine name plates in Mumbai and India. Heavy-duty stainless steel, aluminium and brass equipment plates with laser etching and stamping.",
    canonicalUrl: "https://rameshwarindustries.com/name-plate-manufacturer-in-mumbai",
    category: "Metal Industrial Name Plates & Labels",
    image: "/images/machine-name-plate.jpg",
    description: "Customized heavy-duty machine rating plates carrying model number, RPM, voltage, serial code, and manufacturer specifications.",
    overview: "Manufactured using high-grade stainless steel (SS 304/316) and anodized aluminium for industrial machinery, motors, pumps, valves, and heavy equipment. Markings include full motor electrical ratings, gear ratios, serial numbers, and manufacturer branding engineered to withstand oils, coolants, grease, and continuous vibration.",
    specifications: {
      materials: "Stainless Steel (SS 304 / SS 316), Anodized Aluminium, Brass",
      markingMethods: "Chemical Etching, Fiber Laser Engraving, Stamping & Embossing",
      thicknessRange: "0.5 mm to 3.0 mm",
      temperatureRating: "Up to 800°C (Stainless Steel) / Up to 300°C (Aluminium)",
      mounting: "4-Hole Corner Rivets, Countersunk Screws, 3M High-Bond Adhesive",
      surfaceFinish: "Brushed Satin, Mirror Polished, Matte Anodized",
      chemicalResistance: "Resistant to hydraulic oils, cutting coolants, grease, mild acids",
      standardsCompliance: "ISO 9001:2015, CE Marking Compliant, IP-Rating Compatible"
    },
    materials: ["Stainless Steel", "Aluminium", "Brass"],
    mounting: ["Corner Rivet Holes", "3M VHB Industrial Adhesive", "Machine Screws"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 1 & 4 (Metal Industrial Name Plates & Labels)",
    applications: [
      "Electric Motors & Induction Drives (1450 RPM, 50Hz, Class F)",
      "Hydraulic Power Packs & Pressure Vessels",
      "CNC Machine Tools & Milling Centers",
      "Industrial Pumps, Compressors & Turbines"
    ]
  },
  {
    id: "motor-rating-plates",
    slug: "motor-rating-plates-manufacturer-in-india",
    seoUrl: "/motor-rating-plates-manufacturer-in-india",
    aliases: ["motor-rating-plates", "products/motor-rating-plates", "motor-rating-plates/manufacturer-in-india", "induction-motor-plates", "motor-rating-plates-manufacturer-in-india"],
    number: "02",
    title: "Equipment & Motor Rating Plates",
    metaTitle: "Motor Rating Plates Manufacturer in India | Rameshwar Industries",
    metaDescription: "Precision motor rating plates and electrical machine specification tags in stainless steel and aluminium. Displays HP, kW, RPM, voltage, amps, frequency, and insulation class.",
    canonicalUrl: "https://rameshwarindustries.com/motor-rating-plates-manufacturer-in-india",
    category: "Metal Industrial Name Plates & Labels",
    image: "/images/products/motor-rating-plates.jpg",
    description: "Industrial electric motor rating plates displaying HP, kW, RPM, voltage, frequency, phase, full-load amps, and insulation class.",
    overview: "Directly featured on Page 4 of our official catalogue (e.g. SKY Tech & Cleaning Systems 3.5 HP, 2.6 kW, 1450 RPM, 230V, 50 Hz, INSL - F Class Induction Motor Plate). Fabricated from anodized aluminium or etched stainless steel with pre-formatted tabular grids and stamped blank fields for field inspection or factory testing stamping.",
    specifications: {
      materials: "Anodized Aluminium (Alloy 1050/5052), Stainless Steel (SS 304)",
      markingMethods: "Chemical Etching, Fiber Laser Marking, Blank Windows for Dot Peen",
      thicknessRange: "0.5 mm to 2.0 mm",
      temperatureRating: "Up to 300°C continuous motor surface operation",
      mounting: "Corner Drive Rivets, Pop Rivet Holes, 3M High-Temperature Adhesive",
      surfaceFinish: "Matte Blue Anodized, Clear Satin Brushed, Black Enamel Fill",
      chemicalResistance: "Resistant to motor oils, bearing grease, outdoor moisture, solvent wash",
      standardsCompliance: "IEC 60034 Electric Motor Standards, NEMA MG1, ISO 9001:2015"
    },
    materials: ["Aluminium", "Stainless Steel"],
    mounting: ["Corner Rivets", "Drive Pins", "High-Bond Adhesive"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 4 (Induction Motor 50 Hz, 1450 RPM, Class F)",
    applications: [
      "Three-Phase & Single-Phase Induction Motors (1450 RPM, 50Hz, Class F)",
      "Industrial Submersible & Centrifugal Water Pumps",
      "Air Compressors, Blowers & Vacuum Pumps",
      "Geared Motors, Gearboxes & Transmission Skids"
    ]
  },
  {
    id: "valve-body-trim-plates",
    slug: "valve-body-trim-plates-manufacturing-in-mumbai",
    seoUrl: "/valve-body-trim-plates-manufacturing-in-mumbai",
    aliases: ["valve-body-trim-plates", "products/valve-body-trim-plates", "valve-body-trim-plates/manufacturer-in-india", "valve-name-plates", "valve-body-trim-plates-manufacturing-in-mumbai"],
    number: "03",
    title: "Valve Body & Trim Identification Plates",
    metaTitle: "Valve Body Trim Plates Manufacturing in Mumbai | Rameshwar Industries",
    metaDescription: "Manufacturer of valve body, trim, seat and flange rating specification plates in SS 316 and aluminium. For ball valves, gate valves, globe valves and actuators.",
    canonicalUrl: "https://rameshwarindustries.com/valve-body-trim-plates-manufacturing-in-mumbai",
    category: "Metal Industrial Name Plates & Labels",
    image: "/images/products/valve-body-trim-plates.jpg",
    description: "High-pressure valve identification plates displaying body material, trim metallurgy, flange rating, Cv, spring range, and hydrostatic test pressure.",
    overview: "Directly featured on Page 4 of our product catalogue (Pneucon Valves CE 0343, 4Matic valves, and Valve Solutions Ltd). Custom engineered for high-pressure industrial valves, control valves, and actuation skids. Contains detailed engineering fields for Serial No., Tag No., Model, Size, Flange Rating, Body Material, Trim Material, Characteristic, Travel, Spring Range, and Hydraulic Test Pressure.",
    specifications: {
      materials: "Stainless Steel SS 316 / SS 304, Anodized Aluminium",
      markingMethods: "Deep Chemical Etching, Laser Annealing, Permanent Contrast Fill",
      thicknessRange: "0.8 mm to 2.5 mm",
      temperatureRating: "-50°C to +800°C (SS 316 cryogenic to steam service)",
      mounting: "4 Corner Fastener Holes, Drive Rivets, Safety Wire Eyelets",
      surfaceFinish: "No. 4 Satin Brushed, Passivated Marine Finish",
      chemicalResistance: "Immune to hydrocarbons, sour gas (H2S), caustic wash, marine salt spray",
      standardsCompliance: "API 6D, API 600/602, CE 2014/68/EU Pressure Equipment Directive"
    },
    materials: ["Stainless Steel", "Aluminium"],
    mounting: ["Drive Rivets", "Bolted Flange Fasteners", "Wire Ties"],
    leadTime: "3 - 5 Days",
    catalogueRef: "Catalogue Page 4 (Pneucon Valves & 4Matic Valve Plates)",
    applications: [
      "Gate, Globe & Check Valves (Class 150 to Class 2500)",
      "Pneumatic & Electric Actuator Valve Skids",
      "Petrochemical Pipeline Manifolds & Refinery Valves",
      "Steam Pressure Reducing Stations & Steam Traps"
    ]
  },
  {
    id: "equipment-data-plates",
    slug: "equipment-data-plates-supplier-in-mumbai",
    seoUrl: "/equipment-data-plates-supplier-in-mumbai",
    aliases: ["equipment-data-plates", "products/equipment-data-plates", "equipment-data-plates/manufacturer-in-india", "system-data-plates", "equipment-data-plates-supplier-in-mumbai"],
    number: "04",
    title: "Equipment Data & Pressure Rating Plates",
    metaTitle: "Equipment Data Plates Supplier in Mumbai | Rameshwar Industries",
    metaDescription: "Tabulated rating charts and technical specification plates for pressure reducing panels, boilers, heat exchangers, and industrial capital skids in SS and aluminium.",
    canonicalUrl: "https://rameshwarindustries.com/equipment-data-plates-supplier-in-mumbai",
    category: "Metal Industrial Name Plates & Labels",
    image: "/images/products/equipment-data-plates.jpg",
    description: "Tabulated rating charts and technical specification plates for pressure reducing panels, boilers, heat exchangers, and industrial capital skids.",
    overview: "Featured on Page 4 of our catalogue (e.g. Hyva Max Press 250 BAR hydraulic plate, Flash Forge / MAN Diesel & Turbo Pressure Reducing Panel 160-200 BAR). Engineered with pre-formatted grid layouts, regulatory certification marks (CE, ASME, BIS, IP ratings), and blank stampable fields for field engineers to hand-stamp or dot-peen unique serial numbers and hydrostatic test pressures.",
    specifications: {
      materials: "Stainless Steel (SS 304 / SS 316), Anodized Aluminium",
      markingMethods: "Chemical Etching, Laser Engraving, Pre-Printed Grid Matrix",
      thicknessRange: "0.8 mm to 2.5 mm",
      temperatureRating: "-50°C to +700°C",
      mounting: "Corner Drive Rivets, Machine Screws, 3M High-Bond Tape",
      surfaceFinish: "Deep Etch with Black Contrast Enamel Fill, Anodized Blue Sheen",
      chemicalResistance: "Oil, grease, solvent wash, outdoor monsoon weather, hydraulic fluid",
      standardsCompliance: "ASME Section VIII, CE Machine Directive, ISO 9001:2015"
    },
    materials: ["Stainless Steel", "Aluminium"],
    mounting: ["Solid Drive Rivets", "Bolts & Washers", "Corner Fasteners"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 4 (Hyva 250 BAR & Flash Forge MAN Diesel Pressure Panels)",
    applications: [
      "Hydraulic Pressure Reducing Panels (160 - 200 BAR)",
      "Pressure Vessels, Heat Exchangers & Boilers",
      "Air Compressors, Refrigeration Chillers & Vacuum Pumps",
      "Overhead Cranes, Winches & Material Handling Units"
    ]
  },
  {
    id: "serial-number-name-plates",
    slug: "serial-number-name-plates-manufacturer-in-mumbai",
    seoUrl: "/serial-number-name-plates-manufacturer-in-mumbai",
    aliases: ["serial-number-name-plates", "products/serial-number-name-plates", "serial-number-name-plates/manufacturer-in-india", "asset-serial-plates", "serial-number-name-plates-manufacturer-in-mumbai"],
    number: "05",
    title: "Model & Serial Number Name Plates",
    metaTitle: "Serial Number Name Plates Manufacturer in Mumbai | Rameshwar Industries",
    metaDescription: "Sequential serial number plates, batch tracking tags, and equipment model plates in stainless steel, brass, and aluminium. Laser marked and stamped.",
    canonicalUrl: "https://rameshwarindustries.com/serial-number-name-plates-manufacturer-in-mumbai",
    category: "Metal Industrial Name Plates & Labels",
    image: "/images/products/serial-number-name-plates.jpg",
    description: "High-contrast serial number tracking plates with alphanumeric stamped fields, batch codes, supply voltage ratings, and inspection matrices.",
    overview: "Directly showcased on Page 1 and Page 4 of our catalogue (GroundProbe Motor Control Module MCM GP24020, Supply 10-30V DC 60W, Serial Number 0026, and Rosedale Products Model & Release Number plates). Features permanent sequentially numbered digits, QR codes, or open stampable windows for plant floor stamping.",
    specifications: {
      materials: "Stainless Steel 304, Anodized Aluminium, Brass",
      markingMethods: "Sequential Fiber Laser Engraving, Mechanical Stamping, Rotary Dot-Peen",
      thicknessRange: "0.5 mm to 2.0 mm",
      temperatureRating: "Up to 600°C (SS) / Up to 250°C (Aluminium)",
      mounting: "Pop Rivets, Countersunk Machine Screws, 3M VHB Tape",
      surfaceFinish: "Satin Brushed, Matte Anodized, Clear Lacquered Brass",
      chemicalResistance: "Resistant to lubricants, degreasers, hydraulic fluid, brake clean",
      standardsCompliance: "ISO 9001:2015, MIL-STD-130 UID Tracking Compliant"
    },
    materials: ["Stainless Steel", "Aluminium", "Brass"],
    mounting: ["Drive Rivets", "Machine Screws", "High-Bond VHB Adhesive"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 1 & 4 (MCM GP24020 & Rosedale Serial Number Plates)",
    applications: [
      "Motor Control Modules (MCM) & Electronic Driver Units",
      "Industrial Generators, Alternators & Welders",
      "Capital Machinery Serial & Warranty Tracking",
      "Factory Preventative Maintenance Batch Stamping"
    ]
  },

  // ==========================================
  // GROUP 2: ALUMINIUM NAME PLATES & LABELS
  // ==========================================
  {
    id: "aluminium-name-plates",
    slug: "aluminium-name-plates-manufacturer-in-india",
    seoUrl: "/aluminium-name-plates-manufacturer-in-india",
    aliases: ["aluminium-name-plates", "products/aluminium-name-plates", "aluminium-name-plates/manufacturer-in-india", "anodized-aluminium-plates", "aluminium-name-plates-manufacturer-in-india"],
    number: "06",
    title: "Aluminium Name Plates & Labels",
    metaTitle: "Aluminium Name Plates Manufacturer in India | Rameshwar Industries",
    metaDescription: "Anodized aluminium name plates, serial tags, and automotive VIN plates. Scratch-resistant, lightweight, and long-lasting metal plates from Rameshwar Industries.",
    canonicalUrl: "https://rameshwarindustries.com/aluminium-name-plates-manufacturer-in-india",
    category: "Aluminium Name Plates & Labels",
    image: "/images/aluminium-metal-plate.jpg",
    description: "Lightweight anodized aluminium plates with sub-surface sealed photographic dyes and laser markings for machinery, instrumentation, and enclosures.",
    overview: "Manufactured from high-purity aluminium alloys (1050 / 5052 / 6061) featuring an electro-chemical anodic layer that permanently seals dyes inside sapphire-hard pores. Completely impervious to outdoor UV weathering, grease, solvents, and scratch damage, making it the preferred choice for vehicle VIN plates, motor ratings, and asset tracking.",
    specifications: {
      materials: "Anodized Aluminium (Alloy 1050, 5052, 6061-T6)",
      markingMethods: "Anodized Dye Sealing, Fiber Laser Etching, Screen Printing, Embossing",
      thicknessRange: "0.3 mm to 3.0 mm",
      temperatureRating: "Up to 300°C",
      mounting: "High-Tack Adhesive Backing, Pop Rivet Holes, Stamped Slots",
      surfaceFinish: "Clear Anodized Satin, Matte Black, Bright Silver, Color Coded",
      chemicalResistance: "Non-oxidizing, resistant to gasoline, diesel, engine coolants",
      standardsCompliance: "Automotive OEM Standards, ISO 9001:2015, RoHS Compliant"
    },
    materials: ["Aluminium"],
    mounting: ["Blind Pop Rivets", "3M 200MP Adhesive", "Drive Pins"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 1 & 4 (Aluminium Name Plates & Labels Section)",
    applications: [
      "Commercial Vehicles, Trailers & Automotive Chassis",
      "Fractional Horsepower & Industrial Induction Motors",
      "Electronics Enclosures & Scientific Instruments",
      "HVAC Condensers, Air Handling Units & Blowers"
    ]
  },
  {
    id: "aluminium-barcode-asset-plates",
    slug: "aluminium-barcode-asset-plates-supplier-in-india",
    seoUrl: "/aluminium-barcode-asset-plates-supplier-in-india",
    aliases: ["aluminium-barcode-asset-plates", "products/aluminium-barcode-asset-plates", "aluminium-barcode-asset-plates/manufacturer-in-india", "barcode-metal-tags", "aluminium-identification-tags", "aluminium-barcode-asset-plates-supplier-in-india"],
    number: "07",
    title: "Aluminium Barcode & Asset Identification Plates",
    metaTitle: "Aluminium Barcode Asset Plates Supplier in India | Rameshwar Industries",
    metaDescription: "Durable barcode and 2D Data Matrix asset tracking name plates in anodized aluminium. Scannable metal tags for plant inventory and warehouse equipment.",
    canonicalUrl: "https://rameshwarindustries.com/aluminium-barcode-asset-plates-supplier-in-india",
    category: "Aluminium Name Plates & Labels",
    image: "/images/products/aluminium-barcode-asset-plates.jpg",
    description: "High-resolution linear barcode and 2D Data Matrix asset tracking plates anodized into aluminium for permanent optical readability.",
    overview: "Directly featured on Page 4 of our catalogue (Département de l'Allier 112500120 Barcode plate, Data Graphics UID Registry 2D Matrix tag, ConcealFab CAGE Code Tag, and EMS Marcon dual level sensor plates). Markings are sealed beneath the anodic layer to withstand chemical wash, steam cleaning, and abrasive wear without scanning degradation.",
    specifications: {
      materials: "Photosensitive Anodized Aluminium, Hard-Coat 6061 Aluminium",
      markingMethods: "Sub-Surface Anodized Dye Infusion, High-Precision Fiber Laser",
      thicknessRange: "0.3 mm to 2.0 mm",
      temperatureRating: "-40°C to +300°C continuous",
      mounting: "3M 468MP High-Bond Adhesive, Dual Corner Pop Rivet Holes",
      surfaceFinish: "Matte Non-Glare Anodized for 100% Optical Scanner Read Rates",
      chemicalResistance: "Impervious to alcohol, paint thinner, fuel spills, industrial detergents",
      standardsCompliance: "AIM BC1 Linear Barcode Standards, ISO/IEC 15415 2D Matrix, MIL-STD-130"
    },
    materials: ["Aluminium"],
    mounting: ["3M Industrial Adhesive Backing", "Pop Rivets", "Drive Screws"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 4 (Département de l'Allier Barcode & Data Graphics UID Tags)",
    applications: [
      "Factory Capital Asset Inventory & Fixed Asset Auditing",
      "Warehouse Pallet Racks, Forklifts & Material Handling Units",
      "Telecom Enclosures, Server Racks & Electronics Cabinets",
      "Laboratory Instrumentation & Calibration Management"
    ]
  },
  {
    id: "automotive-engine-rating-plates",
    slug: "automotive-engine-rating-plates-manufacturing-in-mumbai",
    seoUrl: "/automotive-engine-rating-plates-manufacturing-in-mumbai",
    aliases: ["automotive-engine-rating-plates", "products/automotive-engine-rating-plates", "automotive-engine-rating-plates/manufacturer-in-india", "vin-plates", "automotive-engine-rating-plates-manufacturing-in-mumbai"],
    number: "08",
    title: "Automotive & Engine Specification Plates",
    metaTitle: "Automotive Engine Rating Plates Manufacturing in Mumbai | Rameshwar Industries",
    metaDescription: "Manufacturer of automotive VIN plates, engine code tags, and chassis specification plates in stamped aluminium and stainless steel.",
    canonicalUrl: "https://rameshwarindustries.com/automotive-engine-rating-plates-manufacturing-in-mumbai",
    category: "Aluminium Name Plates & Labels",
    image: "/images/products/automotive-engine-rating-plates.jpg",
    description: "Automotive chassis VIN plates, engine code tags, transmission ratio plates, and vehicle body identification plates in stamped anodized aluminium.",
    overview: "Directly featured on Page 4 of our catalogue (VIN DM27674130060058, Year 2013, MFG W61 3307, Engine TRA17, Body Style 6G72, Paint Code P183, Rear End Ratio R71). Fabricated with decorative raised beveled borders, embossed or laser-marked alphanumeric fields, and pre-punched rivet holes for automotive chassis mounting.",
    specifications: {
      materials: "High-Formability Aluminium (Alloy 5052), Stainless Steel (SS 304)",
      markingMethods: "Die Stamping, High-Contrast Laser Marking, Embossed Border",
      thicknessRange: "0.5 mm to 1.5 mm",
      temperatureRating: "-40°C to +350°C (Under-hood engine bay conditions)",
      mounting: "Solid Blind Rivets, Countersunk Pop Rivets",
      surfaceFinish: "Clear Satin Anodized with High-Contrast Deep Black Infill",
      chemicalResistance: "Resistant to motor oil, brake fluid, antifreeze, road salt",
      standardsCompliance: "ISO 3779 / 3780 Automotive VIN Regulations, ISO 9001:2015"
    },
    materials: ["Aluminium", "Stainless Steel"],
    mounting: ["Blind Solid Rivets", "Chassis Fasteners", "Industrial Adhesive"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 4 (VIN DM27674130060058 Engine TRA17 Plate)",
    applications: [
      "Commercial Truck & Bus Chassis Identification (VIN)",
      "Automobile Engine Blocks, Cylinders & Transmission Casings",
      "Agricultural Tractors, Harvesters & Earthmoving Machinery",
      "Special Purpose Vehicles, Ambulances & Fire Trucks"
    ]
  },

  // ==========================================
  // GROUP 3: WARNING & INSTRUCTION PLATES
  // ==========================================
  {
    id: "warning-instruction-plates",
    slug: "warning-plate-manufacturing-in-mumbai",
    seoUrl: "/warning-plate-manufacturing-in-mumbai",
    aliases: ["warning-instruction-plates", "products/warning-instruction-plates", "warning-instruction-plates/manufacturer-in-india", "warning-plate-manufacturing-in-mumbai"],
    number: "09",
    title: "Warning & Instruction Plates",
    metaTitle: "Warning Plate Manufacturing in Mumbai | Rameshwar Industries",
    metaDescription: "Industrial warning plates, high voltage danger tags, and equipment instruction plates in stainless steel and aluminium. OSHA & ISO compliant safety signs.",
    canonicalUrl: "https://rameshwarindustries.com/warning-plate-manufacturing-in-mumbai",
    category: "Warning & Instruction Plates",
    image: "/images/img7.jpg",
    description: "High-visibility danger, caution, and operating instruction plates manufactured with permanent fade-proof safety colors for industrial plants.",
    overview: "Directly featured on Page 4 of our product catalogue under the dedicated 'Warning & Instruction Plate' section. Communicates critical safety protocols and operating warnings across heavy machinery, electrical transformers, and chemical facilities. Marked with UV-stable safety reds, yellows, and blacks that never fade under outdoor weathering.",
    specifications: {
      materials: "SS 304, Anodized Aluminium, Rigid PVC & Polycarbonate",
      markingMethods: "Multi-Color Chemical Etch & Enamel Bake, UV Screen Print",
      thicknessRange: "0.6 mm to 2.0 mm",
      temperatureRating: "Up to 500°C (SS) / Up to 250°C (Aluminium)",
      mounting: "Corner Rivet Holes, 3M High-Bond Foam Tape",
      surfaceFinish: "Anti-Glare Matte, Satin Metallic, Scratch Resistant",
      chemicalResistance: "Acid splash, industrial detergent cleaning, oil mist",
      standardsCompliance: "ISO 7010 Safety Sign Standards, OSHA 1910.145, CE Directives"
    },
    materials: ["Stainless Steel", "Aluminium", "PVC & Vinyl"],
    mounting: ["Rivet Fixing", "Corner Machine Screws", "Heavy Duty Adhesive"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 4 (Warning & Instruction Plate Group)",
    applications: [
      "Heavy Machinery Operating Hazard Zones",
      "Electrical Control Room Panels & Switchgear",
      "Chemical Storage & Process Equipment Safety",
      "Industrial Plant Access Doors & Safety Enclosures"
    ]
  },
  {
    id: "caution-warning-plates",
    slug: "caution-warning-plates-supplier-in-mumbai",
    seoUrl: "/caution-warning-plates-supplier-in-mumbai",
    aliases: ["caution-warning-plates", "products/caution-warning-plates", "caution-warning-plates/manufacturer-in-india", "industrial-safety-signs/manufacturer-in-india", "safety-warning-hazard-signs", "caution-warning-plates-supplier-in-mumbai"],
    number: "10",
    title: "Caution & Danger Warning Plates",
    metaTitle: "Caution Warning Plates Supplier in Mumbai | Rameshwar Industries",
    metaDescription: "Heavy-duty caution and danger warning plates in metal and aluminium. Machine pinch point, cutting blade hazard, and multilingual warning signs.",
    canonicalUrl: "https://rameshwarindustries.com/caution-warning-plates-supplier-in-mumbai",
    category: "Warning & Instruction Plates",
    image: "/images/products/caution-warning-plates.jpg",
    description: "Vibrant red and yellow safety warning plates for mechanical pinch points, moving cutting blades, machine guards, and multi-lingual hazard warnings.",
    overview: "Featured directly on Page 4 of our catalogue: '¡ATENCION!' hydraulic filter warning, 'DANGER DO NOT OPERATE WITHOUT GUARDS IN PLACE' pinch-point tag, and 'CAUTION MOVEABLE CUTTING BLADE — KEEP HANDS CLEAR'. Engineered with baked industrial enamel fills and high-contrast warning headers that comply with international industrial safety norms.",
    specifications: {
      materials: "Stainless Steel 304, Anodized Aluminium, Rigid Polycarbonate",
      markingMethods: "Baked Enamel Chemical Etch, Sub-Surface UV Screen Print",
      thicknessRange: "0.6 mm to 2.0 mm",
      temperatureRating: "-40°C to +450°C (Metal) / Up to 120°C (Polycarbonate)",
      mounting: "4-Hole Corner Rivets, Countersunk Screws, 3M VHB Industrial Adhesive",
      surfaceFinish: "Safety Yellow & Signal Red High-Visibility Contrast Finish",
      chemicalResistance: "Grease, synthetic cutting coolants, caustic wash, alcohol wipe down",
      standardsCompliance: "OSHA 1910.145 Danger/Caution Signs, ISO 7010 Graphical Symbols"
    },
    materials: ["Stainless Steel", "Aluminium"],
    mounting: ["Pop Rivets", "Machine Fasteners", "High-Bond VHB Adhesive"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 4 (¡ATENCION!, Danger Guards In Place, Moveable Cutting Blade Plates)",
    applications: [
      "Metal Shears, Slitters & Moving Cutting Blades (Keep Hands Clear)",
      "Mechanical Stamping Presses & Moving Pinch Points",
      "Conveyor Belt Drive Assemblies & Exposed Shafts",
      "Hydraulic Filter & High-Pressure Fluid Lines"
    ]
  },
  {
    id: "high-voltage-warning-plates",
    slug: "high-voltage-warning-plates-manufacturer-in-mumbai",
    seoUrl: "/high-voltage-warning-plates-manufacturer-in-mumbai",
    aliases: ["high-voltage-warning-plates", "products/high-voltage-warning-plates", "high-voltage-warning-plates/manufacturer-in-india", "electrical-hazard-signs", "high-voltage-warning-plates-manufacturer-in-mumbai"],
    number: "11",
    title: "High-Voltage Warning Plates",
    metaTitle: "High Voltage Warning Plates Manufacturer in Mumbai | Rameshwar Industries",
    metaDescription: "Industrial high-voltage warning plates and 3000V danger tags in stainless steel and aluminium. Electrical substation, transformer and switchgear safety plates.",
    canonicalUrl: "https://rameshwarindustries.com/high-voltage-warning-plates-manufacturer-in-mumbai",
    category: "Warning & Instruction Plates",
    image: "/images/products/high-voltage-warning-plates.jpg",
    description: "Electrical substation and transformer warning plates alerting personnel to high-voltage hazards, 3000V risks, and equipment disconnect protocols.",
    overview: "Directly featured on Page 4 of our catalogue (High Voltage yellow triangle flash symbol, 'DANGER 3000 VOLTS' red contrast plate, and 'CAUTION! RISK OF ELECTRIC SHOCK — Disconnect switch may be required to de-energize equipment before servicing'). Engineered to maintain unmistakable high-contrast visibility in electrical power rooms and outdoor substations.",
    specifications: {
      materials: "Anodized Aluminium, Stainless Steel 304, Dielectric Vinyl",
      markingMethods: "Chemical Etch & Color Infill, Sub-Surface Screen Print, Laser Marking",
      thicknessRange: "0.5 mm to 2.0 mm",
      temperatureRating: "-40°C to +400°C (Metal)",
      mounting: "Rivet Holes, Non-Conductive Industrial Adhesive, Panel Screws",
      surfaceFinish: "High-Visibility Safety Yellow with Black Flash Symbol & Red Danger Header",
      chemicalResistance: "Transformer oil, dielectric grease, moisture, ozone, UV exposure",
      standardsCompliance: "IEC 60204-1 Electrical Safety, NFPA 70E, OSHA 1910.303"
    },
    materials: ["Aluminium", "Stainless Steel"],
    mounting: ["Corner Rivets", "Panel Screws", "3M High-Bond Adhesive"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 4 (High Voltage Symbol, Danger 3000 Volts & Risk of Shock Plates)",
    applications: [
      "Step-Down Power Transformers & High-Voltage Substations",
      "Switchgear Enclosures, Busbar Ducts & Breaker Cabinets",
      "Variable Frequency Drive (VFD) Inverter Panels",
      "Solar Inverters, Battery Energy Storage & Grid Interties"
    ]
  },
  {
    id: "safety-instruction-plates",
    slug: "safety-instruction-plates-supplier-in-india",
    seoUrl: "/safety-instruction-plates-supplier-in-india",
    aliases: ["safety-instruction-plates", "products/safety-instruction-plates", "safety-instruction-plates/manufacturer-in-india", "operating-instruction-plates", "safety-instruction-plates-supplier-in-india"],
    number: "12",
    title: "Safety & Machine Operating Instruction Plates",
    metaTitle: "Safety Instruction Plates Supplier in India | Rameshwar Industries",
    metaDescription: "Equipment operating procedure plates and machine instruction placards in metal. Clutch engaging, hand crank safety, and non-explosion proof notices.",
    canonicalUrl: "https://rameshwarindustries.com/safety-instruction-plates-supplier-in-india",
    category: "Warning & Instruction Plates",
    image: "/images/products/safety-instruction-plates.jpg",
    description: "Step-by-step operating procedure plates, clutch lever engaging instructions, hand-crank removal notices, and non-explosion proof warnings.",
    overview: "Directly featured on Page 4 of our product catalogue: 'WARNING DO NOT FORCE CLUTCH LEVER TO FREE DRUM CLUTCH, ENGAGE POWER TAKE OFF IN FORWARD OR REVERSE GEAR AS REQUIRED, AND SLIP ENGINE CLUTCH SLIGHTLY', 'CAUTION REMOVE HAND CRANK BEFORE STARTING MAIN MOTOR', and 'WARNING NON-EXPLOSION PROOF FIXTURE MINING CONTROLS INC.'. Permanently etched into heavy-gauge metal to ensure operator compliance.",
    specifications: {
      materials: "Stainless Steel 304, Anodized Aluminium, Brass",
      markingMethods: "Deep Chemical Etching, Color Infill, Fiber Laser Annealing",
      thicknessRange: "0.8 mm to 2.5 mm",
      temperatureRating: "Up to 600°C (SS) / Up to 250°C (Aluminium)",
      mounting: "4 Corner Fastener Holes, Heavy-Bond VHB Adhesive",
      surfaceFinish: "Safety Yellow Background with Deep Black Etched Lettering, Rounded Corners",
      chemicalResistance: "Immune to engine oil, hydraulic fluid, diesel, steam cleaning",
      standardsCompliance: "ISO 12100 Safety of Machinery, OSHA Machinery Guarding Directives"
    },
    materials: ["Stainless Steel", "Aluminium"],
    mounting: ["Machine Bolts", "Drive Pins", "3M Heavy-Duty Adhesive"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 4 (Clutch Lever, Hand Crank Removal & Non-Explosion Proof Plates)",
    applications: [
      "Power Take-Off (PTO) Drives, Clutches & Heavy Winches",
      "Diesel Generators & Main Motor Starting Panels (Hand Crank Safety)",
      "Mining Machinery & Hazardous Area Non-Explosion Proof Fixtures",
      "Hydraulic Press & Stamping Machine Operational Instructions"
    ]
  },

  // ==========================================
  // GROUP 4: METAL & ALUMINIUM TAGS, RING
  // ==========================================
  {
    id: "industrial-machine-tags",
    slug: "metal-identification-tags-stockist-in-mumbai",
    seoUrl: "/metal-identification-tags-stockist-in-mumbai",
    aliases: ["metal-identification-tags", "industrial-machine-tags", "products/metal-identification-tags", "products/industrial-machine-tags", "metal-identification-tags/manufacturer-in-india", "industrial-machine-tags/manufacturer-in-india", "metal-tags", "metal-identification-tags-stockist-in-mumbai"],
    number: "13",
    title: "Metal & Aluminium Identification Tags",
    metaTitle: "Metal Identification Tags Stockist in Mumbai | Rameshwar Industries",
    metaDescription: "Heavy-duty industrial machine tags, pipeline valve tags, and serialized cable markers in stainless steel, brass, and aluminium with custom hole punch.",
    canonicalUrl: "https://rameshwarindustries.com/metal-identification-tags-stockist-in-mumbai",
    category: "Metal & Aluminium Tags, Ring",
    image: "/images/products/metal-identification-tags.jpg",
    description: "Embossed and laser-etched metal tags in round, oval, and rectangular shapes with eyelet holes for cable harnesses, storm drains, and pipeline valves.",
    overview: "Directly featured on Page 4 of our catalogue under 'Metal & Aluminium: Tags, Ring' (e.g. 'ENVIRONMENTAL STORM WATER DRAIN DO NOT POLLUTE', 'SV-3', 'ELECTRIC CABLE' directional arrow tag, 'L50', 'DANGER HV CABLES', 'CHILLED WATER LINE', 'WATER SUBMETER UNIT 7', and Airservices Australia asset tags). Provided with reinforced eyelets for beaded ball chains, stainless wire ties, or rivets.",
    specifications: {
      materials: "Stainless Steel 316/304, Solid Brass, Anodized Aluminium",
      markingMethods: "Deep Laser Annealing, Chemical Etching, Rotary Die Stamping",
      thicknessRange: "0.8 mm to 2.0 mm",
      temperatureRating: "-50°C to +800°C (SS 316) / Up to 400°C (Brass)",
      mounting: "Top Hole for S-Hook / Beaded Ball Chain, Dual Slots for Cable Ties",
      surfaceFinish: "Tumble Deburred Satin, Passivated Marine Finish, Bead Blasted",
      chemicalResistance: "Steam, crude oil, offshore saltwater, hydraulic fluids, buried soils",
      standardsCompliance: "OSHA Lockout/Tagout Compliant, ASME A13.1 Pipe Marking Standards"
    },
    materials: ["Stainless Steel", "Brass", "Aluminium"],
    mounting: ["Beaded Ball Chain", "Stainless Steel Wire Tie", "S-Hooks"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 4 (Storm Water, SV-3, Electric Cable & Chilled Water Tags)",
    applications: [
      "Pipeline Valve & Steam Trap Tagging (Chilled Water, Storm Drain)",
      "Substation Cable Harness & High-Voltage Feeder Identification",
      "Factory Preventative Maintenance & Inspection Records",
      "Rigging, Hoist & Lifting Sling Capacity Verification Tags"
    ]
  },
  {
    id: "metal-identification-rings",
    slug: "metal-identification-rings-manufacturer-in-india",
    seoUrl: "/metal-identification-rings-manufacturer-in-india",
    aliases: ["metal-identification-rings", "products/metal-identification-rings", "metal-identification-rings/manufacturer-in-india", "valve-flange-rings", "collar-tags", "metal-identification-rings-manufacturer-in-india"],
    number: "14",
    title: "Metal Identification Rings & Flange Collars",
    metaTitle: "Metal Identification Rings Manufacturer in India | Rameshwar Industries",
    metaDescription: "Circular valve flange rings, pipe sleeve collars, and identification rings in stainless steel and brass. High pressure rating rings for industrial pipelines.",
    canonicalUrl: "https://rameshwarindustries.com/metal-identification-rings-manufacturer-in-india",
    category: "Metal & Aluminium Tags, Ring",
    image: "/images/products/metal-identification-rings.jpg",
    description: "Circular stamped valve flange rings with center pipe apertures, serialized equipment collars, and sleeve tags that wrap securely around pipes and cables.",
    overview: "Directly featured on Page 4 of our catalogue under 'Metal & Aluminium: Tags, Ring': the circular Gate Valve Flange Ring with central pipe aperture (Class 800, MOP 136.2 bar at 38°C, 76.7 bar at 425°C, Shell A105, Stem 410, Seat 410, Wedge CA15), hexagonal Indmar 082021ES 1.25:1 Serial tag, and rolled stainless steel pipe sleeve collars ('ISOL', 'VE').",
    specifications: {
      materials: "Grade 304/316 Stainless Steel, Solid Marine Brass, Anodized Aluminium",
      markingMethods: "CNC Circular Laser Etching, Radial Stamping, Precision Waterjet Cutout",
      thicknessRange: "1.0 mm to 3.0 mm",
      temperatureRating: "Up to 800°C continuous high-temperature steam service",
      mounting: "Slip-On Over Valve Stem / Pipe Flange, Riveted Wrap-Around Sleeve",
      surfaceFinish: "Radial Brushed Satin, Passivated Anti-Corrosion Finish",
      chemicalResistance: "Superheated steam, marine atmosphere, crude oil, corrosive washdowns",
      standardsCompliance: "API 600 Gate Valve Standard, ASME B16.34 Flange Standards"
    },
    materials: ["Stainless Steel", "Brass", "Aluminium"],
    mounting: ["Flange Slip-On Center Hole", "Rivet Eyelets", "Wrap-Around Banding"],
    leadTime: "3 - 5 Days",
    catalogueRef: "Catalogue Page 4 (Gate Valve Ring Class 800, Indmar Tag & Pipe Collar Sleeves)",
    applications: [
      "Gate Valve Flange Necks & Valve Stem Verification",
      "Process Piping Wrap-Around Identification Sleeves (ISOL, VE)",
      "Rotary Shafts, Gear Hubs & Marine Transmission Flanges",
      "High-Pressure Steam & Gas Pipeline Verification Points"
    ]
  },

  // ==========================================
  // GROUP 5: SCHEMATICS & PANEL NAME PLATES
  // ==========================================
  {
    id: "control-panel-name-plates",
    slug: "control-panel-name-plates-manufacturing-in-mumbai",
    seoUrl: "/control-panel-name-plates-manufacturing-in-mumbai",
    aliases: ["control-panel-name-plates", "products/control-panel-name-plates", "control-panel-name-plates/manufacturer-in-india", "panel-legend-plates", "control-panel-name-plates-manufacturing-in-mumbai"],
    number: "15",
    title: "Control Panel Name Plates & Push-Button Collars",
    metaTitle: "Control Panel Name Plates Manufacturing in Mumbai | Rameshwar Industries",
    metaDescription: "Custom control panel name plates, legend plates, mimic diagrams and push-button collars. Manufactured in anodized aluminium, SS 304 and polycarbonate.",
    canonicalUrl: "https://rameshwarindustries.com/control-panel-name-plates-manufacturing-in-mumbai",
    category: "Schematics & Panel Name Plates",
    image: "/images/control-panel-plate.jpg",
    description: "High-precision faceplates, legend tags, 22.5mm and 30.5mm push button rings, and phase indicator collars for electrical switchboards and PLC automation desks.",
    overview: "Directly featured on Page 4 of our catalogue under 'Schematics & Panel Name Plates' (including Y-Phase, R-Phase, B-Phase push-button legend rings, and Cap.10-ON, Cap.11-ON, Cap.12-ON rotary selector rings). Manufactured with sub-millimeter CNC routing, laser cutting, and durable enamel fill to fit all standard 22.5mm and 30.5mm industrial pilot devices.",
    specifications: {
      materials: "Anodized Aluminium, Stainless Steel 304, Rigid Polycarbonate",
      markingMethods: "CNC Diamond Drag Engraving, Sub-Surface Screen Print, Laser Marking",
      thicknessRange: "0.5 mm to 2.5 mm",
      temperatureRating: "Up to 300°C (Aluminium) / Up to 130°C (Polycarbonate)",
      mounting: "Snap-Fit Push Button Collar Apertures (22.5mm & 30.5mm), 3M Adhesive, Screws",
      surfaceFinish: "Black Anodized with White Engraved Text, Satin Brushed",
      chemicalResistance: "Resistant to electrical transformer oils, dust, panel cleaners",
      standardsCompliance: "IEC 60204-1 Electrical Safety Marking, NEMA Panel Standards"
    },
    materials: ["Aluminium", "Stainless Steel", "PVC & Vinyl"],
    mounting: ["Push Button Collar Mount", "3M 468MP Adhesive Backing", "Panel Screws"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 4 (Phase Legend Rings & Automation Push Button Collars)",
    applications: [
      "Motor Control Centers (MCC) & Power Distribution Boards",
      "PLC Automation Desks & SCADA Consoles",
      "Push-Button Stations (22.5mm & 30.5mm Y/R/B Phase Rings)",
      "Industrial Capacitor Bank & Switchgear Panels"
    ]
  },
  {
    id: "schematic-panel-labels",
    slug: "schematic-panel-labels-supplier-in-mumbai",
    seoUrl: "/schematic-panel-labels-supplier-in-mumbai",
    aliases: ["schematic-panel-labels", "products/schematic-panel-labels", "schematic-panel-labels/manufacturer-in-india", "wiring-diagram-plates", "electrical-schematics", "schematic-panel-labels-supplier-in-mumbai"],
    number: "16",
    title: "Electrical Schematics & Wiring Diagram Plates",
    metaTitle: "Schematic Panel Labels Supplier in Mumbai | Rameshwar Industries",
    metaDescription: "Permanent etched and laser-annealed electrical schematics, terminal block diagrams, and machine lubrication charts in stainless steel, brass, and aluminium.",
    canonicalUrl: "https://rameshwarindustries.com/schematic-panel-labels-supplier-in-mumbai",
    category: "Schematics & Panel Name Plates",
    image: "/images/products/schematic-panel-labels.jpg",
    description: "Permanent etched and laser-annealed wiring schematics, terminal block connection diagrams, and machine lubrication charts for industrial cabinets.",
    overview: "Directly featured on Page 4 of our product catalogue: brushed stainless steel terminal block schematic ('Field Wiring By Others / Internal Wiring Factory'), brass & black TB1/TB2 Switch SW1/SW2/SW3 wiring diagram, and Roadmaster 9000 Lubrication schematic. Eliminates lost paper blueprints by fixing permanent, solvent-proof electrical diagrams directly inside control cabinet doors.",
    specifications: {
      materials: "Stainless Steel 304, Anodized Aluminium, Brass",
      markingMethods: "High-Resolution Photo-Chemical Etch, Laser Annealing, Color Infill",
      thicknessRange: "0.8 mm to 2.0 mm",
      temperatureRating: "-40°C to +600°C (SS) / Up to 300°C (Aluminium)",
      mounting: "4 Corner Countersunk Screw Holes, 3M VHB Industrial Tape",
      surfaceFinish: "Matte Non-Glare Satin Finish for Instant Electrical Legibility",
      chemicalResistance: "Immune to electrical arc residue, mineral oils, cleaning solvents",
      standardsCompliance: "IEC 61082 Electrical Schematic Standards, IEEE Standard 315"
    },
    materials: ["Stainless Steel", "Aluminium", "Brass"],
    mounting: ["Cabinet Door Screws", "Heavy-Duty VHB Adhesive", "Corner Rivets"],
    leadTime: "3 - 5 Days",
    catalogueRef: "Catalogue Page 4 (Brushed SS Electric Diagram & Brass TB1/TB2 Wiring Plate)",
    applications: [
      "Internal Electrical Enclosure Door Wiring Diagrams",
      "PLC Input/Output Terminal Block Connection Reference (TB1, TB2)",
      "Industrial Heavy Machinery Lubrication & Maintenance Schematics",
      "Power Generation Control Skids & Backup Generator Wiring"
    ]
  },
  {
    id: "emergency-stop-labels",
    slug: "emergency-stop-labels-stockist-in-india",
    seoUrl: "/emergency-stop-labels-stockist-in-india",
    aliases: ["emergency-stop-labels", "products/emergency-stop-labels", "emergency-stop-labels/manufacturer-in-india", "e-stop-legend-plates", "emergency-stop-labels-stockist-in-india"],
    number: "17",
    title: "Emergency Stop Push Button Labels",
    metaTitle: "Emergency Stop Labels Stockist in India | Rameshwar Industries",
    metaDescription: "High-contrast emergency stop legend plates, yellow circular collars, and rectangular e-stop nameplates in metal and rigid plastic. Compliant with ISO 13850.",
    canonicalUrl: "https://rameshwarindustries.com/emergency-stop-labels-stockist-in-india",
    category: "Schematics & Panel Name Plates",
    image: "/images/products/emergency-stop-labels.jpg",
    description: "High-contrast bold Emergency Stop legend plates and push button collars for instant visibility and rapid shutdown during plant safety emergencies.",
    overview: "Directly showcased on Page 4 of our catalogue under 'Schematics & Panel Name Plates' (the prominent high-contrast 'EMERGENCY STOP' plate). Supplied in rectangular legend configurations and circular 60mm / 90mm yellow push-button surrounds with 22.5mm and 30.5mm center cutouts. Features deep-etched bold lettering that remains legible across decades of physical operation.",
    specifications: {
      materials: "Anodized Aluminium, Stainless Steel 304, Heavy-Duty Polycarbonate",
      markingMethods: "Deep Contrast Etching, Sub-Surface Screen Printing, Laser Annealing",
      thicknessRange: "0.8 mm to 2.5 mm",
      temperatureRating: "-40°C to +300°C (Metal) / Up to 120°C (Polycarbonate)",
      mounting: "Push-Button Collar Cutout (22.5mm / 30.5mm), 3M High-Bond Adhesive",
      surfaceFinish: "High-Contrast Safety Black with White Bold Text or Safety Yellow/Red",
      chemicalResistance: "Impervious to washdown detergents, grease, hydraulic oils, IP66 wash",
      standardsCompliance: "ISO 13850 Emergency Stop Function, IEC 60947-5-5, OSHA 1910"
    },
    materials: ["Aluminium", "Stainless Steel", "PVC & Vinyl"],
    mounting: ["Push Button Collar", "3M Adhesive Backing", "Panel Screws"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 4 (EMERGENCY STOP Legend Plate)",
    applications: [
      "Machinery Emergency Stop Push Button Stations",
      "Conveyor Belt Line Pull-Cord & E-Stop Interlocks",
      "CNC Machine Control Consoles & Robotic Cell Gates",
      "Power Plant Emergency Shutdown Trip Consoles"
    ]
  },
  {
    id: "alarm-indicator-labels",
    slug: "alarm-indicator-labels-supplier-in-mumbai",
    seoUrl: "/alarm-indicator-labels-supplier-in-mumbai",
    aliases: ["alarm-indicator-labels", "products/alarm-indicator-labels", "alarm-indicator-labels/manufacturer-in-india", "time-remaining-labels", "alarm-labels", "alarm-indicator-labels-supplier-in-mumbai"],
    number: "18",
    title: "Alarm & Time Remaining Indicator Labels",
    metaTitle: "Alarm Indicator Labels Supplier in Mumbai | Rameshwar Industries",
    metaDescription: "Custom alarm legend plates and time remaining status indicator tags in anodized aluminium and stainless steel. Clear industrial automation visual cues.",
    canonicalUrl: "https://rameshwarindustries.com/alarm-indicator-labels-supplier-in-mumbai",
    category: "Schematics & Panel Name Plates",
    image: "/images/products/alarm-indicator-labels.jpg",
    description: "Engraved status indicator plates for plant alarm annunciators, warning sirens, countdown timers, and batch cycle time remaining monitors.",
    overview: "Directly featured on Page 4 of our catalogue under 'Schematics & Panel Name Plates' ('ALARM' and 'TIME REMAINING' legend plates). Fabricated with precision beveled edges and deep contrasting fills to provide machine operators with instant visual cues for alarm states, sirens, and automated cycle durations.",
    specifications: {
      materials: "Anodized Aluminium, Stainless Steel 304, Acrylic / Polycarbonate",
      markingMethods: "Chemical Etch with Baked Contrast Enamel, Laser Engraving",
      thicknessRange: "0.8 mm to 2.0 mm",
      temperatureRating: "-30°C to +250°C",
      mounting: "3M High-Bond Adhesive Backing, Corner Fastener Holes",
      surfaceFinish: "Brushed Silver Border with Jet-Black Contrast Center Panel",
      chemicalResistance: "Resistant to cleaning solvents, airborne moisture, industrial dust",
      standardsCompliance: "ISA-18.2 Management of Alarm Systems, IEC 60073"
    },
    materials: ["Aluminium", "Stainless Steel"],
    mounting: ["3M Pressure-Sensitive Adhesive", "Corner Screws"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 4 (ALARM & TIME REMAINING Legend Plates)",
    applications: [
      "Control Room Annunciator Windows & Audible Alarm Panels",
      "Industrial Oven & Autoclave Cycle Time Displays",
      "Automated Packaging Machinery Station Status Lights",
      "Fire Alarm Panels, Siren Interlocks & Evacuation Controls"
    ]
  },
  {
    id: "water-pump-switch-labels",
    slug: "water-pump-switch-labels-manufacturer-in-mumbai",
    seoUrl: "/water-pump-switch-labels-manufacturer-in-mumbai",
    aliases: ["water-pump-switch-labels", "products/water-pump-switch-labels", "water-pump-switch-labels/manufacturer-in-india", "pump-control-plates", "selector-switch-plates", "water-pump-switch-labels-manufacturer-in-mumbai"],
    number: "19",
    title: "Water Pump ON/OFF & Selector Switch Labels",
    metaTitle: "Water Pump Switch Labels Manufacturer in Mumbai | Rameshwar Industries",
    metaDescription: "Durable metal water pump on/off plates, rotary selector tags, and toggle switch markers in aluminium and stainless steel for pump control panels.",
    canonicalUrl: "https://rameshwarindustries.com/water-pump-switch-labels-manufacturer-in-mumbai",
    category: "Schematics & Panel Name Plates",
    image: "/images/products/water-pump-switch-labels.jpg",
    description: "Heavy-duty selector switch and toggle plates clearly marked with Water Pump OFF - ON positions for municipal, plant, and agricultural pump systems.",
    overview: "Directly featured on Page 4 of our catalogue under 'Schematics & Panel Name Plates' ('WATER PUMP OFF - ON' switch legend plate). Precision cut with clean horizontal geometry and high-contrast lettering designed to be mounted alongside toggle switches, rotary cam switches, and starter pushbuttons across water treatment and pumping plants.",
    specifications: {
      materials: "Anodized Aluminium, Stainless Steel 304, Brass",
      markingMethods: "Deep Chemical Etching, Color Enamel Fill, Fiber Laser Marking",
      thicknessRange: "0.8 mm to 2.0 mm",
      temperatureRating: "-40°C to +300°C",
      mounting: "3M 468MP High-Bond Adhesive, Dual Mounting Screw Holes",
      surfaceFinish: "Black Anodized with Crisp White Etched Text, Silver Beveled Edge",
      chemicalResistance: "Waterproof, resistant to chlorine vapor, wastewater, pump lubricants",
      standardsCompliance: "IEC 60947-3 Switchgear Standards, ISO 9001:2015"
    },
    materials: ["Aluminium", "Stainless Steel"],
    mounting: ["High-Bond Adhesive", "Panel Fastener Holes"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 4 (WATER PUMP OFF - ON Switch Legend Plate)",
    applications: [
      "Water Treatment Plants & Municipal Pumping Stations",
      "Fire Hydrant Booster Pump Control Cabinets",
      "Agricultural Irrigation Pump Starters & Submersible Panels",
      "Chilled Water Circulating Pump Desks in HVAC Systems"
    ]
  },

  // ==========================================
  // EXISTING SPECIALIZED INDUSTRIAL PRODUCTS (RETAINED)
  // ==========================================
  {
    id: "stainless-steel-name-plates",
    slug: "stainless-steel-name-plates-manufacturer-in-mumbai",
    seoUrl: "/stainless-steel-name-plates-manufacturer-in-mumbai",
    aliases: ["stainless-steel-name-plates", "products/stainless-steel-name-plates", "stainless-steel-name-plates/manufacturer-in-india", "stainless-steel-machine-name-plates", "stainless-steel-name-plates-manufacturer-in-mumbai"],
    number: "20",
    title: "Stainless Steel Name Plates",
    metaTitle: "Stainless Steel Name Plates Manufacturer in Mumbai | Rameshwar Industries",
    metaDescription: "Premium stainless steel name plates in SS 304 and SS 316. Chemical-resistant, deep etched, and laser engraved industrial plates for harsh factory environments.",
    canonicalUrl: "https://rameshwarindustries.com/stainless-steel-name-plates-manufacturer-in-mumbai",
    category: "Heavy-Duty & Chemical Resistant",
    image: "/images/data-plate.jpg",
    description: "Corrosion-proof SS 304 and SS 316 identification plates designed for extreme heat, marine washdowns, and chemical exposure.",
    overview: "Engineered from surgical and marine-grade austenitic stainless steel (SS 304 / SS 316 / SS 316L). Features deep chemical etching with baked enamel color fill or permanent black laser anneal marking that will never fade, peel, or rust under saltwater, steam washdown, or corrosive gas atmospheres.",
    specifications: {
      materials: "SS 304, SS 316, SS 316L Marine Grade Stainless Steel",
      markingMethods: "Deep Chemical Etching & Color Enamel Fill, Laser Annealing",
      thicknessRange: "0.8 mm to 4.0 mm",
      temperatureRating: "-50°C to +800°C continuous operation",
      mounting: "Drive Rivets, Welded Studs, Drilled Fastener Holes",
      surfaceFinish: "2B Industrial, No. 4 Satin Brushed, Mirror Polished",
      chemicalResistance: "Immune to saltwater, alkalis, solvent vapor, nitric & organic acids",
      standardsCompliance: "ISO 9001:2015, ASME Boiler Code Compliant, RoHS Compliant"
    },
    materials: ["Stainless Steel"],
    mounting: ["Drive Rivets", "Welded Back Studs", "Bolt Fixing"],
    leadTime: "3 - 5 Days",
    catalogueRef: "Catalogue Page 3 & 4 (Quality Assurance & SS Capabilities)",
    applications: [
      "Chemical Processing & Petrochemical Refineries",
      "Marine Engine Rooms & Offshore Valve Assemblies",
      "Pharmaceutical Cleanroom Processing Skids",
      "Food & Dairy Processing Machinery"
    ]
  },
  {
    id: "industrial-identification-plates",
    slug: "identification-plate-stockist-in-mumbai",
    seoUrl: "/identification-plate-stockist-in-mumbai",
    aliases: ["industrial-identification-plates", "products/industrial-identification-plates", "industrial-identification-plates/manufacturer-in-india", "facility-identification-plates", "identification-plate-stockist-in-mumbai"],
    number: "21",
    title: "Industrial Facility & Room Identification Plates",
    metaTitle: "Identification Plate Stockist in Mumbai | Rameshwar Industries",
    metaDescription: "Clear, durable identification plates for industrial facilities, plants, and manufacturing equipment. Precision chamfered edges in aluminium, brass, and SS.",
    canonicalUrl: "https://rameshwarindustries.com/identification-plate-stockist-in-mumbai",
    category: "Facility & Room Identification",
    image: "/images/multi-materials.jpg",
    description: "Architectural and plant identification plates for control rooms, laboratories, compressor cabins, and plant zones.",
    overview: "Manufactured from high-grade brushed aluminium, solid brass, and stainless steel with precision chamfered edges and clean, deep black contrast typography. Engineered for high readability in factory environments, testing labs, and plant administration centers.",
    specifications: {
      materials: "Brushed Aluminium, Stainless Steel 304, Polished Brass",
      markingMethods: "Laser Engraving, Chemical Etch, High-Precision CNC Milling",
      thicknessRange: "1.0 mm to 3.0 mm",
      temperatureRating: "Up to 400°C (Metal)",
      mounting: "Countersunk Screws, High-Bond 3M VHB Tape",
      surfaceFinish: "Directional Brushed Satin, Beveled Safety Edges",
      chemicalResistance: "Factory washdown detergents, dust, airborne humidity",
      standardsCompliance: "Industrial Safety Sign Standards, ISO 9001:2015"
    },
    materials: ["Aluminium", "Stainless Steel", "Brass"],
    mounting: ["Countersunk Screws", "Heavy-Duty VHB Adhesive"],
    leadTime: "3 - 5 Days",
    catalogueRef: "Catalogue Page 1 & 2 (Commercial & Facility Signboards)",
    applications: [
      "Compressor Rooms, Generator Cabins & Substation Doors",
      "Chemical Testing Labs & Cleanroom Zones",
      "Plant Maintenance Bays & Quality Inspection Rooms",
      "Architectural Administrative Facility Signage"
    ]
  },
  {
    id: "push-pull-directional-plates",
    slug: "push-pull-directional-plates-supplier-in-india",
    seoUrl: "/push-pull-directional-plates-supplier-in-india",
    aliases: ["push-pull-directional-plates", "products/push-pull-directional-plates", "push-pull-directional-plates/manufacturer-in-india", "door-plates", "push-pull-directional-plates-supplier-in-india"],
    number: "22",
    title: "Push / Pull & Directional Door Plates",
    metaTitle: "Push Pull Directional Plates Supplier in India | Rameshwar Industries",
    metaDescription: "Commercial and industrial stainless steel push pull plates, directional indicators, and facility access door plates. Heavy-gauge satin stainless steel.",
    canonicalUrl: "https://rameshwarindustries.com/push-pull-directional-plates-supplier-in-india",
    category: "Operational Signage & Facility Access",
    image: "/images/push-pull-plate.jpg",
    description: "Heavy-gauge satin stainless steel push and pull indicator plates with rounded safety corners for high-traffic facility doors.",
    overview: "Fabricated from heavy-gauge satin finish SS 304 and solid polished brass. Engineered to withstand continuous daily physical contact without tarnishing, scratching, or loosening. Rounded safety corners eliminate sharp burrs for workplace safety.",
    specifications: {
      materials: "Grade 304 Satin Stainless Steel, Polished Solid Brass",
      markingMethods: "Laser Engraved Deep Text, Chemical Etch",
      thicknessRange: "1.2 mm to 3.0 mm",
      temperatureRating: "Ambient Industrial & Commercial Temperatures",
      mounting: "4 Corner Countersunk Screw Holes with Matching Fasteners",
      surfaceFinish: "Horizontal Satin Brushed Grain, De-burred Radius Corners",
      chemicalResistance: "Daily cleaning sanitizers, alcohol wipes, grease",
      standardsCompliance: "Architectural Hardware Standards, ADA Accessibility"
    },
    materials: ["Stainless Steel", "Brass"],
    mounting: ["Countersunk Stainless Screws", "Double-Sided Industrial Adhesive"],
    leadTime: "2 - 3 Days",
    catalogueRef: "Catalogue Page 2 (Commercial Office & Factory Signboards)",
    applications: [
      "Factory Production Hall Air-Lock Entryways",
      "Cleanroom & R&D Laboratory Double Doors",
      "Commercial Warehouse & Staff Access Corridors",
      "Server Room & Power Substation Entry Points"
    ]
  },
  {
    id: "temperature-control-plates",
    slug: "temperature-control-plates-manufacturing-in-mumbai",
    seoUrl: "/temperature-control-plates-manufacturing-in-mumbai",
    aliases: ["temperature-control-plates", "products/temperature-control-plates", "temperature-control-plates/manufacturer-in-india", "machine-operating-charts", "temperature-control-plates-manufacturing-in-mumbai"],
    number: "23",
    title: "Temperature & Machine Operating Reference Plates",
    metaTitle: "Temperature Control Plates Manufacturing in Mumbai | Rameshwar Industries",
    metaDescription: "Machine operating charts, feed-rate scales, and temperature threshold plates in etched aluminium and stainless steel.",
    canonicalUrl: "https://rameshwarindustries.com/temperature-control-plates-manufacturing-in-mumbai",
    category: "Operating Charts & Limits",
    image: "/images/temperature-chart-plate.jpg",
    description: "Permanent feed-rate, gear range, spindle speed, and temperature warning reference charts fixed directly to machines.",
    overview: "Critical reference plates showing feed-rate conversions, spindle speed ranges, lubrication schedules, and thermal warning limits. Features ultra-fine etched gradations and crisp typography that remain legible even when covered in metal cutting oil or lubricants.",
    specifications: {
      materials: "Etched Anodized Aluminium, Stainless Steel 304",
      markingMethods: "High-Resolution Photo-Chemical Etching, Laser Engraving",
      thicknessRange: "0.8 mm to 2.0 mm",
      temperatureRating: "Up to 300°C (Aluminium) / Up to 700°C (SS)",
      mounting: "Machine Screws, Drive Pins, Heavy Adhesive",
      surfaceFinish: "Matte Non-Glare Finish for High Visibility",
      chemicalResistance: "Soluble cutting oils, synthetic lubricants, kerosene",
      standardsCompliance: "Machinery Safety Directive, ISO 9001:2015"
    },
    materials: ["Aluminium", "Stainless Steel"],
    mounting: ["Machine Bolts", "Drive Pins", "Surface Adhesive"],
    leadTime: "3 - 5 Days",
    catalogueRef: "Catalogue Page 1 & 4 (Machine Technical Reference Scales)",
    applications: [
      "Lathes, Milling Machines & Gear Shapers",
      "Industrial Furnaces & Heat Treatment Ovens",
      "Plastic Injection Molding & Extrusion Lines",
      "Compressor Oil Temperature Monitoring Panels"
    ]
  },
  {
    id: "custom-industrial-plates",
    slug: "custom-industrial-plates-manufacturer-in-india",
    seoUrl: "/custom-industrial-plates-manufacturer-in-india",
    aliases: ["custom-industrial-plates", "products/custom-industrial-plates", "custom-industrial-plates/manufacturer-in-india", "bespoke-industrial-plates", "custom-industrial-plates-manufacturer-in-india"],
    number: "24",
    title: "Custom Industrial Metal Plates",
    metaTitle: "Custom Industrial Plates Manufacturer in India | Rameshwar Industries",
    metaDescription: "Bespoke industrial name plates manufactured to your exact CAD drawings, custom shapes, and multi-metal requirements. Direct factory manufacturer in India.",
    canonicalUrl: "https://rameshwarindustries.com/custom-industrial-plates-manufacturer-in-india",
    category: "Bespoke OEM Fabrication",
    image: "/images/custom-plates-group.jpg",
    description: "Custom-designed plates fabricated according to client CAD drawings, custom geometries, multi-material blends, and finishes.",
    overview: "For equipment builders and OEMs requiring non-standard profiles, complex cutouts, multi-layer badges, or custom metal combinations (Brass, Copper, Tool Steel, SS 316, Bronze). We execute exact specifications from STEP, DXF, or PDF engineering drawings with rapid turnaround.",
    specifications: {
      materials: "Stainless Steel, Brass, Copper, Bronze, Aluminium, Tool Steel",
      markingMethods: "Fiber Laser, Chemical Etching, CNC Milling, Screen Print",
      thicknessRange: "0.4 mm to 6.0 mm Custom Thickness",
      temperatureRating: "Engineered to client operating requirements",
      mounting: "Custom Slot Cutouts, Stud Mounts, Recessed Countersunk",
      surfaceFinish: "Custom Brushed, Antique Patina, Hard Anodized, Bead Blasted",
      chemicalResistance: "Customized to application exposure profile",
      standardsCompliance: "Client Drawing Tolerances, ISO 9001:2015"
    },
    materials: ["Brass", "Copper", "Bronze", "Stainless Steel", "Aluminium"],
    mounting: ["Custom Cutouts", "Stud Mounts", "Adhesive Backing"],
    leadTime: "Custom Schedule",
    catalogueRef: "Catalogue Page 2 & 3 (Customization Capabilities)",
    applications: [
      "Custom OEM Machinery & Capital Equipment",
      "Turbine, Pump & Specialized Valve Casings",
      "Heritage & Architectural Industrial Restorations",
      "High-End Electronic Instrumentation Consoles"
    ]
  },
  {
    id: "pvc-vinyl-labels",
    slug: "industrial-sticker-supplier-in-mumbai",
    seoUrl: "/industrial-sticker-supplier-in-mumbai",
    aliases: ["pvc-vinyl-labels", "products/pvc-vinyl-labels", "pvc-vinyl-labels/manufacturer-in-india", "industrial-pvc-stickers", "industrial-sticker-supplier-in-mumbai"],
    number: "25",
    title: "PVC & Vinyl Industrial Labels",
    metaTitle: "Industrial Sticker Supplier in Mumbai | Rameshwar Industries",
    metaDescription: "Flexible, solvent-resistant industrial PVC and vinyl labels with 3M high-bond adhesive for curved surfaces, motor casings, and electrical warnings.",
    canonicalUrl: "https://rameshwarindustries.com/industrial-sticker-supplier-in-mumbai",
    category: "Flexible Identification & Overlay Stickers",
    image: "/images/pvc-industrial-labels.jpg",
    description: "Flexible, solvent-resistant PVC and vinyl labels with 3M adhesive for curved motor bodies, safety tags, and control overlays.",
    overview: "Manufactured from industrial-grade cast vinyl and rigid PVC substrates with heavy-duty 3M adhesive backing. Ideal for cylindrical motor casings, curved pipe elbows, electrical junction boxes, and safety warning overlays where rigid metal plates cannot conform. Highly resistant to grease, UV exposure, and solvent wiping.",
    specifications: {
      materials: "Industrial Rigid PVC, Cast Vinyl, Laminated Polyester Film",
      markingMethods: "High-Resolution UV Screen Printing, Digital Thermal Transfer",
      thicknessRange: "100 microns to 500 microns",
      temperatureRating: "-20°C to +90°C",
      mounting: "3M High-Bond Industrial Adhesive (Peel & Stick)",
      surfaceFinish: "Gloss or Textured Velvet Scratch-Resistant Overlaminate",
      chemicalResistance: "Resistant to motor oils, coolants, alcohol, outdoor UV",
      standardsCompliance: "UL 969 Marking & Labeling Systems Standard, RoHS"
    },
    materials: ["PVC & Vinyl"],
    mounting: ["3M Pressure Sensitive Adhesive", "Peel & Stick Backing"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 2 & 4 (Labels & Non-Metal Markings)",
    applications: [
      "Curved Motor Housings & Cylindrical Pump Bodies",
      "Control Cabinet Front Overlays & Membrane Keypads",
      "Electrical Circuit Breakers & Switchgear Labels",
      "Factory Hazard Warning & Inspection Decals"
    ]
  },
  {
    id: "commercial-sign-boards",
    slug: "commercial-sign-boards-manufacturer-in-mumbai",
    seoUrl: "/commercial-sign-boards-manufacturer-in-mumbai",
    aliases: ["commercial-sign-boards", "products/commercial-sign-boards", "commercial-sign-boards/manufacturer-in-india", "commercial-signs", "commercial-sign-boards-manufacturer-in-mumbai"],
    number: "26",
    title: "Commercial Sign Boards",
    metaTitle: "Commercial Sign Boards Manufacturer in Mumbai | Rameshwar Industries",
    metaDescription: "Manufacturer and supplier of durable commercial sign boards in stainless steel, brass, and aluminium for corporate offices, industrial plants, and commercial facilities.",
    canonicalUrl: "https://rameshwarindustries.com/commercial-sign-boards-manufacturer-in-mumbai",
    category: "Facility & Commercial Signage",
    image: "/images/room-door-plate.jpg",
    description: "Heavy-duty commercial sign boards engineered for corporate premises, industrial plants, architectural complexes, and facility wayfinding.",
    overview: "Directly featured on Page 2 of our official catalogue ('eminent manufacturer, exporter & supplier of commercial sign boards, LED sign boards, office sign boards, name plates...'). Precision fabricated in brushed stainless steel, anodized aluminium, and solid brass with chemical etching, deep enamel infill, and weatherproof protective coatings for exterior and interior commercial architectural installations.",
    specifications: {
      materials: "Stainless Steel (SS 304 / SS 316), Anodized Aluminium, Solid Brass",
      markingMethods: "Chemical Acid Etching, Fiber Laser Engraving, CNC Routing",
      thicknessRange: "1.0 mm to 5.0 mm",
      temperatureRating: "Ambient to 300°C (Weather & UV Resistant)",
      mounting: "Countersunk Screw Holes, Concealed Stud Fixings, 3M VHB Tape",
      surfaceFinish: "Horizontal Satin Brushed, Mirror Polished, Matte Anodized",
      chemicalResistance: "Weatherproof, UV-resistant, factory washdown & detergent safe",
      standardsCompliance: "ISO 9001:2015, Architectural Signage Standards"
    },
    materials: ["Stainless Steel", "Aluminium", "Brass"],
    mounting: ["Countersunk Screws", "Concealed Wall Studs", "3M VHB Adhesive"],
    leadTime: "3 - 5 Days",
    catalogueRef: "Catalogue Page 2 (Commercial Sign Boards)",
    applications: [
      "Corporate Headquarters & Commercial Complexes",
      "Industrial Plant Main Entry & Department Signage",
      "Factory Floor Wayfinding & Zonal Identification",
      "Institutional Facilities & Architectural Centers"
    ]
  },
  {
    id: "led-sign-boards",
    slug: "led-sign-boards-manufacturer-in-mumbai",
    seoUrl: "/led-sign-boards-manufacturer-in-mumbai",
    aliases: ["led-sign-boards", "products/led-sign-boards", "led-sign-boards/manufacturer-in-india", "led-signs", "led-sign-boards-manufacturer-in-mumbai"],
    number: "27",
    title: "LED Sign Boards",
    metaTitle: "LED Sign Boards Manufacturer in Mumbai | Rameshwar Industries",
    metaDescription: "Industrial and commercial illuminated LED sign boards manufactured in stainless steel and aluminium. High visibility, energy efficient LED signage from Rameshwar Industries.",
    canonicalUrl: "https://rameshwarindustries.com/led-sign-boards-manufacturer-in-mumbai",
    category: "Illuminated & Commercial Signage",
    image: "/images/led-sign-board.jpg",
    description: "Illuminated industrial and commercial LED sign boards featuring robust metal housings, high-efficiency LEDs, and crisp laser-cut typography for day-and-night visibility.",
    overview: "Directly featured on Page 2 of our official catalogue ('eminent manufacturer, exporter & supplier of commercial sign boards, LED sign boards, office sign boards...'). Engineered with precision laser-cut stainless steel or powder-coated aluminium frames, integrated moisture-proof LED modules, and uniform light diffusers. Designed for factory entrances, industrial complexes, safety hazard notices, and commercial facility visibility in all ambient lighting conditions.",
    specifications: {
      materials: "Stainless Steel 304, Anodized Aluminium, Acrylic Diffusers",
      markingMethods: "Precision Laser Profiling, CNC Channel Bending, Backlit Diffusion",
      thicknessRange: "Fabricated 3D Profile Housing (25mm to 100mm depth)",
      temperatureRating: "-20°C to +65°C continuous exterior operation",
      mounting: "Heavy-Duty Wall Cleats, Structural Bracket Fasteners, Standoffs",
      surfaceFinish: "Brushed Satin SS, Matte Black Powder Coat, Clear Lacquer",
      chemicalResistance: "IP65 Weatherproof Sealed, UV-resistant acrylic faces",
      standardsCompliance: "ISO 9001:2015, CE Electrical Safety Standards"
    },
    materials: ["Stainless Steel", "Aluminium", "PVC & Vinyl"],
    mounting: ["Structural Wall Brackets", "Flush Cleat Mounts", "Concealed Fasteners"],
    leadTime: "4 - 7 Days",
    catalogueRef: "Catalogue Page 2 (LED Sign Boards)",
    applications: [
      "Plant Gates & Industrial Park Main Entrances",
      "Factory Evacuation Routes & 24/7 Safety Notifiers",
      "Corporate Building Architectural Identity",
      "Industrial Warehouse Loading Bay Signage"
    ]
  },
  {
    id: "office-sign-boards",
    slug: "office-sign-boards-supplier-in-mumbai",
    seoUrl: "/office-sign-boards-supplier-in-mumbai",
    aliases: ["office-sign-boards", "products/office-sign-boards", "office-sign-boards/manufacturer-in-india", "office-signs", "office-sign-boards-supplier-in-mumbai"],
    number: "28",
    title: "Office Sign Boards",
    metaTitle: "Office Sign Boards Supplier in Mumbai | Rameshwar Industries",
    metaDescription: "Premium architectural office sign boards, departmental door plaques, and executive room nameplates in brushed stainless steel, brass, and aluminium.",
    canonicalUrl: "https://rameshwarindustries.com/office-sign-boards-supplier-in-mumbai",
    category: "Facility & Commercial Signage",
    image: "/images/office-plate.jpg",
    description: "Refined architectural office sign boards and door nameplates for executive cabins, departments, conference rooms, and corporate workspaces.",
    overview: "Directly featured on Page 2 of our official catalogue ('manufacturer, exporter & supplier of commercial sign boards, LED sign boards, office sign boards, name plates, labels...'). Custom manufactured in heavy-gauge satin stainless steel, hand-grained solid brass, and matte anodized aluminium. Features precision beveled borders, crisp typography, and concealed or countersunk fastener fixings to complement modern office and industrial plant administrative interiors.",
    specifications: {
      materials: "Grade 304 Stainless Steel, Solid Polished Brass, Anodized Aluminium",
      markingMethods: "Chemical Etching with Baked Enamel, Laser Engraving, CNC Routing",
      thicknessRange: "1.2 mm to 3.0 mm",
      temperatureRating: "Standard Commercial & Industrial Indoor Temperatures",
      mounting: "Countersunk Matching Screws, 3M High-Bond VHB Foam Tape",
      surfaceFinish: "Horizontal Satin Brushed, Mirror Brass Polish, Chamfered Edges",
      chemicalResistance: "Resistant to daily sanitizing agents, cleaning chemicals, hand prints",
      standardsCompliance: "ISO 9001:2015, Architectural Hardware Standards"
    },
    materials: ["Stainless Steel", "Aluminium", "Brass"],
    mounting: ["Matching Architectural Screws", "3M VHB Tape Backing"],
    leadTime: "2 - 4 Days",
    catalogueRef: "Catalogue Page 2 (Office Sign Boards)",
    applications: [
      "Executive Cabins & Director Suite Entrances",
      "Departmental Office Plaque & Conference Room Signs",
      "Plant Manager, Control Room & Quality Lab Offices",
      "Corporate Reception Wayfinding & Boardroom Plaques"
    ]
  }
];

export const PRODUCTS = RAW_PRODUCTS.map(p => ({
  ...p,
  name: p.title
}));

// Robust helper to lookup product by slug, id, or legacy alias
export function getProductBySlug(targetSlug) {
  if (!targetSlug) return null;
  const clean = targetSlug
    .replace(/^\/products\//, '')
    .replace(/^\/materials\//, '')
    .replace(/^\//, '')
    .replace(/\/manufacturer-in-india$/, '')
    .replace(/\/$/, '')
    .trim()
    .toLowerCase();

  return PRODUCTS.find(p => {
    if (p.slug.toLowerCase() === clean) return true;
    if (p.id.toLowerCase() === clean) return true;
    if (p.aliases && p.aliases.some(alias => {
      const cleanAlias = alias
        .replace(/^\/products\//, '')
        .replace(/^\/materials\//, '')
        .replace(/^\//, '')
        .replace(/\/manufacturer-in-india$/, '')
        .replace(/\/$/, '')
        .trim()
        .toLowerCase();
      return cleanAlias === clean;
    })) {
      return true;
    }
    return false;
  });
}

export const MATERIALS = [
  {
    id: "stainless-steel",
    slug: "stainless-steel-supplier-in-mumbai",
    seoUrl: "/stainless-steel-supplier-in-mumbai",
    aliases: ["stainless-steel", "materials/stainless-steel", "ss", "stainless", "ss-304", "ss-316", "stainless-steel-plates", "stainless-steel-supplier-in-mumbai"],
    name: "Stainless Steel",
    grades: "SS 304, SS 304L, SS 316, SS 316L",
    metaTitle: "Stainless Steel Supplier in Mumbai | Rameshwar Industries",
    metaDescription: "Precision chemical etched and laser marked Stainless Steel 304 and 316 nameplates, machine data plates and valve tags. High corrosion and heat resistance up to 800°C.",
    canonicalUrl: "https://rameshwarindustries.com/stainless-steel-supplier-in-mumbai",
    headline: "Heavy-duty industrial plates for extreme durability",
    description: "Grade 304 and 316 austenitic stainless steels provide unmatched resistance to extreme heat (up to 800°C), corrosive chemicals, steam washdowns, and physical impact. Essential for chemical refineries, boilers, food processing, and offshore equipment.",
    detailedOverview: "Rameshwar Industries precision fabricates stainless steel industrial nameplates, machine rating plates, and equipment tags from mill-certified austenitic SS 304 and marine-grade SS 316 coils. Utilizing sub-surface chemical etching with baked synthetic enamel infill as well as permanent fiber laser annealing, our stainless plates withstand aggressive industrial washdowns, organic acids, salt air, and heavy machine vibration without fading, oxidizing, or losing dimensional integrity.",
    image: "/images/data-plate.jpg",
    color: "#334155",
    tagColor: "bg-zinc-100 text-zinc-900 border-zinc-300",
    swatchClass: "bg-gradient-to-br from-slate-300 via-zinc-400 to-slate-600 border-slate-400",
    badge: "SS 304 / SS 316 Grades",
    specs: {
      density: "7.93 g/cm³ (SS 304) / 8.00 g/cm³ (SS 316)",
      tempRating: "-196°C to +800°C continuous",
      tensileStrength: "515 – 700 MPa",
      corrosionResistance: "Extreme — immune to solvents, caustic washdowns, sulfuric acid fumes & marine spray",
      thicknessRange: "0.5 mm to 3.0 mm (Custom up to 5mm)",
      markingMethods: "Chemical Acid Etching with Baked Enamel Infill, Fiber Laser Annealing, Deep Stamping",
      surfaceFinishes: "2B Mill, No. 4 Satin Brushed Grained, Mirror Electropolished, Passivated",
      standardsCompliance: "ASTM A240, AISI 304/316, ISO 9001:2015, NACE MR0175 Compliant"
    },
    gradesList: [
      {
        code: "SS 304",
        name: "Standard Austenitic Stainless Steel",
        desc: "General industrial workhorse containing 18% Chromium and 8% Nickel. Superior rust immunity for plant machinery, boilers, electrical panels, and motors."
      },
      {
        code: "SS 304L",
        name: "Low-Carbon Stainless Steel",
        desc: "Low-carbon formulation (max 0.03% C) preventing carbide precipitation during welding. Ideal for welded tank vessels and pipe manifolds."
      },
      {
        code: "SS 316",
        name: "Marine & Chemical Grade Stainless Steel",
        desc: "Formulated with 2% Molybdenum for exceptional resistance to chlorides, marine sea salt, chemical washdowns, and fertilizer plant environments."
      },
      {
        code: "SS 316L",
        name: "Marine Low-Carbon Grade",
        desc: "Optimal for pharmaceutical cleanroom equipment, offshore rig platforms, chemical dosing skids, and severe petrochemical plants."
      }
    ],
    features: [
      "Grade SS 304, SS 316 & SS 316L certified metallurgy",
      "Deep chemical etching & fiber laser annealing",
      "Continuous heat rating up to 800°C",
      "Complete acid, alkali & saltwater immunity"
    ],
    applicableProductSlugs: [
      "machine-name-plates",
      "name-plate-manufacturer-in-mumbai",
      "motor-rating-plates",
      "motor-rating-plates-manufacturer-in-india",
      "valve-body-trim-plates",
      "valve-body-trim-plates-manufacturing-in-mumbai",
      "equipment-data-plates",
      "equipment-data-plates-supplier-in-mumbai",
      "serial-number-name-plates",
      "serial-number-name-plates-manufacturer-in-mumbai",
      "warning-instruction-plates",
      "warning-plate-manufacturing-in-mumbai",
      "caution-warning-plates",
      "caution-warning-plates-supplier-in-mumbai",
      "high-voltage-warning-plates",
      "high-voltage-warning-plates-manufacturer-in-mumbai",
      "safety-instruction-plates",
      "safety-instruction-plates-supplier-in-india",
      "metal-identification-tags",
      "industrial-machine-tags",
      "metal-identification-tags-stockist-in-mumbai",
      "metal-identification-rings",
      "metal-identification-rings-manufacturer-in-india",
      "control-panel-name-plates",
      "control-panel-name-plates-manufacturing-in-mumbai",
      "schematic-panel-labels",
      "schematic-panel-labels-supplier-in-mumbai",
      "emergency-stop-labels",
      "emergency-stop-labels-stockist-in-india",
      "stainless-steel-name-plates",
      "stainless-steel-name-plates-manufacturer-in-mumbai",
      "industrial-identification-plates",
      "identification-plate-stockist-in-mumbai",
      "push-pull-plates",
      "push-pull-directional-plates",
      "push-pull-directional-plates-supplier-in-india",
      "temperature-control-plates",
      "temperature-control-plates-manufacturing-in-mumbai",
      "custom-industrial-plates",
      "custom-industrial-plates-manufacturer-in-india",
      "commercial-sign-boards",
      "commercial-sign-boards-manufacturer-in-mumbai",
      "led-sign-boards",
      "led-sign-boards-manufacturer-in-mumbai",
      "office-sign-boards",
      "office-sign-boards-supplier-in-mumbai"
    ]
  },
  {
    id: "aluminium",
    slug: "aluminium-stockist-in-mumbai",
    seoUrl: "/aluminium-stockist-in-mumbai",
    aliases: ["aluminium", "materials/aluminium", "aluminum", "anodized-aluminium", "anodized-aluminum", "aluminium-plates", "aluminium-stockist-in-mumbai"],
    name: "Aluminium",
    grades: "Alloy 1050, 5052-H32, 6061-T6",
    metaTitle: "Aluminium Stockist in Mumbai | Rameshwar Industries",
    metaDescription: "Lightweight, anodized aluminium name plates, barcode tags, and machine panels. Scratch-proof sub-surface anodic dyes and laser etching from Rameshwar Industries.",
    canonicalUrl: "https://rameshwarindustries.com/aluminium-stockist-in-mumbai",
    headline: "Lightweight, anodized & non-oxidizing plates",
    description: "Anodized finishes seal specialized dyes within sapphire-hard pores to provide extreme scratch resistance and lightweight versatility. Ideal for automotive VIN plates, CNC control panels, electric motors, and asset tags.",
    detailedOverview: "Our aluminium nameplates and graphic panel overlays are manufactured using high-purity aluminium sheets treated through electrochemical sulfuric acid anodizing. Dyes and laser markings are integrated beneath an impenetrable anodic alumina layer, preventing scratching, chipping, peeling, or fading even under intense UV sunlight, grease, fuels, and abrasive plant contact.",
    image: "/images/aluminium-metal-plate.jpg",
    color: "#64748b",
    tagColor: "bg-slate-100 text-slate-900 border-slate-300",
    swatchClass: "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 border-slate-300",
    badge: "Anodized & Scratch Proof",
    specs: {
      density: "2.70 g/cm³",
      tempRating: "-50°C to +300°C continuous",
      tensileStrength: "110 – 310 MPa depending on temper",
      corrosionResistance: "High — anodic oxide barrier prevents atmospheric oxidation and pitting",
      thicknessRange: "0.3 mm to 3.0 mm (Thicker plates available via CNC)",
      markingMethods: "Sub-Surface Anodized Dye Infusion, Fiber Laser Etching, Screen Print, Rotary Milling",
      surfaceFinishes: "Clear Satin Anodized, Matte Black Non-Glare, Brushed Aluminum, Gold/Bronze Tint",
      standardsCompliance: "MIL-A-8625 Type II / Type III Anodizing, ISO 9001:2015, RoHS Compliant"
    },
    gradesList: [
      {
        code: "Alloy 1050",
        name: "Commercial Pure Aluminium (99.5%)",
        desc: "Excellent cold formability, brilliant anodized optical finish, and high electrical conductivity. Best for embossed labels and wrap tags."
      },
      {
        code: "Alloy 5052-H32",
        name: "Marine & Structural Sheet Aluminium",
        desc: "Magnesium-alloyed sheet with superior marine corrosion endurance, excellent bendability, and high fatigue strength for machine housings."
      },
      {
        code: "Alloy 6061-T6",
        name: "Aircraft & CNC Structural Aluminium",
        desc: "Precipitation-hardened structural grade engineered for precision CNC machined faceplates, chamfered console bezels, and thick structural tags."
      }
    ],
    features: [
      "Anodized matte, satin & black non-glare finishes",
      "Precision CNC cutout and dial routing",
      "Sub-surface chemical-etched scales & barcodes",
      "Lightweight alloy completely resistant to weathering"
    ],
    applicableProductSlugs: [
      "machine-name-plates",
      "motor-rating-plates",
      "valve-body-trim-plates",
      "equipment-data-plates",
      "serial-number-name-plates",
      "aluminium-name-plates",
      "aluminium-barcode-asset-plates",
      "automotive-engine-rating-plates",
      "warning-instruction-plates",
      "caution-warning-plates",
      "high-voltage-warning-plates",
      "safety-instruction-plates",
      "metal-identification-tags",
      "metal-identification-rings",
      "control-panel-name-plates",
      "schematic-panel-labels",
      "emergency-stop-labels",
      "alarm-indicator-labels",
      "water-pump-switch-labels",
      "industrial-identification-plates",
      "temperature-control-plates",
      "custom-industrial-plates",
      "commercial-sign-boards",
      "commercial-sign-boards-manufacturer-in-mumbai",
      "led-sign-boards",
      "led-sign-boards-manufacturer-in-mumbai",
      "office-sign-boards",
      "office-sign-boards-supplier-in-mumbai"
    ]
  },
  {
    id: "brass",
    slug: "brass-plates-manufacturer-in-mumbai",
    seoUrl: "/brass-plates-manufacturer-in-mumbai",
    aliases: ["brass", "materials/brass", "brass-plates", "solid-brass", "naval-brass", "brass-plates-manufacturer-in-mumbai"],
    name: "Brass",
    grades: "IS 319 Free Cutting Brass, CuZn39Pb3, Naval Brass",
    metaTitle: "Brass Plates Manufacturer in Mumbai | Rameshwar Industries",
    metaDescription: "Classic solid brass nameplates, pump rating plates, and valve tags. Deep chemical etched with baked enamel infill for marine and steam applications.",
    canonicalUrl: "https://rameshwarindustries.com/brass-plates-manufacturer-in-mumbai",
    headline: "Prestige industrial plates with natural marine resilience",
    description: "Solid brass offers classic industrial prestige, superior saltwater corrosion resistance, and high mechanical durability. Excellent for heavy steam pumps, valves, architectural facilities, and marine installations.",
    detailedOverview: "Manufactured from high-density IS 319 and Naval Brass sheets, our brass nameplates undergo precision chemical milling where recessed lettering is filled with durable thermosetting black enamel. The surrounding metal is hand-grained to a satin brushed finish or polished to a mirror sheen, followed by UV-stable protective lacquering to preserve its rich metallic luster.",
    image: "/images/img12.jpg",
    color: "#b45309",
    tagColor: "bg-amber-100 text-amber-900 border-amber-300",
    swatchClass: "bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 border-amber-300",
    badge: "High Corrosion Resistance",
    specs: {
      density: "8.40 – 8.50 g/cm³",
      tempRating: "-100°C to +400°C",
      tensileStrength: "340 – 450 MPa",
      corrosionResistance: "High — naturally resistant to seawater, steam, hydraulic oils, and petroleum fuels",
      thicknessRange: "0.8 mm to 4.0 mm",
      markingMethods: "Deep Chemical Etch with Baked Stoving Enamel Infill, Fiber Laser, Rotary CNC Engraving",
      surfaceFinishes: "Satin Brushed Grained, Mirror Polished, Antique Patina, Clear Stoved Lacquer",
      standardsCompliance: "IS 319 Grade 1, BS 2874, ISO 9001:2015"
    },
    gradesList: [
      {
        code: "IS 319 (Grade 1)",
        name: "Free Cutting Brass",
        desc: "Optimal for high-precision engraved machine dials, countersunk screw plates, and industrial equipment rating plates."
      },
      {
        code: "CuZn39Pb3",
        name: "European Lead-Brass Formulation",
        desc: "High dimensional fidelity and crisp burr-free edges for control knobs and precision electrical legends."
      },
      {
        code: "Naval Brass (C46400)",
        name: "Saltwater Resistant Naval Brass",
        desc: "Alloyed with Tin for extreme resistance to dezincification in sea water, naval vessels, and offshore pump bodies."
      }
    ],
    features: [
      "Deep chemical etching with baked black enamel",
      "Solid IS 319 brass alloy composition",
      "High oxidation stability in marine air",
      "Precision beveled and chamfered edges"
    ],
    applicableProductSlugs: [
      "machine-name-plates",
      "name-plate-manufacturer-in-mumbai",
      "serial-number-name-plates",
      "serial-number-name-plates-manufacturer-in-mumbai",
      "metal-identification-tags",
      "industrial-machine-tags",
      "metal-identification-tags-stockist-in-mumbai",
      "metal-identification-rings",
      "metal-identification-rings-manufacturer-in-india",
      "schematic-panel-labels",
      "schematic-panel-labels-supplier-in-mumbai",
      "industrial-identification-plates",
      "identification-plate-stockist-in-mumbai",
      "push-pull-plates",
      "push-pull-directional-plates",
      "push-pull-directional-plates-supplier-in-india",
      "door-room-plates",
      "custom-industrial-plates",
      "custom-industrial-plates-manufacturer-in-india",
      "commercial-sign-boards",
      "commercial-sign-boards-manufacturer-in-mumbai",
      "office-sign-boards",
      "office-sign-boards-supplier-in-mumbai"
    ]
  },
  {
    id: "copper",
    slug: "copper-plates-supplier-in-india",
    seoUrl: "/copper-plates-supplier-in-india",
    aliases: ["copper", "materials/copper", "copper-plates", "pure-copper", "etp-copper", "copper-plates-supplier-in-india"],
    name: "Copper",
    grades: "ETP Copper (C11000), DHP Copper",
    metaTitle: "Copper Plates Supplier in India | Rameshwar Industries",
    metaDescription: "Pure electrolytic copper plates, earthing tags, and busbar markers. High thermal and electrical conductivity tags from Rameshwar Industries India.",
    canonicalUrl: "https://rameshwarindustries.com/copper-plates-supplier-in-india",
    headline: "High thermal & electrical conductivity tags",
    description: "Distinctive electrical grounding properties combined with natural industrial aesthetics. Preferred for electrical busbars, power transformers, earthing pits, and specialized process plants.",
    detailedOverview: "Fabricated from 99.9% pure Electrolytic Tough Pitch (ETP) copper sheets. When specified for high-voltage substations, busbar cabinets, and earthing conductors, copper plates maintain galvanic compatibility with copper wiring, preventing dangerous electrolytic corrosion at critical electrical connection points.",
    image: "/images/copper-industrial-plate.jpg",
    color: "#b95034",
    tagColor: "bg-orange-100 text-orange-900 border-orange-300",
    swatchClass: "bg-gradient-to-br from-orange-300 via-orange-500 to-amber-800 border-orange-400",
    badge: "Thermal & Grounding Tags",
    specs: {
      density: "8.94 g/cm³",
      tempRating: "-50°C to +350°C",
      tensileStrength: "220 – 380 MPa",
      corrosionResistance: "High galvanic compatibility with copper busbars and earthing systems",
      thicknessRange: "0.8 mm to 3.0 mm",
      markingMethods: "Fiber Laser Annealing, Precision Chemical Etch, Mechanical Die Stamping",
      surfaceFinishes: "Natural Satin Grained, Mirror Luster, Anti-Tarnish Polyurethane Coated",
      standardsCompliance: "IS 191, ASTM B152 ETP C11000, ISO 9001:2015"
    },
    gradesList: [
      {
        code: "ETP Copper (C11000)",
        name: "Electrolytic Tough Pitch Copper (99.9% Cu)",
        desc: "Highest electrical and thermal conductivity. Specified for transformer rating tags, earthing pit markers, and switchgear conductors."
      },
      {
        code: "DHP Copper (C12200)",
        name: "Phosphor-Deoxidized Copper",
        desc: "Optimal for chemical brazing, high-pressure refrigeration, and specialized heat exchanger tags."
      }
    ],
    features: [
      "Conductive grounding tags & busbar plates",
      "Laser etched serials and ratings",
      "Anti-tarnish clear protective lacquer",
      "Pure electrolytic copper substrate"
    ],
    applicableProductSlugs: [
      "metal-identification-tags",
      "industrial-machine-tags",
      "metal-identification-tags-stockist-in-mumbai",
      "metal-identification-rings",
      "metal-identification-rings-manufacturer-in-india",
      "industrial-identification-plates",
      "identification-plate-stockist-in-mumbai",
      "custom-industrial-plates",
      "custom-industrial-plates-manufacturer-in-india"
    ]
  },
  {
    id: "bronze",
    slug: "bronze-plates-stockist-in-india",
    seoUrl: "/bronze-plates-stockist-in-india",
    aliases: ["bronze", "materials/bronze", "bronze-plates", "tool-steel", "phosphor-bronze", "bronze-plates-stockist-in-india"],
    name: "Bronze & Tool Steel",
    grades: "Phosphor Bronze (PB1), Cast Bronze, High-Carbon Tool Steel",
    metaTitle: "Bronze Plates Stockist in India | Rameshwar Industries",
    metaDescription: "Phosphor bronze and tool steel tags for mining, heavy machinery, and severe friction surfaces. Extreme tensile strength and wear resilience.",
    canonicalUrl: "https://rameshwarindustries.com/bronze-plates-stockist-in-india",
    headline: "Extreme wear-resistant & heavy machinery tags",
    description: "Phosphor bronze and tool steel alloys engineered for high friction surfaces, heavy mechanical machinery, and mining equipment requiring maximum tensile endurance and anti-galling resilience.",
    detailedOverview: "Formulated specifically for severe industrial environments where plates are exposed to abrasive slurry, heavy physical rubbing, or continuous saltwater exposure. Phosphor bronze (alloyed with tin and phosphorus) exhibits high fatigue strength and near-zero galling tendency, making it ideal for bearing housings, marine winches, and slurry pumps.",
    image: "/images/img14.jpg",
    color: "#92400e",
    tagColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
    swatchClass: "bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-900 border-amber-700",
    badge: "High-Wear & Tool Steel",
    specs: {
      density: "8.80 – 8.86 g/cm³",
      tempRating: "-50°C to +450°C",
      tensileStrength: "400 – 650 MPa",
      corrosionResistance: "Superior — exceptional anti-galling and slurry resistance",
      thicknessRange: "1.0 mm to 5.0 mm",
      markingMethods: "CNC Deep Milling, Heavy Stamping, High-Power Fiber Laser Engraving",
      surfaceFinishes: "Machined Matte, Natural Oxidation, Industrial Passivated",
      standardsCompliance: "BS 1400 PB1, ASTM B103, ISO 9001:2015"
    },
    gradesList: [
      {
        code: "Phosphor Bronze (PB1)",
        name: "High-Tin Phosphor Bronze",
        desc: "Exceptional spring properties, corrosion resistance, and wear resistance under heavy sliding loads."
      },
      {
        code: "Cast Bronze",
        name: "Centrifugal Cast Bronze",
        desc: "Heavy-duty cast alloy for foundry equipment, marine rudders, and crushers."
      },
      {
        code: "Tool Steel",
        name: "High-Carbon Alloy Tool Steel",
        desc: "Hardened steel substrate for die stamping tools, injection molds, and ultra-high-pressure press plates."
      }
    ],
    features: [
      "High tensile endurance & anti-friction",
      "Phosphor bronze and tool steel alloys",
      "Saltwater & abrasive slurry proof",
      "Heavy industrial relief marking"
    ],
    applicableProductSlugs: [
      "metal-identification-tags",
      "industrial-machine-tags",
      "metal-identification-tags-stockist-in-mumbai",
      "metal-identification-rings",
      "metal-identification-rings-manufacturer-in-india",
      "machine-name-plates",
      "name-plate-manufacturer-in-mumbai",
      "custom-industrial-plates",
      "custom-industrial-plates-manufacturer-in-india"
    ]
  },
  {
    id: "pvc",
    slug: "pvc-vinyl-manufacturing-in-mumbai",
    seoUrl: "/pvc-vinyl-manufacturing-in-mumbai",
    aliases: ["pvc", "materials/pvc", "pvc-vinyl", "vinyl", "polycarbonate", "industrial-labels", "pvc-vinyl-manufacturing-in-mumbai"],
    name: "PVC & Vinyl",
    grades: "Cast Industrial PVC, 3M Scotchcal Vinyl, Polycarbonate Film",
    metaTitle: "PVC Vinyl Manufacturing in Mumbai | Rameshwar Industries",
    metaDescription: "Flexible industrial vinyl labels, polycarbonate overlays, and warning decals. High-bond 3M adhesive, chemical and solvent resistant.",
    canonicalUrl: "https://rameshwarindustries.com/pvc-vinyl-manufacturing-in-mumbai",
    headline: "Flexible industrial labels, overlays and hazard stickers",
    description: "High-bond adhesive industrial overlays and safety warning labels designed for curved surfaces, motor housings, and switchgear with high dielectric resistance and solvent immunity.",
    detailedOverview: "Manufactured from heavy-duty cast industrial PVC and reverse-printed polycarbonate graphic films. Engineered for switchgear cabinets, curved motor frames, and control consoles where rigid metal plates cannot conform. The high-bond 3M acrylic adhesive forms an aggressive structural union with painted and powder-coated steel surfaces.",
    image: "/images/pvc-industrial-labels.jpg",
    color: "#ea580c",
    tagColor: "bg-orange-50 text-orange-800 border-orange-200",
    swatchClass: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 border-orange-300",
    badge: "Solvent & Oil Resistant",
    specs: {
      density: "1.30 – 1.45 g/cm³",
      tempRating: "-40°C to +90°C",
      tensileStrength: "High elongation flexibility (>150%)",
      corrosionResistance: "Immune to hydraulic oils, transformer fluid, detergent wash, and moisture",
      thicknessRange: "0.15 mm to 0.5 mm (Plus adhesive layer)",
      markingMethods: "UV Curable Screen Printing, Thermal Transfer, Digital Sub-Surface Printing",
      surfaceFinishes: "Velvet Matte Non-Glare, Glossy UV Varnished, Textured Anti-Scratch",
      standardsCompliance: "UL 969 Marking & Labeling Standards, RoHS Compliant, ISO 9001:2015"
    },
    gradesList: [
      {
        code: "Cast Industrial PVC",
        name: "Heavy-Duty Dimensional PVC",
        desc: "Dimensionally stable vinyl resistant to UV shrinkage, weathering, and harsh factory air."
      },
      {
        code: "3M Scotchcal Film",
        name: "Industrial Chemical Film",
        desc: "Premium vinyl substrate with aggressive acrylic adhesive engineered to stick to low surface energy plastics."
      },
      {
        code: "Polycarbonate (Lexan)",
        name: "Sub-Surface Graphic Film",
        desc: "Velvet-textured front with reverse-printed ink layer for 100% abrasion and scratch immunity on control panels."
      }
    ],
    features: [
      "Resistant to hydraulic oils & chemical solvents",
      "Barcode & serialized QR integration",
      "High-tack 3M acrylic adhesive backing",
      "Vibrant fade-proof safety warning colors"
    ],
    applicableProductSlugs: [
      "pvc-vinyl-labels",
      "industrial-sticker-supplier-in-mumbai",
      "warning-instruction-plates",
      "warning-plate-manufacturing-in-mumbai",
      "caution-warning-plates",
      "caution-warning-plates-supplier-in-mumbai",
      "high-voltage-warning-plates",
      "high-voltage-warning-plates-manufacturer-in-mumbai",
      "safety-instruction-plates",
      "safety-instruction-plates-supplier-in-india",
      "control-panel-name-plates",
      "control-panel-name-plates-manufacturing-in-mumbai",
      "emergency-stop-labels",
      "emergency-stop-labels-stockist-in-india",
      "alarm-indicator-labels",
      "alarm-indicator-labels-supplier-in-mumbai",
      "water-pump-switch-labels",
      "water-pump-switch-labels-manufacturer-in-mumbai",
      "led-sign-boards",
      "led-sign-boards-manufacturer-in-mumbai"
    ]
  }
];

// Helper to look up a material by slug, id, or alias
export function getMaterialBySlug(targetSlug) {
  if (!targetSlug) return null;
  const clean = targetSlug
    .replace(/^\/materials\//, '')
    .replace(/^\/products\//, '')
    .replace(/^\//, '')
    .replace(/\/manufacturer-in-india$/, '')
    .replace(/\/$/, '')
    .trim()
    .toLowerCase();

  return MATERIALS.find(m => {
    if (m.slug.toLowerCase() === clean) return true;
    if (m.id.toLowerCase() === clean) return true;
    if (m.aliases && m.aliases.some(alias => {
      const cleanAlias = alias
        .replace(/^\/materials\//, '')
        .replace(/^\/products\//, '')
        .replace(/^\//, '')
        .replace(/\/manufacturer-in-india$/, '')
        .replace(/\/$/, '')
        .trim()
        .toLowerCase();
      return cleanAlias === clean;
    })) {
      return true;
    }
    return false;
  });
}

export const APPLICATIONS = [
  {
    id: "01",
    name: "Industrial Machinery",
    desc: "Machine identification plates featuring model numbers, serial numbers, specifications and technical details.",
    image: "/images/img1.jpg",
  },
  {
    id: "02",
    name: "Electrical Panels",
    desc: "Durable metal labels for electrical panels, switchboards, voltage ratings, warnings and circuit identification.",
    image: "/images/img11.jpg",
  },
  {
    id: "03",
    name: "Control Panels",
    desc: "Professional labels and nameplates for switches, controls, indicators and industrial automation panels.",
    image: "/images/img8.jpg",
  },
  {
    id: "04",
    name: "Automotive & Engineering",
    desc: "Metal identification plates, badges and specification labels designed for automotive and engineering applications.",
    image: "/images/img6.jpg",
  },
  {
    id: "05",
    name: "Pharmaceutical Equipment",
    desc: "High-quality stainless steel nameplates and identification labels for pharmaceutical and processing equipment.",
    image: "/images/img4.jpg",
  },
  {
    id: "06",
    name: "Elevators & Escalators",
    desc: "Elegant and durable manufacturer plates, certification labels and specification nameplates for elevators and escalators.",
    image: "/images/img2.jpg",
  },
  {
    id: "07",
    name: "HVAC Equipment",
    desc: "Equipment labels and metal nameplates for air conditioning units, compressors, chillers and HVAC systems.",
    image: "/images/img3.jpg",
  },
  {
    id: "08",
    name: "Pumps & Motors",
    desc: "Industrial data plates displaying motor ratings, pump specifications, model numbers and technical information.",
    image: "/images/img12.jpg",
  },
  {
    id: "09",
    name: "Industrial Equipment",
    desc: "Custom metal nameplates and identification labels for generators, tanks, boilers and heavy industrial equipment.",
    image: "/images/img5.jpg",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Extreme Durability",
    desc: "Engineered to withstand UV radiation, industrial solvents, acid washdowns, abrasive vibration, and temperatures up to 800°C."
  },
  {
    title: "Micron-Level Precision",
    desc: "State-of-the-art fiber laser marking and CNC milling ensure clean typography, fine barcode lines, and exact CAD tolerance compliance."
  },
  {
    title: "Comprehensive Substrates",
    desc: "Direct factory manufacturing in Grade 304/316 Stainless Steel, Anodized Aluminium, Brass, Copper, Phosphor Bronze, and Heavy-Bond PVC."
  },
  {
    title: "Rapid OEM Lead Times",
    desc: "Dedicated tooling and high-capacity etching baths enable rapid production runs from prototype pilot batches to high-volume OEM schedules."
  }
];

export const CUSTOMIZATION_OPTIONS = [
  { label: "Custom Size", desc: "Any width × height from micro 10mm tags up to large architectural room plates" },
  { label: "Custom Shape", desc: "Rectangular, circular, oval, or complex contour shapes cut via laser & CNC" },
  { label: "Custom Text", desc: "Any industrial font, multilingual translations, technical tables, and symbols" },
  { label: "Company Logo", desc: "Sharp vector logo engraving or screen printing faithfully matching your brand" },
  { label: "Serial Number", desc: "Sequential numbering, variable alphanumeric stamping, and barcode/QR codes" },
  { label: "Model Number", desc: "Pre-engraved or blank recessed windows ready for your floor team to punch" },
  { label: "Cut-outs & Holes", desc: "Precision slots for toggle switches, emergency stops, potentiometers, and rivets" },
  { label: "Mounting Holes", desc: "Countersunk screw holes, blind stud fixings, or heavy-duty 3M adhesive backing" },
  { label: "Multiple Finishes", desc: "Brushed satin, mirror polish, matte anodized, oxidized antique, or passivated" }
];

export const INDUSTRIES = [
  { name: "Machinery", desc: "Lathes, milling machines, packaging equipment, CNC centers, and tool machinery", image: "/images/img1.jpg" },
  { name: "Manufacturing", desc: "High-volume assembly lines, stamping presses, and factory automation equipment", image: "/images/img10.jpg" },
  { name: "Electrical Panels", desc: "Switchgear cabinets, high-voltage breakers, and distribution board legends", image: "/images/img11.jpg" },
  { name: "Industrial Equipment", desc: "Pumps, compressors, hydraulic power packs, boilers, and pressure vessels", image: "/images/img5.jpg" },
  { name: "Automation", desc: "Robotics cells, PLC consoles, servo motor drives, and conveyor systems", image: "/images/img7.jpg" },
  { name: "Engineering", desc: "Precision tooling workshops, fabrication facilities, and heavy mechanical plants", image: "/images/img6.jpg" },
  { name: "Factories & Facilities", desc: "Architectural room signage, push/pull doors, and facility hazard tags", image: "/images/room-door-plate.jpg" },
  { name: "Process Equipment", desc: "Chemical processing vessels, pipeline valve tags, and transformer grounding", image: "/images/copper-industrial-plate.jpg" }
];

// Verified Company Contact Information extracted from Catalogue
export const COMPANY_CONTACT = {
  name: "Rameshwar Industries",
  tagline: "Industrial Name Plates & Identification Solutions",
  certifications: "ISO 9001:2015 Certified Company • Udyam MSME Registered",

  // Factory / Manufacturing Works (from Catalogue Page 4)
  factory: {
    label: "Manufacturing Works & Facility",
    compound: "Osiyamata Compound, C-4, Reti Bunder Rd",
    area: "Pipe Line No. 227, Kalher, Bhiwandi",
    city: "Thane",
    pincode: "421302",
    state: "Maharashtra",
    country: "India",
    fullAddress: "Osiyamata Compound, C-4, Reti Bunder Rd, Pipe Line No. 227, Kalher, Bhiwandi, Thane - 421302, Maharashtra, India",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Osiyamata+Compound,+Reti+Bunder+Rd,+Kalher,+Bhiwandi,+Thane+421302",
    mapEmbedUrl: "https://maps.google.com/maps?q=Osiyamata+Compound,+Reti+Bunder+Rd,+Kalher,+Bhiwandi,+Thane+421302&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // Central / Registered Sales Office (from Catalogue Page 4)
  office: {
    label: "Registered & Central Sales Office",
    building: "Room No. 04, 4th Floor, Lotlikar Bldg",
    area: "Kamathiwadi, Chira Bazar, Girgaon",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    fullAddress: "Room No. 04, 4th Floor, Lotlikar Bldg, Kamathiwadi, Chira Bazar, Girgaon, Mumbai, Maharashtra, India",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Chira+Bazar+Girgaon+Mumbai"
  },

  // Official Verified Phone Numbers
  phones: [
    { display: "+91 96998 38993", raw: "+919699838993" },
    { display: "+91 97699 46355", raw: "+919769946355" }
  ],
  primaryPhone: "+91 96998 38993",
  primaryPhoneRaw: "+919699838993",

  // Official Verified Email Addresses
  emails: [
    "sales@rameshwarindustries.com",
    "rameshwarindustries1999@gmail.com"
  ],
  primaryEmail: "sales@rameshwarindustries.com",

  // Business Operating Hours
  workingHours: "Monday to Saturday: 9:00 AM – 7:00 PM IST",
  workingDays: "Monday – Saturday (Sunday Closed)",

  // WhatsApp
  whatsappNumber: "919699838993",
  whatsappUrl: "https://wa.me/919699838993",

  // Official Catalogue PDF
  catalogueUrl: CATALOGUE_DOWNLOAD_URL
};
