export const FETCH_PROGRAM = 'fetch_program'

export const fetchProgram = () => {
    return dispatch => {
        let payload = [
            { id: '1', lesson: 'Matematik', start_time: '04:00', end_time: '07:00' },
            { id: '2', lesson: 'Fen', start_time: '11:00', end_time: '12:00' },
            { id: '3', lesson: 'Türkçe', start_time: '14:00', end_time: '15:00' },
            { id: '4', lesson: 'Tarih', start_time: '17:00', end_time: '20:00' }
        ]
        dispatch({
            type: FETCH_PROGRAM,
            payload: payload
        })
    }
}