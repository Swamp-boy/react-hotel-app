import React from "react";
import styles from "./BulletList.module.scss";

interface IBulletList {
  title: string;
  items: string[];
}

const BulletList: React.FC<IBulletList> = ({ title, items }) => (
  <div>
    <p className={styles.title}>{title}</p>

    <div className={styles.itemsContainer}>
      {items.map((item, index) => (
        <div className={styles.item} key={item + index}>
          <div className={styles.bullet} />
          <p className={styles.text}>{item}</p>
        </div>
      ))}
    </div>
  </div>
);

export default BulletList;
