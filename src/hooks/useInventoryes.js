import { useEffect, useState } from "react"


const useInventoryes = () => {
    const [inventoryes, setInventoryes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventoryes(data))
    }, [])
    return [inventoryes, setInventoryes]
}
export default useInventoryes