import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbyname'
})
export class SearchbynamePipe implements PipeTransform {

  transform(movies:any[], term:string): any[] {
    return movies.filter((movie)=> movie.title.toLowerCase().includes(term.toLowerCase()))

  }

}
