import { Component, NgModule } from '@angular/core';
// import { IfViewportSizeDirective } from './if-viewport-size.directive';
@NgModule({
  declarations: [
    // IfViewportSizeDirective,
  ]
})
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
}
