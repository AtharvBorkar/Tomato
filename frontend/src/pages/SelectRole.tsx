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
    return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="w-full max-w-md space-y-6">
            <h1 className="text-center text-2xl font-bold">Choose Your Role</h1>

            <div className="space-y-4">
                {roles.map((r) => (
                    <button key={r} onClick={()=>setRole(r)} className="w-full py-3 px-4 rounded-xl border text-sm font-medium capitalize transition ${
                        role === r ? "border">
                        Continue as {r}
                    </button>
                ))}
            </div>
        </div>
    </div>
    )
}

export default SelectRole;