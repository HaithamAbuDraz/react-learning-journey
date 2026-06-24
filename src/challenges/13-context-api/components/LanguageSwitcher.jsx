import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

function LanguageSwitcher() {
  const { language, setLanguage, trans, availableLanguages } =
    useContext(LanguageContext);

  return (
    <div>
      <h2>
        {trans.currentLanguage}: {language}
      </h2>

      <div>
        <p>{trans.changeLanguage}:</p>
        {availableLanguages.map((lang) => (
          <button key={lang} onClick={() => setLanguage(lang)}>
            {lang}
          </button>
        ))}
      </div>

      <div>
        <h3>{trans.greeting}!</h3>
        <p>{trans.welcome}</p>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
