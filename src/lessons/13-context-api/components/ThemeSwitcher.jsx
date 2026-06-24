import { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeSwitcher;
