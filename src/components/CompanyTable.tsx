import { Company, SortField, SortDirection } from '@/types/company';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CompanyTableProps {
  companies: Company[];
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export const CompanyTable = ({ companies, sortField, sortDirection, onSort }: CompanyTableProps) => {
  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="ml-2 h-4 w-4" />;
    return sortDirection === 'asc' 
      ? <ArrowUp className="ml-2 h-4 w-4" />
      : <ArrowDown className="ml-2 h-4 w-4" />;
  };

  return (
    <Card>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => onSort('name')}
                  className="font-semibold hover:bg-secondary/50"
                >
                  Company
                  <SortIcon field="name" />
                </Button>
              </TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => onSort('size')}
                  className="font-semibold hover:bg-secondary/50"
                >
                  Size
                  <SortIcon field="size" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => onSort('founded')}
                  className="font-semibold hover:bg-secondary/50"
                >
                  Founded
                  <SortIcon field="founded" />
                </Button>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-12 text-muted-foreground">
                  No companies found matching your filters
                </TableCell>
              </TableRow>
            ) : (
              companies.map((company) => (
                <TableRow key={company.id} className="group">
                  <TableCell className="text-2xl">{company.logo}</TableCell>
                  <TableCell className="font-medium">
                    <div>
                      <div className="font-semibold">{company.name}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
                        {company.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{company.industry}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{company.location}</TableCell>
                  <TableCell>{company.size}</TableCell>
                  <TableCell>{company.founded}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
