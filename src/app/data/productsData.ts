// Two Stage Fixed Speed Images
import rs15_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS15-2S/RS15-2S.png';
import rs22_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS22-2S/RS22-2S.png';
import rs37_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS37-2S/RS37-2S.png';
import rs45_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS45-2S/RS45-2S.png';
import rs55_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS55-2S/RS55-2S.png';
import rs75_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS75-2S/RS75-2S.png';
import rs90_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS90-2S/RS90-2S.png';
import rs110_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS110-2S/RS110-2S.png';
import rs132_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS132-2S/RS132-2S.png';
import rs160_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS160-2S/RS160-2S.png';
import rs200_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS200-2S/RS200-2S.png';
import rs250_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS250-2S/RS250-2S.png';
import rs315_2s from '@/assets/Oil Injected Compressors/Two Stage Fixed Speed/RS315-2S/RS315-2S.png';

// Two Stage VSD Images
import rs22_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS22-2S-VSD/RS22-2S-VSD.png';
import rs37_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS37-2S-VSD/RS37-2S-VSD.png';
import rs45_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS45-2S-VSD/RS45-2S-VSD.png';
import rs55_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS55-2S-VSD/RS55-2S-VSD.png';
import rs75_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS75-2S-VSD/RS75-2S-VSD.png';
import rs90_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS90-2S-VSD/RS90-2S-VSD.png';
import rs110_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS110-2S-VSD/RS110-2S-VSD.png';
import rs132_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS132-2S-VSD/RS132-2S-VSD.png';
import rs160_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS160-2S-VSD/RS160-2S-VSD.png';
import rs200_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS200-2S-VSD/RS200-2S-VSD.png';
import rs250_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS250-2S-VSD/RS250-2S-VSD.png';

// Single Stage VSD Images
import rs22vsd from '@/assets/Oil Injected Compressors/Single Stage VSD/RS22VSD/RS22VSD.png';
import rs37vsd from '@/assets/Oil Injected Compressors/Single Stage VSD/RS37VSD/RS37VSD.png';
import rs45vsd from '@/assets/Oil Injected Compressors/Single Stage VSD/RS45VSD/RS45VSD.png';
import rs55vsd from '@/assets/Oil Injected Compressors/Single Stage VSD/RS55VSD/RS55VSD.png';
import rs75vsd from '@/assets/Oil Injected Compressors/Single Stage VSD/RS75VSD/RS75VSD.png';

// Full Feature Images
import rs75ff from '@/assets/Oil Injected Compressors/Full Feature/RS7.5 VSD FF/RS7.5VSDFF.png';
import rs11ff from '@/assets/Oil Injected Compressors/Full Feature/RS11 VSD FF/RS11VSDFF.png';
import rs15ff from '@/assets/Oil Injected Compressors/Full Feature/RS15 VSD FF/RS15VSDFF.png';

// Workshop SM3HP
import sm3hp from '@/assets/Oil Injected Compressors/SM3HP/SM3HP.png';

// Drill Rigs
import dz10 from '@/assets/Oil Injected Compressors/Drill Rigs/DZ10/DZ10.png';
import rs3 from '@/assets/Oil Injected Compressors/Drill Rigs/RS3/RS3.png';

// Oil Free
import rsvt400vsd from '@/assets/Oil Free Compressors/RSVT400VSD/RSVT400VSD.png';

// Air Receivers
import airReceiverVertical from '@/assets/Air Receivers/Air Receiver2.png';
import airReceiverHorizontal from '@/assets/Air Receivers/Air Receiver.png';
import airReceiverBulk from '@/assets/Air Receivers/Air Receiver 1.png';

// Air Dryers & Treatment
import airDryerImg from '@/assets/air-dryer.jpg';
import inlineFiltersImg from '@/assets/inline-filters.jpg';

export type ProductCategory =
  | 'All'
  | 'Two-Stage Rotary Screw'
  | 'Variable Speed (VSD)'
  | 'Full Feature All-In-One'
  | 'Drill Rigs & Workshop'
  | 'Air Receivers'
  | 'Air Dryers & Treatment';

export interface ProductModelVariant {
  id: string;
  model: string;
  powerKw: number;
  powerHp: number;
  pressureBar: string;
  flowRateM3: string;
  flowRateCfm: string;
  image: string;
  tankSize?: string;
  noiseDb?: string;
  weightKg?: string;
  dimensions?: string;
  cooling?: string;
}

