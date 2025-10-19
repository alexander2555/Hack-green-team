import { Card } from "../../components/card/card";
import { data } from "../../data";

import styles from "./main-page.module.css";

export const MainPage = () => {
  const members = data.members;

  return (
    <div>
      <div className={styles.mainContainer}>
        {members.map((member) => (
          <Card key={member.id} item={member} />
        ))}
      </div>
    </div>
  );
};
