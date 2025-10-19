import { useState } from "react";
import { Button } from "../../elements/button/button";

import styles from "./progress.module.css";

export const ProgressBar = ({ progress }) => {
  const [type, setType] = useState(1);
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  const toggleVariant = () => {
    setType((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <div className={styles.progressWrapper}>
      <Button
        onClick={toggleVariant}
        lable="Тип"
        textcolor="#fff"
        backgroundColor="rgba(81, 38, 161, 1)"
        borderRadius="10px"
      />
      <br />
      {type === 1 ? (
        <div
          className={styles.progressBarContainer}
          aria-label={`Прогресс ${normalizedProgress}%`}
        >
          <div
            className={styles.progressBarFill}
            style={{ width: `${normalizedProgress}%` }}
          />
          <span className={styles.progressText}>{normalizedProgress}%</span>
        </div>
      ) : (
        <div
          className={styles.progressCircle}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={normalizedProgress}
        >
          <svg className={styles.progressSvg} viewBox="0 0 100 100">
            <circle className={styles.progressBg} cx="50" cy="50" r="45" />
            <circle
              className={styles.progressFg}
              cx="50"
              cy="50"
              r="45"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={
                2 * Math.PI * 45 * (1 - normalizedProgress / 100)
              }
            />
          </svg>
          <div className={styles.progressCircleText}>{normalizedProgress}%</div>
        </div>
      )}
    </div>
  );
};