export interface ProductFamily {
  id: string;
  name: string;
  seriesCode: string;
  category: ProductCategory;
  categoryTags: ProductCategory[];
  subtitle: string;
  description: string;
  badge: string;
  badgeColor: string;
  keyHighlights: string[];
  specsList: string[];
  defaultVariantIndex: number;
  variants: ProductModelVariant[];
  applications: string[];
  isPlaceholder?: boolean;
}

export const PRODUCT_FAMILIES: ProductFamily[] = [
  // 1. TWO-STAGE FIXED SPEED SERIES (RS-2S)
  {
    id: 'two-stage-fixed-speed',
    name: 'BAOFN Two-Stage Fixed Speed Screw Compressors',
    seriesCode: 'RS-2S Series',
    category: 'Two-Stage Rotary Screw',
    categoryTags: ['Two-Stage Rotary Screw'],
    subtitle: 'Heavy Industrial & Continuous 24/7 Mining Operations',
    description:
      'Engineered with dual independent air-ends to divide compression ratio across two stages. Delivers up to 15-20% lower specific energy consumption, significantly lower thermal stress, and maximum operational longevity for continuous heavy industrial duty.',
    badge: 'Two-Stage High Efficiency',
    badgeColor: '#dc2626',
    keyHighlights: [
      '15% - 20% Specific Energy Savings',
      'Lower Internal Pressure Ratio Per Stage',
      'Heavy-Duty Cast Iron Air-End',
      'Continuous 24/7 Harsh Ambient Duty'
    ],
    specsList: [
      'Two-Stage Inter-Cooled Compression',
      'IE3/IE4 High-Efficiency Industrial Motor',
      'Dual Stage Synthetic Oil Separation',
      'Smart 7" Touchscreen PLC Controller'
    ],
    applications: ['Mining & Smelting', 'Steel & Metal Fabrication', 'Heavy Chemical Processing', 'Automotive Plants', 'Glass & Cement'],
    defaultVariantIndex: 5, // RS75-2S
    variants: [
      {
        id: 'rs15-2s',
        model: 'RS15-2S',
        powerKw: 15,
        powerHp: 20,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '2.4 m³/min',
        flowRateCfm: '85 CFM',
        image: rs15_2s,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '580 kg',
        dimensions: '1200 x 850 x 1250 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs22-2s',
        model: 'RS22-2S',
        powerKw: 22,
        powerHp: 30,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '3.8 m³/min',
        flowRateCfm: '134 CFM',
        image: rs22_2s,
        noiseDb: '66 ± 2 dB(A)',
        weightKg: '680 kg',
        dimensions: '1300 x 950 x 1350 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs37-2s',
        model: 'RS37-2S',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '6.6 m³/min',
        flowRateCfm: '233 CFM',
        image: rs37_2s,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '1150 kg',
        dimensions: '1600 x 1100 x 1550 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs45-2s',
        model: 'RS45-2S',
        powerKw: 45,
        powerHp: 60,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '8.1 m³/min',
        flowRateCfm: '286 CFM',
        image: rs45_2s,
        noiseDb: '69 ± 2 dB(A)',
        weightKg: '1280 kg',
        dimensions: '1700 x 1150 x 1600 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs55-2s',
        model: 'RS55-2S',
        powerKw: 55,
        powerHp: 75,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '10.2 m³/min',
        flowRateCfm: '360 CFM',
        image: rs55_2s,
        noiseDb: '70 ± 2 dB(A)',
        weightKg: '1450 kg',
        dimensions: '1850 x 1250 x 1750 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs75-2s',
        model: 'RS75-2S',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '14.1 m³/min',
        flowRateCfm: '498 CFM',
        image: rs75_2s,
        noiseDb: '71 ± 2 dB(A)',
        weightKg: '1850 kg',
        dimensions: '2100 x 1350 x 1850 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs90-2s',
        model: 'RS90-2S',
        powerKw: 90,
        powerHp: 120,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '17.2 m³/min',
        flowRateCfm: '607 CFM',
        image: rs90_2s,
        noiseDb: '72 ± 2 dB(A)',
        weightKg: '2200 kg',
        dimensions: '2300 x 1450 x 1950 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs110-2s',
        model: 'RS110-2S',
        powerKw: 110,
        powerHp: 150,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '21.0 m³/min',
        flowRateCfm: '742 CFM',
        image: rs110_2s,
        noiseDb: '73 ± 2 dB(A)',
        weightKg: '2650 kg',
        dimensions: '2550 x 1600 x 2050 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs132-2s',
        model: 'RS132-2S',
        powerKw: 132,
        powerHp: 175,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '25.5 m³/min',
        flowRateCfm: '900 CFM',
        image: rs132_2s,
        noiseDb: '74 ± 2 dB(A)',
        weightKg: '3100 kg',
        dimensions: '2800 x 1700 x 2150 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs160-2s',
        model: 'RS160-2S',
        powerKw: 160,
        powerHp: 215,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '30.5 m³/min',
        flowRateCfm: '1077 CFM',
        image: rs160_2s,
        noiseDb: '75 ± 2 dB(A)',
        weightKg: '3600 kg',
        dimensions: '3000 x 1850 x 2250 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs200-2s',
        model: 'RS200-2S',
        powerKw: 200,
        powerHp: 270,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '38.0 m³/min',
        flowRateCfm: '1342 CFM',
        image: rs200_2s,
        noiseDb: '76 ± 2 dB(A)',
        weightKg: '4500 kg',
        dimensions: '3400 x 2000 x 2350 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs250-2s',
        model: 'RS250-2S',
        powerKw: 250,
        powerHp: 335,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '46.5 m³/min',
        flowRateCfm: '1642 CFM',
        image: rs250_2s,
        noiseDb: '77 ± 2 dB(A)',
        weightKg: '5400 kg',
        dimensions: '3800 x 2150 x 2450 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs315-2s',
        model: 'RS315-2S',
        powerKw: 315,
        powerHp: 420,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '57.0 m³/min',
        flowRateCfm: '2013 CFM',
        image: rs315_2s,
        noiseDb: '78 ± 2 dB(A)',
        weightKg: '6800 kg',
        dimensions: '4200 x 2300 x 2550 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      }
    ]
  },

  // 2. TWO-STAGE VARIABLE SPEED DRIVE (RS-2S-VSD)
  {
    id: 'two-stage-vsd',
    name: 'BAOFN Two-Stage Variable Speed Drive (VSD) Compressors',
    seriesCode: 'RS-2S-VSD Series',
    category: 'Variable Speed (VSD)',
    categoryTags: ['Two-Stage Rotary Screw', 'Variable Speed (VSD)'],
    subtitle: 'Dynamic Speed Modulation with Two-Stage Thermodynamics',
    description:
      'The ultimate energy-saving compressed air solution. Combines the high efficiency of two-stage screw compression with Permanent Magnet VSD inverter technology. Eliminates unload electricity wastage and delivers up to 35-45% power cost reduction.',
    badge: 'Maximum Energy Saver (VSD)',
    badgeColor: '#f97316',
    keyHighlights: [
      'Up to 45% Total Power Savings',
      'Permanent Magnet Synchronous Motor',
      'Constant Target Pressure Regulation (±0.1 Bar)',
      'Zero Inrush Current Soft Start'
    ],
    specsList: [
      'Two-Stage Compression + Inverter Drive',
      'Wide Turndown Modulation (25% - 100%)',
      'Direct Drive Integrated Shaft',
      'Colour Graphic Touch PLC with Remote Monitoring'
    ],
    applications: ['Fluctuating Air Demand Facilities', 'High Energy Cost Operations', 'Mining Processing', '24/7 Manufacturing'],
    defaultVariantIndex: 4, // RS75-2S-VSD
    variants: [
      {
        id: 'rs22-2s-vsd',
        model: 'RS22-2S-VSD',
        powerKw: 22,
        powerHp: 30,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '1.1 - 3.9 m³/min',
        flowRateCfm: '39 - 138 CFM',
        image: rs22_2s_vsd,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '710 kg',
        dimensions: '1300 x 950 x 1350 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs37-2s-vsd',
        model: 'RS37-2S-VSD',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '2.0 - 6.8 m³/min',
        flowRateCfm: '71 - 240 CFM',
        image: rs37_2s_vsd,
        noiseDb: '67 ± 2 dB(A)',
        weightKg: '1180 kg',
        dimensions: '1600 x 1100 x 1550 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs45-2s-vsd',
        model: 'RS45-2S-VSD',
        powerKw: 45,
        powerHp: 60,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '2.5 - 8.3 m³/min',
        flowRateCfm: '88 - 293 CFM',
        image: rs45_2s_vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '1320 kg',
        dimensions: '1700 x 1150 x 1600 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs55-2s-vsd',
        model: 'RS55-2S-VSD',
        powerKw: 55,
        powerHp: 75,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '3.1 - 10.5 m³/min',
        flowRateCfm: '109 - 371 CFM',
        image: rs55_2s_vsd,
        noiseDb: '69 ± 2 dB(A)',
        weightKg: '1490 kg',
        dimensions: '1850 x 1250 x 1750 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs75-2s-vsd',
        model: 'RS75-2S-VSD',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '4.2 - 14.5 m³/min',
        flowRateCfm: '148 - 512 CFM',
        image: rs75_2s_vsd,
        noiseDb: '70 ± 2 dB(A)',
        weightKg: '1900 kg',
        dimensions: '2100 x 1350 x 1850 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs90-2s-vsd',
        model: 'RS90-2S-VSD',
        powerKw: 90,
        powerHp: 120,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '5.1 - 17.6 m³/min',
        flowRateCfm: '180 - 621 CFM',
        image: rs90_2s_vsd,
        noiseDb: '71 ± 2 dB(A)',
        weightKg: '2280 kg',
        dimensions: '2300 x 1450 x 1950 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs110-2s-vsd',
        model: 'RS110-2S-VSD',
        powerKw: 110,
        powerHp: 150,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '6.3 - 21.5 m³/min',
        flowRateCfm: '222 - 759 CFM',
        image: rs110_2s_vsd,
        noiseDb: '72 ± 2 dB(A)',
        weightKg: '2720 kg',
        dimensions: '2550 x 1600 x 2050 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs132-2s-vsd',
        model: 'RS132-2S-VSD',
        powerKw: 132,
        powerHp: 175,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '7.6 - 26.0 m³/min',
        flowRateCfm: '268 - 918 CFM',
        image: rs132_2s_vsd,
        noiseDb: '73 ± 2 dB(A)',
        weightKg: '3180 kg',
        dimensions: '2800 x 1700 x 2150 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs160-2s-vsd',
        model: 'RS160-2S-VSD',
        powerKw: 160,
        powerHp: 215,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '9.1 - 31.2 m³/min',
        flowRateCfm: '321 - 1102 CFM',
        image: rs160_2s_vsd,
        noiseDb: '74 ± 2 dB(A)',
        weightKg: '3700 kg',
        dimensions: '3000 x 1850 x 2250 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs200-2s-vsd',
        model: 'RS200-2S-VSD',
        powerKw: 200,
        powerHp: 270,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '11.4 - 38.8 m³/min',
        flowRateCfm: '402 - 1370 CFM',
        image: rs200_2s_vsd,
        noiseDb: '75 ± 2 dB(A)',
        weightKg: '4620 kg',
        dimensions: '3400 x 2000 x 2350 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs250-2s-vsd',
        model: 'RS250-2S-VSD',
        powerKw: 250,
        powerHp: 335,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '13.9 - 47.5 m³/min',
        flowRateCfm: '491 - 1677 CFM',
        image: rs250_2s_vsd,
        noiseDb: '76 ± 2 dB(A)',
        weightKg: '5550 kg',
        dimensions: '3800 x 2150 x 2450 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      }
    ]
  },

  // 3. SINGLE-STAGE VARIABLE SPEED DRIVE (RS-VSD)
  {
    id: 'single-stage-vsd',
    name: 'BAOFN Single-Stage Variable Speed Compressors',
    seriesCode: 'RS-VSD Series',
    category: 'Variable Speed (VSD)',
    categoryTags: ['Variable Speed (VSD)'],
    subtitle: 'Cost-Effective Commercial & Industrial VSD Performance',
    description:
      'Direct-drive single-stage rotary screw compressors with intelligent permanent magnet VSD frequency conversion. Matches rotational speed exactly to factory air consumption to eliminate no-load power draw.',
    badge: 'Smart Inverter VSD',
    badgeColor: '#f97316',
    keyHighlights: [
      'Eliminates No-Load Energy Waste',
      'Stable Plant Air Pressure Output',
      'Direct Coupled Motor & Air-End',
      'Low Operating Noise Emissions'
    ],
    specsList: [
      'Variable Frequency Drive (VFD)',
      'Permanent Magnet Motor Technology',
      'Low Maintenance Direct Drive',
      'Microprocessor Diagnostic Interface'
    ],
    applications: ['Manufacturing Workshops', 'Packaging & Bottling', 'Joinery & Woodworking', 'Plastic Injection Moulding'],
    defaultVariantIndex: 0, // RS22VSD
    variants: [
      {
        id: 'rs22vsd',
        model: 'RS22 VSD',
        powerKw: 22,
        powerHp: 30,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '1.1 - 3.6 m³/min',
        flowRateCfm: '39 - 127 CFM',
        image: rs22vsd,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '580 kg',
        dimensions: '1200 x 850 x 1250 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs37vsd',
        model: 'RS37 VSD',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '1.8 - 6.2 m³/min',
        flowRateCfm: '64 - 219 CFM',
        image: rs37vsd,
        noiseDb: '67 ± 2 dB(A)',
        weightKg: '820 kg',
        dimensions: '1400 x 950 x 1350 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs45vsd',
        model: 'RS45 VSD',
        powerKw: 45,
        powerHp: 60,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '2.3 - 7.6 m³/min',
        flowRateCfm: '81 - 268 CFM',
        image: rs45vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '950 kg',
        dimensions: '1500 x 1050 x 1450 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs55vsd',
        model: 'RS55 VSD',
        powerKw: 55,
        powerHp: 75,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '2.8 - 9.8 m³/min',
        flowRateCfm: '99 - 346 CFM',
        image: rs55vsd,
        noiseDb: '69 ± 2 dB(A)',
        weightKg: '1150 kg',
        dimensions: '1650 x 1150 x 1550 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs75vsd',
        model: 'RS75 VSD',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '7 - 13 Bar',
        flowRateM3: '3.8 - 13.5 m³/min',
        flowRateCfm: '134 - 477 CFM',
        image: rs75vsd,
        noiseDb: '70 ± 2 dB(A)',
        weightKg: '1500 kg',
        dimensions: '1850 x 1250 x 1700 mm',
        cooling: 'Air-Cooled'
      }
    ]
  },

  // 4. FULL FEATURE INTEGRATED ALL-IN-ONE (RS-VSD-FF)
  {
    id: 'full-feature-all-in-one',
    name: 'BAOFN Full Feature (FF) All-In-One Compressors',
    seriesCode: 'RS-VSD-FF Series',
    category: 'Full Feature All-In-One',
    categoryTags: ['Full Feature All-In-One', 'Variable Speed (VSD)'],
    subtitle: 'Integrated Screw Compressor + Refrigerated Dryer + Air Receiver',
    description:
      'The complete all-in-one compressed air center. Integrates a variable speed rotary screw compressor, refrigerated moisture dryer, precision inline coalescing filters, and dual air storage receivers onto a single pre-piped, plug-and-play skid.',
    badge: 'All-In-One Air Station',
    badgeColor: '#dc2626',
    keyHighlights: [
      'Plug & Play Complete Compressed Air System',
      'Built-In Refrigerated Moisture Dryer',
      'Dual Integrated Air Receiver Tanks',
      'Saves 60% Plant Floor Footprint'
    ],
    specsList: [
      'Variable Speed Rotary Screw Air-End',
      'Integrated Condensate Water Auto-Drain',
      'High-Precision 0.01 Micron Filtration',
      'Instant Hookup: Connect Power & Air Outlet'
    ],
    applications: ['Laser Cutting & Metal Workshops', 'Automotive Spray Booths', 'CNC Machining Centers', 'Food & Bottling Workshops'],
    defaultVariantIndex: 1, // RS11 VSD FF
    variants: [
      {
        id: 'rs75-vsd-ff',
        model: 'RS7.5 VSD FF',
        powerKw: 7.5,
        powerHp: 10,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '0.3 - 1.1 m³/min',
        flowRateCfm: '11 - 39 CFM',
        image: rs75ff,
        tankSize: '300 L Tank Integrated',
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '450 kg',
        dimensions: '1550 x 800 x 1500 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs11-vsd-ff',
        model: 'RS11 VSD FF',
        powerKw: 11,
        powerHp: 15,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '0.5 - 1.6 m³/min',
        flowRateCfm: '18 - 56 CFM',
        image: rs11ff,
        tankSize: '500 L Tank Integrated',
        noiseDb: '64 ± 2 dB(A)',
        weightKg: '560 kg',
        dimensions: '1650 x 850 x 1600 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs15-vsd-ff',
        model: 'RS15 VSD FF',
        powerKw: 15,
        powerHp: 20,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '0.7 - 2.3 m³/min',
        flowRateCfm: '25 - 81 CFM',
        image: rs15ff,
        tankSize: '500 L Tank Integrated',
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '630 kg',
        dimensions: '1750 x 900 x 1650 mm',
        cooling: 'Air-Cooled'
      }
    ]
  },

  // 5. WORKSHOP & COMPACT (SM3HP)
  {
    id: 'sm3hp-compact',
    name: 'BAOFN SM 3HP Workshop Screw Compressor',
    seriesCode: 'SM 3HP Series',
    category: 'Drill Rigs & Workshop',
    categoryTags: ['Drill Rigs & Workshop'],
    subtitle: 'Tank-Mounted Rotary Screw for Commercial Workshops',
    description:
      'Designed to replace loud, high-wear piston compressors with smooth, whisper-quiet rotary screw continuous power. Mounted on a heavy receiver with wheels for easy workshop mobility and 100% continuous duty cycle without overheating.',
    badge: 'Workshop Rotary Screw',
    badgeColor: '#475569',
    keyHighlights: [
      '100% Continuous Duty Cycle (No Rest Needed)',
      'Whisper-Quiet Commercial Workshop Operation',
      'Tank-Mounted with Heavy Castor Wheels',
      'Direct Replacement for Piston Compressors'
    ],
    specsList: [
      '2.2 kW / 3.0 HP High-Efficiency Motor',
      'Precision Single-Stage Rotary Screw Air-End',
      'Pre-Fitted Safety Valve & Pressure Gauge',
      'Standard 220V/380V Industrial Power Supply'
    ],
    applications: ['Auto Repair & Tyre Shops', 'Woodworking & Cabinetry', 'Small Fabrication Garages', 'Commercial Sandblasting'],
    defaultVariantIndex: 0,
    variants: [
      {
        id: 'sm3hp',
        model: 'SM 3HP',
        powerKw: 2.2,
        powerHp: 3.0,
        pressureBar: '8 - 10 Bar',
        flowRateM3: '0.28 m³/min',
        flowRateCfm: '10 CFM',
        image: sm3hp,
        tankSize: '100 L Mobile Tank',
        noiseDb: '58 ± 2 dB(A)',
        weightKg: '135 kg',
        dimensions: '1150 x 500 x 920 mm',
        cooling: 'Air-Cooled'
      }
    ]
  },

  // 6. DRILL RIGS & PORTABLE (DZ10 & RS3)
  {
    id: 'mining-drill-rigs',
    name: 'BAOFN Portable High-Pressure & Drill Rig Compressors',
    seriesCode: 'Mining & Drill Rig Series',
    category: 'Drill Rigs & Workshop',
    categoryTags: ['Drill Rigs & Workshop'],
    subtitle: 'High-Pressure Blast Hole & Exploration Air Delivery',
    description:
      'Heavy-duty diesel and electric high-pressure compressors engineered for extreme drilling rigs, open-cast blast holes, geotechnical exploration, quarrying, and harsh outdoor desert and mine environments.',
    badge: 'Mining & Exploration',
    badgeColor: '#b45309',
    keyHighlights: [
      'High-Pressure Discharge up to 25+ Bar',
      'Reinforced Skid & Protective Steel Canopy',
      'Heavy-Duty Dust Filtration Pre-Cleaners',
      'Built for Remote Extreme Ambient Climates'
    ],
    specsList: [
      'High CFM Volume Output for Deep Blast Holes',
      'Vibration-Damped Heavy Frame Chassis',
      'High Capacity Oil-Air Cooling Radiator',
      'Emergency Stop & Safety Interlocks'
    ],
    applications: ['Open Cast Mining & Blasting', 'Water Well & Geotechnical Drilling', 'Quarry Splitting', 'Civil Infrastructure'],
    defaultVariantIndex: 0,
    variants: [
      {
        id: 'dz10',
        model: 'DZ10 Heavy Drill Rig',
        powerKw: 110,
        powerHp: 150,
        pressureBar: '17 - 25 Bar',
        flowRateM3: '18.5 m³/min',
        flowRateCfm: '653 CFM',
        image: dz10,
        noiseDb: '76 ± 2 dB(A)',
        weightKg: '3400 kg',
        dimensions: '3200 x 1650 x 2100 mm',
        cooling: 'Heavy-Duty Industrial Cooling'
      },
      {
        id: 'rs3',
        model: 'RS3 Mobile Drill Unit',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '14 - 21 Bar',
        flowRateM3: '12.0 m³/min',
        flowRateCfm: '424 CFM',
        image: rs3,
        noiseDb: '74 ± 2 dB(A)',
        weightKg: '2450 kg',
        dimensions: '2600 x 1400 x 1800 mm',
        cooling: 'High-Ambient Radiator System'
      }
    ]
  },

  // 7. OIL FREE CLASS 0 (RSVT 400 VSD)
  {
    id: 'oil-free-rsvt',
    name: 'BAOFN Oil-Free Rotary Screw Compressors (Class 0)',
    seriesCode: 'RSVT Series',
    category: 'Variable Speed (VSD)',
    categoryTags: ['Variable Speed (VSD)'],
    subtitle: '100% ISO 8573-1 Class 0 Certified Pure Compressed Air',
    description:
      'Zero oil contamination guaranteed. High-efficiency oil-free dry rotary screw technology paired with advanced Variable Speed Drive. Built for industries where even trace oil vapor could ruin products or violate critical safety standards.',
    badge: '100% Oil-Free (Class 0)',
    badgeColor: '#10b981',
    keyHighlights: [
      'Zero Oil Risk: ISO 8573-1 Class 0 Certified',
      'Dry Screw Rotors with Anti-Corrosion Coating',
      'Direct Drive Inverter Efficiency',
      'Food & Pharmaceutical Grade Certified'
    ],
    specsList: [
      'Dual-Chamber Oil-Free Sealing System',
      'Stainless Steel Air Piping & Intercoolers',
      'Wide-Range Inverter Speed Control',
      'Advanced Touchscreen Health Monitoring'
    ],
    applications: ['Pharmaceutical Manufacturing', 'Food & Dairy Processing', 'Electronics & Semiconductor Cleanrooms', 'Hospital & Medical Air'],
    defaultVariantIndex: 0,
    variants: [
      {
        id: 'rsvt400vsd',
        model: 'RSVT 400 VSD',
        powerKw: 400,
        powerHp: 536,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '68.0 m³/min',
        flowRateCfm: '2401 CFM',
        image: rsvt400vsd,
        noiseDb: '77 ± 2 dB(A)',
        weightKg: '7200 kg',
        dimensions: '4400 x 2200 x 2400 mm',
        cooling: 'Water-Cooled / Air-Cooled'
      }
    ]
  },

  // 8. CERTIFIED AIR RECEIVERS & PRESSURE VESSELS
  {
    id: 'certified-air-receivers',
    name: 'Certified Industrial Air Receivers & Pressure Vessels',
    seriesCode: 'Vertical & Horizontal Pressure Vessels',
    category: 'Air Receivers',
    categoryTags: ['Air Receivers'],
    subtitle: 'ASME / SANS 347 Certified Storage Tanks (500L – 10,000L+)',
    description:
      'Certified industrial pressure vessels designed to eliminate pipeline air pressure fluctuations, absorb surge loads, cool discharge air, and precipitate heavy condensate prior to downstream treatment. Available in vertical, horizontal, and bulk configurations.',
    badge: 'Certified Pressure Tested',
    badgeColor: '#0284c7',
    keyHighlights: [
      'Full SANS 347 / ASME Pressure Test Certificates',
      'Heavy-Duty Boiler Grade Carbon Steel',
      'Corrosion-Resistant Industrial Epoxy Coating',
      'Supplied with Safety Valve, Pressure Gauge & Drain'
    ],
    specsList: [
      'Working Pressures: 11 Bar, 16 Bar, up to 40 Bar',
      'Capacities: 500L, 1000L, 2000L, 3000L, 5000L, 10,000L+',
      'Standard Inspection Manhole / Handhole Ports',
      'Custom Skid Mounting & Flange Configurations'
    ],
    applications: ['Factory Header Buffering', 'Mining Peak Demand Storage', 'Sandblasting Surge Reservoirs', 'Compressor Life Extension'],
    defaultVariantIndex: 0,
    variants: [
      {
        id: 'receiver-vertical-standard',
        model: 'Vertical Industrial Air Receiver (500L – 2,000L)',
        powerKw: 0,
        powerHp: 0,
        pressureBar: '11 Bar / 16 Bar',
        flowRateM3: 'Surge Buffer',
        flowRateCfm: '500L - 2,000L Storage',
        tankSize: '500L, 1000L, 1500L, 2000L Available',
        image: airReceiverVertical,
        weightKg: '380 - 950 kg',
        dimensions: 'Height: 1800 - 2800 mm | Dia: 650 - 1100 mm',
        cooling: 'Natural Thermal Radiation'
      },
      {
        id: 'receiver-horizontal-skid',
        model: 'Horizontal Low-Clearance Air Receiver (1,000L – 5,000L)',
        powerKw: 0,
        powerHp: 0,
        pressureBar: '11 Bar / 16 Bar / 25 Bar',
        flowRateM3: 'Skid Buffer',
        flowRateCfm: '1,000L - 5,000L Storage',
        tankSize: '1000L, 2000L, 3000L, 5000L Available',
        image: airReceiverHorizontal,
        weightKg: '650 - 2200 kg',
        dimensions: 'Length: 2200 - 4500 mm | Dia: 800 - 1400 mm',
        cooling: 'Natural Thermal Radiation'
      },
      {
        id: 'receiver-bulk-silo',
        model: 'High-Capacity Bulk Storage Air Vessel (5,000L – 10,000L+)',
        powerKw: 0,
        powerHp: 0,
        pressureBar: '11 Bar / 16 Bar / 40 Bar High-Pressure',
        flowRateM3: 'Heavy Plant Silo',
        flowRateCfm: '5,000L - 10,000L+ Volume',
        tankSize: '5000L, 8000L, 10000L, 20000L Custom',
        image: airReceiverBulk,
        weightKg: '2500 - 7500 kg',
        dimensions: 'Height: 3500 - 7500 mm | Dia: 1400 - 2200 mm',
        cooling: 'Natural Thermal Radiation'
      }
    ]
  },

  // 9. AIR DRYERS & FILTRATION TREATMENT
  {
    id: 'air-dryers-treatment',
    name: 'Industrial Refrigerated Air Dryers & Inline Filtration',
    seriesCode: 'Air Treatment Range',
    category: 'Air Dryers & Treatment',
    categoryTags: ['Air Dryers & Treatment'],
    subtitle: 'Moisture Removal, Coalescing Filtration & Downstream Protection',
    description:
      'Complete air treatment range including high-efficiency refrigerated air dryers, desiccant dryers, and multi-stage particulate/oil removal filters. Protects pneumatic instruments, spray lines, and machinery from moisture corrosion and oil contamination.',
    badge: 'Air Purity & Treatment',
    badgeColor: '#0284c7',
    keyHighlights: [
      'Refrigerated Dryers from 1.2 to 65 m³/min Flow',
      'Pressure Dewpoint of +3°C to +5°C',
      'Inline Filters with 0.01 Micron Particulate Rating',
      'Residual Oil Down to 0.003 mg/m³'
    ],
    specsList: [
      'Eco-Friendly R410a / R134a High-Efficiency Refrigerant',
      'Low Pressure Drop Aluminum Heat Exchangers',
      'Automatic Electronic Condensate Drain Valves',
      'Differential Pressure Filter Saturation Gauges'
    ],
    applications: ['CNC Tooling & Robotics', 'Pharmaceutical & Cleanroom Plants', 'Spray Paint Booths', 'Food Packaging Lines'],
    defaultVariantIndex: 0,
    variants: [
      {
        id: 'dryer-refrig-series',
        model: 'Refrigerated Industrial Air Dryer Range (1.2 – 65 m³/min)',
        powerKw: 1.5,
        powerHp: 2.0,
        pressureBar: '7 - 16 Bar',
        flowRateM3: '1.2 - 65.0 m³/min',
        flowRateCfm: '42 - 2,295 CFM',
        image: airDryerImg,
        noiseDb: '60 dB(A)',
        weightKg: '65 - 650 kg',
        dimensions: 'Compact Cabinet Series',
        cooling: 'Air-Cooled'
      },
      {
        id: 'inline-filtration-pack',
        model: 'Multi-Stage Precision Inline Filtration Pack',
        powerKw: 0,
        powerHp: 0,
        pressureBar: 'Up to 16 Bar',
        flowRateM3: '1.0 - 75.0 m³/min',
        flowRateCfm: '35 - 2,650 CFM',
        image: inlineFiltersImg,
        noiseDb: 'Silent',
        weightKg: '5 - 35 kg per unit',
        dimensions: 'Inline NPT / Flanged Ports',
        cooling: 'Passive'
      }
    ]
  }
];

// Helper to get all flat models for the Complete Sizing Sheet
export interface FlatModelRow {
  modelId: string;
  familyId: string;
  familyName: string;
  seriesCode: string;
  category: ProductCategory;
  model: string;
  powerKw: number;
  powerHp: number;
  pressureBar: string;
  flowRateM3: string;
  flowRateCfm: string;
  tankSize?: string;
  cooling?: string;
  noiseDb?: string;
  image: string;
  badge: string;
  badgeColor: string;
}

export const ALL_MODELS_FLAT: FlatModelRow[] = PRODUCT_FAMILIES.flatMap((fam) =>
  fam.variants.map((v) => ({
    modelId: v.id,
    familyId: fam.id,
    familyName: fam.name,
    seriesCode: fam.seriesCode,
    category: fam.category,
    model: v.model,
    powerKw: v.powerKw,
    powerHp: v.powerHp,
    pressureBar: v.pressureBar,
    flowRateM3: v.flowRateM3,
    flowRateCfm: v.flowRateCfm,
    tankSize: v.tankSize,
    cooling: v.cooling,
    noiseDb: v.noiseDb,
    image: v.image || fam.variants[0]?.image || '',
    badge: fam.badge,
    badgeColor: fam.badgeColor
  }))
);
