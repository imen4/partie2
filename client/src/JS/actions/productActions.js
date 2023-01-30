import axios from "axios";
import {GET_PRODUCTS_LOAD,GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCESS , GET_PRODUCT} from "../constant/productActionTypes"

export const getProducts = ()=>async(dispatch) =>{
    dispatch({type:GET_PRODUCTS_LOAD})
    try {
        let result = await axios.get('/api/product/')
        console.log(result)
        dispatch({type:GET_PRODUCTS_SUCCESS , payload : result.data.response , payMsg:result.data.message})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAIL,payload:error})
        console.log(error)
    }
}


export const getProduct = (id)=>(dispatch)=>{
    axios.get(`/api/product/${id}`)
    .then((res)=>dispatch({type:GET_PRODUCT , payload:res.data.response}))
    .catch((err)=>console.log(err))
}



