import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: any): any {
   
   if(name=="")
    return "no data";
    return value;

  }

}
