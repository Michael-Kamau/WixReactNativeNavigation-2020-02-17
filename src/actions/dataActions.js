import {ADD_USER} from "./types";

export const addUser=(userData)=> dispatch=> {
    const data={
        name:userData.username,
        password:userData.password
    }
    dispatch(
        {
            type:ADD_USER,
            payload:data
        }
        )
}

