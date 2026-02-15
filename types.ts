export interface Brand {
  id: string;
  name: string;
  logoUrl: string; // Placeholder for the actual logo image
  description: string;
  products: string[];
  website: string;
}

export interface ServiceItem {
  title: string;
  items: string[];
}

export interface Location {
  country: string;
  coords: { x: number; y: number }; // For abstract map placement
}
