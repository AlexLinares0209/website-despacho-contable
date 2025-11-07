
const TrajectoryCard = ({ trajectory }) => {
    return (
        <div className="timeline-item">
            <div className="icon">
                <i className={trajectory.icon}></i>
            </div>
            <div className="content">
                <h3>{trajectory.title}</h3>
                <p>{trajectory.description}</p>
            </div>
        </div>
    )
}

export default TrajectoryCard