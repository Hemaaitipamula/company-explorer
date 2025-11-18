import React, { createContext, useContext, useState, useMemo } from 'react';
import { Company, ViewMode, SortField, SortDirection } from '@/types/company';
import { mockCompanies } from '@/data/mockCompanies';

interface CompanyContextType {
  companies: Company[];
  filteredCompanies: Company[];
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  sortField: SortField;
  setSortField: (field: SortField) => void;
  sortDirection: SortDirection;
  setSortDirection: (direction: SortDirection) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
  totalPages: number;
  paginatedCompanies: Company[];
  isLoading: boolean;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const useCompanies = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanies must be used within CompanyProvider');
  }
  return context;
};

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companies] = useState<Company[]>(mockCompanies);
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [isLoading] = useState(false);

  const filteredCompanies = useMemo(() => {
    let filtered = [...companies];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(company =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Industry filter
    if (selectedIndustry) {
      filtered = filtered.filter(company => company.industry === selectedIndustry);
    }

    // Location filter
    if (selectedLocation) {
      filtered = filtered.filter(company => company.location === selectedLocation);
    }

    // Size filter
    if (selectedSize) {
      filtered = filtered.filter(company => company.size === selectedSize);
    }

    // Sorting
    filtered.sort((a, b) => {
      let aValue: string | number = a[sortField];
      let bValue: string | number = b[sortField];

      if (sortField === 'size') {
        const sizeOrder = ['100-500', '500-1000', '1000-5000', '5000+'];
        aValue = sizeOrder.indexOf(a.size);
        bValue = sizeOrder.indexOf(b.size);
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortDirection === 'asc' 
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    });

    return filtered;
  }, [companies, searchQuery, selectedIndustry, selectedLocation, selectedSize, sortField, sortDirection]);

  const totalPages = Math.ceil(filteredCompanies.length / pageSize);

  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredCompanies.slice(startIndex, endIndex);
  }, [filteredCompanies, currentPage, pageSize]);

  const value = {
    companies,
    filteredCompanies,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    selectedIndustry,
    setSelectedIndustry,
    selectedLocation,
    setSelectedLocation,
    selectedSize,
    setSelectedSize,
    sortField,
    setSortField,
    sortDirection,
    setSortDirection,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    paginatedCompanies,
    isLoading,
  };

  return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>;
};
