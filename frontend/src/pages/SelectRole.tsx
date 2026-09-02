import { useState } from 'react'
import { useAppData } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { authService } from '../main'
import axios from 'axios'

type Role = "customer" | "rider" | "seller" | null
const SelectRole = () => {
    const [role, setRole] = useState<Role>(null)
    const {setUser} = useAppData()
    const navigate = useNavigate()
    
    const roles: Role[] = ["customer", "rider", "seller"]

    const addRole = async () => {
        try {
            const {data} = await axios.post(`${authService}/api/auth/add/role`, {role}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            localStorage.setItem("token", data.token)
            setUser(data.user)
            navigate("/", {replace: true})

        } catch (error) {
            console.log(error)
            alert("Error adding role. Please try again.")
        }
    }
}

export default SelectRole;