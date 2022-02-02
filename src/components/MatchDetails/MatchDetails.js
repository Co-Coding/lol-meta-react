import "./MatchDetails.scss"
export default function MatchDetails(props) {

    const { summData } = props
    console.log('match details: ' + summData)
    return (
        <div class="matchDetails">
            <h5>MATCH DETAILS {summData.info.gameDurationMinSec} </h5>
        </div>
    )
}

