// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import SubRoutesNav from 'components/universal/SubRoutesNav'
import { type Media, withMediaQuery } from 'components/universal/MediaQuery'
import routesMap, { componentRoutes, conceptRoutes } from 'utils/routes-map'

import accessibleSVG from './media/accessibility.svg'
import bundleSVG from './media/bundle.svg'
import mergeSVG from './media/merge.svg'
import reactLogo from './media/react.svg'

import { component } from './home-screen.scss'

type Props = {
  media: Media,
}

const HomeScreen = ({ media }: Props) => (
  <div className={`${component} container-fluid`}>
    <div className="hero d-flex flex-column align-items-center">
      <h1 className={`${media.large && 'display-2'} text-primary mb-app`}>
        <u>C</u>omponentry
      </h1>

      <div className="text-center mb-3">
        <img className="logo react" src={reactLogo} alt="React" />
        <span className="ml-2 mr-3 plus">+</span>
        <span className="logo bootstrap">B</span>
      </div>

      <h2 className="mb-app text-center col-lg-9">
        Lightweight, simple and accessible components <br />built with React and
        Bootstrap v4
      </h2>
    </div>

    <div className="border border-right-0 border-left-0 d-flex justify-content-center align-items-center mb-app row py-1">
      <div className="banner-link">
        <Link to={routesMap.setup.pathname}>{routesMap.setup.name}</Link>
      </div>
      <div className="banner-link">
        {/* Library concepts guides navigation */}
        <SubRoutesNav label="Concepts" subRoutes={conceptRoutes} />
      </div>
      <div className="banner-link">
        {/* Component dropdown navigation */}
        <SubRoutesNav label="Components" subRoutes={componentRoutes} />
      </div>
      <div className="banner-link">
        <a href="https://github.com/crystal-ball/componentry">Github</a>
      </div>
    </div>

    <div className="mb-5 row justify-content-center">
      {[
        {
          header: 'Lightweight Bundle Size',
          icon: bundleSVG,
          text: (
            <p className="mb-0">
              Componentry is optimized for size and performance. With no external
              dependencies the library weighs in at 12.8kB. Advanced optimizations
              are possible using targeted ESM and ESNext build targets.
            </p>
          ),
        },
        {
          header: 'A++ Accessibility',
          icon: accessibleSVG,
          text: (
            <p className="mb-0">
              Components are written using{' '}
              <a href="https://www.w3.org/WAI/intro/aria" rel="noreferrer noopener">
                WAI-ARIA
              </a>{' '}
              roles and attributes for A++ fully accessible components out of the
              box. Internal component APIs even handle assigning dynamic aria
              attributes on subcomponents.
            </p>
          ),
        },
        {
          header: 'Consistent APIs',
          icon: mergeSVG,
          text: (
            <p className="mb-0">
              Spend more time writing and less time checking documentation with
              consistent APIs and event hooks across components. Consistent APIs and
              focused component concerns make component composition easy.
            </p>
          ),
        },
      ].map(({ header, icon, text }, idx) => (
        <div className="col-10 col-lg-7 d-flex justify-content-center mb-app">
          <div>
            <h3 className="feature-header">{header}</h3>
            <div className={`media pb-app${idx === 2 ? '' : ' border-bottom'}`}>
              <img
                className={`icon display-3 mr-3 d-none d-lg-block${
                  idx === 1 ? ' pull-right' : ''
                }`}
                src={icon}
                alt="Library bundle size is a small percentage of overall bundle"
              />
              <div className="media-body">{text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default withMediaQuery(HomeScreen)
