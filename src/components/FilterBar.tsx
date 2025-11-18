import { Search, SlidersHorizontal, LayoutGrid, Table } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { industries, locations, companySizes } from '@/data/mockCompanies';
import { ViewMode } from '@/types/company';
import { Badge } from '@/components/ui/badge';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedIndustry: string;
  onIndustryChange: (industry: string) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  selectedSize: string;
  onSizeChange: (size: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  totalResults: number;
}

export const FilterBar = ({
  searchQuery,
  onSearchChange,
  selectedIndustry,
  onIndustryChange,
  selectedLocation,
  onLocationChange,
  selectedSize,
  onSizeChange,
  viewMode,
  onViewModeChange,
  totalResults,
}: FilterBarProps) => {
  const activeFiltersCount = [selectedIndustry, selectedLocation, selectedSize].filter(Boolean).length;

  const clearFilters = () => {
    onSearchChange('');
    onIndustryChange('');
    onLocationChange('');
    onSizeChange('');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search companies..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <Select value={selectedIndustry} onValueChange={onIndustryChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSize} onValueChange={onSizeChange}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Company Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              {companySizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* View Mode Toggle */}
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === 'cards' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('cards')}
              className="rounded-r-none"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'table' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('table')}
              className="rounded-l-none border-l"
            >
              <Table className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">
            {totalResults} {totalResults === 1 ? 'company' : 'companies'} found
          </span>
          {activeFiltersCount > 0 && (
            <>
              <Badge variant="secondary" className="gap-1">
                <SlidersHorizontal className="h-3 w-3" />
                {activeFiltersCount} {activeFiltersCount === 1 ? 'filter' : 'filters'} active
              </Badge>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
