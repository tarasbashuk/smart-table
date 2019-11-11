import { SHOW_URL_PREVIEW, HIDE_URL_PREVIEW } from '../actions/types'

export const showURLPreview = (URL) => dispatch => {
    dispatch({
      type: SHOW_URL_PREVIEW,
      payload: URL
    })
  }

export const hideURLPreview = () => dispatch => {
    dispatch({
      type: HIDE_URL_PREVIEW,
    })
  }