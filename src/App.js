import React, { Component } from 'react'

import { Router, browserHistory } from 'react-router'
import routes from './reactstrap/lib/routes'

import { ThemeContainer } from './components/Theme/ThemeContainer'
import ThemeSelector from './components/Theme/ThemeSelector'

class App extends Component {
  render() {
    return (
      <ThemeContainer>
        <ThemeSelector />
        <Router history={browserHistory} routes={routes} />
      </ThemeContainer>
    )
  }
}

export default App
