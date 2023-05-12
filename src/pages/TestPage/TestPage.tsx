import React from "react";
import styles from "./TestPage.module.scss";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";

const TestPage = () => (
  <div>
    <HeaderContainer authorized name="Юлий Цезарь" />
  </div>
);

export default TestPage;
