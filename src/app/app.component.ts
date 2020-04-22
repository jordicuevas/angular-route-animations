import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import * as animations from './routerAnimations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // fader,
    // slider,
    // transformer,
    // stepper
    animations.transformer
  ]
})
export class AppComponent {
  title = 'animations-app';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
