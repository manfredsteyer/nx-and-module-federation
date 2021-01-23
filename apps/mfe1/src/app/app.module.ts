import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import { Mfe1FeatureSearchModule } from '@nx-mf-demo/mfe1/feature-search';
import { Mfe1FeatureBookModule } from '@nx-mf-demo/mfe1/feature-book';
import { AuthLibModule } from '@nx-mf-demo/shared/auth-lib';

@NgModule({
  imports: [
    BrowserModule,
    FlightsModule,
    Mfe1FeatureBookModule,
    Mfe1FeatureSearchModule,
    RouterModule.forRoot(APP_ROUTES),
    AuthLibModule
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
