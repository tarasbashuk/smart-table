import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Iframe from 'react-iframe'
import injectSheet from 'react-jss'

import styles from './styles/URLPreviewModalStyles'
import { hideURLPreview } from '../actions/URLPreview'

const URLPreviewModal = ({ classes, hideURLPreview, URL }) => {
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp, false);
        document.addEventListener('click', handleOutsideClick, false)

         return () => {
          window.removeEventListener('keyup', handleKeyUp, false);
          document.removeEventListener('click', handleOutsideClick, false)
        }

    },[])

    const URLToDisplay = `http://${URL}?embeded=true`
    const modal = React.createRef()

    // Handle the escape press event.
   const  handleKeyUp = e => {  
      const keys = {
        27: () => {
          e.preventDefault();
          hideURLPreview();
          window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    // Handle the mouse click outside modal.

    const handleOutsideClick = e => {
        if (modal) {
            if (!modal.current.contains(e.target)) {
              hideURLPreview()
              document.removeEventListener('click', handleOutsideClick, false);
            }
        }
    }

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modal} ref={modal}>
                <div className={classes.modalContent}>
                    <Iframe
                        width="560"
                        height="315"
                        url={URLToDisplay}
                    ></Iframe>
                </div>
            </div>

            <button
                type="button"
                className={classes.closeButton}
                onClick={hideURLPreview}
            />
        </div>
    )
}

URLPreviewModal.propTypes = {
    classes: PropTypes.object.isRequired,
    hideURLPreview: PropTypes.func.isRequired,
    URL: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    showURLPreview: state.URLPreview.showURLPreview,
    URL: state.URLPreview.URL,
})

export default connect(
    mapStateToProps,
    { hideURLPreview }
)(injectSheet(styles)(URLPreviewModal))
