import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './FullHeightContent.module.css'

const FullHeightContent = ({ content, footer }) => {
  return (
    <div className={classNames(styles['full-height-content'])}>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  )
}

FullHeightContent.propTypes = {
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
}

FullHeightContent.defaultProps = {}

export default FullHeightContent
