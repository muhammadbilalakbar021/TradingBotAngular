import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  tokenexists(): boolean {
    try {
      return sessionStorage.getItem('signin') ? true : false;
    } catch (error) {
      throw new Error('Error while getting token');
    }
  }
}
