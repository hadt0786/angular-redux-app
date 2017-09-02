
import { GetProfileService } from './get-profile.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';

describe('GetProfileService', () => {
  let subject: GetProfileService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetProfileService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
    });
  });

  beforeEach(inject([GetProfileService, MockBackend], (CustomerProfileApiService, mockBackend) => {
    subject = CustomerProfileApiService;
    backend = mockBackend;
  }));

  it('should get the profile data', () => {
    let data = { response: true }
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({ body: data });
      connection.mockRespond(new Response(options));
    });

    subject.getProfileData().subscribe((response) => {
      expect(response).toEqual(data);
    });
  });

});
