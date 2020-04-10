import React, { useState } from 'react'
import { Event } from '~/model/common'

type FormState = {
  name: string
  email: string
  message: string
  submitted: boolean
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
  submitted: false,
}

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState)

  const setName = (e: Event) =>
    setForm({
      ...form,
      name: e.target.value,
    })

  const setEmail = (e: Event) =>
    setForm({
      ...form,
      email: e.target.value,
    })

  const setMessage = (e: Event) =>
    setForm({
      ...form,
      message: e.target.value,
    })

  const setSubmitted = (submitted: boolean) => setForm({ ...form, submitted })

  const clearForm = () => {
    setForm(initialState)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (form.submitted) {
    return (
      <div className="contact-form-container contact-form-submitted-container">
        <p>Thank you for your message</p>
        <p>I will be in touch shortly</p>
        <button onClick={clearForm} className="contact-form-action-button">
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="contact-form-container">
      <label className="contact-form-label" htmlFor="contact-name">
        Name
      </label>
      <input
        onChange={setName}
        className="contact-form-input"
        id="contact-name"
        value={form.name}
      />

      <label className="contact-form-label" htmlFor="contact-email">
        Email
      </label>
      <input
        onChange={setEmail}
        className="contact-form-input"
        id="contact-email"
        value={form.email}
      />

      <label className="contact-form-label" htmlFor="contact-message">
        Message
      </label>
      <textarea
        onChange={setMessage}
        className="contact-form-textarea"
        id="contact-message"
        value={form.message}
      />

      <div className="contact-form-button-container">
        <button className="contact-form-action-button" onClick={clearForm}>
          Clear
        </button>
        <button className="contact-form-action-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}
