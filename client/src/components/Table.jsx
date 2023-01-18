import PropTypes from 'prop-types';

function Table({ data }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 border-collapse border border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4" scope="col">
              <div className="flex items-center">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id="checkbox-all-search"
                  type="checkbox"
                />
                <label className="sr-only" htmlFor="checkbox-all-search">
                  checkbox
                </label>
              </div>
            </th>
            <th className="px-6 py-3" scope="col">
              Name
            </th>
            <th className="px-6 py-3" scope="col">
              Location
            </th>
            <th className="px-6 py-3" scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id="checkbox-table-search-1"
                    type="checkbox"
                  />
                  <label className="sr-only" htmlFor="checkbox-table-search-1">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                scope="row">
                <div className="pl-3">
                  <div className="text-base font-semibold">{item.name}</div>
                  <div className="font-normal text-gray-500">{item.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default Table;
