import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupby'
})
export class GroupbyPipe implements PipeTransform {

  transform(objectArray: any[], property) {
    var restl =  objectArray.reduce(function (obj: any[], item) {

      const key = item[property];

      let objExists = obj.find( v => v.group === key );

      if (!objExists) {
        obj.push( {group: key, rates: [item], code: item.currencyCode} );
      } else {
        objExists.rates.push(item);
        objExists.code = item.currencyCode;
      }

      return obj;

    }, []);

    if(property === 'name') {
      console.log(restl);
    }

    return restl;
  }
}
