import LanguageProvider from './providers/LanguageProvider';
import LanguageSwitcher from './components/LanguageSwitcher';

function ContextApiChallenge() {

  return (
    <div>
      <h1>Context API Challenges</h1>

      <section>
        <h2>Challenge 1: Language Context</h2>
        <LanguageProvider>
          <LanguageSwitcher />
        </LanguageProvider>
      </section>

      
    </div>
  );
}

export default ContextApiChallenge;
