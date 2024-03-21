import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async createUser(body: any, token: any) {
    const headers = {
      Authorization: `Bearer ${token}`,
      accept: 'application/scim+json',
      'content-type': 'application/scim+json',
      usershouldnotneedtoresetpassword: true,
    };
    try {
      const response = await axios.post(`/api/v2.0/Users`, body, {
        headers: headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  async generateAccessToken() {
    const body = {
      grant_type: 'client_credentials',
      scope: 'openid',
      client_id: environment.apiClientId,
      client_secret: environment.apiClientSecret,
    };
    try {
      const response = await axios.post(
        `/api/oauth2/token`,
        new URLSearchParams(body).toString(),
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': "*"
          },
        },
      );
      return response.data;
    } catch (error: any) {
      // console.error('Error generating access token:', error);
      throw error;
    }
  };

  async loginUser(email: any, password: any){
    const body: any = {
      grant_type: 'password',
      password: password,
      scope: 'openid',
      username: email,
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
    };
    try {
      const response = await axios.post(
        `/api/oauth2/token`,
        new URLSearchParams(body).toString(),
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  async getUserData(token: any) {
    const headers = {
      Authorization: `Bearer ${token}`,
      usershouldnotneedtoresetpassword: false,
    };
    try {
      const response = await axios.get(`/api/v2.0/Me`, {
        headers: headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  

  async generateEmailOTP(token: any, body: any) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.post(
        `/api/v2.0/factors/emailotp/transient/verifications`,
        body,
        {
          headers: headers,
        },
      );
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  // Verify email otp
  async verifyEmailOTP(trxnId: any, token: any, body: any) {
    try {
      const header = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        `/api/v2.0/factors/emailotp/transient/verifications/` +
          trxnId +
          '?returnJwt=true',
        body,
        {
          headers: header,
        },
      );
      return response;
    } catch (error) {
      throw error;
    }
  };


  getStats() {
    return this.http.get(`/user/stats`);
  }
 
 
}