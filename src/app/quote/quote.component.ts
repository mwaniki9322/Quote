import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  {name:'Brian Kibet',author:'Benjamin Franklin',quotify:'Tell me and I forget. Teach me and I remember. Involve me and I learn.'},
    {name:'Rachel45',author:'Ralph Waldo Emerson',quotify:'Do not go where the path may lead, go instead where there is no path and leave a trail.'},
    {name:'Kingsley',author:'Nelson Mandela',quotify:'The greatest glory in living lies not in never falling, but in rising every time we fall.'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
