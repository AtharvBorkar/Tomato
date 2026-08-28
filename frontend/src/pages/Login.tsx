import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigte = useNavigate()

    const responsegoogle = async(authResult: any) =>{
        setLoading(true)
        try {
            const result = await axios.post(``)
        } catch (error) {
            
        }
    }
  return (
    <div>login</div>
  )
}

export default Login