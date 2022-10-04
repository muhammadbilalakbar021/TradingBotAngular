import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostProviders } from '../enums/host';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  get(path: string): any {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(`${HostProviders.development}/${path}`)
        .toPromise()
        .then((data: any) => {
          console.log(data);
          if (data == null) {
            console.log(data);
          }
          resolve(data.payload);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  post(path: string, obj: any): any {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(`${HostProviders.development}/${path}`, obj, {
          responseType: 'json',
        })
        .toPromise()
        .then((data: any) => {
          console.log(data);
          if (data == null) {
            console.log(data);
          }
          resolve(data.payload);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}
