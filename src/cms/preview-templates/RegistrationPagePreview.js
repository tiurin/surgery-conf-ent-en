import React from 'react'
import PropTypes from 'prop-types'
import { RegistrationPageTemplate } from '../../templates/registration-page'

const RegistrationPagePreview = ({ entry, widgetFor }) => (
  <RegistrationPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

RegistrationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RegistrationPagePreview
