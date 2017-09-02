import { ProfileDataModel } from './profileModel';
import { ProfileActions } from './profileActions';
import { PROFILE_INITIAL_STATE } from './profileInitialState';

export function ProfileReducer(state: ProfileDataModel = PROFILE_INITIAL_STATE, action) {
    switch (action.type) {
        case ProfileActions.GET_PROFILE_LOADING:
            return {
                ...state,
                loaded: false,
                error: false,
                data: action.payload
            };

        case ProfileActions.GET_PROFILE_SUCCESS:
            return {
                ...state,
                loaded: true,
                error: false,
                data: action.payload
            };

        case ProfileActions.GET_PROFILE_ERROR:
            return {
                ...state,
                loaded: true,
                error: true,
                data: {}
            };

    }
    return state;
}
