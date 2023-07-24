import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

 let newReq=request.clone({
  url:request.url.replace('api_key','api_key=3cd8b56ef542810e4ef2740a0a5dd4df')
 })

    return next.handle(newReq);
  }
}
