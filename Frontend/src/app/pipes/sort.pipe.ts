import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args: any[]): any[] {
    if (!value || args.length < 2) {
      return value; // Return original array if args are invalid
    }

    const sortField = args[0];  // Field name to sort by
    const sortDirection = args[1]; // 'asc' or 'desc'
    let multiplier = sortDirection === 'desc' ? -1 : 1;

    return value.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      } else if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    });

  }

}
