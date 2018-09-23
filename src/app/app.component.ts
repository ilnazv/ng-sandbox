import { Component } from '@angular/core';
import { fadeAnimation } from './shared/fade.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [ fadeAnimation ]
})
export class AppComponent {
  title = 'app';

  getPage(outlet) {
    const pageName = outlet.isActivated ? outlet.activatedRouteData['page'] : '';
    return pageName;
  }
}
