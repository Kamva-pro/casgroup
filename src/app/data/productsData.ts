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
  | 'Oil Free Compressors'
  | 'Oil Free Blowers'
  | 'Drill Rigs'
  | 'Portable Compressors'
  | 'Low Pressure Compressors'
  | 'High Pressure Compressors'
  | 'Air Receivers'
  | 'Desiccant Dryers'
  | 'Refrigerant Dryers'
  | 'Inline Filters'
  | 'Air Dryers & Treatment'
  | 'Drill Rigs & Workshop'
  | string;

export interface ProductModelVariant {
  id: string;
  model: string;
  powerKw?: number;
  powerHp?: number;
  pressureBar?: string;
  flowRateM3?: string;
  flowRateCfm?: string;
  flowRateNm3?: string;
  powerW?: number;
  dieselPower?: string;
  connection?: string;
  outlet?: string;
  gas?: string;
  type?: string;
  pressureDrop?: string;
  image: string;
  isPlaceholderImage?: boolean;
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
  // 1. TWO-STAGE FIXED SPEED SERIES (RS-2S) — 17 Models
  {
    id: 'two-stage-fixed-speed',
    name: 'Two Stage Fixed Speed Compressors',
    seriesCode: 'RS-2S Series',
    category: 'Two-Stage Rotary Screw',
    categoryTags: ['Two-Stage Rotary Screw'],
    subtitle: 'Screw Compressors · 15 kW to 550 kW',
    description:
      'Official BAOFN specifications for every two stage fixed speed compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    badge: 'Two-Stage Fixed Speed',
    badgeColor: '#dc2626',
    keyHighlights: [
      'Official BAOFN OEM specifications',
      'Motor range: 15 kW to 550 kW',
      'Outlets from G1 1/4 to DN150',
      'Backed by OEM warranty in South Africa'
    ],
    specsList: [
      'Motor: 15 kW to 550 kW',
      'Outlet: G1 1/4 to DN150',
      'Weight: 650 kg to 12,000 kg',
      'Dimensions: 1450x870x1220 to 6000x2380x2750 mm'
    ],
    applications: ['Need a Two Stage Fixed Speed Compressors sized for the duty? Tell us pressure, flow and hours. We will match a catalogue model and come back within one working day.'],
    defaultVariantIndex: 0,
    variants: [
      { id: 'rs15-2s',    model: 'RS15-2S',    powerKw: 15,  outlet: 'G1 1/4', weightKg: '650 kg',   dimensions: '1450x870x1220 mm', image: rs15_2s },
      { id: 'rs15-2s-ff', model: 'RS15-2S-FF', powerKw: 15,  outlet: 'G1 1/4', weightKg: '650 kg',   dimensions: '1450x870x1220 mm', image: rs15_2s },
      { id: 'rs22-2s',    model: 'RS22-2S',    powerKw: 22,  outlet: 'G1 1/2', weightKg: '680 kg',   dimensions: '1450x970x1340 mm', image: rs22_2s },
      { id: 'rs37-2s',    model: 'RS37-2S',    powerKw: 37,  outlet: 'G1 1/2', weightKg: '980 kg',   dimensions: '1560x970x1730 mm', image: rs37_2s },
      { id: 'rs37-2s-ff', model: 'RS37-2S-FF', powerKw: 37,  outlet: 'G1 1/2', weightKg: '980 kg',   dimensions: '1560x970x1730 mm', image: rs37_2s },
      { id: 'rs45-2s',    model: 'RS45-2S',    powerKw: 45,  outlet: 'G2',     weightKg: '1510 kg',  dimensions: '2150x1140x1520 mm', image: rs45_2s },
      { id: 'rs55-2s',    model: 'RS55-2S',    powerKw: 55,  outlet: 'G2 1/2', weightKg: '1950 kg',  dimensions: '2000x1360x1750 mm', image: rs55_2s },
      { id: 'rs75-2s',    model: 'RS75-2S',    powerKw: 75,  outlet: 'DN65',   weightKg: '2000 kg',  dimensions: '1900x1550x1700 mm', image: rs75_2s },
      { id: 'rs90-2s',    model: 'RS90-2S',    powerKw: 90,  outlet: 'DN80',   weightKg: '2500 kg',  dimensions: '2380x1750x1900 mm', image: rs90_2s },
      { id: 'rs110-2s',   model: 'RS110-2S',   powerKw: 110, outlet: 'DN100',  weightKg: '2900 kg',  dimensions: '2400x1850x1970 mm', image: rs110_2s },
      { id: 'rs132-2s',   model: 'RS132-2S',   powerKw: 132, outlet: 'DN100',  weightKg: '4350 kg',  dimensions: '2700x1900x2200 mm', image: rs132_2s },
      { id: 'rs160-2s',   model: 'RS160-2S',   powerKw: 160, outlet: 'DN100',  weightKg: '4600 kg',  dimensions: '3050x1900x2430 mm', image: rs160_2s },
      { id: 'rs200-2s',   model: 'RS200-2S',   powerKw: 200, outlet: 'DN125',  weightKg: '6200 kg',  dimensions: '3200x1900x2450 mm', image: rs200_2s },
      { id: 'rs250-2s',   model: 'RS250-2S',   powerKw: 250, outlet: 'DN125',  weightKg: '8000 kg',  dimensions: '4000x2200x2400 mm', image: rs250_2s },
      { id: 'rs315-2s',   model: 'RS315-2S',   powerKw: 315, outlet: 'DN125',  weightKg: '9000 kg',  dimensions: '4200x2200x2370 mm', image: rs315_2s },
      { id: 'rs355-2s',   model: 'RS355-2S',   powerKw: 350, outlet: 'DN125',  weightKg: '9500 kg',  dimensions: '4200x2200x2370 mm', image: '', isPlaceholderImage: true },
      { id: 'rs550-2s',   model: 'RS550-2S',   powerKw: 550, outlet: 'DN150',  weightKg: '12000 kg', dimensions: '6000x2380x2750 mm', image: '', isPlaceholderImage: true }
    ]
  },

