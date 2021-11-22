import { cx } from "@/utils";
import styles from "@/styles/HeroSection.module.css";
import { Code, MapPin } from "phosphor-react";
import Image from "next/image";

const HeroSection: React.FC = () => (
  <div className={cx("container", styles.container)}>
    <Image
      className={styles.photo}
      src="https://picsum.photos/128"
      alt="Vladislav Knyshov"
      width={128}
      height={128}
    />
    <h1 className={styles.title}>Vladislav Knyshov</h1>
    <ul className={styles.detailsList}>
      <li className={styles.detailsItem}>
        <Code className={styles.detailsItemIcon} size={24} weight="bold" />
        Frontend developer
      </li>
      <li className={styles.detailsItem}>
        <MapPin className={styles.detailsItemIcon} size={24} weight="bold" />{" "}
        Moscow
      </li>
    </ul>
  </div>
);

export default HeroSection;
