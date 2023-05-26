import { BASE_URL} from "./base_url";
import axios from "axios"
export const getAllEnds= async(names)=>{
    let Ends;
    let URL
    if(!names){
        URL = BASE_URL+"/sayt"
    }
    else{
        URL = BASE_URL+`/sayt/?names=${names}`
    }
    await axios.get(URL)
    .then(res=>{
        Ends=res.data
    })
    return Ends
    
}
export const getArtistById= async(id)=>{
    let End;
    await axios.get(`${BASE_URL}/sayt/${id}`)
    .then(res=>{
        End=res.data
    })
    return End
}
export const deleted = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/sayt/${id}`).then(res=>{
        message = res.data
    })
    return message
}
export const posted=(payload)=>{
    axios.post(`${BASE_URL}/sayt`,payload)
}
export const editing=(id,payload)=>{
    axios.put(`${BASE_URL}/sayt/${id}`,payload)
}