import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
@Input() quote:Quote=new Quote('','','',new Date)
@Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isDelete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
