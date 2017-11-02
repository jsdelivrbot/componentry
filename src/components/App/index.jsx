// @flow
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Import SVG font icons used in application without a component instance
import 'media/icons/close.svg'
import 'media/icons/chevron.svg'

import { AppNav } from 'components/universal/Navigations'
import Home from '../Home'
import { ThemeProvider } from '../../../lib'
import Installation from '../Installation'
import Accessibility from '../Accessibility'
import Components from '../Components'
import FourOhFour from '../FourOhFour'

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
// TODO: Docs
const theme = {
  defaultButtonColor: 'primary',
  visibilityTransitionLength: 350
}

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_PATH}>
    <ThemeProvider theme={theme}>
      <div>
        <Route path="/:path(accessibility|getting-started)" component={AppNav} />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/getting-started" component={Installation} />
            <Route path="/accessibility" component={Accessibility} />
            <Route path="/components/:component?" component={Components} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  </BrowserRouter>
)