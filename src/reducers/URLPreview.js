import { SHOW_URL_PREVIEW, HIDE_URL_PREVIEW,} from '../actions/types'

const initialState = {
    URL: '',
    showURLPreview: false
}

export default function(state = initialState, action) {
    const { type, payload } = action
    
    switch (type) {
        case SHOW_URL_PREVIEW:
            return {
                ...state,
                URL: payload,
                showURLPreview: true
            }

        case HIDE_URL_PREVIEW:
            return {
                ...state,
                showURLPreview: false
            }

        default:
            return { ...state }
    }
}