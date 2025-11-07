
const TeamCard = ({ team }) => {
    return (
        <div className="team-item animate__animated animate__slideInLeft">
            <img src={team.image} alt="" />
            <div className="team-item-info-user">
                <h3>{team.user}</h3>
                <span>{team.position}</span>
                <p>{team.shortInformation}</p>
            </div>
        </div>
    )
}

export default TeamCard