  // 2. TWO-STAGE VARIABLE SPEED DRIVE (RS-2S-VSD) — 12 Models
  {
    id: 'two-stage-vsd',
    name: 'Two Stage VSD Compressors',
    seriesCode: 'RS-2S-VSD Series',
    category: 'Variable Speed (VSD)',
    categoryTags: ['Two-Stage Rotary Screw', 'Variable Speed (VSD)'],
    subtitle: 'Screw Compressors · 22 kW to 315 kW',
    description:
      'Official BAOFN specifications for every two stage vsd compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    badge: 'Two-Stage VSD',
    badgeColor: '#f97316',
    keyHighlights: [
      'Official BAOFN OEM specifications',
      'Motor range: 22 kW to 315 kW',
      'Outlets from G1 1/2 to DN125',
      'Backed by OEM warranty in South Africa'
    ],
    specsList: [
      'Motor: 22 kW to 315 kW',
      'Outlet: G1 1/2 to DN125',
      'Weight: 530 kg to 9,150 kg',
      'Dimensions: 1450x970x1340 to 4200x2200x2370 mm'
    ],
    applications: ['Need a Two Stage VSD Compressors sized for the duty? Tell us pressure, flow and hours. We will match a catalogue model and come back within one working day.'],
    defaultVariantIndex: 0,
    variants: [
      { id: 'rs22-2s-vsd',  model: 'RS22-2S-VSD',  powerKw: 22,  outlet: 'G1 1/2', weightKg: '530 kg',  dimensions: '1450x970x1340 mm', image: rs22_2s_vsd },
      { id: 'rs37-2s-vsd',  model: 'RS37-2S-VSD',  powerKw: 37,  outlet: 'G1 1/2', weightKg: '920 kg',  dimensions: '1560x970x1730 mm', image: rs37_2s_vsd },
      { id: 'rs45-2s-vsd',  model: 'RS45-2S-VSD',  powerKw: 45,  outlet: 'G2',     weightKg: '1250 kg', dimensions: '2150x1140x1520 mm', image: rs45_2s_vsd },
      { id: 'rs55-2s-vsd',  model: 'RS55-2S-VSD',  powerKw: 55,  outlet: 'G2 1/2', weightKg: '1300 kg', dimensions: '2000x1360x1750 mm', image: rs55_2s_vsd },
      { id: 'rs75-2s-vsd',  model: 'RS75-2S-VSD',  powerKw: 75,  outlet: 'DN65',   weightKg: '2000 kg', dimensions: '1900x1550x1700 mm', image: rs75_2s_vsd },
      { id: 'rs90-2s-vsd',  model: 'RS90-2S-VSD',  powerKw: 90,  outlet: 'DN80',   weightKg: '2400 kg', dimensions: '2380x1750x1900 mm', image: rs90_2s_vsd },
      { id: 'rs110-2s-vsd', model: 'RS110-2S-VSD', powerKw: 110, outlet: 'DN100',  weightKg: '3300 kg', dimensions: '2400x1850x1970 mm', image: rs110_2s_vsd },
      { id: 'rs132-2s-vsd', model: 'RS132-2S-VSD', powerKw: 132, outlet: 'DN100',  weightKg: '4300 kg', dimensions: '2700x1900x2200 mm', image: rs132_2s_vsd },
      { id: 'rs160-2s-vsd', model: 'RS160-2S-VSD', powerKw: 160, outlet: 'DN100',  weightKg: '4500 kg', dimensions: '3050x1900x2430 mm', image: rs160_2s_vsd },
      { id: 'rs200-2s-vsd', model: 'RS200-2S-VSD', powerKw: 200, outlet: 'DN125',  weightKg: '6000 kg', dimensions: '3200x1900x2450 mm', image: rs200_2s_vsd },
      { id: 'rs250-2s-vsd', model: 'RS250-2S-VSD', powerKw: 250, outlet: 'DN125',  weightKg: '8000 kg', dimensions: '4000x2200x2400 mm', image: rs250_2s_vsd },
      { id: 'rs315-2s-vsd', model: 'RS315-2S-VSD', powerKw: 315, outlet: 'DN125',  weightKg: '9150 kg', dimensions: '4200x2200x2370 mm', image: '', isPlaceholderImage: true }
    ]
  },

  // 3. SINGLE-STAGE VSD (RS-VSD) — 8 Models
  // 3. SINGLE-STAGE VSD (RS-VSD) — 8 Models
  {
    id: 'single-stage-vsd',
    name: 'Single Stage VSD Compressors',
    seriesCode: 'RS-VSD Series',
    category: 'Variable Speed (VSD)',
    categoryTags: ['Variable Speed (VSD)'],
    subtitle: 'Screw Compressors · 7.5 kW to 75 kW',
    description:
      'Official BAOFN specifications for every single stage vsd compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    badge: 'Single-Stage VSD',
    badgeColor: '#f97316',
    keyHighlights: [
      'Official BAOFN OEM specifications',
      'Motor range: 7.5 kW to 75 kW',
      'Outlets from G 3/4 to G2 1/2',
      'Backed by OEM warranty in South Africa'
    ],
    specsList: [
      'Motor: 7.5 kW to 75 kW',
      'Outlet: G 3/4 to G2 1/2',
      'Weight: 380 kg to 1,390 kg',
      'Dimensions: 1210x1000x1470 to 2000x1360x1650 mm'
    ],
    applications: ['Need a Single Stage VSD Compressors sized for the duty? Tell us pressure, flow and hours. We will match a catalogue model and come back within one working day.'],
    defaultVariantIndex: 3,
    variants: [
      { id: 'rs7-5vsd-ff', model: 'RS7.5VSD-FF', powerKw: 7.5, outlet: 'G 3/4',   weightKg: '380 kg',  dimensions: '1270x750x1650 mm', image: rs75ff },
      { id: 'rs11vsd-ff',  model: 'RS11VSD-FF',  powerKw: 11,  outlet: 'G 3/4',   weightKg: '480 kg',  dimensions: '1230x860x1600 mm', image: rs11ff },
      { id: 'rs15vsd-ff',  model: 'RS15VSD-FF',  powerKw: 15,  outlet: 'G 3/4',   weightKg: '480 kg',  dimensions: '1230x860x1600 mm', image: rs15ff },
      { id: 'rs22vsd',     model: 'RS22VSD',     powerKw: 22,  outlet: 'G1 1/4', weightKg: '450 kg',  dimensions: '1210x1000x1470 mm', image: rs22vsd },
      { id: 'rs37vsd',     model: 'RS37VSD',     powerKw: 37,  outlet: 'G1 1/2', weightKg: '700 kg',  dimensions: '1350x1170x1480 mm', image: rs37vsd },
      { id: 'rs45vsd',     model: 'RS45VSD',     powerKw: 45,  outlet: 'G2',     weightKg: '890 kg',  dimensions: '1600x1150x1530 mm', image: rs45vsd },
      { id: 'rs55vsd',     model: 'RS55VSD',     powerKw: 55,  outlet: 'G2',     weightKg: '950 kg',  dimensions: '1600x1150x1530 mm', image: rs55vsd },
      { id: 'rs75vsd',     model: 'RS75VSD',     powerKw: 75,  outlet: 'G2 1/2', weightKg: '1390 kg', dimensions: '2000x1360x1650 mm', image: rs75vsd }
    ]
  },

