import { Brand, ServiceItem } from './types';

// Using Clearbit Logo API to fetch the actual brand logos based on their domains
// This ensures the logos are the official ones (SIGMA, PEREGO, etc.)

export const BRANDS: Brand[] = [
  {
    id: 'sigma',
    name: 'SIGMA',
    logoUrl: 'https://logo.clearbit.com/sigmaref.it?size=400', 
    description: 'Specialists in refractories and glass conditioning.',
    products: ['Tubes & Rings', 'Refractories', 'Channels', 'Spouts'],
    website: 'https://www.sigmaref.it/',
  },
  {
    id: 'perego',
    name: 'PEREGO',
    logoUrl: 'https://logo.clearbit.com/gperego.it?size=400',
    description: 'Precision mould manufacturing for glass industries.',
    products: ['Blank Moulds', 'Bottom Plates', 'Neck Rings', 'Blow Heads'],
    website: 'https://gperego.it/en/',
  },
  {
    id: 'antonini',
    name: 'ANTONINI',
    logoUrl: 'https://logo.clearbit.com/antoninisrl.com?size=400',
    description: 'World-class annealing and decorating lehrs.',
    products: ['Annealing Lehrs', 'Decorating Lehrs', 'Tempering', 'Burners'],
    website: 'https://antoninisrl.com/es/index',
  },
  {
    id: 'falorni',
    name: 'FALORNI',
    logoUrl: 'https://logo.clearbit.com/falornitech.com?size=400',
    description: 'Glass melting technology and engineering services.',
    products: ['Engineering', 'Feeders', 'Stirrers', 'Channels', 'Furnaces'],
    website: 'https://www.falornitech.com/',
  },
  {
    id: 'famor',
    name: 'FAMOR',
    logoUrl: 'https://logo.clearbit.com/famoreng.com?size=400',
    description: 'Engineering and equipment for hollow glass production.',
    products: ['IS Machines', 'Post Firing', 'Robots', 'Press Mechanisms'],
    website: 'https://famoreng.com/',
  },
  {
    id: 'oms',
    name: 'OMS',
    logoUrl: 'https://logo.clearbit.com/omsspa.com?size=400',
    description: 'End-of-line packaging solutions.',
    products: ['Strapping Machines', 'Wrapping Machines', 'Hooding'],
    website: 'https://omsspa.com/en',
  },
];

export const SOLUTION_AREAS: ServiceItem[] = [
  {
    title: 'Furnaces & Annealing',
    items: ['Annealing Lehrs', 'Decorating Lehrs', 'Burners', 'Tempering'],
  },
  {
    title: 'Moulds & Components',
    items: ['Moulds & Blanks', 'Neck Rings', 'Bottom Plates', 'Cavities'],
  },
  {
    title: 'Feeding & Distribution',
    items: ['Feeders', 'Stirrers', 'Channels', 'Forehearths'],
  },
  {
    title: 'IS Process & Production',
    items: ['IS Machines', 'Blowing & Pressing', 'Gob Formation', 'Post Firing'],
  },
  {
    title: 'Refractories & Contact',
    items: ['Refractories', 'Tubes', 'Spouts', 'Expendables'],
  },
  {
    title: 'End of Line',
    items: ['Strapping', 'Wrapping', 'Palletizing', 'Shrink Hooding'],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnostic',
    description: 'We analyze current plant requirements and production bottlenecks.',
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
