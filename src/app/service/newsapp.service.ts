import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsappService {

  constructor(private _http:HttpClient) { }

  // NewsapiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=191753189a704eb28935e38c38535583'
  NewsapiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-07-06&sortBy=publishedAt&apiKey=191753189a704eb28935e38c38535583';
  //  technews
  TechNewsapiUrl='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=191753189a704eb28935e38c38535583';
  // business
  BusinessNewsapiUrl='https://newsapi.org/v2/everything?domains=wsj.com&apiKey=191753189a704eb28935e38c38535583'
  Topheadings():Observable<any>{
    return this._http.get(this.NewsapiUrl)
    
  }
  Technews():Observable<any>{
    return this._http.get(this.TechNewsapiUrl)
  }
  businessnews():Observable<any>{
    return this._http.get(this.BusinessNewsapiUrl)
  }
}
