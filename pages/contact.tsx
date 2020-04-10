import React from 'react'
// import { ContactForm } from '~/components/ContactForm'

export default () => {
  return (
    <div className="layout-centered">
      {/* Implement this later when we implement a proper contact */}
      {/* 
      <p className="contact-page-header-text">
        If you prefer. Your can email me directly at{' '}
        <a href="mailto:sunny@glvn.co">sunny@glvn.co</a>
      </p> 
      <ContactForm /> 
      */}
      <p>
        The best way to reach me is to either email me directly or connect with
        me on LinkedIn.
      </p>
      <div className="contact-page-temporary-link-container">
        <a
          target="_blank noopener noreferrer"
          className="contact-page-temporary-link"
          href="mailto:sunny@glvn.co"
        >
          Email (sunny@glvn.co)
        </a>
        <a
          target="_blank noopener noreferrer"
          className="contact-page-temporary-link"
          href="https://linkedin.com/in/SunnyGolovine"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
