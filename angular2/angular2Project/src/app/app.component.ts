import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import{ CollapseDirective  } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,CollapseDirective]
})
export class AppComponent {
  title = 'app works!';
}
