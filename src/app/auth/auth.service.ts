import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  baseApiUrl = 'https://bookingclone.one/'

  login(payload: { email: string, password: string }) {
    // const fd = new FormData()
    // fd.append('email', payload.email)
    // fd.append('password', payload.password)
    // return this.http.post(`${this.baseApiUrl}auth`, fd);   

    return this.http.post(`${this.baseApiUrl}auth`, payload);   
  }
}