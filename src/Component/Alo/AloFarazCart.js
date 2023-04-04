import { useEffect } from "react"
import MainAlo from "./MainAlo"
const AloFarazCart = () => {
    useEffect(() => {
        document.title = "FarazCart | Communication"
    })
    return(
        <>
            <MainAlo />
        </>
    )
}
export default AloFarazCart;