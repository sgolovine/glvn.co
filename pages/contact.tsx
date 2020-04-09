import React from 'react'
import { ContactForm } from '~/components/ContactForm'

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
