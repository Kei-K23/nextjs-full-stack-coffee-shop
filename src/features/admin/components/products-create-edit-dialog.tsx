import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ingredient } from "@/types";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function ProductsCreateEditDialog() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: "", percentage: 0 },
  ]);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", percentage: 0 }]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (
    index: number,
    field: keyof Ingredient,
    value: string
  ) => {
    const updatedIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return {
          ...ingredient,
          [field]: field === "percentage" ? parseFloat(value) : value,
        };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };

  return (
    <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input id="price" type="number" step="0.01" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="coinPrice">Coin Price</Label>
              <Input id="coinPrice" type="number" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" />
          </div>
          <div className="grid gap-2">
            <Label>Ingredients</Label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  placeholder="Ingredient name"
                  value={ingredient.name}
                  onChange={(e) =>
                    updateIngredient(index, "name", e.target.value)
                  }
                />
                <Input
                  type="number"
                  placeholder="Percentage"
                  value={ingredient.percentage}
                  onChange={(e) =>
                    updateIngredient(index, "percentage", e.target.value)
                  }
                  className="w-24"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeIngredient(index)}
                  className="shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" onClick={addIngredient}>
              <Plus className="mr-2 h-4 w-4" />
              Add Ingredient
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => setIsAddDialogOpen(false)}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
