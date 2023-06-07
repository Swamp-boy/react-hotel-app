import React from "react";
import styles from "./TestPage.module.scss";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import TextField from "../../components/TextField/TextField";
import FindNumberContainer from "../../containers/FindNumberContainer/FindNumberContainer";
import Checkbox from "../../components/Checkbox/Checkbox";
import ExpandCheckboxList from "../../components/ExpandCheckboxList/ExpandCheckboxList";
import { BULLET_LIST, EXPAND_CHECKBOX, RICH_BUTTONS } from "../../constants";
import BulletList from "../../components/BulletList/BulletList";
import RichCheckboxButtons from "../../components/RichCheckboxButtons/RichCheckboxButtons";

const TestPage = () => (
  <div className={styles.test}>
    {/* <HeaderContainer authorized name="Юлий Цезарь" /> */}

    {/* <FooterContainer /> */}

    {/* <TextField title="Text Field" placeHolder="Email" arrowButton /> */}

    <FindNumberContainer />

    <div className={styles.testDiv}>
      {/* <ExpandCheckboxList */}
      {/*  label="expandable checkbox list" */}
      {/*  items={EXPAND_CHECKBOX} */}
      {/* /> */}

      {/* <BulletList items={BULLET_LIST} title="bullet list" /> */}

      <RichCheckboxButtons label="rich Checkbox Buttons" items={RICH_BUTTONS} />
    </div>
  </div>
);

export default TestPage;
