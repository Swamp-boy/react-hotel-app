import { TNavBarItem } from "./types";

export const navBarMenu: TNavBarItem[] = [
  { label: "О нас", id: "about-us" },
  {
    label: "Услуги",
    id: "services",
    items: [
      { label: "Услуги", id: "services" },
      { label: "test1", id: "services-1" },
      { label: "test2", id: "services-2" },
    ],
  },
  { label: "Вакансии", id: "vacancies" },
  { label: "Новости", id: "news" },
  {
    label: "Соглашения",
    id: "agreements",
    items: [
      { label: "Соглашения", id: "agreements" },
      { label: "test1", id: "agreements-1" },
      { label: "test2", id: "agreements-2" },
    ],
  },
];