  // 4. OIL-FREE COMPRESSORS (RSVT SERIES) — 23 Models (Transcribed from Part 1)
  {
    id: 'oil-free-rsvt',
    name: 'Oil Free Compressors',
    seriesCode: 'RSVT Series',
    category: 'Oil Free Compressors',
    categoryTags: ['Oil Free Compressors'],
    subtitle: 'Oil Free · 15 kW to 945 kW',
    description:
      'Official BAOFN specifications for every oil free compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    badge: 'Oil Free',
    badgeColor: '#10b981',
    keyHighlights: [
      'Official BAOFN OEM specifications',
      'Motor range: 15 kW to 945 kW',
      'Outlets from G1 1/4 to DN150',
      'Backed by OEM warranty in South Africa'
    ],
    specsList: [
      'Motor: 15 kW to 945 kW',
      'Outlet: G1 1/4 to DN150',
      'Weight: 1,030 kg to 22,010 kg',
      'Dimensions: 1450x870x1220 to 6000x2380x2750 mm'
    ],
    applications: ['Need a Oil Free Compressors sized for the duty? Tell us pressure, flow and hours. We will match a catalogue model and come back within one working day.'],
    defaultVariantIndex: 17, // RSVT400
    variants: [
      { id: 'rsvt15', model: 'RSVT15', powerKw: 15, outlet: 'G1 1/4', weightKg: '1030 kg', dimensions: '1450x870x1220 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt22', model: 'RSVT22', powerKw: 22, outlet: 'G1 1/2', weightKg: '1070 kg', dimensions: '1450x970x1340 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt30', model: 'RSVT30', powerKw: 30, outlet: 'G1 1/2', weightKg: '1300 kg', dimensions: '1560x970x1730 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt37', model: 'RSVT37', powerKw: 37, outlet: 'G1 1/2', weightKg: '1355 kg', dimensions: '1560x970x1730 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt45', model: 'RSVT45', powerKw: 45, outlet: 'G2', weightKg: '1390 kg', dimensions: '2150x1140x1520 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt55', model: 'RSVT55', powerKw: 55, outlet: 'G2 1/2', weightKg: '1860 kg', dimensions: '2000x1360x1750 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt75', model: 'RSVT75', powerKw: 75, outlet: 'DN65', weightKg: '1935 kg', dimensions: '1900x1550x1700 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt90', model: 'RSVT90', powerKw: 90, outlet: 'DN80', weightKg: '2000 kg', dimensions: '2380x1750x1900 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt110', model: 'RSVT110', powerKw: 110, outlet: 'DN100', weightKg: '3660 kg', dimensions: '2400x1850x1970 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt132', model: 'RSVT132', powerKw: 132, outlet: 'DN100', weightKg: '3700 kg', dimensions: '2700x1900x2200 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt160', model: 'RSVT160', powerKw: 160, outlet: 'DN100', weightKg: '5300 kg', dimensions: '3050x1900x2430 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt185', model: 'RSVT185', powerKw: 185, outlet: 'DN100', weightKg: '5450 kg', dimensions: '3200x1900x2450 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt200', model: 'RSVT200', powerKw: 200, outlet: 'DN125', weightKg: '5600 kg', dimensions: '3200x1900x2450 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt250', model: 'RSVT250', powerKw: 250, outlet: 'DN125', weightKg: '5850 kg', dimensions: '4000x2200x2400 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt275', model: 'RSVT275', powerKw: 275, outlet: 'DN125', weightKg: '6100 kg', dimensions: '4000x2200x2400 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt315', model: 'RSVT315', powerKw: 315, outlet: 'DN125', weightKg: '6500 kg', dimensions: '4200x2200x2370 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt355', model: 'RSVT355', powerKw: 355, outlet: 'DN150', weightKg: '9050 kg', dimensions: '4200x2200x2370 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt400', model: 'RSVT400', powerKw: 400, outlet: 'DN150', weightKg: '7050 kg', dimensions: '4200x2200x2370 mm', image: rsvt400vsd, isPlaceholderImage: false },
      { id: 'rsvt450', model: 'RSVT450', powerKw: 450, outlet: 'DN150', weightKg: '8400 kg', dimensions: '4200x2200x2370 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt500', model: 'RSVT500', powerKw: 500, outlet: 'DN150', weightKg: '8400 kg', dimensions: '6000x2380x2750 mm', image: '', isPlaceholderImage: true },
      { id: 'rsvt630', model: 'RSVT630', powerKw: 630, weightKg: '9125 kg', image: '', isPlaceholderImage: true },
      { id: 'rsvt750', model: 'RSVT750', powerKw: 750, weightKg: '9225 kg', image: '', isPlaceholderImage: true },
      { id: 'rsvt945', model: 'RSVT945', powerKw: 945, weightKg: '22010 kg', image: '', isPlaceholderImage: true }
    ]
  },

