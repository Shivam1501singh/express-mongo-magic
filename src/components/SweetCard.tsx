import { Sweet } from '@/types/sweet';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2, AlertTriangle } from 'lucide-react';

interface SweetCardProps {
  sweet: Sweet;
  onEdit: (sweet: Sweet) => void;
  onDelete: (id: string) => void;
  canEdit: boolean;
}

export const SweetCard = ({ sweet, onEdit, onDelete, canEdit }: SweetCardProps) => {
  const isLowStock = sweet.stock <= 10;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur overflow-hidden">
      <div className="h-32 bg-gradient-to-br from-pink-200 via-purple-200 to-amber-200 flex items-center justify-center">
        <span className="text-5xl">🍬</span>
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg leading-tight">{sweet.name}</h3>
          <Badge variant="secondary" className="shrink-0">{sweet.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{sweet.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${sweet.price.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            {isLowStock && <AlertTriangle className="w-4 h-4 text-amber-500" />}
            <Badge variant={isLowStock ? "destructive" : "outline"}>
              {sweet.stock} in stock
            </Badge>
          </div>
        </div>
      </CardContent>
      {canEdit && (
        <CardFooter className="p-4 pt-0 gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={() => onEdit(sweet)}>
            <Pencil className="w-4 h-4 mr-1" /> Edit
          </Button>
          <Button variant="destructive" size="sm" onClick={() => onDelete(sweet.id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
