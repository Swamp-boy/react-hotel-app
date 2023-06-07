import React, { useState } from "react";
import classNames from "classnames";
import ExpandIcon from "../../assets/ExpandIcon.svg";
import Checkbox, { ICheckbox } from "../Checkbox/Checkbox";
import styles from "./ExpandCheckboxList.module.scss";

interface IExpandCheckboxList {
  label: string;
  items: ICheckbox[];
}

const ExpandCheckboxList: React.FC<IExpandCheckboxList> = ({
  items,
  label,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onTitleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer} onClick={onTitleClick}>
        <p className={styles.title}>{label}</p>
        <ExpandIcon className={classNames({ [styles.expanded]: isExpanded })} />
      </div>

      <div
        className={classNames(styles.checkboxesContainer, {
          [styles.checkboxesShow]: isExpanded,
        })}
      >
        {items.map((item, index) => (
          <Checkbox {...item} key={index + item.label} />
        ))}
      </div>
    </div>
  );
};

export default ExpandCheckboxList;
