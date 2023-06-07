import React, { useState } from "react";
import classNames from "classnames";
import { ClickAwayListener } from "@mui/base";
import ExpandIconActive from "../../assets/ExpandIconActive.svg";
import styles from "./DropdownCounter.module.scss";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import { getRusCount } from "../../utils/getRusCount";

export type TDropdownItem = {
  count: number;
  name: string;
  numeralsOptions: string[];
};

interface IDropdownCounter {
  items: TDropdownItem[];
  title?: string;
}

const getStringFromDropItems = (items: TDropdownItem[]) =>
  items
    .reduce(
      (acc, cur) =>
        `${acc} ${cur.count} ${getRusCount(cur.count, cur.numeralsOptions)}`,
      ""
    )
    .trim();

const DropdownCounter: React.FC<IDropdownCounter> = ({ items, title }) => {
  const [isHide, setIsHide] = useState<boolean>(true);
  const [currentString, setCurrentString] = useState<string>(
    getStringFromDropItems(items)
  );

  const onClickAway = () => {
    setIsHide(true);
  };

  const onDropClick = () => {
    setIsHide(!isHide);
  };

  const onItemCountChange = (val: number, name: string, count: number) => {
    const wordsArray = currentString.split(" ");

    wordsArray.splice(count * 2, 1, [`${val}`]);

    wordsArray.splice(count * 2 + 1, 1, [name]);

    setCurrentString(wordsArray.join(" "));
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className={styles.container}>
        {title && <h3 className={styles.title}>{title}</h3>}

        <div
          className={classNames(styles.dropdownContainer, {
            [styles.dropdownContainer_active]: !isHide,
          })}
          onClick={onDropClick}
        >
          <p className={styles.itemsString}>{currentString}</p>

          <div className={styles.iconContainer}>
            <ExpandIconActive
              className={classNames(styles.icon, {
                [styles.icon_down]: !isHide,
              })}
            />
          </div>
        </div>

        {!isHide && (
          <div className={styles.menu}>
            {items.map((item, index) => (
              <DropdownItem
                item={item}
                itemCount={index}
                onItemCountChange={onItemCountChange}
                key={item.name + index}
              />
            ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default DropdownCounter;
