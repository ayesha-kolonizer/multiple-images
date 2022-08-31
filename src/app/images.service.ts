import { Injectable } from '@angular/core';
import { HttpClientModule, HttpEvent, HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
   baseUrl = 'http://localhost:4300/multiplefiles';

  constructor(private http: HttpClient) { }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const request = new HttpRequest('POST', `${this.baseUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(request);
  }

  getFiles(): Observable<any> {
    return this.http.get(`{this.baseUrl}`);
  }

  
  // img_url = this.url + 'user' + '/' + 'deletefile';
  //  deleteProfileImage(imgId:number)
  // {
  //   let path = 'master/user';
  //   let feature = 'Users'
  //   return this.deleteSingleUserApi(this.img_url, imgId ,path,feature)
  // }
  // deleteSingleUserApi(img_url: string, imgId: number, path: string, feature: string) {
  //   throw new Error('Method not implemented.');
  // }
}
