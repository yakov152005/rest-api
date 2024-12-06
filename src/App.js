import './App.css';
import Manager from "./componants/Manager";
import {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">

            <div>
                <div>
                    <b>Loading...</b>
                    <div className="spinner-border text-primary" role="status"/>
                </div>

                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        👍🏻
                    </button>
                    <b style={{color: "blue"}}>{count}</b>
                </div>
            </div>
            <br/>

            <div>
                <Manager/>
            </div>

        </div>
    );
}



