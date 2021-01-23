import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthService } from '@nx-mf-demo/shared/auth-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  constructor(
    private authService: AuthService) { }

  get userName(): string {
    return this.authService.userName;
  }

  search() {
    alert('Not implemented for this demo!');
  }
}
