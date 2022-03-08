import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API ="https://localhost:7294/api/Auth/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
