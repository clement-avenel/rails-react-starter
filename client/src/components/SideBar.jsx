import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

function SideBarItem({ icon: Icon, label, to }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          [
            'flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300',
            isActive ? 'bg-gray-100 dark:bg-gray-900' : null
          ]
            .filter(Boolean)
            .join(' ')
        }
        to={to}>
        <Icon className="h-4 w-4" />
        {label}
      </NavLink>
    </li>
  );
}

function SideBar() {
  return (
    <div
      className="transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      id="application-sidebar">
      <div className="px-6">
        <NavLink
          aria-label="Brand"
          className="flex-none text-xl font-semibold dark:text-white"
          to="/">
          Brand
        </NavLink>
      </div>

      <nav className="p-6 w-full flex flex-col flex-wrap">
        <ul className="space-y-1.5">
          <SideBarItem icon={HomeIcon} label="Dashboard" to="/" />
          <SideBarItem icon={UsersIcon} label="Users" to="/users" />
        </ul>
      </nav>
    </div>
  );
}

SideBar.propTypes = {};
SideBarItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

SideBar.defaultProp = {};

export default SideBar;
