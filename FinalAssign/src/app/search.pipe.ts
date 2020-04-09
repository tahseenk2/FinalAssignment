import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './employee/employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: employee[], searchname: string): employee[] {
    searchname = searchname ? searchname.toLocaleLowerCase() : null;
    return searchname ? value.filter((e: employee) =>
        e.emp_name.toLocaleLowerCase().indexOf(searchname) !== -1) : value;
  }

}
