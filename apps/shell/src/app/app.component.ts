/* eslint-disable max-len */
import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  // @ViewChild('vc', { read: ViewContainerRef, static: true })
  // viewContainer: ViewContainerRef;

  // constructor(
  //   @Inject(Injector) private injector,
  //   @Inject(ComponentFactoryResolver) private cfr) { }

    // home(): void {
    //   this.viewContainer.clear();
    // }

    load() {
      // const comp = await import('mfe1/Component').then(m => {
      //   return m.AppComponent;
      // });
      // const factory = this.cfr.resolveComponentFactory(comp);
      // this.viewContainer.createComponent(factory, null, this.injector);
    }
}

