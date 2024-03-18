import {useState} from "react";
import Counter from "./Counter";

const Coin = () => {
    const [result, setResult] = useState(null);
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);
    const flipCoin = () => {
        const newResult = Math.floor(Math.random()*2);
        setResult(newResult); 
        newResult === 0 ? setHeadsCount(headsCount + 1) : setTailsCount(tailsCount + 1);
    };

    return (
        <div>
            <button onClick={flipCoin}>Flip Me!</button>
            <div>
                {result !== null && result == 0 && (
                    <button key="heads">Heads</button>
                )}
                {result !== null && result == 1 && (
                    <button key="tails">Tails</button>
                )}    
            </div>
            <Counter 
                total={headsCount+tailsCount} 
                heads={headsCount} 
                tails={tailsCount}
            />
        </div>
    );
};

export default Coin;