import NFC from  "../../Json/NfcYab.json";
import "../../Style/NFCyab/ModelHa.css"
const ModelHa = () => {
    const brands = Object.keys(NFC);
    return (
        <section className="model_section">
            <table  className="tableNFC">
                <thead>
                    <tr className="background">
                        {brands.map((brand, index) => (
                            <th className="titleNFC" key={index}>{brand}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr className="background">
                        {brands.map((brand, index) => (
                            <td key={index}>
                                {NFC[brand].map((value, idx) => (
                                    <p className="DescriptionModel width" key={idx}>{value}</p>
                                ))}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </section>
    );
};
export default ModelHa;

