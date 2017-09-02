import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { GetProfileService } from './services/get-profile.service';
import { ProfileActions } from './redux/profileActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // Subscribing to the data in redux store
  @select(['ProfileData', 'loaded']) dataLoaded: Observable<boolean>;
  @select(['ProfileData', 'error']) dataError: Observable<boolean>;
  @select(['ProfileData', 'data']) profileDetails: Observable<any>;

  constructor(
    private GetProfileService: GetProfileService,
    private ProfileActions: ProfileActions) { }

  ngOnInit() {
    this.getProfileDetails();
  }

  getProfileDetails(): void {
    this.ProfileActions.getProfileLoading(); // Update redux store for loading state
    this.GetProfileService.getProfileData() // Call service to fetch the data
      .subscribe(response => {
        this.ProfileActions.getProfileSuccess(response); // Insert data into redux store by calling action
      }, err => {
        this.ProfileActions.getProfileError(); // Update redux store with error in fetching data
      });
  }
}
