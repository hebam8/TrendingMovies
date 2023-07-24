import { Pipe, PipeTransform } from '@angular/core';
import { SrvRecord } from 'dns';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[], term:string):any[] {
    return movies.filter((movie)=> movie.title.toLowerCase().includes(term.toLowerCase()))
    
  }

}
