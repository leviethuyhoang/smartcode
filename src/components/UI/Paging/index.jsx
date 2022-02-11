import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Paging = (props) => {

    const { total, limit, page } = props;

    const history = useHistory();

    const totalPageRenderDefault = 10;
    const arr = new Array(totalPageRenderDefault);

    const [offsetPage, setOffsetPage] = useState(Math.ceil(page/10) - 1);


    const getTotalOffsetPage = () => {
        const totalPage = getTotalPage();
        const totalOffsetPage = totalPage/totalPageRenderDefault;
        const totalOffsetPageClear = Math.floor(totalOffsetPage);

        return totalOffsetPage === totalOffsetPageClear ? totalOffsetPageClear - 1 : totalOffsetPageClear;
    }
    
    const getTotalPage = () => {
        return Math.ceil(total/limit);
    }

    const goToLastOffsetPage = () => {
        setOffsetPage(getTotalOffsetPage());
    }

    const goToFirstOffsetPage = () => {
        setOffsetPage(0);
    }

    const nextOffsetPage = () => {
        const totalOffsetPage = getTotalOffsetPage();
        +totalOffsetPage !== +offsetPage && setOffsetPage(prev =>  prev + 1);
    }

    const prevOffsetPage = () => {
        +offsetPage > 0 && setOffsetPage(prev => prev - 1);
    }

    const changePage = (page) => {
        history.push({
            search: `?offset=${page}&limit=${limit}`
        })
    }

    const handleChangeLimit = (e) => {

        const limit = e.target.value;

        history.push({
            search : `?offset=${1}&limit=${limit}`
        })
    }

    const renderPageNumber = () => {
        const totalOffsetPage = getTotalOffsetPage();
        const totalPageNumber = getTotalPage();
        const pageNumbers = [...arr].map((item, index) => {

            const pageNumber = index + 1 + offsetPage * totalPageRenderDefault;
            if(totalPageNumber >= pageNumber){
                return <li key={pageNumber} onClick={changePage.bind(null,pageNumber)}> <div className={`pagination__link ${+pageNumber === +page && 'pagination__link--active'}`}>{pageNumber}</div> </li>
            } 
            return null;
        })

        if(offsetPage === 0){

            return <Fragment>
                    {pageNumbers}
                { totalPageNumber > totalPageRenderDefault && <li> <div className="pagination__link">...</div> </li>}
            </Fragment>

        } else if(offsetPage > 0 && offsetPage < totalOffsetPage ) {

            return <Fragment>
                <li> <div className="pagination__link">...</div> </li>
                    {pageNumbers}
                <li> <div className="pagination__link">...</div> </li>
            </Fragment>

        } else {

            return <Fragment>
                <li> <div className="pagination__link">...</div> </li>
                    {pageNumbers}
            </Fragment>
            
        }
    }

    return (
        <Fragment>
            <div className="intro-y flex flex-wrap justify-center sm:flex-row sm:flex-nowrap items-center mt-3 w-full">
                <ul className="pagination">
                    <li>
                    <div className="pagination__link" onClick={goToFirstOffsetPage}> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-left w-4 h-4"><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></svg> </div>
                    </li>
                    <li>
                    <div className="pagination__link" onClick={prevOffsetPage} > <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left w-4 h-4"><polyline points="15 18 9 12 15 6" /></svg> </div>
                    </li>
                    {
                        renderPageNumber()
                    }
                    <li>
                    <div className="pagination__link" onClick={nextOffsetPage}> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right w-4 h-4"><polyline points="9 18 15 12 9 6" /></svg> </div>
                    </li>
                    <li>
                    <div className="pagination__link" onClick={goToLastOffsetPage}> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right w-4 h-4"><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg> </div>
                    </li>
                </ul>
                <select onChange={handleChangeLimit} className="w-20 form-select box mt-3 sm:mt-0">
                    <option value={10} >10</option>
                    <option value={20} >20</option>
                    <option value={30} >30</option>
                </select>
            </div>
        </Fragment>
    )
}
export default Paging;