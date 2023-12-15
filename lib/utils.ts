import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalStorageData(key: string) {
  const storedDataString = localStorage.getItem(key);
  return storedDataString ? JSON.parse(storedDataString) : {};
}
