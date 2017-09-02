import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, Directive, Output } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { GetProfileService } from './services/get-profile.service';
import { ProfileActions } from './redux/profileActions';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

class MockGetProfileService {
  getProfileData() { return {} }
}

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, ProfileDetailsComponent
      ],
      providers: [ProfileActions,
        { provide: GetProfileService, useClass: MockGetProfileService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[HttpModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('Profile service call', () => {
    it('should fire the loading action on data load', () => {
      const actions = TestBed.get(ProfileActions);
      const service = TestBed.get(GetProfileService);
      const loadingSpy = spyOn(actions, 'getProfileLoading');
      spyOn(service, 'getProfileData').and.returnValue(Observable.throw([]));
      fixture.detectChanges();
      expect(loadingSpy).toHaveBeenCalled();
    });

    it('should call the error action when the service fails', () => {
      const service = TestBed.get(GetProfileService);
      const actions = TestBed.get(ProfileActions);
      const errorSpy = spyOn(actions, 'getProfileError');
      spyOn(service, 'getProfileData').and.returnValue(Observable.throw([]));
      fixture.detectChanges();
      expect(errorSpy).toHaveBeenCalled();
    });

    it('should fire the success action on successful data load', () => {
      const actions = TestBed.get(ProfileActions);
      const service = TestBed.get(GetProfileService);
      const successSpy = spyOn(actions, 'getProfileSuccess');
      spyOn(service, 'getProfileData').and.returnValue(Observable.of([]));
      fixture.detectChanges();
      expect(successSpy).toHaveBeenCalled(); 
    });
  });
});
