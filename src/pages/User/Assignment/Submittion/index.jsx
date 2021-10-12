import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import { Fragment, useEffect, useState } from "react";
import SubmmittionItem from "./SubmittionItem";
import submitionApi from "api/submittionApi";



const AllSubmittion = (props) => {

    const [listData,setListData] = useState([]);


    useEffect(()=> {
        const getData = async () => {
            const dataList = [];
            let i = 1;
            while(i < 50){
                try{
                    const response = await submitionApi.getSubmittion(i)
                    const data = {
                        id : response.id,
                        result : response.result.result
                    }
                    dataList.push(data)
                } catch(errors) {
                    console.log(errors)
                    setListData(dataList)
                    break;
                }    
                i++; 
            }
        }
        getData();
    },[])

    return (
        <Fragment>
            <HeaderPage>
                Bảng Kết Quả
            </HeaderPage>
            <Grid mt = "5">
                <Cell >
                    <Card>
                    <table className="table mt-5">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="whitespace-nowrap">ID</th>
                                <th className="whitespace-nowrap">Kết Quả</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listData.map((item,key) => 
                                <SubmmittionItem key = {key} id = {item.id} result = {item.result}/>
                            )}
                        </tbody>
                    </table>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllSubmittion;