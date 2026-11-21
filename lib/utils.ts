export { cn } from "cn";

const removeSpecialCharacter = (text: string): string => {
  text = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  text = text.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  return text;
};

export const generateNameId = (name: string, id: number) => {
  return removeSpecialCharacter(name).replace(/\s/g, "-") + `-i-${id}`;
};

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split("-i-");
  return arr[arr.length - 1];
};
