import { useState, useEffect } from "react";
import { sort_by } from "./helpers";
export function getData(key, defaultValue) {
  const saved = localStorage.getItem(key);

  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [items, setItems] = useState(() => {
    return getData(key, defaultValue);
  });

  useEffect(() => {
    items.sort(sort_by("weight", true, parseInt));
    items.sort(sort_by("complete", false));
    localStorage.setItem(key, JSON.stringify(items));
  }, [key, items]);

  return [items, setItems];
};
