import React from "react";
import ArrowForward from "../../assets/ArrowForwardIcon.svg";
import styles from "./TextField.module.scss";

interface ITextField {
  placeHolder: string;
  title?: string;
  arrowButton?: boolean;
  onSendAction?: (val: string) => void;
  className?: string;
}

const TextField: React.FC<ITextField> = ({
  title,
  placeHolder,
  arrowButton,
  onSendAction,
  className,
}) => (
  <div className={className}>
    {title && <p className={styles.title}>{title}</p>}

    <div className={styles.container}>
      <input placeholder={placeHolder} className={styles.input} />

      {arrowButton && (
        <div className={styles.arrowButton}>
          <ArrowForward />
        </div>
      )}
    </div>
  </div>
);

export default TextField;
