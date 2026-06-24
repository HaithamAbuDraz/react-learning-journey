import ThemeSwitcher from './components/ThemeSwitcher';
import UserProvider from './providers/UserProvider';
import ThemeProvider from './providers/ThemeProvider';

function ContextApiLesson() {
  return (
    <UserProvider>
      <ThemeProvider>
        <div>
          <h1>Context API Lesson</h1>

          <ThemeSwitcher />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default ContextApiLesson;