  // 5. DRILL RIGS (3 Models — Official, Complete from Part 2a)
  {
    id: 'drill-rigs',
    name: 'BAOFN Drill Rigs',
    seriesCode: 'Drill Rig Series',
    category: 'Drill Rigs',
    categoryTags: ['Drill Rigs'],
    subtitle: 'Dedicated Blast Hole & Exploration Drill Rig Air Delivery',
    description:
      'Official BAOFN drill rig air units engineered for open-cast blast holes, geotechnical exploration, quarrying, and harsh outdoor mine environments.',
    badge: 'Drill Rigs',
    badgeColor: '#b45309',
    keyHighlights: [
      'Heavy-Duty Dust Filtration Pre-Cleaners',
      'Direct-Coupled Rotary Screw Air-End',
      'Compact Dimensions for Rig Deck Integration',
      'Built for Remote Extreme Ambient Climates'
    ],
    specsList: [
      'Discharge Pressure: 8 Bar Constant',
      'Standard 1/2 NPT Air Discharge Outlet',
      'High Capacity Oil-Air Cooling Radiator',
      'Emergency Stop & Safety Interlocks'
    ],
    applications: ['Open Cast Mining & Blasting', 'Water Well Drilling', 'Quarry Splitting', 'Geotechnical Exploration'],
    defaultVariantIndex: 1, // DZ10
    variants: [
      { id: 'rs3', model: 'RS3', powerKw: 3, pressureBar: '8 Bar', flowRateM3: '0.42 m³/min', outlet: '1/2 NPT', image: rs3, isPlaceholderImage: false },
      { id: 'dz10', model: 'DZ10', powerKw: 7.5, pressureBar: '8 Bar', flowRateM3: '1.1 m³/min', outlet: '1/2 NPT', image: dz10, isPlaceholderImage: false },
      { id: 'dz15', model: 'DZ15', powerKw: 11, pressureBar: '8 Bar', flowRateM3: '1.7 m³/min', outlet: '1/2 NPT', image: '', isPlaceholderImage: true }
    ]
  },

  // 6. PORTABLE COMPRESSORS (9 Models — Official, Complete from Part 2b)
  {
    id: 'portable-compressors',
    name: 'BAOFN Portable Diesel Compressors',
    seriesCode: 'PC Series',
    category: 'Portable Compressors',
    categoryTags: ['Portable Compressors'],
    subtitle: 'Mobile Wheeled Diesel Compressors for Field & Site Duty',
    description:
      'Heavy-duty diesel portable compressors with 2-wheel and 4-wheel towable chassis. Built for site work, mobile exploration drilling, sandblasting, and civil construction.',
    badge: 'Portable Diesel',
    badgeColor: '#b45309',
    keyHighlights: [
      'Heavy-Duty Diesel Engine Driven (58 – 310 kW)',
      'Towable 2-Wheel and 4-Wheel Heavy Chassis',
      'High-Pressure Discharge up to 25 Bar',
      'Integrated Heavy-Duty Dust Pre-Cleaners'
    ],
    specsList: [
      'Flow Rate Output: 8 to 40 m³/min',
      'Discharge Pressures: 8, 10, 13, and 25 Bar',
      'Heavy Heavy-Duty Protective Steel Canopy',
      'High-Ambient Radiator & Cooling System'
    ],
    applications: ['Civil Infrastructure & Roadworks', 'Remote Exploration Drilling', 'Quarry Sandblasting', 'Field Pipeline Testing'],
    defaultVariantIndex: 0, // PC08
    variants: [
      { id: 'pc08', model: 'PC08 Two Wheels', pressureBar: '8 Bar', flowRateM3: '8 m³/min', dieselPower: '58 (80)', weightKg: '1550 kg', image: '', isPlaceholderImage: true },
      { id: 'pc12', model: 'PC12 Four Wheels', pressureBar: '8 Bar', flowRateM3: '12 m³/min', dieselPower: '110 (150)', weightKg: '2480 kg', image: '', isPlaceholderImage: true },
      { id: 'pc12-10', model: 'PC12-10 Four Wheels', pressureBar: '10 Bar', flowRateM3: '12 m³/min', dieselPower: '110 (150)', weightKg: '2260 kg', image: '', isPlaceholderImage: true },
      { id: 'pc16-13', model: 'PC16-13 Four Wheels', pressureBar: '13 Bar', flowRateM3: '16 m³/min', dieselPower: '140 (180)', weightKg: '2510 kg', image: '', isPlaceholderImage: true },
      { id: 'pc20-8', model: 'PC20-8 Four Wheels', pressureBar: '8 Bar', flowRateM3: '20 m³/min', dieselPower: '179 (240)', weightKg: '3800 kg', image: '', isPlaceholderImage: true },
      { id: 'pc30-8', model: 'PC30-8 Four Wheels', pressureBar: '8 Bar', flowRateM3: '30 m³/min', dieselPower: '250 (340)', weightKg: '4800 kg', image: '', isPlaceholderImage: true },
      { id: 'pc40-8', model: 'PC40-8 Four Wheels', pressureBar: '8 Bar', flowRateM3: '40 m³/min', dieselPower: '295 (380)', weightKg: '4910 kg', image: '', isPlaceholderImage: true },
      { id: 'pc26-25', model: 'PC26-25 Four Wheels', pressureBar: '25 Bar', flowRateM3: '26 m³/min', dieselPower: '250 (340)', weightKg: '5680 kg', image: '', isPlaceholderImage: true },
      { id: 'pc35-25', model: 'PC35-25 Four Wheels', pressureBar: '25 Bar', flowRateM3: '35 m³/min', dieselPower: '310 (410)', weightKg: '7780 kg', image: '', isPlaceholderImage: true }
    ]
  },

