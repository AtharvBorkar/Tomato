import { useState } from 'react'

type Role = "customer" | "rider" | "seller" | null
const SelectRole = () => {
    const [role, setRole] = useState<Role>(null)
  return (
    <div>SelectRole</div>
  )
}

export default SelectRole