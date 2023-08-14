import { Component, OnInit } from '@angular/core';
//import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { events } from '@material/tooltip';
import { Location } from '@angular/common';
@Component({
  selector: 'app-chennai',
  templateUrl: './chennai.component.html',
  styleUrls: ['./chennai.component.css']
})
export class ChennaiComponent implements OnInit  {
  constructor(private _hotelService: ServiceService, private route: ActivatedRoute, 
    private router: Router,private location: Location) { }

    public hotels = [];
    public hotel: any;
    
  
  ngOnInit(): void{

    
    this._hotelService.getHostelsChennai().subscribe((data) => {
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
  
/*
   getHotel = (id: number) => {
    try {
      return this.hotels.filter((hotel) => hotel.id == id);
    }
    catch(e) {
      console.log(e);
    }
  }
  }*/

  goBack(): void{
    this.location.back();
  }
openHelp(): void{}

openContact(): void {}


}

 
