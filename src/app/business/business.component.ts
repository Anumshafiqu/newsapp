import { Component } from '@angular/core';
import { NewsappService } from '../service/newsapp.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
BusinessnewsDisply:any=[];
constructor (private _service:NewsappService){}
ngOnInit(): void {
  this._service.businessnews().subscribe((result) =>{
    console.log(result),
    this.BusinessnewsDisply = result.articles;
  })
}
}
