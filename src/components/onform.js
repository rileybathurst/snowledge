import React from 'react'
import { navigate } from 'gatsby-link'
// import Layout from '../layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Onform() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
      <form
        name="onform"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="chimp" aria-label="chimp" />

        <p hidden>
          <label for="bot-field">
            Don’t fill this out: <input name="bot-field" id="bot-field" onChange={handleChange} aria-label="bot-field" />
          </label>
        </p>

        <div>{/* these should probably be divs not p's */}
          <label for="name">
            Full Name
            <br />
            <input type="text" name="name" id="name" onChange={handleChange} aria-label="name" />
          </label>
        </div>

        <div>
          <label for="name">
            Resort Name
            <br />
            <input type="text" name="resort" id="resort" onChange={handleChange} aria-label="resort" />
          </label>
        </div>

        <div>
          <label for="name">
            Title
            <br />
            <input type="text" name="title" id="title" onChange={handleChange} aria-label="title" />
          </label>
        </div>

        <div>
          <label for="email">
            Email
            <br />
            <input type="email" name="email" id="email" onChange={handleChange} aria-label="email" />
          </label>
        </div>
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
  )
}

