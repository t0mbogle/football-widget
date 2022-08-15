import "../styles/overview.css"
import React, { useEffect, useState } from "react";
import getOverview from "../requests/getOverview";

const Overview = () => {

    const [overview, setOverview] = useState({});

    useEffect(() => {
        getOverview(setOverview);
    }, []);

    return (
      <div>
        <div className="competition-wrapper">
          <h1 className="competition">{overview.competition}</h1>
        </div>
        <div className="overview-wrapper">
          <div className="teams">
            <div className="team-data">
              <img 
                src="https://cdn.fantasyiteam.com/bethub/teams/150x150/x0vuldayagbmwazqjgbozu0v.png" 
                alt="team badge"
                className="team-badge"
                >
              </img>
              <h3>{overview.germany}</h3>
            </div>
            <div className="team-data">
              <img 
                src="https://cdn.fantasyiteam.com/bethub/teams/150x150/185xqd7s06sm2t85sxzfkrl.png" 
                alt="team badge"
                className="team-badge"
                >
              </img>
              <h3>{overview.france}</h3>
            </div>
          </div>
          <div className="scores">
            <div className="full-time">FT</div>
            <div className="score-details">
              <p>{overview.homeScore}</p>
              <p>{overview.awayScore}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Overview;