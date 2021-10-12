
const { Fragment } = require("react")

const Logout = () => {

  return (
    <Fragment>
        <div  className="p-2 border-t border-theme-12 dark:border-dark-3">
          <div
            className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-toggle-right w-4 h-4 mr-2"
            >
              <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
              <circle cx={16} cy={12} r={3} />
            </svg>
            Logout
          </div>
        </div>
    </Fragment>
  )
}

export default Logout;