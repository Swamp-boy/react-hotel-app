import React from "react";
import ToxinLogo from "../../assets/ToxinLogo.svg";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import styles from "./HeaderContainer.module.scss";
import Button, { ButtonSize, ButtonView } from "../../components/Button/Button";

type THeaderContainer = {
  authorized?: boolean;
  name?: boolean;
};

const HeaderContainer: React.FC<THeaderContainer> = ({
  authorized = false,
  name,
}) => {
  const rightSide = authorized ? (
    <div className={styles.name}>{name}</div>
  ) : (
    <>
      <Button
        view={ButtonView.BORDERED}
        label="войти"
        size={ButtonSize.S}
        className={styles.button}
      />
      <Button
        view={ButtonView.FILLED}
        label="зарегистрироваться"
        size={ButtonSize.S}
        className={styles.button}
      />
    </>
  );

  return (
    <div className={styles.container}>
      <ToxinLogo className={styles.logo} />

      <div className={styles.rightSide}>
        <NavigationMenu />

        {rightSide}
      </div>
    </div>
  );
};

export default HeaderContainer;
