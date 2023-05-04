import React, { useState } from "react";

const Problem1 = () => {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);
    const [input, setInput] = useState("Your Input here");
    return (
        <>
            <h1>Problem 1(Basic Level)</h1>
            <div>
                <p>
                    Create a simple counter component that displays a number and
                    has two buttons, one to increment the counter and one to
                    decrement it.
                </p>
                <h1>{count}</h1>
                <div>
                    <button onClick={() => setCount(count + 1)}>
                        Increment
                    </button>
                    <button onClick={() => setCount(count - 1)}>
                        Decrement
                    </button>
                </div>
            </div>
            <div>
                <p>
                    Create a component that displays a checkbox and updates a
                    state variable when the checkbox is checked or unchecked.
                </p>
                <h1>State: {check ? "True" : "False"}</h1>
                <label>Checkbox</label>
                <input type="checkbox" onClick={() => setCheck(!check)} />
            </div>
            <div>
                <p>
                    Create a component that displays an input field and updates
                    a state variable with the input value as the user types.
                </p>
                <h1>Input: {input}</h1>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
            </div>
        </>
    );
};

export default Problem1;
