import React from "react";
import styles from "./webtoonList.module.css";
import { useSelector } from "react-redux";

export default function WebtoonList() {
  const { dataReducer } = useSelector(state => state);

  return (
    <div className={styles.list_wrap}>
      <ul className={styles.container}>
        {dataReducer.length === 0? '해당하는 콘텐츠가 없습니다':
          dataReducer.map((toon) => {
          return (
            <li className={styles.li} key={toon.id}>
              <a href={toon.url}>
                <img className={styles.toon} src={toon.img} alt={toon.title} />
                <div className={styles.title}>{toon.title}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
