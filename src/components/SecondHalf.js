import getSecondHalf from "../requests/getSecondHalf";
import React, { useEffect, useState } from "react";

const SecondHalf = () => {
    const [secondHalf, setSecondHalf] = useState({});

    useEffect(() => {
        getSecondHalf(setSecondHalf);
    }, []);

    return (
        <div className="statistics-wrapper" data-testid="second-half-wrapper">
          <div className="possession">
            <span>{secondHalf.shHomePos}%</span>
            <span>Possession</span>
            <span>{secondHalf.shAwayPos}%</span>
          </div>
          <div className="shots">
            <span>{secondHalf.shHomeShots}</span>
            <span>Shots</span>
            <span>{secondHalf.shAwayShots}</span>
          </div>
          <div className="target">
            <span>{secondHalf.shHomeTarget}</span>
            <span>Shots on Target</span>
            <span>{secondHalf.shAwayTarget}</span>
          </div>
          <div className="corners">
            <span>{secondHalf.shHomeCorners}</span>
            <span>Corners</span>
            <span>{secondHalf.shAwayCorners}</span>
          </div>
          <div className="cards">
            <div className="home-cards">
              <p className="card">Yellows {secondHalf.shHomeYellows}</p>
              <p className="card">Reds {secondHalf.shHomeReds}</p>
            </div>
            <div className="away-cards">
              <p className="card">Reds {secondHalf.shAwayReds}</p>
              <p className="card">Yellows {secondHalf.shAwayYellows}</p>
            </div>
          </div>
        </div>
    );
}

export default SecondHalf;