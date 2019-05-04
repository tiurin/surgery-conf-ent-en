import React from 'react'
import PropTypes from 'prop-types'
import { SponsorsPageTemplate } from '../../templates/sponsors-page'

const SponsorsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <SponsorsPageTemplate
      image={entry.getIn(['data', 'image'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
    />
  )
}

SponsorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SponsorsPagePreview
