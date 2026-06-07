import { Brand, ServiceItem } from './types';

// Using Clearbit Logo API to fetch the actual brand logos based on their domains
// This ensures the logos are the official ones (SIGMA, PEREGO, etc.)

export const BRANDS: Brand[] = [
  {
    id: 'sigma',
    name: 'SIGMA',
    logoUrl: 'https://logo.clearbit.com/sigmaref.it?size=400',
    description: 'Specialists in refractories and glass conditioning.',
    products: ['Furnace Refractories', 'Feeder Refractories', 'W.E. Refractories', 'Regenerator Chamber Refractories', 'Consumable Refractories'],
    website: 'https://www.sigmaref.it/',
  },
  {
    id: 'perego',
    name: 'Giancarlo Perego',
    logoUrl: 'https://logo.clearbit.com/gperego.it?size=400',
    description: 'Precision mould manufacturing for glass industries.',
    products: ['Blank Moulds', 'Moulds', 'Bottom Plates', 'Neck Rings', 'Other Accessories'],
    website: 'https://gperego.it/en/',
  },
  {
    id: 'antonini',
    name: 'ANTONINI',
    logoUrl: 'https://logo.clearbit.com/antoninisrl.com?size=400',
    description: 'World-class annealing and decorating lehrs.',
    products: ['Furnaces', 'Tempering Furnaces', 'Surface Dosing Systems', 'Mould Furnaces', 'Delivery Equipment Furnaces', 'Spare Parts'],
    website: 'https://antoninisrl.com/es/index',
  },
  {
    id: 'oms',
    name: 'OMS',
    logoUrl: 'https://logo.clearbit.com/omsspa.com?size=400',
    description: 'End-of-line packaging solutions.',
    products: ['Strapping Machines', 'Shrink Wrapping Machines', 'Wrapping Machines', 'Hooding Machines', 'Spare Parts'],
    website: 'https://omsspa.com/en',
  },
];

export const SOLUTION_AREAS: ServiceItem[] = [
  {
    title: 'Furnaces & Melting',
    brand: 'ANTONINI',
    items: ['Furnaces', 'Tempering Furnaces', 'Mould Furnaces', 'Delivery Equipment Furnaces', 'Furnace Engineering', 'Turnkey Projects'],
  },
  {
    title: 'Moulds & Components',
    brand: 'PEREGO',
    items: ['Blank Moulds', 'Moulds', 'Bottom Plates', 'Neck Rings', 'Other Accessories'],
  },
  {
    title: 'Refractories',
    brand: 'SIGMA',
    items: ['Furnace Refractories', 'Feeder Refractories', 'W.E. Refractories', 'Regenerator Chamber Refractories', 'Consumable Refractories'],
  },
  {
    title: 'End of Line',
    brand: 'OMS',
    items: ['Strapping Machines', 'Shrink Wrapping Machines', 'Wrapping Machines', 'Hooding Machines', 'Spare Parts'],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnostic',
    description: 'We analyze current plant requirements to provide support for each need.',
  },
  {
    step: '02',
    title: 'Engineering',
    description: 'Selection of optimal equipment and technical solution design.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Coordination of logistics, installation, and commissioning.',
  },
  {
    step: '04',
    title: 'Support',
    description: 'After-sales service, spare parts management, and technical assistance.',
  },
];
