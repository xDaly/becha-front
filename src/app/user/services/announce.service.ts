import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import * as crypto from 'crypto-js';


@Injectable({
  providedIn: 'root'
})

export class AnnounceService {
  location: String
  time : String

  constructor(private http: HttpClient) { 
  this.time =  moment().format('MMMM Do YYYY, h').toString()
  
  }


 

  encrypt(value: any) {
    return crypto.SHA256(value + this.time).toString();
  }
  getAnnounces() {
    return this.http.get(environment.apiUrl + '/announce/')
  }
  getAnnounceById(id: any) {
    return this.http.get(environment.apiUrl +'/announce/' + id)
  }
  getLocations() {
    return this.http.get(environment.apiUrl +'/data/locations')
  }
  getCategories() {
    return this.http.get(environment.apiUrl +'/data/categories')
  }
  getSubCategories(category:string) {
    return this.http.get(environment.apiUrl +'/data/subcategories'+category)
  }
  searchAnnounces(info:any) {
    return this.http.post(environment.apiUrl + '/announce/search', info)
  }
}
