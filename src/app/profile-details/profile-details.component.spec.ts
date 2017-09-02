import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';


import { ProfileDetailsComponent } from './profile-details.component';

@Pipe({
  name: 'async',
  pure: false
})

export class MockAsyncPipe implements Pipe {
  name: string = '';
  transform(query: string, ...args: any[]): any {
    return query;
  }
}

describe('ProfileDetailsComponent', () => {
  let component: ProfileDetailsComponent;
  let fixture: ComponentFixture<ProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDetailsComponent, MockAsyncPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Test data bindings', () => {
    it('should bind the correct title', () => {
      component.profileDetails = {
        personalDetails: {
          title: 'Mr'
        }
      };
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('#title'));
      const el: HTMLElement = de.nativeElement;
      expect(el.innerHTML).toContain('Mr');
    });
  });
});
