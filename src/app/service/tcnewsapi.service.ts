import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }
  //top Headline API URL
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1419548bc5404912a5430b2e1ffc4ff8'
  ;
 //tech news API
 
 techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1419548bc5404912a5430b2e1ffc4ff8';
 //business news API URL
 businessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1419548bc5404912a5430b2e1ffc4ff8';
//For business Logic
tcbuzzNews():Observable<any>{
  return this._http.get(this.businessNews)
}

 
 
 //Use tech Meth
 tcTechNews():Observable<any>{
  return this._http.get(this.techNews)

} 
 
 tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)

  }
}
