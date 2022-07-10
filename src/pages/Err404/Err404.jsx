import React, { Component } from "react";
import styles from '../../styles/err404.module.scss';
import Img from "../../assets/images/errimg.svg";
import Err404BG from '../../assets/images/Err404BG.png'
import { Link } from "react-router-dom";

export default function Err404() {
  return (
    <div className={`${styles.dbErr404Container}`} style={{backgroundImage: `url(${Err404BG})`}}>
      <div className={`${styles.dbErr404Content}`}>
        <img src={Img} alt="" />
        <p>
          <span className="red fs-26">Ohh.....</span> You Requested the page
          that is no longer There.
        </p>
        <Link to="/">
          <button className="btn btn-secondary px-5">Go To Home</button>
        </Link>
      </div>
    </div>
  );
}
