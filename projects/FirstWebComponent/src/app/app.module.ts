import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIButtonComponent } from './uibutton/uibutton.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UIButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [UIButtonComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
// export class AppModule { }

export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(UIButtonComponent, injector);
    const webComponent = createCustomElement(UIButtonComponent, {injector,strategyFactory});
    customElements.define('ui-button', webComponent);
  }

  ngDoBootstrap() {}
 }

