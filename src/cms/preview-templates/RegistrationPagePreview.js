import React from 'react'
import PropTypes from 'prop-types'
import { RegistrationPageTemplate } from '../../templates/registration-page'

const RegistrationPagePreview = ({ entry, widgetFor }) => {
  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (<RegistrationPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    pricing={{
      heading: entry.getIn(['data', 'pricing', 'heading']),
      description: entry.getIn(['data', 'pricing', 'description']),
      plans: pricingPlans,
    }}
  />)
}

RegistrationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RegistrationPagePreview
