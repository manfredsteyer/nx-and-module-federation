import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { AuthLibModule } from '@nx-mf-demo/shared/auth-lib';
import { Mfe1FeatureSearchModule } from '@nx-mf-demo/mfe1/feature-search';

@NgModule({
  imports: [
    BrowserModule,
    Mfe1FeatureSearchModule,
    RouterModule.forRoot(APP_ROUTES),
    AuthLibModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
