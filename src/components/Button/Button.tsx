import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export enum ButtonView {
  CLEAR = "CLEAR",
  FILLED = "FILLED",
  BORDERED = "BORDERED",
}

export enum ButtonSize {
  S = "S",
  M = "M",
}

type TButton = {
  view: ButtonView;
  label: string;
  size?: ButtonSize;
  withArrow?: boolean;
  disabled?: boolean;
  className?: string;
};

const classesMap: { [key in ButtonView]: string } = {
  [ButtonView.CLEAR]: styles.clearBtn,
  [ButtonView.FILLED]: styles.filledBtn,
  [ButtonView.BORDERED]: styles.borderedBtn,
};

const sizeMap: { [key in ButtonSize]: string } = {
  [ButtonSize.S]: styles.sizeS,
  [ButtonSize.M]: styles.sizeM,
};

const Button: React.FC<TButton> = ({
  view,
  label,
  size = ButtonSize.M,
  withArrow = false,
  disabled = false,
  className,
}) => {
  const borderedButton = <div className={styles.whiteCenter}>{label}</div>;

  return (
    <div
      className={classNames(
        styles.container,
        classesMap[view],
        {
          [styles.disabled]: disabled,
        },
        sizeMap[size],
        className
      )}
    >
      {view === ButtonView.BORDERED ? borderedButton : label}
    </div>
  );
};

export default Button;
