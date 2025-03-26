import React, { createContext, useContext, useState } from "react";

interface PantryItem {
  id: number;
  name: string;
  source: any;
  x: number;
  y: number;
}

interface PantryContextProps {
  pantryItems: PantryItem[];
  addItem: (item: PantryItem) => void;
  removeItem: (id: number) => void;
  updateItemPosition: (id: number, x: number, y: number) => void;
}

const PantryContext = createContext<PantryContextProps | undefined>(undefined);

export const PantryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pantryItems, setPantryItems] = useState<PantryItem[]>([]);

  const addItem = (item: PantryItem) =>
    setPantryItems((prev) => [...prev, item]);
  const removeItem = (id: number) =>
    setPantryItems((prev) => prev.filter((item) => item.id !== id));
  const updateItemPosition = (id: number, x: number, y: number) => {
    setPantryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, x, y } : item))
    );
  };

  return (
    <PantryContext.Provider
      value={{ pantryItems, addItem, removeItem, updateItemPosition }}
    >
      {children}
    </PantryContext.Provider>
  );
};

export const usePantry = () => {
  const context = useContext(PantryContext);
  if (!context) throw new Error("usePantry must be used within PantryProvider");
  return context;
};
