import React from "react";
import styles from "./NavigationMenu.module.scss";
import { navBarMenu } from "./constants";
import MenuItems from "../MenuItems/MenuItems";

const NavigationMenu = () => {
  const renderSingleItem = (title: string, id: string) => (
    <div className={styles.navItem} key={id}>
      {title}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.navMenu}>
        {navBarMenu.map((item) => {
          if (item.items) {
            return (
              <MenuItems
                label={item.label}
                id={item.id}
                items={item.items}
                key={item.id}
              />
            );
          }

          return renderSingleItem(item.label, item.id);
        })}
      </div>
    </div>
  );
};

export default NavigationMenu;
