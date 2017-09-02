import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { ProfileDataModel } from './profileModel';

type Payload = ProfileDataModel[];

@Injectable()
export class ProfileActions {
  static readonly GET_PROFILE_LOADING = 'GET_PROFILE_LOADING';
  static readonly GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
  static readonly GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';

  @dispatch()
  getProfileLoading = () => ({
    type: ProfileActions.GET_PROFILE_LOADING,
    payload: {},
  });

  @dispatch()
  getProfileSuccess = (payload) => ({
    type: ProfileActions.GET_PROFILE_SUCCESS,
    payload: payload.customerData,
  });

  @dispatch()
  getProfileError = () => ({
    type: ProfileActions.GET_PROFILE_ERROR,
    payload: null,
  });

}
