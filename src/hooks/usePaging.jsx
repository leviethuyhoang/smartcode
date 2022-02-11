
import queryString from "query-string";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const usePaging = (total) => {

    const location = useLocation();
    const {offset, limit} = queryString.parse(location.search);
    
    const offsetDefault = 1;
    const limitDefault = 10;

    if(total){
        return {
            page : offset || offsetDefault,
            offset : ((offset || offsetDefault) - 1) * 10,
            limit : limit || limitDefault,
            total
        }
    }
    return {
        page : offset || offsetDefault,
        offset : ((offset || offsetDefault) - 1) * 10,
        limit : limit || limitDefault,
    };
    
}
export default usePaging;