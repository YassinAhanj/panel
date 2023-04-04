import { useEffect } from "react"
import HeroNFC from "./HeroNFC"
import ModelHa from "./ModelHa"
const NfcYab = () => {
    useEffect(() => {
        document.title = "FarazCart | NFC founder"
    })
    return(
        <>
            <HeroNFC />
            <ModelHa />
        </>
    )
}
export default NfcYab;