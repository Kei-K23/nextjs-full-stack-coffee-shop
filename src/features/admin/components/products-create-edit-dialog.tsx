import { productCreateAction, productUpdateAction } from "@/app/actions";
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
import { Ingredient, Product } from "@/types";
import { Plus, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface ProductsCreateEditDialogProps {
  children: React.ReactNode;
  product?: Product;
}

export default function ProductsCreateEditDialog({
  children,
  product,
}: ProductsCreateEditDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    product?.ingredients
      ? JSON.parse(product.ingredients)
      : [{ name: "", percentage: 0 }]
  );

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productData = {
      id: product?.id, // Include the id for edit case
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: parseFloat(formData.get("price") as string),
      coinPrice: parseInt(formData.get("coinPrice") as string, 10),
      imageUrl: formData.get("imageUrl") as string,
      ingredients: JSON.stringify(ingredients),
    };

    const { errors, success } = product
      ? await productUpdateAction(product.id, productData)
      : await productCreateAction(productData);

    if (errors) {
      toast.error(errors);
      return;
    }
    if (success) {
      toast.success(success);
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    if (product) {
      setIngredients(
        product?.ingredients
          ? JSON.parse(product.ingredients)
          : [{ name: "", percentage: 0 }]
      );
    }
  }, [product]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {product ? "Edit Product" : "Add New Product"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                defaultValue={product?.name}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={product?.description || ""}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  name="price"
                  step="0.01"
                  defaultValue={product?.price}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="coinPrice">Coin Price</Label>
                <Input
                  id="coinPrice"
                  type="number"
                  name="coinPrice"
                  defaultValue={product?.coinPrice}
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="imageUrl"
                defaultValue={product?.imageUrl || ""}
              />
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
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeIngredient(index)}
                    className="shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addIngredient}>
                <Plus className="mr-2 h-4 w-4" />
                Add Ingredient
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit">{product ? "Update" : "Save"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
