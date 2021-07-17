import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote('Brian Kibet','Benjamin Franklin','Tell me and I forget. Teach me and I remember. Involve me and I learn.',new Date(2020,8,4)),
  new Quote('Rachel kigal','Ralph Waldo Emerson','Do not go where the path may lead, go instead where there is no path and leave a trail.',new Date(2021,6,13)),
]
addNewQuote(quote:any){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength-1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

toggleDetails(index:any){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
quoteDelete(isDelete:any, index:any){
  if(isDelete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}'s Quote?`)
  
  if (toDelete){
    this.quotes.splice(index,1);
  }

}
}




  constructor() { }

  ngOnInit(): void {
  

}
}