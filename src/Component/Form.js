import "./FormStyles.css";

import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>
                    Your name
                </label>
                <input type="text"></input>
                <label>
                    Email
                </label>
                <input type="text"></input>
                <label>
                    Subject
                </label>
                <input type="text"></input>
                <label>
                    Messgae
                </label>
                <textarea rows="6" placeholder="Type Your Message"></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form
