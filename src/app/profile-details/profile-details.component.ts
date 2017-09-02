import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  profileData: any;

  // Get the data as a prop for the component
  @Input() profileDetails: any;

  constructor() { }

  ngOnInit() { }

}
