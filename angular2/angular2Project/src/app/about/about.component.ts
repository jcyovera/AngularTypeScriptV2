import { Component, OnInit } from '@angular/core';
import { AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives:[AlertComponent]
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
