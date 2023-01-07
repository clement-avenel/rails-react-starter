import PropTypes from 'prop-types';

function IconButton({ icon: Icon }) {
  return (
    <button
      className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
      type="button">
      <Icon className="h-5 w-5" />
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired
};
IconButton.defaultProp = {};

export default IconButton;
