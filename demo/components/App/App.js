// @flow
import React, { Component, Fragment } from 'react'
import { object } from 'prop-types'
import * as Componentry from 'componentry'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

// Import SVG icons used by Icon component to generate svg symbol sprite
// TODO: Move icon imports to a project Icon component
import 'media/icons/bootstrap.svg'
import 'media/icons/check.svg'
import 'media/icons/check-box.svg'
import 'media/icons/close.svg'
import 'media/icons/chevron.svg'
import 'media/icons/copy.svg'
import 'media/icons/copied.svg'
import 'media/icons/info.svg'
import 'media/icons/share.svg'
import 'media/icons/stars.svg'
import 'media/icons/terminal.svg'
import 'media/icons/tune.svg'

// App Components
import registry from 'registry'
import AppNav from 'components/universal/AppNav'
import ScrollToTop from 'components/universal/ScrollToTop'
import routesMap from 'utils/routes-map'

// Screens
import ComponentsScreen from '../ComponentsScreen'
import ConceptsScreen from '../ConceptsScreen'
import FourOhFourScreen from '../FourOhFourScreen'
import SetupScreen from '../SetupScreen'
import HomeScreen from '../HomeScreen'
import JetpackScreen from '../JetpackScreen'

// ========================================================
// Componentry Theme Customization
// ========================================================

const { Close, Icon } = Componentry

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
const theme = {
  transitionDuration: 350,
  Button: {
    // Buttons for documentation site are primary theme color as default
    color: 'primary',
  },
  ModalHeader: {
    // Include a Close component in all modal headers by default
    Close,
  },
  DropdownTrigger: {
    // Include the chevron icon decoration by default in all dropdowns
    decoration: <Icon id="chevron" />,
  },
}

// ========================================================
// Magic Markdown Registry Setup
// ========================================================

// Register all Componentry components for convenience
Object.keys(Componentry).forEach(component => {
  if (component === 'ThemeProvider') return // Application only component
  registry.register(Componentry[component], component)
})

// Registry React Router <Link /> for convenience
registry.register(Link, 'Link')
registry.register(Fragment, 'Fragment')

const { setup, jetpack, concepts, components } = routesMap

/**
 * Application class component:
 *
 * 1. Adds the Magic Markdown registry to React's context
 * 2. Creates the application React Router router instance
 * 3. Sets up application level routing and components
 */
class App extends Component<{}> {
  static childContextTypes = { REGISTRY: object }

  getChildContext() {
    return { REGISTRY: registry.getRegistry() }
  }

  render() {
    return (
      <DocumentTitle title="Componentry">
        <BrowserRouter basename={process.env.PUBLIC_PATH}>
          <Componentry.ThemeProvider theme={theme}>
            {/* Restores scroll position to page top on route change */}
            <ScrollToTop />

            {/* Show app navigation on every page but home page */}
            <Route path="/:path" component={AppNav} />

            {/* Application level routing */}
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path={setup.pathname} component={SetupScreen} />
              <Route path={jetpack.pathname} component={JetpackScreen} />
              <Route
                path={`${concepts.pathname}/:concept?`}
                component={ConceptsScreen}
              />
              <Route
                path={`${components.pathname}/:component?`}
                component={ComponentsScreen}
              />
              <Route component={FourOhFourScreen} />
            </Switch>
          </Componentry.ThemeProvider>
        </BrowserRouter>
      </DocumentTitle>
    )
  }
}

export default hot(module)(App)
