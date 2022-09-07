import { addUserFailure, addUserStart, addUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux"
import {publicRequest, userRequest} from '../requestMetods'
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux"


export const login = async (dispatch, user)=>{
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const getProduct = async (dispatch)=>{
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch)=>{
    dispatch(deleteProductStart())
    try {
        // const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch)=>{
    dispatch(updateProductStart())
    try {
        // const res = await userRequest.update(`/products/${id}`)
        dispatch(updateProductSuccess({id, product}))
    } catch (error) {
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch)=>{
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/products/`, product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure())
    }
}

export const getUsers = async (dispatch, user)=>{
    dispatch(getUsersStart())
    try {
        const res = await userRequest.get("/users", user)
        dispatch(getUsersSuccess(res.data))
    } catch (error) {
        dispatch(getUsersFailure())
    }
}

export const addUsers = async (user, dispatch)=>{
    dispatch(addUserStart())
    try {
        const res = await userRequest.post(`/auth/register`, user)
        dispatch(addUserSuccess(res.data))
    } catch (error) {
        dispatch(addUserFailure())
    }
}