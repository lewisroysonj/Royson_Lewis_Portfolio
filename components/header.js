/** @format */
import { useState } from "react";
import styles from "../styles/header.module.scss";
import BurgerMenu from "./burgerMenu";

export default function Header() {
  const [header, setHeader] = useState({
    burgerOpen: false,
  });
  function toggleBurger() {
    setHeader({
      ...header,
      burgerOpen: !header.burgerOpen,
    });
  }
  return (
    <>
      <header className={styles.header}>
        <span className={styles.burgerButton} onClick={toggleBurger}>
          <svg xmlns='http://www.w3.org/2000/svg' width='23.328' height='17.131' viewBox='0 0 23.328 17.131'>
            <path id='Icon_open-menu' data-name='Icon open-menu' d='M3.091,3.438v3.19H26.419V3.438Zm0,7.113v3.19H26.419v-3.19Zm0,6.828v3.19H26.419v-3.19Z' transform='translate(-3.091 -3.438)' fill='#3f3d56' />
          </svg>
        </span>
        <div className={styles.logo}>
          <svg xmlns='http://www.w3.org/2000/svg' width='32.743' height='32.765' viewBox='0 0 31.743 31.765'>
            <g transform='translate(-4.375 -4.375)'>
              <path id='Path_231' data-name='Path 231' d='M31.646,9.248,18.741,3.461a1,1,0,0,0-.814,0L5.014,9.248a.606.606,0,0,0-.029,1.066l12.876,6.78a.982.982,0,0,0,.937,0l12.876-6.78A.606.606,0,0,0,31.646,9.248Z' transform='translate(1.032 1)' fill='#3f3d56' />
              <path id='Path_232' data-name='Path 232' d='M19.721,33.062,32.7,26.195a.582.582,0,0,0,.259-.49V12.382a.537.537,0,0,0-.771-.512L19.21,18.557a.569.569,0,0,0-.3.512v13.5A.544.544,0,0,0,19.721,33.062Z' transform='translate(2.41 2.234)' fill='#fed200' stroke='#fed200' strokeWidth='1.5' />
              <path id='Path_233' data-name='Path 233' d='M3.375,12.382V25.7a.582.582,0,0,0,.259.49l12.977,6.867a.531.531,0,0,0,.807-.49v-13.5a.569.569,0,0,0-.3-.512L4.146,11.87A.539.539,0,0,0,3.375,12.382Z' transform='translate(1 2.234)' fill='#3f3d56' />
            </g>
          </svg>
        </div>
        <h3>Royson Lewis</h3>
        <button className={styles.hireMeButton}>Hire Me</button>
      </header>
      <BurgerMenu open={header.burgerOpen} toggleBurger={toggleBurger} />
    </>
  );
}