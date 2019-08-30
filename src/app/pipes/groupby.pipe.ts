import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupby'
})
export class GroupbyPipe implements PipeTransform {

  transform(objectArray: any[], property) {
    var restl =  objectArray.reduce(function (obj: any[], item) {

      const key = item[property];

      let objExists = obj.find( v => v.date === key );

      if (!objExists) {
        obj.push( {date: key, rates: [item]} );
      } else {
        objExists.rates.push(item);
      }

      return obj;

    }, []);

    return restl;
  }
}
