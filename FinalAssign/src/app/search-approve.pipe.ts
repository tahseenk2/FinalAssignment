import { Pipe, PipeTransform } from '@angular/core';
import { AproveList } from './employee/aprove-leave/aprove-list.model';

@Pipe({
  name: 'searchApprove'
})
export class SearchApprovePipe implements PipeTransform {

  transform(value: AproveList[], searchname: string, leave: string): AproveList[] {
    searchname = searchname ? searchname.toLocaleLowerCase() : null;
    leave = leave ? leave.toLocaleLowerCase() : null;
    return searchname || leave ? value.filter((e: AproveList) =>
        (e.employee_name.toLocaleLowerCase().indexOf(searchname) !== -1 ||
        e.leaveName.toLocaleLowerCase().indexOf(leave) !== -1)) : value;
  }

}
