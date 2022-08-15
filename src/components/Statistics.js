import FullMatch from "./FullMatch"
import FirstHalf from "./FirstHalf";
import SecondHalf from "./SecondHalf";
import { useState } from "react";
import "../styles/statistics.css"

const Statistics = () => {
    const [fullMatch, setFullMatch] = useState(true);
    const [firstHalf, setFirstHalf] = useState(false);
    const [secondHalf, setSecondHalf] = useState(false);
    const [content, setContent] = useState(<FullMatch />)

    const handleFullMatch = () => {
        setFullMatch(true);
        setContent(<FullMatch />);
    }

    const handleFirstHalf = () => {
        setFirstHalf(true);
        setContent(<FirstHalf />)
    }

    const handleSecondHalf = () => {
        setSecondHalf(true);
        setContent(<SecondHalf />)
    }

    return (
        <div className="statistics">
          <div className="buttons">
            <button className="button" onClick={handleFullMatch}>Full Match</button>
            <button className="button" onClick={handleFirstHalf}>First Half</button>
            <button className="button" onClick={handleSecondHalf}>Second Half</button>
          </div>
          {content}
        </div>
    );
}

export default Statistics;