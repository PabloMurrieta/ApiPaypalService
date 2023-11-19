import axios from "axios"

const tokenP =  async () =>{

    const params = new URLSearchParams()
    params.append("grant_type","client_credentials")
    const {data:{access_token}} = await axios.post(`${process.env.PAYPAL_PAI_URL}/v1/oauth2/token`,params,{
        headers:{
            "Content-Type":'application/x-www-form-urlencoded'
        },
        auth:{
            username:process.env.CLIENT_ID || '',
            password:process.env.SECRET_KEY || ''
        }
    })

    return access_token 

}

export default tokenP