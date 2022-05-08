import { useEffect, useState } from "react"


const useInventoryes = () => {
    const [inventoryes, setInventoryes] = useState([])
    useEffect(() => {
        fetch('https://frozen-tor-80149.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventoryes(data))
    }, [])
    return [inventoryes, setInventoryes]
}
export default useInventoryes