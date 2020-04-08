import React from 'react'

const ContactForm = () => (
  <div className="contact-form-container">
    <label className="contact-form-label" htmlFor="contact-name">
      Name
    </label>
    <input className="contact-form-input" id="contact-name" />
    <label className="contact-form-label" htmlFor="contact-email">
      Email
    </label>
    <input className="contact-form-input" id="contact-email" />
    <label className="contact-form-label" htmlFor="contact-message">
      Message
    </label>
    <textarea className="contact-form-textarea" id="contact-message" />
    <div className="contact-form-button-container">
      <button className="contact-form-action-button">Clear</button>
      <button className="contact-form-action-button">Submit</button>
    </div>
  </div>
)

export default () => {
  return (
    <div className="layout-centered">
      <p className="contact-page-header-text">
        If you prefer. Your can email me directly at{' '}
        <a href="mailto:sunny@glvn.co">sunny@glvn.co</a>
      </p>
      <ContactForm />
    </div>
  )
}
