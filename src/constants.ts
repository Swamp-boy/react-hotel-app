import { ICheckbox } from "./components/Checkbox/Checkbox";
import { TRichButton } from "./components/RichCheckboxButtons/RichCheckboxButtons";

export const EXPAND_CHECKBOX: ICheckbox[] = [
  { isActive: false, label: "Завтрак" },
  { isActive: false, label: "Письменный стол" },
  { isActive: false, label: "Стул для кормления" },
  { isActive: false, label: "Кроватка" },
  { isActive: false, label: "Телевизор" },
  { isActive: false, label: "Шампунь" },
];

export const BULLET_LIST = [
  "Нельзя с питомцами",
  "Без вечеринок и мероприятий",
  "Время прибытия — после 13:00, а выезд до 12:00",
];

export const RICH_BUTTONS: TRichButton[] = [
  {
    isChecked: true,
    title: "Широкий коридор",
    text: "Ширина коридоров в номере не менее 91 см.",
  },
  {
    isChecked: false,
    title: "Помощник для инвалидов",
    text: "На 1 этаже вас встретит специалист  и проводит до номера.",
  },
];
