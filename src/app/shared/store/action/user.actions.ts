import { User } from './../../class/user';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
export const addUser = createAction('[User] Add User', (user: User) => ({
  user,
}));
