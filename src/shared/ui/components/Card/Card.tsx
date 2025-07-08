import React from "react";
import styles from "./Card.module.css";

type Props = {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
};

const Card = ({ header, content, footer }: Props) => {
  return (
    <div className={styles.card}>
      {header && <div className={styles.header}>{header}</div>}
      {content && <div className={styles.content}>{content}</div>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
