import React from "react";
import styles from "./RichCheckboxButtons.modules.scss";
import Checkbox from "../Checkbox/Checkbox";

export type TRichButton = {
  title: string;
  text: string;
  isChecked: boolean;
};

interface IRichCheckboxButtons {
  items: TRichButton[];
  label?: string;
}

const RichCheckboxButtons: React.FC<IRichCheckboxButtons> = ({
  label,
  items,
}) => (
  <div>
    {label && <p className={styles.title}>{label}</p>}
    <div>
      {items.map((item) => (
        <div className={styles.checkbox}>
          <Checkbox isActive={item.isChecked} />

          <div>
            <p className={styles.subtitle}>{item.title}</p>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RichCheckboxButtons;
