// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import routesMap, { componentRoutes, conceptRoutes } from 'utils/routes-map'
import SubRoutesNav from 'components/universal/SubRoutesNav'

import accessibleSVG from './media/accessibility.svg'
import bundleSVG from './media/bundle.svg'
import mergeSVG from './media/merge.svg'
import reactLogo from './media/react.svg'

import { component } from './home-screen.scss'

export default () => (
  <div className={component}>
    <div className="hero d-flex flex-column align-items-center">
      <h1 className="display-2 text-primary mb-5">
        <u>C</u>omponentry
      </h1>

      <div className="text-center mb-3">
        <img className="logo react-logo" src={reactLogo} alt="React" />
        <span className="ml-2 mr-3 display-3">+</span>
        <span className="logo bootstrap-logo">B</span>
      </div>

      <h2 className="mb-5 text-center w-75">
        Lightweight, simple and accessible components <br />built with React and
        Bootstrap v4
      </h2>
    </div>

    <div className="home-nav border border-right-0 border-left-0 d-flex justify-content-center align-items-center mb-4">
      <div className="m-3">
        <Link to={routesMap.setup.pathname}>{routesMap.setup.name}</Link>
      </div>
      <div className="my-3">
        {/* Library concepts guides navigation */}
        <SubRoutesNav label="Concepts" subRoutes={conceptRoutes} />
      </div>
      <div className="my-3">
        {/* Component dropdown navigation */}
        <SubRoutesNav label="Components" subRoutes={componentRoutes} />
      </div>
      <div className="m-3">
        <a href="https://github.com/crystal-ball/componentry">Github</a>
      </div>
    </div>

    <div className="mb-5 row justify-content-center">
      <div className="col-7 d-flex justify-content-center my-4">
        <div>
          <h3 className="feature-header">Lightweight Bundle Size</h3>
          <div className="media feature">
            <img
              className="icon display-3 mr-3"
              src={bundleSVG}
              alt="Library bundle size is a small percentage of overall bundle"
            />
            <div className="media-body">
              <p>
                Componentry is optimized for size and performance. With no external
                dependencies the library weighs in at 12.8kB. Advanced optimizations
                are possible using targeted ESM and ESNext build targets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-7 d-flex justify-content-center my-4">
        <div>
          <h3 className="feature-header">Consistent APIs</h3>
          <div className="media feature">
            <div className="media-body">
              <p>
                Spend more time writing and less time checking documentation with
                consistent APIs and event hooks across components. Consistent APIs
                and focused component concerns make component composition easy.
              </p>
            </div>
            <img
              className="icon display-3 mr-3"
              src={mergeSVG}
              alt="Different components utilize the same API"
            />
          </div>
        </div>
      </div>
      <div className="col-7 d-flex justify-content-center my-4">
        <div>
          <h3 className="feature-header">A++ Accessibility</h3>
          <div className="media feature border-bottom-0">
            <img
              className="icon display-3 mr-3"
              src={accessibleSVG}
              alt="Library focuses on A++ accessibility"
            />
            <div className="media-body">
              <p>
                Components are written using{' '}
                <a
                  href="https://www.w3.org/WAI/intro/aria"
                  rel="noreferrer noopener"
                >
                  WAI-ARIA
                </a>{' '}
                roles and attributes for A++ fully accessible components out of the
                box. Internal component APIs even handle assigning dynamic aria
                attributes on subcomponents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
