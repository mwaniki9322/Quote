import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote';
  quotes:Quote[]=[
    new Quote('Brian Kibet','Benjamin Franklin','Tell me and I forget. Teach me and I remember. Involve me and I learn.',new Date(2020,7,4),0,0),
  new Quote('Rachel kigal','Ralph Waldo Emerson','Do not go where the path may lead, go instead where there is no path and leave a trail.',new Date(2020,7,13),0,0),
  new Quote('Kingsley','Nelson Mandela','The greatest glory in living lies not in never falling, but inrising every time we fall.,(2021,7,4)',new Date(2020,4,7),0,0)
  ]
 
  }
 
  

