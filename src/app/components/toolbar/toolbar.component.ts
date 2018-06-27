import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-toolbar', // app por convencion
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
// siempre finaliza en component por convencion
export class ToolbarComponent {

  @Input() title: string;

}