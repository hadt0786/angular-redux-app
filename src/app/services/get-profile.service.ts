import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetProfileService {

  constructor(private http: Http) { }

  getProfileData() {
    return this.http.get('../../../assets/profileData.json')
      .map(response => response.json());
  }
}
