import { Component, OnInit } from '@angular/core';
//import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Location } from '@angular/common';
import { events } from '@material/tooltip';

@Component({
  selector: 'app-bangalore',
  templateUrl: './bangalore.component.html',
  styleUrls: ['./bangalore.component.css']
})
export class BangaloreComponent implements OnInit  {
  constructor(private _hotelService: ServiceService, private route: ActivatedRoute, 
    private router: Router,private location: Location) { }

    public hotels = [];
    public hotel;
    
  
  ngOnInit(): void{

    
    this._hotelService.getHotelsBanglore().subscribe((data) => {
      console.log("data",data)
      this.hotels = data;
      this.route.paramMap.subscribe((params: ParamMap) => {
       // [this.hotel] =  this.getHotel(parseInt(params.get('id')));
      })
    });


  }
  getHotel(Event:Event){
    console.log("cards", Event);

  }
  openHelp(): void{

  }

openContact(): void {
  this.router.navigate(['/login'], {queryParams: {logout: 'success'}});


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

 
  


}

 
