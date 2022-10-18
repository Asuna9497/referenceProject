import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PensionServiceService {
  // Authorisation : "http://localhost:8081/"
  // disbursement : "http://localhost:8083/"
  // process : "http://localhost:8084/"

  //base url
  public _authurl = 'http://localhost:8081/';
  public _url = 'http://localhost:8082/';
  public _disburseurl = 'http://localhost:8083/';
  public _processurl = 'http://localhost:8084/';

  constructor(private _http: HttpClient) {
    console.log('inside books');
  }

  //service method for login
  getLogedIn(credential: any) {
    return this._http.post<any>(
      this._authurl + 'auth/authenticate',
      credential
    );
  }

  //service method for pension Detail Validation
  getPensionDetails(data: any) {
    console.log('successfully pension details');
    //getting token from session
    const token = sessionStorage.getItem('token');

    //passing token to header
    const header = token ? { Authorization: `Bearer ${token}` } : undefined;
    console.log('toekn is added');
    //http request for login
    return this._http.post<any>(
      this._processurl + 'process/PensionDetail',
      {
        name: data.name,
        dateOfBirth: data.dateOfBirth,
        pan: data.pan.toUpperCase(),
        aadharNumber: Number(data.aadharNumber),
        pensionType: data.pensionType,
      },
      {
        headers: header,
      }
    );
  }

  //service Method for Pension Disbursement.
  disburse(data: any) {
    console.log("inside process");
    //getting token from session
    const token = sessionStorage.getItem('token');

    //passing token to header
    const header = token ? { Authorization: `Bearer ${token}` } : undefined;

    //http reuest for pension Deisbursement
    return this._http.post<any>(
      this._processurl + 'process/ProcessPension',
      data,
      {
        headers: header,
      }
    );
  }
}
