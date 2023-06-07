import React, { useState } from "react";
import classNames from "classnames";
import { TDropdownItem } from "../../DropdownCounter";
import styles from "./DropdownItem.module.scss";
import { getRusCount } from "../../../../utils/getRusCount";

interface IDropdownItem {
  item: TDropdownItem;
  itemCount: number;
  onItemCountChange: (val: number, name: string, count: number) => void;
}

const DropdownItem: React.FC<IDropdownItem> = ({
  item,
  itemCount,
  onItemCountChange,
}) => {
  const [currentCount, setCurrentCount] = useState<number>(item.count);

  const onPlusClick = () => {
    onItemCountChange(
      currentCount + 1,
      getRusCount(currentCount + 1, item.numeralsOptions),
      itemCount
    );
    setCurrentCount(currentCount + 1);
  };

  const onMinusClick = () => {
    if (currentCount > 0) {
      onItemCountChange(
        currentCount - 1,
        getRusCount(currentCount - 1, item.numeralsOptions),
        itemCount
      );
      setCurrentCount(currentCount - 1);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>{item.name}</p>

      <div className={styles.buttonsContainer}>
        <div
          onClick={onMinusClick}
          className={classNames(styles.button, {
            [styles.disabledButton]: currentCount === 0,
          })}
        >
          -
        </div>

        <p className={styles.text}>{currentCount}</p>

        <div onClick={onPlusClick} className={styles.button}>
          +
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
