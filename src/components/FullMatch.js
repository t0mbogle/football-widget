import { useEffect, useState } from "react";
import getFullMatch from "../requests/getFullMatch";
import "../styles/fullmatch.css"

const FullMatch = () => {

    const [fullMatch, setFullMatch] = useState({});

    useEffect(() => {
        getFullMatch(setFullMatch);
    }, []);

    return (
        <div className="statistics-wrapper" data-testid="full-match-wrapper">
          <div className="possession">
            <span>{fullMatch.homePos}%</span>
            <span>Possession</span>
            <span>{fullMatch.awayPos}%</span>
          </div>
          <div className="possession-bars">
            <div className="possession-home"></div>
            <div className="possession-away"></div>
          </div>
          <div className="shots">
            <span>{fullMatch.homeShots}</span>
            <span>Shots</span>
            <span>{fullMatch.awayShots}</span>
          </div>
          <div className="shots-bars">
            <div className="shots-home"></div>
            <div className="shots-away"></div>
          </div>
          <div className="target">
            <span>{fullMatch.homeTarget}</span>
            <span>Shots on Target</span>
            <span>{fullMatch.awayTarget}</span>
          </div>
          <div className="target-bars">
            <div className="target-home"></div>
            <div className="target-away"></div>
          </div>
          <div className="corners">
            <span>{fullMatch.homeCorners}</span>
            <span>Corners</span>
            <span>{fullMatch.awayCorners}</span>
          </div>
          <div className="corners-bars">
            <div className="corners-home"></div>
            <div className="corners-away"></div>
          </div>
          <div className="cards">
            <div className="home-cards">
              <p className="card">Yellows {fullMatch.homeYellows}</p>
              <p className="card">Reds {fullMatch.homeReds}</p>
            </div>
            <div className="away-cards">
              <p className="card">Reds {fullMatch.awayReds}</p>
              <p className="card">Yellows {fullMatch.awayYellows}</p>
            </div>
          </div>
        </div>
    );
}

export default FullMatch;