
import { ProfileDataModel } from './profileModel';
import { ProfileActions } from './profileActions';
import { PROFILE_INITIAL_STATE } from './profileInitialState';
import { ProfileReducer } from './profileReducer';

describe('ProfileReducer', () => {
    it('should handle initial state', () => {
        expect(ProfileReducer(undefined, {}))
            .toEqual(PROFILE_INITIAL_STATE)
    });

    it('should disable the error and loaded flag when service call in progress', () => {
        let action = {
            type: ProfileActions.GET_PROFILE_LOADING,
            payload: {}
        };
        expect(ProfileReducer(PROFILE_INITIAL_STATE, action))
            .toEqual({
                loaded: false,
                error: false,
                data: {}
            })
    });

    it('should store the response in redux store and enable the loaded flag on success', () => {
        let mockData = {};
        let action = {
            type: ProfileActions.GET_PROFILE_SUCCESS,
            payload: mockData
        };
        expect(ProfileReducer(PROFILE_INITIAL_STATE, action))
            .toEqual({
                loaded: true,
                error: false,
                data: mockData
            })
    });

    it('should enable the error flag when the service call fails', () => {
        let action = {
            type: ProfileActions.GET_PROFILE_ERROR,
            payload: {}
        };
        expect(ProfileReducer(PROFILE_INITIAL_STATE, action))
            .toEqual({
                loaded: true,
                error: true,
                data: {}
            })
    });

});
