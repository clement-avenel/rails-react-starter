import { UserIcon } from '@heroicons/react/24/outline';
import Dropdown from 'components/Dropdown';
import DarkModeToggler from 'components/DarkModeToggler';

function Header() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700">
      <nav
        aria-label="Global"
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="mr-5 lg:mr-0 lg:hidden">
          <a aria-label="Brand" className="flex-none text-xl font-semibold dark:text-white" href="">
            Brand
          </a>
        </div>
        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="w-full flex flex-row items-center justify-end gap-3">
            <DarkModeToggler />
            <Dropdown icon={UserIcon} />
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {};
Header.defaultProp = {};

export default Header;
