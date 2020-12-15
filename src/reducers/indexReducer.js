import { FETCH_PROGRAM } from "../actions/indexAction";

const INITIAL_STATE = {
    minutes: []
}
for (let j = 1; j <= 24; j++) {
    if(j < 10) {
        INITIAL_STATE.minutes.push({ id: `${j}`, time: `0${j}:00`, reserved: false })
    } else {
        INITIAL_STATE.minutes.push({ id: `${j}`, time: `${j}:00`, reserved: false })
    }
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PROGRAM:
            state.minutes.map((minuteItem) => {
                action.payload.map((programItem) => {
                    if(minuteItem.id >= parseInt(programItem.start_time) && minuteItem.id <= parseInt(programItem.end_time)) {
                        minuteItem.reserved = true;
                        minuteItem.lesson = programItem.lesson;
                    }
                })
            })
            return {
                ...state,
            }
        default:
            return state;
    }
}