import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { NgModule, isDevMode } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { GetProfileService } from './services/get-profile.service';
import { rootReducer } from './redux/rootReducer';
import { ProfileActions } from './redux/profileActions';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    GetProfileService,
    ProfileActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<any>,
    devTools: DevToolsExtension
  ) {
    const devtoolInstalled = !!window['__REDUX_DEVTOOLS_EXTENSION__'];
    const enhancers = (isDevMode() && devtoolInstalled) ? [devTools.enhancer()] : []; // Provision to use the Redux dev tools
    ngRedux.configureStore(rootReducer, {}, [], enhancers);
  }
}
