import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote('Brian Kibet','Benjamin Franklin','Tell me and I forget. Teach me and I remember. Involve me and I learn.',new Date(2021,7,4)),
  new Quote('Rachel kigal','Ralph Waldo Emerson','Do not go where the path may lead, go instead where there is no path and leave a trail.',new Date(2021,7,13)),
  new Quote('Kingsley','Nelson Mandela','The greatest glory in living lies not in never falling, but inrising every time we fall.,(2021,7,4)',new Date(2021,4,7))
]

toggleDetails(index:any){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
quoteDelete(isDelete:any, index:any){
  if (isDelete) {
    this.quotes.splice(index,1);
  }
}


  constructor() { }

  ngOnInit(): void {
  

}
}