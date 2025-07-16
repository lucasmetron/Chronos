import React from 'react';

import styles from './styles.module.css';

interface GenericHtmlProps {
  children: React.ReactNode;
}

const GenericHtml = ({ children }: GenericHtmlProps) => {
  return <div className={styles.genericHtml}>{children}</div>;
};

export default GenericHtml;
