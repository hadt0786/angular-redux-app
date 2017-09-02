import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { ProfileReducer } from './profileReducer'

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        ProfileData: ProfileReducer
    }));