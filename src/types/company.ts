export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  size: string;
  founded: number;
  description: string;
  website: string;
  logo: string;
}

export type ViewMode = 'table' | 'cards';

export type SortField = 'name' | 'size' | 'founded';
export type SortDirection = 'asc' | 'desc';
