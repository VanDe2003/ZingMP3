import actionTypes from './actionTypes';
import * as apis from '../../apis'

export const getHome = () => async (dispatch) => {
	try {
		const response = await apis.getHome()
		if (response?.data.err === 0 ) {
			// handle when success
			dispatch({
				type: actionTypes.GET_HOME,
				homeData: response.data.data.items
			})
			
		} else {
			// handle when fail
			dispatch({
				type: actionTypes.GET_HOME,
				homeData: null
			})
		}


	} catch (error) {
		dispatch({
			type: actionTypes.GET_HOME,
			homeData: null
		})
	}
}


// new Promise(async(resolve, reject) => {
// 	try {
// 		const response = await apis.getHome()
// 		if (response?.data.err === 0 ) {
// 			// handle when success
			
// 		} else {
// 			// handle when fail
// 		}


// 	} catch (error) {
// 		reject(error)
// 	}
// })