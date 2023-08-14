import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-noida',
  templateUrl: './noida.component.html',
  styleUrls: ['./noida.component.css']
})
export class NoidaComponent implements OnInit {

  constructor(private _hotelService: ServiceService, private route: ActivatedRoute, 
    private router: Router,private location: Location) { }

    public hotels = [];
    public hotel: any;
    
  
  ngOnInit(): void{

    
    this._hotelService.getHotelsNoida().subscribe((data) => {
    //  console.log(data)
      this.hotels = data;
      this.route.paramMap.subscribe((params: ParamMap) => {
       // [this.hotel] =  this.getHotel(parseInt(params.get('id')));
      })
    });


  }
  getHotel(Event:Event){
    console.log("cards", Event);

  }
  goBack(): void{
    this.location.back();
  }
  openHelp(): void{}

openContact(): void {}
}
