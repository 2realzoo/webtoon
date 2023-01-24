import React from "react";
import { filteredData } from "../repository/webtoons";
import styles from "./webtoonList.module.css";

export default function WebtoonList({ filteredData }) {
  return (
    <ul className={styles.container}>
      {filteredData.map((toon) => {
        return (
          <li className={styles.li} key={toon.id}>
            <img className={styles.toon} src={toon.img} />
            <span className={styles.title}>{toon.title}</span>
          </li>
        );
      })}
    </ul>
  );
}
