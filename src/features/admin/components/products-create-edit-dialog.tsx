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
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ProductsCreateEditDialog() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent>
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
        </div>
        <div className="flex justify-end">
          <Button onClick={() => setIsAddDialogOpen(false)}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
