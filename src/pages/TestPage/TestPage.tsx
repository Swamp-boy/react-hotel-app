import React from "react";
import styles from "./TestPage.module.scss";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";

const TestPage = () => (
  <div className={styles.test}>
    <HeaderContainer authorized name="Юлий Цезарь" />

    <FooterContainer />
  </div>
);

export default TestPage;
