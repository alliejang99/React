import { connect } from 'react-redux'
import Control from '../components/Control'

export default connect(
  null,
  (dispatch)=>{
    return {
      onClick: (mode)=>{
        dispatch({type:mode});
      }
    }
  }
)(Control);