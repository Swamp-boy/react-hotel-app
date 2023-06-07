import React, { useState } from "react";
import classNames from "classnames";
import CheckMark from "../../assets/CheckMark.svg";
import styles from "./Checkbox.module.scss";

export interface ICheckbox {
  isActive: boolean;
  label?: string;
  onClick?: (val: boolean) => void;
}

const Checkbox: React.FC<ICheckbox> = ({ isActive, label, onClick }) => {
  const [isChecked, setIsChecked] = useState<boolean>(isActive);

  const onCheckboxClick = () => {
    if (onClick) {
      onClick(!isChecked);
    }

    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.container} onClick={onCheckboxClick}>
      <div
        className={classNames(styles.checkbox, { [styles.active]: isChecked })}
      >
        {isChecked && <CheckMark />}
      </div>

      {label && <p className={styles.text}>{label}</p>}
    </div>
  );
};

export default Checkbox;
