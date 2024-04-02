import "./FormStyles.css";
import React from 'react'

function Form() {
  return (
    <div className="form">
        <form action="https://formsubmit.co/lx1326607292@gmail.com" method="POST" >
            <label>Your Name</label>
            <input type="text" name="name"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Subject</label>
            <input type="text" name="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"name="content"></textarea>
            <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
