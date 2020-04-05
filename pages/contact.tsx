import React from 'react'

export default () => {
  return (
    <div className="contact-form-container">
      <label htmlFor="contact-name">Name</label>
      <input className="contact-form-input" id="contact-name" />
      <label htmlFor="contact-email">Email</label>
      <input className="contact-form-input" id="contact-email" />
      <label htmlFor="contact-message">Message</label>
      <textarea className="contact-form-textarea" id="contact-message" />
      <div className="contact-form-button-container">
        <button className="form-button">Clear</button>
        <button className="form-button">Submit</button>
      </div>
    </div>
  )
}
