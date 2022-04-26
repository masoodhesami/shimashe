import axios from "axios";
import Transactions from "../constants";
import {Dispatch} from "redux";
import {Action} from "../reducers/reducer"

export const getData = (): any => async (dispatch: Dispatch<Action>) => {
    try {
        const json = await axios.get("data.json");
        // console.log(json.data);
        dispatch({
            type: Transactions.LOAD_SUCCESS,
            payload: json.data,
        });
    } catch (e) {
        dispatch({
            type: Transactions.LOAD_SUCCESS,
            payload: [],
        });
    }
};