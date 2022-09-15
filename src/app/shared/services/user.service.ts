import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../class/user';
import { addUser } from '../store/action/user.actions';
import { UserState } from '../store/reducer/user.reducer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store<UserState>) {
    const obj1 = {
      name: 'Camden David',
      date: 'Aug 6, 2022',
      company: 'Cursus Et LLP',
      country: 'Nigeria',
      city: 'Iguala',
      phone: '(415) 628-6853',
    };
    const obj2 = {
      name: 'Molly Pope',
      date: 'Jul 27, 2021',
      company: 'Faucibus Orci Institute',
      country: 'New Zealand',
      city: 'Campinas',
      phone: '1-403-634-0276',
    };
    const obj3 = {
      name: 'Alfonso Vinson',
      date: 'May 11, 2021',
      company: 'Non Ante Corp.',
      country: 'United Kingdom',
      city: 'Redlands',
      phone: '1-405-411-6336',
    };
    const user1 = new User(obj1);
    const user2 = new User(obj2);
    const user3 = new User(obj3);
    // user.setName(userName);
    // user.date = ''
    // user.company = ''
    // user.country = ''
    // user.city = ''
    // user.phone = ''
    this.store.dispatch(addUser(user1));
    this.store.dispatch(addUser(user2));
    this.store.dispatch(addUser(user3));
  }

  addUser(userObj: any): void {
    const user = new User(userObj);
    // user.setName(userName);
    // user.date = ''
    // user.company = ''
    // user.country = ''
    // user.city = ''
    // user.phone = ''

    this.store.dispatch(addUser(user));
  }
}
