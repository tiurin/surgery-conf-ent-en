import React from 'react'
import PropTypes from 'prop-types'
import { SpeakersPageTemplate } from '../../templates/speakers-page'

const SpeakersPagePreview = ({ entry }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <SpeakersPageTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
    />
  )
}

SpeakersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SpeakersPagePreview
