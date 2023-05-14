import React from "react";
import classNames from "classnames";
import ToxinLogo from "../../assets/ToxinLogo.svg";
import styles from "./FooterContainer.module.scss";
import { TFooterNavItem } from "./types";
import { aboutUs, navigation, supportService } from "./constants";
import TextField from "../../components/TextField/TextField";

const FooterContainer = () => {
  const renderNavColumn = (column: TFooterNavItem) => (
    <div className={styles.navColumn}>
      <p className={styles.title}>{column.title}</p>
      {column.elements.map((el) => (
        <p className={styles.text}>{el}</p>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.column}>
          <ToxinLogo />

          <p className={styles.columnDescription}>
            Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
            «Отельные взгляды»
          </p>
        </div>
        {renderNavColumn(navigation)}
        {renderNavColumn(aboutUs)}
        {renderNavColumn(supportService)}
        <div className={classNames(styles.navColumn, styles.subscribe)}>
          <p className={styles.title}>Подписка</p>

          <p className={styles.columnDescription}>
            Получайте специальные предложения и новости сервиса
          </p>

          <TextField placeHolder="Email" arrowButton />
        </div>
      </div>
      <div className={styles.botContent} />
    </div>
  );
};

export default FooterContainer;
