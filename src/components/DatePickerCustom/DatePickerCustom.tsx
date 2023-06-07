import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "./DatePickerCustom.module.scss";
import CustomActionBar from "./components/CustomActionBar/CustomActionBar";

const DatePickerCustom = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      slots={{
        leftArrowIcon: CustomActionBar,
        rightArrowIcon: CustomActionBar,
        openPickerIcon: CustomActionBar,
      }}
      className={styles.datepicker}
    />
  </LocalizationProvider>
);

export default DatePickerCustom;
