import useLocationHash from "@/hooks/useLocationHash";
import styles from "@/styles/Navigation.module.css";
import { Language } from "@/types";
import { cx } from "@/utils";
import { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

const menuLinks = ["About", "Skills", "Portfolio", "Contacts"];

const Navigation: React.FC = () => {
  const locationHash = useLocationHash();
  const [language, setLanguage] = useState<Language>("En");

  return (
    <nav className={styles.navigation}>
      <div className={cx("container", styles.navigationContainer)}>
        <div className={cx("row", styles.navigationRow)}>
          <div className={cx("col-6", styles.navigationMenu)}>
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
          <div className={cx("col-6", styles.navigationLangSwitchContainer)}>
            <LanguageSwitch
              language={language}
              onChangeLanguage={setLanguage}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
