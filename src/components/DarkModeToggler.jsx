import useDarkMode from 'hooks/useDarkMode';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function DarkModeToggler() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button>
      {colorTheme === 'light' ? (
        <SunIcon className="h-6 w-6 text-white" onClick={() => setTheme('light')} />
      ) : (
        <MoonIcon className="h-6 w-6" onClick={() => setTheme('dark')} />
      )}
    </button>
  );
}

export default DarkModeToggler;
