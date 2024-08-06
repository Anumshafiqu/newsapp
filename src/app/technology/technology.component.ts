import { Component, OnInit } from '@angular/core';
import { NewsappService } from '../service/newsapp.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit{
TechNewsdisply:any= [];

constructor(private _service:NewsappService){}
// ngOnInit(): void {
//   this._service.Technews().subscribe((result:any) =>{
//     this.TechNewsdisply = result.;
//   })

//   }

  ngOnInit(): void {
    this._service.Technews().subscribe((result) =>{
      console.log(result),
      this.TechNewsdisply = result.articles;
    })
  }
}

