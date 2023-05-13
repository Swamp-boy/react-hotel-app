import React, { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import classNames from "classnames";
import { TNavBarItem, TNavBarSubItem } from "../NavigationMenu/types";
import ExpandIcon from "../../../../assets/ExpandIcon.svg";
import styles from "./MenuItems.module.scss";

const MenuItems: React.FC<TNavBarItem> = ({ label, id, items }) => {
  const [selectedItem, setSelectedItem] = useState<TNavBarSubItem>({
    label,
    id,
  });
  const [isMenuHide, setIsMenuHide] = useState<boolean>(true);

  const itemsForMenu = items?.filter((item) => item.id !== selectedItem.id);

  const onSelectedClick = () => {
    setIsMenuHide(!isMenuHide);
  };

  const onClickAway = () => {
    setIsMenuHide(true);
  };

  const onSelectNewItem = (item: TNavBarSubItem) => {
    setSelectedItem(item);
    setIsMenuHide(true);
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className={styles.container}>
        <div onClick={onSelectedClick} className={styles.selectedItem}>
          {selectedItem.label}
        </div>

        <ExpandIcon className={styles.expandIcon} />

        <div className={styles.dropdownMenu}>
          {!isMenuHide &&
            itemsForMenu?.map((item) => (
              <div
                onClick={() => onSelectNewItem(item)}
                key={item.id}
                className={styles.dropdownMenuItem}
              >
                {item.label}
              </div>
            ))}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default MenuItems;
