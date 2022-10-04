import { User } from './../../class/user';
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../action/user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state: UserState, { user }) => ({
    ...state,
    users: [...state.users, user],
  }))
);

export function reducer(state: UserState, action: Action) {
  return userReducer(state, action);
}
