import React, { useState } from "react";

const Problem2 = () => {
    const [fruits, setFruits] = useState([]);
    const [formData, setFormData] = useState({});
    return (
        <>
            <h1>Problem 2(Intermediate level)</h1>
            <div>
                <p>
                    Create a component that displays a list of items and allows
                    the user to add and remove items from the list using
                    useState.
                </p>
                <ul>
                    {fruits &&
                        fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
                </ul>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setFruits([...fruits, e.target.fruit.value]);
                    }}
                >
                    <input type="text" name="fruit" />
                    <button>Add</button>
                </form>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setFruits(
                            fruits.filter(
                                (fruit) => fruit !== e.target.remove.value
                            )
                        );
                    }}
                >
                    <input type="text" name="remove" />
                    <button>Remove fruit</button>
                </form>
            </div>
            <div>
                <p>
                    Create a component that displays a form with multiple input
                    fields and updates a state object with the input values as
                    the user types.
                </p>
                <p>FirstName: {formData.firstName}</p>
                <p>LastName: {formData.lastName}</p>

                <form>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </form>
            </div>
        </>
    );
};

export default Problem2;
