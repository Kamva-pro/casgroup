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
      'Engineered with dual independent airends to divide the compression ratio across two stages, lowering internal mechanical stress and bearing load for continuous heavy industrial duty.',
    badge: 'Two-Stage Fixed Speed',
    badgeColor: '#dc2626',
    keyHighlights: [
      'Dual-Stage Compression Ratio Division',
      'Lower Internal Pressure Ratio Per Stage',
      'Heavy-Duty Industrial Airends',
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
        flowRateM3: '2.85 m³/min',
        flowRateCfm: '100.6 CFM',
        image: rs15_2s,
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '650 kg',
        dimensions: '1450 x 870 x 1220 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs15-2s-ff',
        model: 'RS15-2S-FF',
        powerKw: 15,
        powerHp: 20,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '2.85 m³/min',
        flowRateCfm: '100.6 CFM',
        image: rs15_2s,
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '650 kg',
        dimensions: '1450 x 870 x 1220 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs22-2s',
        model: 'RS22-2S',
        powerKw: 22,
        powerHp: 30,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '4.1 m³/min',
        flowRateCfm: '144.8 CFM',
        image: rs22_2s,
        noiseDb: '63 ± 2 dB(A)',
        weightKg: '680 kg',
        dimensions: '1450 x 970 x 1340 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs37-2s',
        model: 'RS37-2S',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '7.1 m³/min',
        flowRateCfm: '250.7 CFM',
        image: rs37_2s,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '980 kg',
        dimensions: '1560 x 970 x 1730 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs37-2s-ff',
        model: 'RS37-2S-FF',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '7.1 m³/min',
        flowRateCfm: '250.7 CFM',
        image: rs37_2s,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '980 kg',
        dimensions: '1560 x 970 x 1730 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs45-2s',
        model: 'RS45-2S',
        powerKw: 45,
        powerHp: 60,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '9.7 m³/min',
        flowRateCfm: '342.6 CFM',
        image: rs45_2s,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '1510 kg',
        dimensions: '2150 x 1140 x 1520 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs55-2s',
        model: 'RS55-2S',
        powerKw: 55,
        powerHp: 75,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '12.0 m³/min',
        flowRateCfm: '423.8 CFM',
        image: rs55_2s,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '1950 kg',
        dimensions: '2000 x 1360 x 1750 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs75-2s',
        model: 'RS75-2S',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '15.5 m³/min',
        flowRateCfm: '547.4 CFM',
        image: rs75_2s,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '2000 kg',
        dimensions: '1900 x 1550 x 1700 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs90-2s',
        model: 'RS90-2S',
        powerKw: 90,
        powerHp: 120,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '19.2 m³/min',
        flowRateCfm: '678.0 CFM',
        image: rs90_2s,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '2500 kg',
        dimensions: '2380 x 1750 x 1900 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs110-2s',
        model: 'RS110-2S',
        powerKw: 110,
        powerHp: 150,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '23.1 m³/min',
        flowRateCfm: '815.8 CFM',
        image: rs110_2s,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '2900 kg',
        dimensions: '2400 x 1850 x 1970 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs132-2s',
        model: 'RS132-2S',
        powerKw: 132,
        powerHp: 175,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '28.0 m³/min',
        flowRateCfm: '988.8 CFM',
        image: rs132_2s,
        noiseDb: '72 ± 2 dB(A)',
        weightKg: '4350 kg',
        dimensions: '2700 x 1900 x 2200 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs160-2s',
        model: 'RS160-2S',
        powerKw: 160,
        powerHp: 215,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '33.6 m³/min',
        flowRateCfm: '1186.6 CFM',
        image: rs160_2s,
        noiseDb: '72 ± 2 dB(A)',
        weightKg: '4600 kg',
        dimensions: '3050 x 1900 x 2430 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs200-2s',
        model: 'RS200-2S',
        powerKw: 200,
        powerHp: 270,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '43.0 m³/min',
        flowRateCfm: '1518.5 CFM',
        image: rs200_2s,
        noiseDb: '76 ± 2 dB(A)',
        weightKg: '6200 kg',
        dimensions: '3200 x 1900 x 2450 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs250-2s',
        model: 'RS250-2S',
        powerKw: 250,
        powerHp: 335,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '56.7 m³/min',
        flowRateCfm: '2002.3 CFM',
        image: rs250_2s,
        noiseDb: '80 ± 2 dB(A)',
        weightKg: '8000 kg',
        dimensions: '4000 x 2200 x 2400 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs315-2s',
        model: 'RS315-2S',
        powerKw: 315,
        powerHp: 420,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '70.9 m³/min',
        flowRateCfm: '2503.8 CFM',
        image: rs315_2s,
        noiseDb: '80 ± 2 dB(A)',
        weightKg: '9000 kg',
        dimensions: '4200 x 2200 x 2370 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs355-2s',
        model: 'RS355-2S',
        powerKw: 350,
        powerHp: 470,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '78.0 m³/min',
        flowRateCfm: '2754.5 CFM',
        image: rs315_2s,
        noiseDb: '82 ± 2 dB(A)',
        weightKg: '9500 kg',
        dimensions: '4200 x 2200 x 2370 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs550-2s',
        model: 'RS550-2S',
        powerKw: 550,
        powerHp: 740,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '108.0 m³/min',
        flowRateCfm: '3814.0 CFM',
        image: rs315_2s,
        noiseDb: '100 ± 2 dB(A)',
        weightKg: '12000 kg',
        dimensions: '6000 x 2380 x 2750 mm',
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
      'Dual-stage efficiency coupled with VSD technology. Modulates motor speed to track plant demand and reduce unloaded idling power consumption.',
    badge: 'Variable Speed Drive (VSD)',
    badgeColor: '#f97316',
    keyHighlights: [
      'Demand-Matched Speed Modulation',
      'Stable Line Pressure Control',
      'Zero Inrush Current Soft Start',
      'Direct Drive Integrated Shaft'
    ],
    specsList: [
      'Two-Stage Compression + Inverter Drive',
      'Variable Speed Frequency Modulation',
      'Direct Drive Integrated Shaft',
      'Colour Graphic Touch PLC Interface'
    ],
    applications: ['Fluctuating Air Demand Facilities', 'High Energy Cost Operations', 'Mining Processing', '24/7 Manufacturing'],
    defaultVariantIndex: 4, // RS75-2S-VSD
    variants: [
      {
        id: 'rs22-2s-vsd',
        model: 'RS22-2S-VSD',
        powerKw: 22,
        powerHp: 30,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '4.1 m³/min',
        flowRateCfm: '144.8 CFM',
        image: rs22_2s_vsd,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '530 kg',
        dimensions: '1450 x 970 x 1340 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs37-2s-vsd',
        model: 'RS37-2S-VSD',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '7.1 m³/min',
        flowRateCfm: '250.7 CFM',
        image: rs37_2s_vsd,
        noiseDb: '67 ± 2 dB(A)',
        weightKg: '920 kg',
        dimensions: '1560 x 970 x 1730 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs45-2s-vsd',
        model: 'RS45-2S-VSD',
        powerKw: 45,
        powerHp: 60,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '9.7 m³/min',
        flowRateCfm: '342.6 CFM',
        image: rs45_2s_vsd,
        noiseDb: '67 ± 2 dB(A)',
        weightKg: '1250 kg',
        dimensions: '2150 x 1140 x 1520 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs55-2s-vsd',
        model: 'RS55-2S-VSD',
        powerKw: 55,
        powerHp: 75,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '12.0 m³/min',
        flowRateCfm: '423.8 CFM',
        image: rs55_2s_vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '1300 kg',
        dimensions: '2000 x 1360 x 1750 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs75-2s-vsd',
        model: 'RS75-2S-VSD',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '15.5 m³/min',
        flowRateCfm: '547.4 CFM',
        image: rs75_2s_vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '2000 kg',
        dimensions: '1900 x 1550 x 1700 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs90-2s-vsd',
        model: 'RS90-2S-VSD',
        powerKw: 90,
        powerHp: 120,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '19.2 m³/min',
        flowRateCfm: '678.0 CFM',
        image: rs90_2s_vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '2400 kg',
        dimensions: '2380 x 1750 x 1900 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs110-2s-vsd',
        model: 'RS110-2S-VSD',
        powerKw: 110,
        powerHp: 150,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '23.1 m³/min',
        flowRateCfm: '815.8 CFM',
        image: rs110_2s_vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '3300 kg',
        dimensions: '2400 x 1850 x 1970 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs132-2s-vsd',
        model: 'RS132-2S-VSD',
        powerKw: 132,
        powerHp: 175,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '28.0 m³/min',
        flowRateCfm: '988.8 CFM',
        image: rs132_2s_vsd,
        noiseDb: '72 ± 2 dB(A)',
        weightKg: '4300 kg',
        dimensions: '2700 x 1900 x 2200 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs160-2s-vsd',
        model: 'RS160-2S-VSD',
        powerKw: 160,
        powerHp: 215,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '33.6 m³/min',
        flowRateCfm: '1186.6 CFM',
        image: rs160_2s_vsd,
        noiseDb: '72 ± 2 dB(A)',
        weightKg: '4500 kg',
        dimensions: '3050 x 1900 x 2430 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs200-2s-vsd',
        model: 'RS200-2S-VSD',
        powerKw: 200,
        powerHp: 270,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '43.0 m³/min',
        flowRateCfm: '1518.5 CFM',
        image: rs200_2s_vsd,
        noiseDb: '80 ± 2 dB(A)',
        weightKg: '6000 kg',
        dimensions: '3200 x 1900 x 2450 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs250-2s-vsd',
        model: 'RS250-2S-VSD',
        powerKw: 250,
        powerHp: 335,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '56.7 m³/min',
        flowRateCfm: '2002.3 CFM',
        image: rs250_2s_vsd,
        noiseDb: '80 ± 2 dB(A)',
        weightKg: '8000 kg',
        dimensions: '4000 x 2200 x 2400 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rs315-2s-vsd',
        model: 'RS315-2S-VSD',
        powerKw: 315,
        powerHp: 420,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '70.9 m³/min',
        flowRateCfm: '2503.8 CFM',
        image: rs250_2s_vsd, // placeholder — no RS315-2S-VSD image in assets yet
        noiseDb: '82 ± 2 dB(A)',
        weightKg: '9150 kg',
        dimensions: '4200 x 2200 x 2370 mm',
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
      'Direct-drive single-stage rotary screw compressors with VSD frequency conversion. Matches rotational speed exactly to factory air consumption to eliminate no-load power draw.',
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
      'Low Maintenance Direct Drive',
      'Microprocessor Diagnostic Interface',
      'Colour Graphic Touch PLC Controller'
    ],
    applications: ['Manufacturing Workshops', 'Packaging & Bottling', 'Joinery & Woodworking', 'Plastic Injection Moulding'],
    defaultVariantIndex: 0, // RS22VSD
    variants: [
      {
        id: 'rs7-5vsd-ff',
        model: 'RS7.5VSD-FF',
        powerKw: 7.5,
        powerHp: 10,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '1.1 m³/min',
        flowRateCfm: '38.8 CFM',
        image: rs75ff,
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '380 kg',
        dimensions: '1270 x 750 x 1650 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs11vsd-ff',
        model: 'RS11VSD-FF',
        powerKw: 11,
        powerHp: 15,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '1.7 m³/min',
        flowRateCfm: '60.0 CFM',
        image: rs11ff,
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '480 kg',
        dimensions: '1230 x 860 x 1600 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs15vsd-ff',
        model: 'RS15VSD-FF',
        powerKw: 15,
        powerHp: 20,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '2.6 m³/min',
        flowRateCfm: '91.8 CFM',
        image: rs15ff,
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '480 kg',
        dimensions: '1230 x 860 x 1600 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs22vsd',
        model: 'RS22 VSD',
        powerKw: 22,
        powerHp: 30,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '3.73 m³/min',
        flowRateCfm: '131.7 CFM',
        image: rs22vsd,
        noiseDb: '63 ± 2 dB(A)',
        weightKg: '450 kg',
        dimensions: '1210 x 1000 x 1470 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs37vsd',
        model: 'RS37 VSD',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '6.82 m³/min',
        flowRateCfm: '240.8 CFM',
        image: rs37vsd,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '700 kg',
        dimensions: '1350 x 1170 x 1480 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs45vsd',
        model: 'RS45 VSD',
        powerKw: 45,
        powerHp: 60,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '8.14 m³/min',
        flowRateCfm: '287.5 CFM',
        image: rs45vsd,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '890 kg',
        dimensions: '1600 x 1150 x 1530 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs55vsd',
        model: 'RS55 VSD',
        powerKw: 55,
        powerHp: 75,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '10.13 m³/min',
        flowRateCfm: '357.7 CFM',
        image: rs55vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '950 kg',
        dimensions: '1600 x 1150 x 1530 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs75vsd',
        model: 'RS75 VSD',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '13.4 m³/min',
        flowRateCfm: '473.2 CFM',
        image: rs75vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '1390 kg',
        dimensions: '2000 x 1360 x 1650 mm',
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
      'Compact Pre-Piped Footprint'
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
        flowRateM3: '1.1 m³/min',
        flowRateCfm: '38.8 CFM',
        image: rs75ff,
        tankSize: 'Integrated Air Receiver',
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '380 kg',
        dimensions: '1270 x 750 x 1650 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs11-vsd-ff',
        model: 'RS11 VSD FF',
        powerKw: 11,
        powerHp: 15,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '1.7 m³/min',
        flowRateCfm: '60.0 CFM',
        image: rs11ff,
        tankSize: 'Integrated Air Receiver',
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '480 kg',
        dimensions: '1230 x 860 x 1600 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs15-vsd-ff',
        model: 'RS15 VSD FF',
        powerKw: 15,
        powerHp: 20,
        pressureBar: '8 - 13 Bar',
        flowRateM3: '2.6 m³/min',
        flowRateCfm: '91.8 CFM',
        image: rs15ff,
        tankSize: 'Integrated Air Receiver',
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '480 kg',
        dimensions: '1230 x 860 x 1600 mm',
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
      'Rotary screw performance in a compact mobile workshop format. Mounted on an air receiver with castor wheels for workshop mobility and steady operational output.',
    badge: 'Workshop Rotary Screw',
    badgeColor: '#475569',
    keyHighlights: [
      'Rotary Screw Continuous Duty Design',
      'Enclosed Low-Noise Acoustic Housing',
      'Tank-Mounted with Heavy Castor Wheels',
      'Alternative to High-Wear Piston Compressors'
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
        id: 'rs3',
        model: 'RS3 Drill Rig',
        powerKw: 3,
        powerHp: 4,
        pressureBar: '8 Bar',
        flowRateM3: '0.42 m³/min',
        flowRateCfm: '14.8 CFM',
        image: rs3,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '110 kg',
        dimensions: '675 x 500 x 520 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'dz10',
        model: 'DZ10 Drill Rig',
        powerKw: 7.5,
        powerHp: 10,
        pressureBar: '8 Bar',
        flowRateM3: '1.1 m³/min',
        flowRateCfm: '38.8 CFM',
        image: dz10,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '110 kg',
        dimensions: '800 x 680 x 550 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'dz15',
        model: 'DZ15 Drill Rig',
        powerKw: 11,
        powerHp: 15,
        pressureBar: '8 Bar',
        flowRateM3: '1.7 m³/min',
        flowRateCfm: '60.0 CFM',
        image: dz10,
        noiseDb: '70 ± 2 dB(A)',
        weightKg: '190 kg',
        dimensions: '850 x 710 x 500 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'pc08-portable',
        model: 'PC08 Two Wheels',
        powerKw: 58,
        powerHp: 80,
        pressureBar: '8 Bar',
        flowRateM3: '8.0 m³/min',
        flowRateCfm: '282.5 CFM',
        image: dz10,
        noiseDb: '74 ± 2 dB(A)',
        weightKg: '1550 kg',
        dimensions: '3140 x 1740 x 1900 mm',
        cooling: 'High-Ambient Radiator System'
      },
      {
        id: 'pc12-portable',
        model: 'PC12 Four Wheels',
        powerKw: 110,
        powerHp: 150,
        pressureBar: '8 Bar',
        flowRateM3: '12.0 m³/min',
        flowRateCfm: '423.8 CFM',
        image: dz10,
        noiseDb: '75 ± 2 dB(A)',
        weightKg: '2480 kg',
        dimensions: '3120 x 1630 x 2290 mm',
        cooling: 'High-Ambient Radiator System'
      },
      {
        id: 'pc16-13-portable',
        model: 'PC16-13 Four Wheels',
        powerKw: 140,
        powerHp: 180,
        pressureBar: '13 Bar',
        flowRateM3: '16.0 m³/min',
        flowRateCfm: '565.0 CFM',
        image: dz10,
        noiseDb: '76 ± 2 dB(A)',
        weightKg: '2510 kg',
        dimensions: '3650 x 1700 x 2040 mm',
        cooling: 'High-Ambient Radiator System'
      },
      {
        id: 'pc20-8-portable',
        model: 'PC20-8 Four Wheels',
        powerKw: 179,
        powerHp: 240,
        pressureBar: '8 Bar',
        flowRateM3: '20.0 m³/min',
        flowRateCfm: '706.0 CFM',
        image: dz10,
        noiseDb: '76 ± 2 dB(A)',
        weightKg: '3800 kg',
        dimensions: '3720 x 1970 x 2250 mm',
        cooling: 'High-Ambient Radiator System'
      },
      {
        id: 'pc26-25-portable',
        model: 'PC26-25 Four Wheels',
        powerKw: 250,
        powerHp: 340,
        pressureBar: '25 Bar',
        flowRateM3: '26.0 m³/min',
        flowRateCfm: '918.0 CFM',
        image: dz10,
        noiseDb: '78 ± 2 dB(A)',
        weightKg: '5680 kg',
        dimensions: '4150 x 2000 x 2900 mm',
        cooling: 'Heavy-Duty Industrial Cooling'
      },
      {
        id: 'pc30-8-portable',
        model: 'PC30-8 Four Wheels',
        powerKw: 250,
        powerHp: 340,
        pressureBar: '8 Bar',
        flowRateM3: '30.0 m³/min',
        flowRateCfm: '1059.0 CFM',
        image: dz10,
        noiseDb: '78 ± 2 dB(A)',
        weightKg: '4800 kg',
        dimensions: '3810 x 2000 x 2900 mm',
        cooling: 'High-Ambient Radiator System'
      },
      {
        id: 'pc35-25-portable',
        model: 'PC35-25 Four Wheels',
        powerKw: 310,
        powerHp: 410,
        pressureBar: '25 Bar',
        flowRateM3: '35.0 m³/min',
        flowRateCfm: '1236.0 CFM',
        image: dz10,
        noiseDb: '80 ± 2 dB(A)',
        weightKg: '7780 kg',
        dimensions: '6150 x 2000 x 2900 mm',
        cooling: 'Heavy-Duty Industrial Cooling'
      },
      {
        id: 'pc40-8-portable',
        model: 'PC40-8 Four Wheels',
        powerKw: 295,
        powerHp: 380,
        pressureBar: '8 Bar',
        flowRateM3: '40.0 m³/min',
        flowRateCfm: '1412.0 CFM',
        image: dz10,
        noiseDb: '79 ± 2 dB(A)',
        weightKg: '4910 kg',
        dimensions: '4150 x 2000 x 2900 mm',
        cooling: 'High-Ambient Radiator System'
      }
    ]
  },

  // 7. OIL FREE CLASS 0 (RSVT 400 VSD)
  {
    id: 'oil-free-rsvt',
    name: 'BAOFN Oil-Free Rotary Screw Compressors',
    seriesCode: 'RSVT Series',
    category: 'Variable Speed (VSD)',
    categoryTags: ['Variable Speed (VSD)'],
    subtitle: 'Oil-Free Rotary Screw Air Compression',
    description:
      'Dry oil-free rotary screw compression paired with Variable Speed Drive technology. Built for processing applications requiring oil-free air delivery without lubricating oil in the compression chamber.',
    badge: 'Oil-Free Design',
    badgeColor: '#10b981',
    keyHighlights: [
      'Dry Screw Compression Chamber',
      'Anti-Corrosion Coated Rotors',
      'Direct Drive Inverter Speed Control',
      'Compatible with Sensitive Packaging Processes'
    ],
    specsList: [
      'Dual-Chamber Oil-Free Sealing System',
      'Stainless Steel Air Piping & Intercoolers',
      'Wide-Range Inverter Speed Control',
      'Advanced Touchscreen Health Monitoring'
    ],
    applications: ['Pharmaceutical Manufacturing', 'Food & Dairy Processing', 'Electronics & Semiconductor Cleanrooms', 'Hospital & Medical Air'],
    defaultVariantIndex: 5,
    variants: [
      {
        id: 'rsvt15',
        model: 'RSVT15',
        powerKw: 15,
        powerHp: 20,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '2.4 m³/min',
        flowRateCfm: '84.8 CFM',
        image: rsvt400vsd,
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '1030 kg',
        dimensions: '1450 x 870 x 1220 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt22',
        model: 'RSVT22',
        powerKw: 22,
        powerHp: 30,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '3.7 m³/min',
        flowRateCfm: '130.7 CFM',
        image: rsvt400vsd,
        noiseDb: '63 ± 2 dB(A)',
        weightKg: '1070 kg',
        dimensions: '1450 x 970 x 1340 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt30',
        model: 'RSVT30',
        powerKw: 30,
        powerHp: 40,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '4.8 m³/min',
        flowRateCfm: '169.5 CFM',
        image: rsvt400vsd,
        noiseDb: '63 ± 2 dB(A)',
        weightKg: '1300 kg',
        dimensions: '1560 x 970 x 1730 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt37',
        model: 'RSVT37',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '5.9 m³/min',
        flowRateCfm: '208.4 CFM',
        image: rsvt400vsd,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '1355 kg',
        dimensions: '1560 x 970 x 1730 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt45',
        model: 'RSVT45',
        powerKw: 45,
        powerHp: 60,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '6.5 m³/min',
        flowRateCfm: '229.5 CFM',
        image: rsvt400vsd,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '1390 kg',
        dimensions: '2150 x 1140 x 1520 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt55',
        model: 'RSVT55',
        powerKw: 55,
        powerHp: 75,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '8.5 m³/min',
        flowRateCfm: '300.2 CFM',
        image: rsvt400vsd,
        noiseDb: '65 ± 2 dB(A)',
        weightKg: '1860 kg',
        dimensions: '2000 x 1360 x 1750 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt75',
        model: 'RSVT75',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '12.0 m³/min',
        flowRateCfm: '423.8 CFM',
        image: rsvt400vsd,
        noiseDb: '66 ± 2 dB(A)',
        weightKg: '2000 kg',
        dimensions: '1900 x 1550 x 1700 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt90',
        model: 'RSVT90',
        powerKw: 90,
        powerHp: 120,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '15.0 m³/min',
        flowRateCfm: '529.7 CFM',
        image: rsvt400vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '2400 kg',
        dimensions: '2380 x 1750 x 1900 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt110',
        model: 'RSVT110',
        powerKw: 110,
        powerHp: 150,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '18.5 m³/min',
        flowRateCfm: '653.3 CFM',
        image: rsvt400vsd,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '3300 kg',
        dimensions: '2400 x 1850 x 1970 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt132',
        model: 'RSVT132',
        powerKw: 132,
        powerHp: 175,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '22.0 m³/min',
        flowRateCfm: '776.9 CFM',
        image: rsvt400vsd,
        noiseDb: '72 ± 2 dB(A)',
        weightKg: '4300 kg',
        dimensions: '2700 x 1900 x 2200 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt160',
        model: 'RSVT160',
        powerKw: 160,
        powerHp: 215,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '27.5 m³/min',
        flowRateCfm: '971.2 CFM',
        image: rsvt400vsd,
        noiseDb: '72 ± 2 dB(A)',
        weightKg: '4500 kg',
        dimensions: '3050 x 1900 x 2430 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rsvt200',
        model: 'RSVT200',
        powerKw: 200,
        powerHp: 270,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '34.0 m³/min',
        flowRateCfm: '1200.7 CFM',
        image: rsvt400vsd,
        noiseDb: '76 ± 2 dB(A)',
        weightKg: '6000 kg',
        dimensions: '3200 x 1900 x 2450 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rsvt250',
        model: 'RSVT250',
        powerKw: 250,
        powerHp: 335,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '43.5 m³/min',
        flowRateCfm: '1536.2 CFM',
        image: rsvt400vsd,
        noiseDb: '78 ± 2 dB(A)',
        weightKg: '8000 kg',
        dimensions: '4000 x 2200 x 2400 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rsvt315',
        model: 'RSVT315',
        powerKw: 315,
        powerHp: 420,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '54.0 m³/min',
        flowRateCfm: '1907.0 CFM',
        image: rsvt400vsd,
        noiseDb: '80 ± 2 dB(A)',
        weightKg: '9150 kg',
        dimensions: '4200 x 2200 x 2370 mm',
        cooling: 'Air-Cooled / Water-Cooled'
      },
      {
        id: 'rsvt400',
        model: 'RSVT400',
        powerKw: 400,
        powerHp: 536,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '67.5 m³/min',
        flowRateCfm: '2383.7 CFM',
        image: rsvt400vsd,
        noiseDb: '82 ± 2 dB(A)',
        weightKg: '7050 kg',
        dimensions: '4200 x 2200 x 2370 mm',
        cooling: 'Water-Cooled / Air-Cooled'
      },
      {
        id: 'rsvt500',
        model: 'RSVT500',
        powerKw: 500,
        powerHp: 670,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '85.0 m³/min',
        flowRateCfm: '3001.7 CFM',
        image: rsvt400vsd,
        noiseDb: '84 ± 2 dB(A)',
        weightKg: '10500 kg',
        dimensions: '5500 x 2300 x 2500 mm',
        cooling: 'Water-Cooled / Air-Cooled'
      },
      {
        id: 'rsvt630',
        model: 'RSVT630',
        powerKw: 630,
        powerHp: 845,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '105.0 m³/min',
        flowRateCfm: '3708.0 CFM',
        image: rsvt400vsd,
        noiseDb: '85 ± 2 dB(A)',
        weightKg: '12000 kg',
        dimensions: '6000 x 2400 x 2700 mm',
        cooling: 'Water-Cooled'
      },
      {
        id: 'rsvt750',
        model: 'RSVT750',
        powerKw: 750,
        powerHp: 1005,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '125.0 m³/min',
        flowRateCfm: '4414.3 CFM',
        image: rsvt400vsd,
        noiseDb: '86 ± 2 dB(A)',
        weightKg: '13500 kg',
        dimensions: '6500 x 2400 x 2700 mm',
        cooling: 'Water-Cooled'
      },
      {
        id: 'rsvt945',
        model: 'RSVT945',
        powerKw: 945,
        powerHp: 1267,
        pressureBar: '7 - 10 Bar',
        flowRateM3: '158.0 m³/min',
        flowRateCfm: '5579.7 CFM',
        image: rsvt400vsd,
        noiseDb: '88 ± 2 dB(A)',
        weightKg: '15000 kg',
        dimensions: '7000 x 2500 x 2800 mm',
        cooling: 'Water-Cooled'
      }
    ]
  },

  // 8. LOW-PRESSURE SCREW COMPRESSORS (RS-L SERIES)
  {
    id: 'low-pressure-compressors',
    name: 'BAOFN Low-Pressure Industrial Screw Compressors',
    seriesCode: 'RS-L Series',
    category: 'Two-Stage Rotary Screw',
    categoryTags: ['Two-Stage Rotary Screw'],
    subtitle: 'High Flow Low-Pressure Compression (3 – 5 Bar)',
    description:
      'Low-pressure rotary screw compressors specifically engineered for pneumatic conveying, wastewater aeration, glass production, and textile manufacturing where standard 8-bar compressors waste extensive energy.',
    badge: 'Low-Pressure High-CFM',
    badgeColor: '#059669',
    keyHighlights: [
      'Tailored 3 to 5 Bar Low-Pressure Discharge',
      'Massive Volumetric Flow Delivery',
      'Direct Coupled IE4 Motor & Airend',
      'Saves up to 30% Power vs Throttled 8-Bar Units'
    ],
    specsList: [
      'Discharge Pressure: 3 Bar / 5 Bar Optimized',
      'High-Displacement Rotary Screw Airend',
      'Oversized Oil-Air Separation Vessel',
      'Colour Graphic Intelligent PLC Controller'
    ],
    applications: ['Pneumatic Cement & Powder Conveying', 'Wastewater Aeration & Fermentation', 'Glass Bottle Moulding', 'Textile Blow-Off & Spinners'],
    defaultVariantIndex: 0,
    variants: [
      {
        id: 'rs22l3',
        model: 'RS22L3',
        powerKw: 22,
        powerHp: 30,
        pressureBar: '3 Bar',
        flowRateM3: '6.55 m³/min',
        flowRateCfm: '231.3 CFM',
        image: rs22_2s,
        noiseDb: '69 ± 2 dB(A)',
        dimensions: '1980 x 1200 x 1350 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs30l5',
        model: 'RS30L5',
        powerKw: 30,
        powerHp: 40,
        pressureBar: '5 Bar',
        flowRateM3: '6.55 m³/min',
        flowRateCfm: '231.3 CFM',
        image: rs37_2s,
        noiseDb: '69 ± 2 dB(A)',
        dimensions: '1680 x 1300 x 1350 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs37l3',
        model: 'RS37L3',
        powerKw: 37,
        powerHp: 50,
        pressureBar: '3 Bar',
        flowRateM3: '10.7 m³/min',
        flowRateCfm: '377.9 CFM',
        image: rs37_2s,
        noiseDb: '70 ± 2 dB(A)',
        dimensions: '2300 x 1400 x 1600 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs45l5',
        model: 'RS45L5',
        powerKw: 45,
        powerHp: 60,
        pressureBar: '5 Bar',
        flowRateM3: '10.7 m³/min',
        flowRateCfm: '377.9 CFM',
        image: rs45_2s,
        noiseDb: '70 ± 2 dB(A)',
        dimensions: '2200 x 1416 x 1700 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs55l3',
        model: 'RS55L3',
        powerKw: 55,
        powerHp: 75,
        pressureBar: '3 Bar',
        flowRateM3: '17.49 m³/min',
        flowRateCfm: '617.7 CFM',
        image: rs55_2s,
        noiseDb: '72 ± 2 dB(A)',
        dimensions: '2600 x 1650 x 1850 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs75l5',
        model: 'RS75L5',
        powerKw: 75,
        powerHp: 100,
        pressureBar: '5 Bar',
        flowRateM3: '17.49 m³/min',
        flowRateCfm: '617.7 CFM',
        image: rs75_2s,
        noiseDb: '72 ± 2 dB(A)',
        dimensions: '2560 x 1490 x 1820 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs110l5',
        model: 'RS110L5',
        powerKw: 110,
        powerHp: 150,
        pressureBar: '5 Bar',
        flowRateM3: '27.0 m³/min',
        flowRateCfm: '953.5 CFM',
        image: rs110_2s,
        noiseDb: '74 ± 2 dB(A)',
        dimensions: '2800 x 1800 x 2000 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs160l5',
        model: 'RS160L5',
        powerKw: 160,
        powerHp: 215,
        pressureBar: '5 Bar',
        flowRateM3: '39.5 m³/min',
        flowRateCfm: '1395.0 CFM',
        image: rs160_2s,
        noiseDb: '76 ± 2 dB(A)',
        dimensions: '3300 x 2000 x 2400 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs250l5',
        model: 'RS250L5',
        powerKw: 250,
        powerHp: 335,
        pressureBar: '5 Bar',
        flowRateM3: '63.5 m³/min',
        flowRateCfm: '2242.5 CFM',
        image: rs250_2s,
        noiseDb: '78 ± 2 dB(A)',
        dimensions: '4200 x 2200 x 2400 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'rs355l3',
        model: 'RS355L3',
        powerKw: 355,
        powerHp: 475,
        pressureBar: '3 Bar',
        flowRateM3: '96.0 m³/min',
        flowRateCfm: '3390.0 CFM',
        image: rs315_2s,
        noiseDb: '80 ± 2 dB(A)',
        dimensions: '4500 x 2300 x 2500 mm',
        cooling: 'Air-Cooled / Water-Cooled'
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
        id: 'ad2-15',
        model: 'AD2-15 Refrigerant Dryer',
        powerKw: 0.36,
        powerHp: 0.5,
        pressureBar: '16 Bar Max',
        flowRateM3: '1.5 m³/min',
        flowRateCfm: '53.0 CFM',
        image: airDryerImg,
        noiseDb: '55 ± 2 dB(A)',
        weightKg: '32 kg',
        dimensions: '550 x 370 x 800 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'ad2-35',
        model: 'AD2-35 Refrigerant Dryer',
        powerKw: 0.72,
        powerHp: 1.0,
        pressureBar: '16 Bar Max',
        flowRateM3: '3.5 m³/min',
        flowRateCfm: '123.6 CFM',
        image: airDryerImg,
        noiseDb: '58 ± 2 dB(A)',
        weightKg: '48 kg',
        dimensions: '650 x 420 x 860 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'ad2-60',
        model: 'AD2-60 Refrigerant Dryer',
        powerKw: 1.2,
        powerHp: 1.6,
        pressureBar: '16 Bar Max',
        flowRateM3: '6.0 m³/min',
        flowRateCfm: '211.9 CFM',
        image: airDryerImg,
        noiseDb: '60 ± 2 dB(A)',
        weightKg: '72 kg',
        dimensions: '750 x 500 x 980 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'ad2-115',
        model: 'AD2-115 Refrigerant Dryer',
        powerKw: 2.2,
        powerHp: 3.0,
        pressureBar: '16 Bar Max',
        flowRateM3: '11.5 m³/min',
        flowRateCfm: '406.1 CFM',
        image: airDryerImg,
        noiseDb: '62 ± 2 dB(A)',
        weightKg: '120 kg',
        dimensions: '950 x 600 x 1100 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'ad2-150',
        model: 'AD2-150 Refrigerant Dryer',
        powerKw: 2.8,
        powerHp: 3.8,
        pressureBar: '16 Bar Max',
        flowRateM3: '15.0 m³/min',
        flowRateCfm: '529.7 CFM',
        image: airDryerImg,
        noiseDb: '64 ± 2 dB(A)',
        weightKg: '150 kg',
        dimensions: '1050 x 650 x 1200 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'ad2s-250a',
        model: 'AD2S-250A Industrial Dryer',
        powerKw: 4.5,
        powerHp: 6.0,
        pressureBar: '16 Bar Max',
        flowRateM3: '25.0 m³/min',
        flowRateCfm: '882.9 CFM',
        image: airDryerImg,
        noiseDb: '66 ± 2 dB(A)',
        weightKg: '240 kg',
        dimensions: '1200 x 750 x 1400 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'ad2s-500a',
        model: 'AD2S-500A Industrial Dryer',
        powerKw: 8.5,
        powerHp: 11.5,
        pressureBar: '16 Bar Max',
        flowRateM3: '50.0 m³/min',
        flowRateCfm: '1765.7 CFM',
        image: airDryerImg,
        noiseDb: '68 ± 2 dB(A)',
        weightKg: '420 kg',
        dimensions: '1600 x 950 x 1700 mm',
        cooling: 'Air-Cooled'
      },
      {
        id: 'pe125',
        model: 'PE125 Desiccant Dryer (-40°C)',
        powerKw: 0.1,
        powerHp: 0.13,
        pressureBar: '10 Bar Max',
        flowRateM3: '12.5 m³/min',
        flowRateCfm: '441.4 CFM',
        image: airDryerImg,
        noiseDb: 'Silent (Purge Cycle)',
        weightKg: '420 kg',
        dimensions: 'Twin Tower Desiccant Vessel',
        cooling: 'Heatless Adsorption'
      },
      {
        id: 'pe200',
        model: 'PE200 Desiccant Dryer (-40°C)',
        powerKw: 0.1,
        powerHp: 0.13,
        pressureBar: '10 Bar Max',
        flowRateM3: '20.0 m³/min',
        flowRateCfm: '706.3 CFM',
        image: airDryerImg,
        noiseDb: 'Silent (Purge Cycle)',
        weightKg: '650 kg',
        dimensions: 'Twin Tower Desiccant Vessel',
        cooling: 'Heatless Adsorption'
      },
      {
        id: 'pe380',
        model: 'PE380 Desiccant Dryer (-40°C)',
        powerKw: 0.15,
        powerHp: 0.2,
        pressureBar: '10 Bar Max',
        flowRateM3: '38.0 m³/min',
        flowRateCfm: '1342.0 CFM',
        image: airDryerImg,
        noiseDb: 'Silent (Purge Cycle)',
        weightKg: '1100 kg',
        dimensions: 'Twin Tower Desiccant Vessel',
        cooling: 'Heatless Adsorption'
      },
      {
        id: 'pe760',
        model: 'PE760 Desiccant Dryer (-40°C)',
        powerKw: 0.2,
        powerHp: 0.27,
        pressureBar: '10 Bar Max',
        flowRateM3: '76.0 m³/min',
        flowRateCfm: '2683.9 CFM',
        image: airDryerImg,
        noiseDb: 'Silent (Purge Cycle)',
        weightKg: '1850 kg',
        dimensions: 'Twin Tower Desiccant Vessel',
        cooling: 'Heatless Adsorption'
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
