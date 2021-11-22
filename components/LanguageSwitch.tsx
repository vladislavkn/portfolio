import styles from "@/styles/LanguageSwitch.module.css";
import { Language } from "@/types";
import { cx } from "@/utils";

type LanguageSwitchProps = {
  language: Language;
  onChangeLanguage: (code: Language) => void;
};

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  language,
  onChangeLanguage,
}) => (
  <div className={styles.languageSwitchContainer}>
    {["En", "Ru"].map((languageCode) => (
      <div
        key={languageCode}
        onClick={() => onChangeLanguage(languageCode as Language)}
        className={cx(
          styles.languageSwitchItem,
          language === languageCode && styles.languageSwitchItemActive
        )}
      >
        {languageCode}
      </div>
    ))}
  </div>
);

export default LanguageSwitch;
