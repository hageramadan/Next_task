import { IProduct } from "../types/Iproduct";

export const getLocalData = (key: string): IProduct[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveLocalData = (key: string, value: IProduct[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const addItem = (key: string, item: IProduct) => {
  const items = getLocalData(key);
  const exists = items.find((p) => p.id === item.id);
  if (!exists) {
    items.push(item);
    saveLocalData(key, items);
  }
};

export const removeItem = (key: string, id: number | string) => {
  const items = getLocalData(key);
  const newItems = items.filter((p) => p.id !== id);
  saveLocalData(key, newItems);
};
