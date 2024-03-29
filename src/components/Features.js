import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => {
  return (
  <div className="columns is-multiline">
    {gridItems.map(item => {
      let imageText;
      if (item.url) {
        imageText = <p><a href={item.url} target="_blank" >{item.text}</a></p>;
      } else {
        imageText = <p>{item.text}</p>;
      }
      return (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          {imageText}
        </section>
      </div>
    )})}
  </div>
)}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
