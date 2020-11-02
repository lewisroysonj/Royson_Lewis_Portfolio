/** @format */

import styles from "../../styles/work.module.scss";

import { essence } from "../../Data/work/Essence/resultData";
import { vamyou } from "../../Data/work/Vamyou/resultData";

export default function Results(props) {
  let currentProject;
  switch (props.project) {
    case "essence":
      currentProject = essence;
      break;
    case "vamyou":
      currentProject = vamyou;
      break;

    default:
      currentProject = essence;
      break;
  }

  const { logo, projectLink, mockup, pages, color } = currentProject;
  console.log(color.background);
  return (
    <section style={{ backgroundColor: color.background }} className={styles.Results}>
      <h3>Results</h3>
      <div>
        {logo}
        <a target='_blank' href={projectLink}>
          <button>Launch Live Project</button>
        </a>
      </div>
      <img className={styles.mockup} src={mockup} width='100%' alt='mockup'></img>
      <section style={{ backgroundColor: color.accent }}>
        <div className={styles.imageContainer}>
          <img src={pages.page1} alt={pages.page1}></img>
          <img src={pages.page2} alt={pages.page2}></img>
          <img src={pages.page3} alt={pages.page3}></img>
          <img src={pages.page4} alt={pages.page4}></img>
        </div>
      </section>
    </section>
  );
}
