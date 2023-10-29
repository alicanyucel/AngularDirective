import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1 appRenklendir="yellow" test="0">directive apps</h1>
  <a appMyrouting="/c1" style="cursor:pointer;">Component 1</a>
  <a appmyRouting="/c2" style="cursor:pointer;">Component 2</a>
  <form>
    <input #name [appValid]="name.validity.valid" required minlenght="3" maxlenght="20" class="form-control"/>
    <div class="invalid-feedback">Zorunlu Alan</div>
  </form>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDirectives';
}
