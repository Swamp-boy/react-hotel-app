import React from "react";
import styles from "./TestPage.module.scss";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import TextField from "../../components/TextField/TextField";

const TestPage = () => (
  <div className={styles.test}>
    <HeaderContainer authorized name="Юлий Цезарь" />

    <FooterContainer />

    <TextField title="Text Field" placeHolder="Email" arrowButton />
  </div>
);

export default TestPage;
