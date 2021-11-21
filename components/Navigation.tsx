import useLocationHash from "@/hooks/useLocationHash";
import styles from "@/styles/Navigation.module.css";
import { cx } from "@/utils";

const menuLinks = ["About", "Skills", "Portfolio", "Contacts"];

const Navigation: React.FC = () => {
  const locationHash = useLocationHash();

  return (
    <nav className={styles.navigation}>
      <div className={`container ${styles.navigationContainer}`}>
        <div className={`row ${styles.navigationRow}`}>
          <div className={`col-6 ${styles.navigationMenu}`}>
            {menuLinks.map((text) => (
              <a
                href={`#${text}`}
                className={cx(
                  locationHash === text && styles.navigationMenuLinkActive,
                  styles.navigationMenuLink
                )}
                key={text}
              >
                {text}
              </a>
            ))}
          </div>
          <div className="col-6">Slider</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
