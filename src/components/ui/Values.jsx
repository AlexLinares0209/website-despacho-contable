import valuesData from "../../data/values.json"
import ValuesCard from "./ValuesCard"

const Values = () => {
    return (
        <div className="valores">
            <div className="valores__content">
                <h2>Nuestros Valores Fundamentales</h2>
                <div className="valores-list">
                    {
                        valuesData.map((value) => (
                            <ValuesCard key={value.id} value={value} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Values