import { BellIcon } from '@heroicons/react/24/outline';
import IconButton from 'components/IconButton';
import ImgButton from 'components/ImgButton';
import { logout } from 'utils/auth_api_util';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => navigate('/login'));
  };

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
            <IconButton icon={BellIcon} />
            <ImgButton
              alt="Avatar"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            />
            <button
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white"
              onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {};
Header.defaultProp = {};

export default Header;
