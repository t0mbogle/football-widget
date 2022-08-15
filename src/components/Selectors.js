import { useState } from "react";
import "../styles/selectors.css"

const Selectors = () => {
    const selectors = ['Overview', 'General', 'GER', 'FRA', 'Player'];
    const [selected, setSelected] = useState('General');

    return (
        <div className="selectors-wrapper">
            {selectors.map((option) => 
                <button 
                  key={option}
                  className='selector'
                  onClick={() => setSelected(option)}>
                  {option}
                </button>
            )}
            <p className="selected">{selected}</p>
        </div>
    );
}

export default Selectors;