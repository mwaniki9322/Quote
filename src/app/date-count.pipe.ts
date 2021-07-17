import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any):any{
    let currentdate=new Date();
    let dateDifference=currentdate.getHours()-value.getHours();
    dateDifference /= 1000;
    dateDifference /= (3600);
    dateDifference /= 24;
    return Math.ceil(dateDifference) - 1;
  }

}
