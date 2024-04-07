import axios from "axios";
import { PRODUCT } from "./constants"
import { useAppDispatch } from "./hooks";

export const requestProducts = () => async (dispatch=useAppDispatch()) => {
    dispatch({
        type:PRODUCT.LOAD
    });

    try {
        const json = await axios.get("stackline_frontend_assessment_data_2021.json");
        console.log(json.data);
        dispatch({
            type: PRODUCT.LOAD_SUCCESS,
            payload: json.data,
            isError: false
        });
    } catch (e) {
        console.log(e);
        dispatch({
            type: PRODUCT.LOAD_SUCCESS,
            payload: [],
            isError: true
        })
    }
    
}