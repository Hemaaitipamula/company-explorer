import { CompanyProvider, useCompanies } from '@/contexts/CompanyContext';
import { CompanyCard } from '@/components/CompanyCard';
import { CompanyTable } from '@/components/CompanyTable';
import { FilterBar } from '@/components/FilterBar';
import { CompanyPagination } from '@/components/CompanyPagination';
import { Building2, Loader2 } from 'lucide-react';
import { SortField } from '@/types/company';

const CompanyDirectory = () => {
  const {
    paginatedCompanies,
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
    isLoading,
  } = useCompanies();

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleFilterChange = (setter: (value: string) => void) => (value: string) => {
    setter(value === 'all' ? '' : value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Companies Directory
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore our curated directory of innovative companies across various industries and locations.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={(query) => {
            setSearchQuery(query);
            setCurrentPage(1);
          }}
          selectedIndustry={selectedIndustry}
          onIndustryChange={handleFilterChange(setSelectedIndustry)}
          selectedLocation={selectedLocation}
          onLocationChange={handleFilterChange(setSelectedLocation)}
          selectedSize={selectedSize}
          onSizeChange={handleFilterChange(setSelectedSize)}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalResults={filteredCompanies.length}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {/* Companies Display */}
        {!isLoading && (
          <>
            {viewMode === 'cards' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {paginatedCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            ) : (
              <div className="mt-8">
                <CompanyTable
                  companies={paginatedCompanies}
                  sortField={sortField}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </div>
            )}

            {/* Empty State */}
            {paginatedCompanies.length === 0 && !isLoading && (
              <div className="text-center py-20">
                <Building2 className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No companies found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}

            {/* Pagination */}
            <CompanyPagination
              currentPage={currentPage}
              totalPages={totalPages}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setCurrentPage(1);
              }}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Companies Directory - Frontend Technical Assessment</p>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <CompanyProvider>
      <CompanyDirectory />
    </CompanyProvider>
  );
};

export default Index;
