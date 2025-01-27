export interface NavLink {
  path: string;
  label: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface LocalAttraction {
  name: string;
  category: 'restaurant' | 'historical' | 'outdoor' | 'winery';
  description: string;
  image: string;
  link?: string;
  distance: string;
}