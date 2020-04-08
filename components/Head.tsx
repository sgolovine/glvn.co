/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This is the <head>
 * component for this site.
 */
import React from 'react'
import Head from 'next/head'

const favicon16 = require('~/assets/images/favicon16.png')
const favicon32 = require('~/assets/images/favicon16.png')

export const SiteHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="description" content="Website for Sunny Golovine" />
    <meta
      name="keywords"
      content="programmer,javascript,react,js,typescript,code"
    />
    <meta name="robots" content="all" />
    <meta name="googlebot" content="all" />
    <meta name="googlebot-news" content="all" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
    <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />

    <title>Sunny Golovine</title>
  </Head>
)
