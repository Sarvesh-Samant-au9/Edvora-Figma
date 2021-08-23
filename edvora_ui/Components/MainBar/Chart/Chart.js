import styles from "./Chart.module.css";
import { Flex, Box, Switch, Stack } from "@chakra-ui/react";
import Developer from "./Developer";
import Artificial from "./Artificial";
import Computer from "./Computer";
import BrainStorm from "./BrainStorm";
import Cloud from "./Cloud";
import Macbeth from "./Macbeth";
import Project from "./Project";
import Dsa from "./Dsa";
const Chart = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.time1}>
          <span className={styles.spanElement}>9.00 AM</span>
        </div>
        <div className={styles.time2}>
          <span className={styles.spanElement}>10.00 AM</span>
        </div>
        <div className={styles.time3}>
          <span className={styles.spanElement}>11.00 AM</span>
        </div>
        <div className={styles.time4}>
          <span className={styles.spanElement}>12.00 noon</span>
        </div>
        <div className={styles.time5}>
          <span className={styles.spanElement}>1.00 PM</span>
        </div>
        <div className={styles.developerBox}>
          <Developer />
        </div>
        <div className={styles.projectBox}>
          <Project />
        </div>
        <div className={styles.dsaBox}>
          <Dsa />
        </div>
        <div className={styles.aiBox}>
          <Artificial />
        </div>
        <div className={styles.networkBox}>
          <Computer />
        </div>
        <div className={styles.brainstormBox}>
          <BrainStorm />
        </div>
        <div className={styles.cloudBox}>
          <Cloud />
        </div>
        <div className={styles.macbetBox1}>
          <Macbeth
            name="MacBeth Auditions"
            time="1- 2PM"
            desc="E-2 Auditorium"
          />
        </div>
        <div className={styles.macbetBox2}>
          <Macbeth
            name="MacBeth Auditions"
            time="1- 2PM"
            desc="E-2 Auditorium"
          />
        </div>
      </div>
    </>
  );
};

export default Chart;