  // 7. LOW PRESSURE COMPRESSORS (16 Models — Official from Part 5)
  {
    id: 'low-pressure-compressors',
    name: 'BAOFN Low Pressure Compressors',
    seriesCode: 'RS-L Series',
    category: 'Low Pressure Compressors',
    categoryTags: ['Low Pressure Compressors'],
    subtitle: 'High Flow Low-Pressure Compression (3 Bar / 5 Bar)',
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
      { id: 'rs22l3', model: 'RS22L3', powerKw: 22, pressureBar: '3 Bar', outlet: 'G2 1/2', dimensions: '1980x1200x1350 mm', image: '', isPlaceholderImage: true },
      { id: 'rs37l3', model: 'RS37L3', powerKw: 37, pressureBar: '3 Bar', outlet: 'G2 1/2', dimensions: '2300x1400x1600 mm', image: '', isPlaceholderImage: true },
      { id: 'rs55l3', model: 'RS55L3', powerKw: 55, pressureBar: '3 Bar', outlet: 'G2 1/2', dimensions: '2600x1650x1850 mm', image: '', isPlaceholderImage: true },
      { id: 'rs90l3', model: 'RS90L3', powerKw: 90, pressureBar: '3 Bar', outlet: 'DN100', dimensions: '2900x1750x2000 mm', image: '', isPlaceholderImage: true },
      { id: 'rs132l3', model: 'RS132L3', powerKw: 132, pressureBar: '3 Bar', outlet: 'DN125', dimensions: '3500x2050x2200 mm', image: '', isPlaceholderImage: true },
      { id: 'rsa160l3', model: 'RSA160L3', powerKw: 160, pressureBar: '3 Bar', outlet: 'DN125', dimensions: '3500x2050x2200 mm', image: '', isPlaceholderImage: true },
      { id: 'rs200l3', model: 'RS200L3', powerKw: 200, pressureBar: '3 Bar', outlet: 'DN125', dimensions: '4100x2250x2300 mm', image: '', isPlaceholderImage: true },
      { id: 'rs355l3', model: 'RS355L3', powerKw: 355, pressureBar: '3 Bar', outlet: 'DN125', dimensions: '4100x2250x2300 mm', image: '', isPlaceholderImage: true },
      { id: 'rs30l5', model: 'RS30L5', powerKw: 30, pressureBar: '5 Bar', outlet: 'G2 1/2', dimensions: '1680x1300x1350 mm', image: '', isPlaceholderImage: true },
      { id: 'rs45l5', model: 'RS45L5', powerKw: 45, pressureBar: '5 Bar', outlet: 'G2 1/2', dimensions: '2200x1416x1700 mm', image: '', isPlaceholderImage: true },
      { id: 'rs75l5', model: 'RS75L5', powerKw: 75, pressureBar: '5 Bar', outlet: 'DN80', dimensions: '2560x1490x1820 mm', image: '', isPlaceholderImage: true },
      { id: 'rs90l5', model: 'RS90L5', powerKw: 90, pressureBar: '5 Bar', outlet: 'DN100', dimensions: '3100x1650x2200 mm', image: '', isPlaceholderImage: true },
      { id: 'rs110l5', model: 'RS110L5', powerKw: 110, pressureBar: '5 Bar', outlet: 'DN125', dimensions: '3110x1690x2200 mm', image: '', isPlaceholderImage: true },
      { id: 'rs132l5', model: 'RS132L5', powerKw: 132, pressureBar: '5 Bar', outlet: 'DN125', dimensions: '3600x1750x2200 mm', image: '', isPlaceholderImage: true },
      { id: 'rs160l5', model: 'RS160L5', powerKw: 160, pressureBar: '5 Bar', outlet: 'DN125', dimensions: '3600x1750x2200 mm', image: '', isPlaceholderImage: true },
      { id: 'rs250l5', model: 'RS250L5', powerKw: 250, pressureBar: '5 Bar', outlet: 'DN125', dimensions: '4160x2150x2300 mm', image: '', isPlaceholderImage: true }
    ]
  },

  // 8. HIGH PRESSURE COMPRESSORS (10 Models — Official from Part 6)
  {
    id: 'high-pressure-compressors',
    name: 'BAOFN High Pressure Compressors',
    seriesCode: 'RM & RH Series',
    category: 'High Pressure Compressors',
    categoryTags: ['High Pressure Compressors'],
    subtitle: 'RM and RH machines for 17–40 bar duties',
    description:
      'High-pressure rotary screw compressors engineered for elevated discharge pressure duties including bottle blowing, hydro testing, exploration, and heavy industrial applications.',
    badge: 'High-Pressure 17–40 Bar',
    badgeColor: '#7c3aed',
    keyHighlights: [
      'Elevated Discharge Pressures from 17 to 40 Bar',
      'Heavy-Duty Two-Stage Compression Ratio',
      'Cast Iron Reinforced Pressure Components',
      'Robust Industrial Skid Packaging'
    ],
    specsList: [
      'Power Range: 90 kW to 250 kW',
      'Dual-Stage Reinforced Airend Structure',
      'High-Pressure Rated Oil Separation System',
      'Advanced Multi-Parameter Microprocessor PLC'
    ],
    applications: ['PET Bottle Blow Moulding', 'Industrial Pressure Testing', 'Gas Pipeline Purging', 'Mining Deep Blast Holes'],
    defaultVariantIndex: 0,
    variants: [
      { id: 'rm90-2s', model: 'RM90-2S', powerKw: 90, weightKg: '3000 kg', dimensions: '2500x1600x1900 mm', image: rs90_2s, isPlaceholderImage: true },
      { id: 'rm110-2s', model: 'RM110-2S', powerKw: 110, weightKg: '3200 kg', dimensions: '2500x1600x1900 mm', image: rs110_2s, isPlaceholderImage: true },
      { id: 'rm132-2s', model: 'RM132-2S', powerKw: 132, weightKg: '3400 kg', dimensions: '2500x1600x1900 mm', image: rs132_2s, isPlaceholderImage: true },
      { id: 'rm160-2s', model: 'RM160-2S', powerKw: 160, weightKg: '3600 kg', dimensions: '2500x1700x2050 mm', image: rs160_2s, isPlaceholderImage: true },
      { id: 'rm185-2s', model: 'RM185-2S', powerKw: 185, weightKg: '3800 kg', dimensions: '2500x1700x2050 mm', image: rs160_2s, isPlaceholderImage: true },
      { id: 'rh110-2s', model: 'RH110-2S', powerKw: 110, weightKg: '4500 kg', dimensions: '3650x1950x2060 mm', image: rs110_2s, isPlaceholderImage: true },
      { id: 'rh132-2s', model: 'RH132-2S', powerKw: 132, weightKg: '4600 kg', dimensions: '3650x1950x2060 mm', image: rs132_2s, isPlaceholderImage: true },
      { id: 'rh160-2s', model: 'RH160-2S', powerKw: 160, weightKg: '4900 kg', dimensions: '4050x2250x2160 mm', image: rs160_2s, isPlaceholderImage: true },
      { id: 'rh200-2s', model: 'RH200-2S', powerKw: 200, weightKg: '5100 kg', dimensions: '4050x2250x2160 mm', image: rs200_2s, isPlaceholderImage: true },
      { id: 'rh250-2s', model: 'RH250-2S', powerKw: 250, weightKg: '5300 kg', dimensions: '4050x2250x2160 mm', image: rs250_2s, isPlaceholderImage: true }
    ]
  },

  // 9. OIL FREE BLOWERS (3 Models Only — Official from Part 7)
  {
    id: 'oil-free-blowers',
    name: 'BAOFN Oil Free Blowers',
    seriesCode: 'BF Series',
    category: 'Oil Free Blowers',
    categoryTags: ['Oil Free Blowers'],
    subtitle: 'Oil-free blowers for 0.5–1.5 bar aeration and conveying',
    description:
      'High-efficiency screw blowers providing 100% oil-free low-pressure air for water treatment aeration, pneumatic bulk powder transport, and flotation tanks.',
    badge: 'Oil-Free Blower',
    badgeColor: '#0d9488',
    keyHighlights: [
      '100% Oil-Free Compression Rotor Chamber',
      'Optimised for 0.5 to 1.5 Bar Discharge',
      'Energy-Efficient vs Traditional Roots Blowers',
      'Low Operating Noise and Pulsation'
    ],
    specsList: [
      'Power Ratings: 55 kW, 132 kW, 200 kW',
      'Large Discharge Connections: DN200 to DN300',
      'Direct Drive Integrated Motor-Shaft',
      'Heavy-Duty Acoustic Sound Enclosure'
    ],
    applications: ['Wastewater Aeration Plants', 'Flotation Cells in Mining', 'Pneumatic Powder Transfer', 'Aquaculture Oxygenation'],
    defaultVariantIndex: 0,
    variants: [
      { id: 'bf-1', model: 'BF-1', powerKw: 55, outlet: 'DN200', image: rsvt400vsd, isPlaceholderImage: true },
      { id: 'bf-2', model: 'BF-2', powerKw: 132, outlet: 'DN250', image: rsvt400vsd, isPlaceholderImage: true },
      { id: 'bf-03', model: 'BF-03', powerKw: 200, outlet: 'DN300', image: rsvt400vsd, isPlaceholderImage: true }
    ]
  },

  // 10. DESICCANT DRYERS (16 Models — Official from Part 3)
  {
    id: 'desiccant-dryers',
    name: 'BAOFN Desiccant Air Dryers',
    seriesCode: 'PE Series',
    category: 'Desiccant Dryers',
    categoryTags: ['Desiccant Dryers', 'Air Dryers & Treatment'],
    subtitle: 'Twin-Tower Heatless Desiccant Dryers (-40°C Dew Point)',
    description:
      'Twin-tower heatless adsorption desiccant air dryers engineered for critical applications requiring ultra-dry compressed air with pressure dew points down to -40°C.',
    badge: '-40°C Pressure Dew Point',
    badgeColor: '#0284c7',
    keyHighlights: [
      'Guaranteed -40°C Pressure Dew Point',
      'High-Performance Activated Alumina Desiccant',
      'Twin-Tower Continuous Regeneration Cycle',
      'Heavy-Duty Pneumatic Switching Valves'
    ],
    specsList: [
      'Capacities from 3.6 to 207 m³/min Flow',
      'Flanged Connections: DN25 to DN200',
      'Electronic Cycle Controller Interface',
      'Integrated Tower Pressure Gauges'
    ],
    applications: ['Pharmaceutical & Cleanroom Plants', 'Electronics & Chip Assembly', 'Automotive Spray Paint Lines', 'Outdoor Freezing Ambient Lines'],
    defaultVariantIndex: 0,
    variants: [
      { id: 'pe125', model: 'PE125', flowRateM3: '3.6 m³/min', connection: 'DN25', powerKw: 2, weightKg: '379 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe200', model: 'PE200', flowRateM3: '5.4 m³/min', connection: 'DN40', powerKw: 3, weightKg: '485 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe275', model: 'PE275', flowRateM3: '7.8 m³/min', connection: 'DN40', powerKw: 4, weightKg: '523 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe380', model: 'PE380', flowRateM3: '10.8 m³/min', connection: 'DN40', powerKw: 5, weightKg: '650 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe465', model: 'PE465', flowRateM3: '13.2 m³/min', connection: 'DN40', powerKw: 6, weightKg: '748 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe635', model: 'PE635', flowRateM3: '18 m³/min', connection: 'DN50', powerKw: 8, weightKg: '855 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe760', model: 'PE760', flowRateM3: '21.6 m³/min', connection: 'DN80', powerKw: 12, weightKg: '1130 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe1020', model: 'PE1020', flowRateM3: '28.8 m³/min', connection: 'DN80', powerKw: 12, weightKg: '1130 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe1330', model: 'PE1330', flowRateM3: '37.8 m³/min', connection: 'DN80', powerKw: 16, weightKg: '1410 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe1690', model: 'PE1690', flowRateM3: '48 m³/min', connection: 'DN100', powerKw: 21, weightKg: '2280 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe2060', model: 'PE2060', flowRateM3: '58.2 m³/min', connection: 'DN100', powerKw: 27, weightKg: '2280 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe2670', model: 'PE2670', flowRateM3: '75.6 m³/min', connection: 'DN100', powerKw: 36, weightKg: '2750 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe3390', model: 'PE3390', flowRateM3: '96 m³/min', connection: 'DN150', powerKw: 42, weightKg: '3560 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe4400', model: 'PE4400', flowRateM3: '124.2 m³/min', connection: 'DN150', powerKw: 52, weightKg: '4700 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe5360', model: 'PE5360', flowRateM3: '151.8 m³/min', connection: 'DN150', powerKw: 69, weightKg: '5650 kg', image: airDryerImg, isPlaceholderImage: true },
      { id: 'pe7300', model: 'PE7300', flowRateM3: '207 m³/min', connection: 'DN200', powerKw: 90, weightKg: '7700 kg', image: airDryerImg, isPlaceholderImage: true }
    ]
  },

  // 11. REFRIGERANT DRYERS (18 Models — Official from Part 4)
  {
    id: 'refrigerant-dryers',
    name: 'BAOFN Refrigerant Air Dryers',
    seriesCode: 'AD2 & AD2S Series',
    category: 'Refrigerant Dryers',
    categoryTags: ['Refrigerant Dryers', 'Air Dryers & Treatment'],
    subtitle: 'Industrial Refrigerated Compressed Air Dryers (1.5 – 100 Nm³/min)',
    description:
      'High-efficiency refrigerated air dryers designed to eliminate moisture condensation in plant piping, protect pneumatic tools, and maintain air quality down to +3°C pressure dew point.',
    badge: 'Refrigerated Drying',
    badgeColor: '#0284c7',
    keyHighlights: [
      'Pressure Dewpoint of +3°C to +5°C',
      'Low Pressure Drop Aluminum Heat Exchanger',
      'Eco-Friendly R134a / R410A / R407C Refrigerant',
      'Automatic Timed / Electronic Condensate Drain'
    ],
    specsList: [
      'Flow Capacities: 1.5 to 100 Nm³/min',
      'Power Consumption: 360 W to 14.4 kW',
      'Thread & Flange Connections: G3/4" to DN150',
      'Digital Dewpoint Display Controller'
    ],
    applications: ['General Industrial Manufacturing', 'Pneumatic Control Systems', 'Commercial Spray Painting', 'Packaging Automation'],
    defaultVariantIndex: 0,
    variants: [
      { id: 'ad2-15', model: 'AD2-15', flowRateNm3: '1.5 Nm³/min', powerW: 360, connection: 'G3/4"', gas: 'R134a', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-21', model: 'AD2-21', flowRateNm3: '2.1 Nm³/min', powerW: 364, connection: 'G3/4"', gas: 'R134a', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-35', model: 'AD2-35', flowRateNm3: '3.5 Nm³/min', powerW: 951, connection: 'G1.5"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-45', model: 'AD2-45', flowRateNm3: '4.5 Nm³/min', powerW: 988, connection: 'G1.5"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-60', model: 'AD2-60', flowRateNm3: '6 Nm³/min', powerW: 1000, connection: 'G2"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-75', model: 'AD2-75', flowRateNm3: '7.5 Nm³/min', powerW: 1125, connection: 'G2"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-90', model: 'AD2-90', flowRateNm3: '9 Nm³/min', powerW: 1674, connection: 'G2"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-115', model: 'AD2-115', flowRateNm3: '11.5 Nm³/min', powerW: 1700, connection: 'G2.5"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-150', model: 'AD2-150', flowRateNm3: '15 Nm³/min', powerW: 1900, connection: 'G2.5"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-175', model: 'AD2-175', flowRateNm3: '17.5 Nm³/min', powerW: 2220, connection: 'G2.5"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2-225', model: 'AD2-225', flowRateNm3: '22.5 Nm³/min', powerW: 2610, connection: 'G2.5"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2s-250a', model: 'AD2S-250A', flowRateNm3: '25 Nm³/min', powerW: 2950, connection: 'G2.5"', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2s-350a', model: 'AD2S-350A', flowRateNm3: '35 Nm³/min', powerW: 4600, connection: 'DN100', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2s-450a', model: 'AD2S-450A', flowRateNm3: '45 Nm³/min', powerW: 4200, connection: 'DN100', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2s-500a', model: 'AD2S-500A', flowRateNm3: '50 Nm³/min', powerW: 5433, connection: 'DN100', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2s-600a', model: 'AD2S-600A', flowRateNm3: '60 Nm³/min', powerW: 7871, connection: 'DN150', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2s-750a', model: 'AD2S-750A', flowRateNm3: '75 Nm³/min', powerW: 8769, connection: 'DN150', gas: 'R410A', image: airDryerImg, isPlaceholderImage: false },
      { id: 'ad2s-1000a', model: 'AD2S-1000A', flowRateNm3: '100 Nm³/min', powerW: 14398, connection: 'DN150', gas: 'R407C', image: airDryerImg, isPlaceholderImage: false }
    ]
  },

  // 12. INLINE FILTERS (18 Real PRIMAK Models — Official from Part 8)
  {
    id: 'inline-filters',
    name: 'BAOFN PRIMAK Inline Filters',
    seriesCode: 'PF & W Series',
    category: 'Inline Filters',
    categoryTags: ['Inline Filters', 'Air Dryers & Treatment'],
    subtitle: 'Particulate, coalescing and water-separation stages ahead of dryers and sensitive equipment',
    description:
      'High-efficiency inline threaded and flanged filtration elements designed to remove particulates, water droplets, oil aerosols, and hydrocarbon vapours from industrial air pipelines.',
    badge: 'Coalescing & Particulate',
    badgeColor: '#0284c7',
    keyHighlights: [
      'Low Differential Pressure Drop (85–120 / 85–140 mbar)',
      'Threaded Port Sizes: 3/4" to 3"',
      'Flanged Port Sizes: 3" (DN80) to 8" (DN200)',
      'Extends Life of Desiccant & Refrigerant Dryers'
    ],
    specsList: [
      'Flow Rate Range: 0.9 to 216 m³/min',
      'Thread Filters: PRIMAK PF9 to PF490',
      'Flange Filters: PRIMAK W420 to W2380',
      'Die-Cast Aluminium & Welded Carbon Steel Housings'
    ],
    applications: ['Prefiltration for Desiccant Dryers', 'Food Packaging Lines', 'Automotive Spray Booths', 'High-Purity Instrument Air'],
    defaultVariantIndex: 0,
    variants: [
      { id: 'pf9', model: 'PRIMAK PF9', type: 'Thread Filter', flowRateM3: '0.9 m³/min', connection: '3/4"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf18', model: 'PRIMAK PF18', type: 'Thread Filter', flowRateM3: '1.8 m³/min', connection: '3/4"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf25', model: 'PRIMAK PF25', type: 'Thread Filter', flowRateM3: '2.5 m³/min', connection: '3/4"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf35', model: 'PRIMAK PF35', type: 'Thread Filter', flowRateM3: '3.5 m³/min', connection: '1"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf60', model: 'PRIMAK PF60', type: 'Thread Filter', flowRateM3: '6 m³/min', connection: '1½"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf105', model: 'PRIMAK PF105', type: 'Thread Filter', flowRateM3: '10.5 m³/min', connection: '2"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf140', model: 'PRIMAK PF140', type: 'Thread Filter', flowRateM3: '14 m³/min', connection: '2"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf175', model: 'PRIMAK PF175', type: 'Thread Filter', flowRateM3: '17.5 m³/min', connection: '2"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf260', model: 'PRIMAK PF260', type: 'Thread Filter', flowRateM3: '26 m³/min', connection: '2½"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf380', model: 'PRIMAK PF380', type: 'Thread Filter', flowRateM3: '38 m³/min', connection: '3"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'pf490', model: 'PRIMAK PF490', type: 'Thread Filter', flowRateM3: '49 m³/min', connection: '3"', pressureDrop: '85-120 mbar', image: inlineFiltersImg, isPlaceholderImage: false },
      { id: 'w420', model: 'PRIMAK W420', type: 'Flange Filter', flowRateM3: '37.8 m³/min', connection: '3" (DN80)', pressureDrop: '85-140 mbar', image: inlineFiltersImg, isPlaceholderImage: true },
      { id: 'w640', model: 'PRIMAK W640', type: 'Flange Filter', flowRateM3: '58.2 m³/min', connection: '4" (DN100)', pressureDrop: '85-140 mbar', image: inlineFiltersImg, isPlaceholderImage: true },
      { id: 'w830', model: 'PRIMAK W830', type: 'Flange Filter', flowRateM3: '75.6 m³/min', connection: '4" (DN100)', pressureDrop: '85-140 mbar', image: inlineFiltersImg, isPlaceholderImage: true },
      { id: 'w1060', model: 'PRIMAK W1060', type: 'Flange Filter', flowRateM3: '96 m³/min', connection: '6" (DN150)', pressureDrop: '85-140 mbar', image: inlineFiltersImg, isPlaceholderImage: true },
      { id: 'w1450', model: 'PRIMAK W1450', type: 'Flange Filter', flowRateM3: '132 m³/min', connection: '6" (DN150)', pressureDrop: '85-140 mbar', image: inlineFiltersImg, isPlaceholderImage: true },
      { id: 'w1580', model: 'PRIMAK W1580', type: 'Flange Filter', flowRateM3: '144 m³/min', connection: '6" (DN150)', image: inlineFiltersImg, isPlaceholderImage: true },
      { id: 'w2380', model: 'PRIMAK W2380', type: 'Flange Filter', flowRateM3: '216 m³/min', connection: '8" (DN200)', image: inlineFiltersImg, isPlaceholderImage: true }
    ]
  },

  // 13. WORKSHOP & COMPACT (SM 3HP) — 1 Model
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

  // 14. CERTIFIED AIR RECEIVERS & PRESSURE VESSELS — 3 Models
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
  outlet?: string;
  weightKg?: string;
  dimensions?: string;
  pressureBar: string;
  flowRateM3: string;
  flowRateCfm: string;
  tankSize?: string;
  cooling?: string;
  noiseDb?: string;
  image: string;
  badge: string;
  badgeColor: string;
  isPlaceholderImage?: boolean;
}

export const ALL_MODELS_FLAT: FlatModelRow[] = PRODUCT_FAMILIES.flatMap((fam) =>
  fam.variants.map((v) => ({
    modelId: v.id,
    familyId: fam.id,
    familyName: fam.name,
    seriesCode: fam.seriesCode,
    category: fam.category,
    model: v.model,
    powerKw: v.powerKw ?? 0,
    powerHp: v.powerHp ?? 0,
    outlet: v.outlet,
    weightKg: v.weightKg,
    dimensions: v.dimensions,
    pressureBar: v.pressureBar ?? '',
    flowRateM3: v.flowRateM3 ?? (v.flowRateNm3 ? `${v.flowRateNm3}` : ''),
    flowRateCfm: v.flowRateCfm ?? '',
    tankSize: v.tankSize,
    cooling: v.cooling,
    noiseDb: v.noiseDb,
    image: v.image || fam.variants[0]?.image || '',
    badge: fam.badge,
    badgeColor: fam.badgeColor,
    isPlaceholderImage: v.isPlaceholderImage ?? false
  }))
);
