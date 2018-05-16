import { Alert as ReactStrapAlert } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../Theme/ThemeImporter'

const Alert = props => {
  return (
    <Fragment>
      <ThemeImporter path="_alert">
        <ReactStrapAlert {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Alert.propTypes = ReactStrapAlert.propTypes

export default Alert
