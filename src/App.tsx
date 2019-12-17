import React from "react";
import Chart from "./components/chart/chart";
import styles from "./app.module.css";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.chartCenter}>
        <Chart />
      </div>
    </div>
  );
};

export default App;
