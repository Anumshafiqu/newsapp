import { Component, OnInit } from '@angular/core';
import { NewsappService } from '../service/newsapp.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrl: './topheading.component.css'
})
export class TopheadingComponent implements OnInit{
constructor(private _service:NewsappService){}
toheadingDispaly:any = [];

ngOnInit(): void {
  this._service.Topheadings().subscribe((result) =>{
    console.log(result),
    this.toheadingDispaly = result.articles;
  })
}
}
