/**
 * This is the header "helmet"
 * for glvn.co
 *
 * All meta tags and things for SEO should go here.
 * Wraps around site in gatsby-browser.js
 */
import React from 'react'
import { Helmet } from 'react-helmet'

export default () => (
  <Helmet>
    <meta name="description" content="Website for Sunny Golovine" />
    <meta
      name="keywords"
      content="programmer,javascript,react,js,typescript,code"
    />
    <meta name="robots" content="all" />
    <meta name="googlebot" content="all" />
    <meta name="googlebot-news" content="all" />
  </Helmet>
)
