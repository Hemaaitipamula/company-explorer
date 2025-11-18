import { Company } from '@/types/company';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="text-4xl flex-shrink-0">{company.logo}</div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl truncate">{company.name}</CardTitle>
              <CardDescription className="mt-1">
                <Badge variant="secondary" className="font-medium">
                  {company.industry}
                </Badge>
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{company.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 flex-shrink-0" />
            <span>{company.size} employees</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>Founded {company.founded}</span>
          </div>
        </div>

        <Button variant="outline" className="w-full group" asChild>
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
