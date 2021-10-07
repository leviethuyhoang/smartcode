

const Search = (props) => {
    const {width} = props;
    return (
        <div className = {`w-${width?`${width}`:'56'} relative text-gray-700 dark:text-gray-300`}>
            <input type="text" className={`w-${width?`${width}`:'56'} form-control box pr-10 placeholder-theme-8`} placeholder="Search..." />
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg> 
        </div>
    )
}
export default Search;