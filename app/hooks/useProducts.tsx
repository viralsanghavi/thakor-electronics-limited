import {useMemo} from "react";

export const useProducts = () => {
  const products = useMemo(
    () => [
      {
        handleId: 1,
        fieldType: "Product",
        name: "Carfon Film Resistor (CFR)",
        description:
          "Carbon film resistors are known for their high reliability, stability, and affordable pricing, making them ideal for a wide range of electronic devices.\nPower Rating: 0.16W to 2W (Other wattages available on request)\nResistance Range: 1Ω to 10MΩ (Below 1Ω & above 10MΩ available on request)\nTolerance: ±5%\nMax. Working Voltage: 250V to 500V\nMax. Overload Voltage: 300V to 1000V\nDielectric Withstanding Voltage: 300V to 1000V\nOperating Temperature: -55°C to 155°C\nROHS, ISO Compliance",
        productImageUrl: "product-range/cfr.jpg",
        collection: "resistors; cfr",
      },
      {
        handleId: 2,
        fieldType: "Product",
        name: "Metal Film Resistor (MFR)",
        description:
          "Metal film resistors are renowned for their high precision, low tolerance, excellent temperature stability, low noise, long-term reliability, and small size—ideal for precise electronics and circuits.\nPower Rating: 0.16W to 2W (Other wattages available on request)\nResistance Range: 1Ω to 10MΩ (Below 1Ω & above 10MΩ available on request)\nTolerance: ±0.1%, ±0.25%, ±0.5%, ±1%, ±2%, ±5%\nMax. Working Voltage: 200V to 500V\nMax. Overload Voltage: 400V to 1000V\nDielectric Withstanding Voltage: 300V to 900V\nOperating Temperature: -55°C to 155°C\nROHS, ISO Compliance",
        productImageUrl: "product-range/mfr.jpg",
        collection: "resistors; mfr",
      },
      {
        handleId: 3,
        fieldType: "Product",
        name: "Metal Oxide Resistor (MOR)",
        description:
          "Metal oxide resistors are known for high impact strength, strong temperature stability, flame-proof design, and surge/overload capability—ideal for high-performance devices and high-power circuits.\nPower Rating: 0.25W to 8W (Other wattages available on request)\nResistance Range: 0.1Ω to 1MΩ (Below 0.1Ω & above 1MΩ available on request)\nTolerance: ±1%, ±2%, ±5%\nMax. Working Voltage: 200V to 750V\nMax. Overload Voltage: 350V to 1000V\nDielectric Withstanding Voltage: 200V to 750V\nOperating Temperature: -55°C to 155°C\nROHS, ISO Compliance",
        productImageUrl: "product-range/mor.jpg",
        collection: "resistors; mor",
      },
      {
        handleId: 4,
        fieldType: "Product",
        name: "Metal Glazed Resistor (MGR)",
        description:
          "Metal glazed resistors offer high impact resistance and strong stability—ideal for high-performance electronics and high-power circuits.\nPower Rating: 0.25W to 5W (Other wattages available on request)\nResistance Range: 100KΩ to 10MΩ (Below 100KΩ & above 10MΩ available on request)\nTolerance: ±1%, ±5%\nMax. Working Voltage: 1000V to 4000V\nMax. Overload Voltage: 1500V to 6000V\nDielectric Withstanding Voltage: 500V to 700V\nOperating Temperature: -55°C to 155°C\nROHS, ISO Compliance",
        productImageUrl: "product-range/mgr.jpg",
        collection: "resistors; mgr",
      },
      {
        handleId: 5,
        fieldType: "Product",
        name: "Wire Wound Resistor (WWR)",
        description:
          "Wire-wound resistors provide high precision, excellent power handling, low noise, and good temperature stability with flame-proof performance—ideal for high-performance and high-power circuits.\nPower Rating: 1W to 5W (Other wattages available on request)\nResistance Range: 1Ω to 500Ω (Below 1Ω & above 500Ω available on request)\nTolerance: ±1%, ±2%, ±5%\nOperating Temperature: -55°C to 155°C\nROHS, ISO Compliance",
        productImageUrl: "product-range/wwr.jpg",
        collection: "resistors; wwr",
      },
      {
        handleId: 6,
        fieldType: "Product",
        name: "Wire Wound Resistor \u2013 Non-Inductive",
        description:
          "Non-inductive wire-wound resistors deliver high precision, low inductance, excellent power handling, and strong temperature stability with flame-proof characteristics—suited for high-performance, high-power circuits.\nPower Rating: 1W to 5W (Other wattages available on request)\nResistance Range: 1Ω to 500Ω (Below 1Ω & above 500Ω available on request)\nTolerance: ±1%, ±2%, ±5%\nOperating Temperature: -55°C to 155°C\nROHS, ISO Compliance",
        productImageUrl: "",
        collection: "resistors; wwr-ni",
      },
      {
        handleId: 7,
        fieldType: "Product",
        name: "Fusible Wire Wound Resistor (FWWR)",
        description:
          "Fusible wire-wound resistors feature superior heat, pulse, and surge resistance with flame-retardant construction—ideal for high-performance devices and high-power circuits.\nPower Rating: 1W to 5W (Other wattages available on request)\nResistance Range: 1Ω to 500Ω (Below 1Ω & above 500Ω available on request)\nTolerance: ±1%, ±2%, ±5%\nOperating Temperature: -55°C to 155°C\nROHS, UL, ISO Compliance",
        productImageUrl: "",
        collection: "resistors; wwr",
      },
      {
        handleId: 8,
        fieldType: "Product",
        name: "Metal Electrode Leadless Face Resistor (MELF)",
        description:
          "MELF resistors offer wire-wound-like properties in a miniature SMD format with superior heat, pulse, and surge resistance and flame-retardant design—ideal for high-performance, high-power circuits.\nPower Rating: 1W to 5W (Other wattages available on request)\nResistance Range: 1Ω to 100KΩ (Below 1Ω & above 100KΩ available on request)\nTolerance: ±1%, ±2%, ±5%, ±10%\nOperating Temperature: -55°C to 155°C\nROHS, UL, ISO Compliance",
        productImageUrl: "product-range/melf.jpeg",
        collection: "resistors; melf",
      },
      {
        handleId: 9,
        fieldType: "Product",
        name: "Metal Oxide Varistors (MOV)",
        description:
          "A varistor is a nonlinear resistance device used for voltage clamping when a circuit faces overvoltage, absorbing excess current to protect sensitive devices.\nSize: 7D, 10D, 14D, 20D, 25D, 32D, 34S\nType: Standard (K Series), High Surge (KJ Series), Ultra-High Surge (KN Series)\nOperating Voltage Range: 10 to 1000VAC\nWorking Temperature: -40°C to +125°C\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/mov.jpeg",
        collection: "ovp",
      },
      {
        handleId: 10,
        fieldType: "Product",
        name: "Thermal Metal Oxide Varistor (TMOV)",
        description:
          "TMOV combines an alloy-type temperature fuse and a varistor in series. The fuse absorbs heat from the MOV and quickly opens the circuit before the MOV can fail and ignite.\nSize: 14D, 20D, 25D, 34S – M/N/E\nType: Standard (K Series), High Surge (KJ Series), Ultra-High Surge (KN Series)\nOperating Voltage Range: 50 to 1000VAC\nWorking Temperature: -40°C to +85°C\nDisconnection Temperature: 136°C\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/tmov.jpg",
        collection: "ovp; tmov",
      },
      {
        handleId: 11,
        fieldType: "Product",
        name: "Thermal Fuse Metal Oxide Varistor (TFMOV)",
        description:
          "TFMOV adds a thermal fuse for extra safety. Since MOVs can age/degrade, the thermal protection opens to isolate the MOV from the main circuit if the MOV degrades or fails.\nSize: 10S, 15S, 20S, 25S, 34S – M/E\nType: Standard (K Series), High Surge (KJ Series), Ultra-High Surge (KN Series)\nOperating Voltage Range: 50 to 680VAC\nWorking Temperature: -40°C to +85°C\nDisconnection Temperature: 136°C\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/tfmov.jpg",
        collection: "ovp; tfmov",
      },
      {
        handleId: 12,
        fieldType: "Product",
        name: "Surge Protection Device (SPD)",
        description:
          "A Surge Protection Device (SPD) safeguards electrical systems against damaging voltage spikes (lightning, switching events, grid disturbances) by safely diverting excess voltage to ground.\nPower: AC & DC\nTypes: Type 1 / Type 2 / Type 3 and combinations\nFeatures: Pluggable cartridges, remote signalling contact\nCompliance: IEC 61643 – 11 & 13",
        productImageUrl: "product-range/spd.jpg",
        collection: "ovp; spd",
      },
      {
        handleId: 13,
        fieldType: "Product",
        name: "Negative Temperature Coefficient (NTC)",
        description:
          "NTC thermistors are temperature-sensitive components whose resistance decreases as temperature rises—commonly used for inrush current limiting and temperature sensing.\nSize: −5, −7, −9, −11, −13, −15, −20, −25\nType: MF2, MF3\nOperational Temperature: -40°C to +200°C\nDissipation Coefficient: 3 to 17 mW/°C\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/ntc.png",
        collection: "ntc; ntc",
      },
      {
        handleId: 14,
        fieldType: "Product",
        name: "Gas Discharge Tube",
        description:
          "Gas discharge tubes are sealed glass tubes with electrodes and gas that conduct only under high voltage. During a spike, the gas ionizes into a conducting plasma and shunts surge energy away.\nType: SMD, DIP (Plug-in Series)\nDC Spark-Over Voltage: 75 to 800V\nTolerance: ±20% & ±30%\nNominal Impulse Discharge Current: 0.5kA to 25kA\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/gdt.png",
        collection: "gdt; gdt",
      },
      {
        handleId: 15,
        fieldType: "Product",
        name: "Standard Series",
        description:
          "A varistor is a nonlinear resistance device used for voltage clamping when a circuit faces overvoltage, absorbing excess current to protect sensitive devices.\nSize: 7D, 10D, 14D, 20D, 25D, 32D, 34S\nType: Standard (K Series)\nOperating Voltage Range: 10 to 1000VAC\nWorking Temperature: -40°C to +125°C\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/standard.jpg",
        collection: "ovp; mov",
      },
      {
        handleId: 202,
        fieldType: "Product",
        name: "High Surge Series",
        description:
          "A varistor is a nonlinear resistance device used for voltage clamping when a circuit faces overvoltage, absorbing excess current to protect sensitive devices.\nType: High Surge (KJ Series)\nOperating Voltage Range: 10 to 1000VAC\nWorking Temperature: -40°C to +125°C\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/highs.jpg",
        collection: "ovp; mov",
      },
      {
        handleId: 203,
        fieldType: "Product",
        name: "Ultra High Surge Series",
        description:
          "A varistor is a nonlinear resistance device used for voltage clamping when a circuit faces overvoltage, absorbing excess current to protect sensitive devices.\nType: Ultra-High Surge (KN Series)\nOperating Voltage Range: 10 to 1000VAC\nWorking Temperature: -40°C to +125°C\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/uhighs.jpg",
        collection: "ovp; mov",
      },
      {
        handleId: 204,
        fieldType: "Product",
        name: "SMD MOV",
        description:
          "SMD varistors are traditional MOV devices in a surface-mount package, used to protect electronic equipment from high-voltage surges.\nSize: 0805, 1206, 2220, 3220, 3225, 4032\nType: Standard (K Series), High Surge (KJ Series)\nOperating Voltage Range: 10 to 820VAC\nWorking Temperature: -40°C to +125°C\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/smd.jpg",
        collection: "ovp; mov",
      },
      {
        handleId: 205,
        fieldType: "Product",
        name: "Specialised MOV",
        description:
          "Specialised high-energy MOVs for TVSS and reliable circuit protection. Heavy-duty, bidirectional devices that safeguard equipment from lightning and surge events; used in AC power meters, DIN-rail systems, and UPS.\nSize: 25D, 32D, 34S, 40S, etc.\nOperating Voltage Range: 130 to 1000VAC\nSurge Protection: 20–40kA (8/20 µs)\nROHS, UL, REACH, TUV, CQC, ISO Compliance",
        productImageUrl: "product-range/special.jpg",
        collection: "ovp; mov",
      },
    ],
    []
  );
  return products;
};
