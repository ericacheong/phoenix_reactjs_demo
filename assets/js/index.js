// for phoenix_html support, including form and button helpers
// copy the following scripts into your javascript bundle:
// * https://raw.githubusercontent.com/phoenixframework/phoenix_html/v2.10.0/priv/static/phoenix_html.js

import "phoenix_html"
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
