import React from "react";
import { filteredData } from "../repository/webtoons";

export default function WebtoonList({filteredData}) {
  return (
    <>
      {filteredData.map((toon) => {
        <div className="container">
          <img className="toon-img" src={toon.img} />
          <span className="title">{toon.tilte}</span>
        </div>
      })}
    </>
  );
}
