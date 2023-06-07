import React from "react";
import styles from "./FindNumberContainer.module.scss";
import DatePickerCustom from "../../components/DatePickerCustom/DatePickerCustom";
import DropdownCounter from "../../components/DropdownCounter/DropdownCounter";
import { guestDetails } from "./constants";

const FindNumberContainer = () => {
  const a = 1;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Найдём номера под ваши пожелания</h1>

      <div className={styles.datepickerField}>
        <div>datePicker1</div>
        <div>datePicker2</div>
      </div>

      <div className={styles.guests}>
        <DropdownCounter items={guestDetails} title="гости" />
      </div>
    </div>
  );
};

export default FindNumberContainer;
