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
    id: 'falorni',
    name: 'FALORNI',
    logoUrl: 'https://logo.clearbit.com/falornitech.com?size=400',
    description: 'Glass melting technology and engineering services.',
    products: ['Furnace Engineering', 'Furnaces', 'Channels', 'Coloring Systems', 'Stirring Systems', 'Turnkey Projects', 'Spare Parts'],
    website: 'https://www.falornitech.com/',
  },
  {
    id: 'famor',
    name: 'FAMOR',
    logoUrl: 'https://logo.clearbit.com/famoreng.com?size=400',
    description: 'Engineering and manufacturing of equipment for glass production.',
    products: ['IS Machines', 'Rotary Machines (presses, H28, etc.)', 'Robots', 'Mechanisms for Presses and IS Machines', 'Spare Parts & Variable Equipment'],
    website: 'https://famoreng.com/',
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
    items: ['Furnaces', 'Tempering Furnaces', 'Mould Furnaces', 'Delivery Equipment Furnaces', 'Furnace Engineering', 'Turnkey Projects'],
  },
  {
    title: 'Feeding & Distribution',
    items: ['Channels', 'Coloring Systems', 'Stirring Systems', 'Surface Dosing Systems'],
  },
  {
    title: 'Moulds & Components',
    items: ['Blank Moulds', 'Moulds', 'Bottom Plates', 'Neck Rings', 'Other Accessories'],
  },
  {
    title: 'IS Process & Production',
    items: ['IS Machines', 'Rotary Machines (presses, H28, etc.)', 'Robots', 'Mechanisms for Presses and IS Machines', 'Spare Parts & Variable Equipment'],
  },
  {
    title: 'Refractories',
    items: ['Furnace Refractories', 'Feeder Refractories', 'W.E. Refractories', 'Regenerator Chamber Refractories', 'Consumable Refractories'],
  },
  {
    title: 'End of Line',
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
