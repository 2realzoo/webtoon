import React from "react";
import { filteredData } from "../repository/webtoons";
import styles from "./webtoonList.module.css";

export default function WebtoonList({ filteredData }) {
  return (
    <ul className={styles.container}>
      {filteredData.length === 0? '해당하는 콘텐츠가 없습니다':
        filteredData.map((toon) => {
        return (
          <li className={styles.li} key={toon.id}>
            <a href={toon.url}>
              <img className={styles.toon} src={toon.img} />
              <span className={styles.title}>{toon.title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
