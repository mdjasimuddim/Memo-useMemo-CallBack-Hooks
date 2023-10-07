import React from 'react'
import { Helmet } from 'react-helmet'

const Page_title = ({title}) => {
  return (
    <Helmet>
        <title>{title}</title>
    </Helmet>
  )
}

export default Page_title