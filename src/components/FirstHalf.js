import { useEffect, useState } from "react";
import getFirstHalf from "../requests/getFirstHalf";

const FirstHalf = () => {

    const [firstHalf, setFirstHalf] = useState({});

    useEffect(() => {
        getFirstHalf(setFirstHalf);
    }, []);

    return (
        <div className="statistics-wrapper" data-testid="first-half-wrapper">
          <div className="possession">
            <span>{firstHalf.fhHomePos}%</span>
            <span>Possession</span>
            <span>{firstHalf.fhAwayPos}%</span>
          </div>
          <div className="shots">
            <span>{firstHalf.fhHomeShots}</span>
            <span>Shots</span>
            <span>{firstHalf.fhAwayShots}</span>
          </div>
          <div className="target">
            <span>{firstHalf.fhHomeTarget}</span>
            <span>Shots on Target</span>
            <span>{firstHalf.fhAwayTarget}</span>
          </div>
          <div className="corners">
            <span>{firstHalf.fhHomeCorners}</span>
            <span>Corners</span>
            <span>{firstHalf.fhAwayCorners}</span>
          </div>
          <div className="cards">
            <div className="home-cards">
              <p className="card">Yellows {firstHalf.fhHomeYellows}</p>
              <p className="card">Reds {firstHalf.fhHomeReds}</p>
            </div>
            <div className="away-cards">
              <p className="card">Reds {firstHalf.fhAwayReds}</p>
              <p className="card">Yellows {firstHalf.fhAwayYellows}</p>
            </div>
          </div>
        </div>
    );
}

export default FirstHalf;
