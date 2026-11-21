import { generateNameId } from "@/lib/utils";

const PATH = {
  HOME: "/",
  INTRODUCE: "/gioi-thieu",
  SOLUTION: "/giai-phap",
  PRODUCT: "/san-pham",
  PRODUCT_DETAIL: (name: string, id: number) => generateNameId(name, id),
  ARTICLES: "/bai-viet",
  ARTICLE_DETAIL: (name: string, id: number) => generateNameId(name, id),
  CONTACT: "/lien-he",
  CHRISTMAS_PROMO: "/landing/khuyen-mai-giang-sinh",
} as const;

export default PATH;
