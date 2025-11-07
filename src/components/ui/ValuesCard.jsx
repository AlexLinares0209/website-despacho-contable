
const ValuesCard = ({ value }) => {
    return (
        <div className="valores-item">
            <i className={value.icon}></i>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
        </div>
    )
}

export default ValuesCard