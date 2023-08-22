// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap, Router } from '@angular/router';
// import { ServiceService } from '../service/service.service';
// import { Location } from '@angular/common';

// @Component({
//   selector: 'app-bangalore',
//   templateUrl: './bangalore.component.html',
//   styleUrls: ['./bangalore.component.css']
// })
// export class BangaloreComponent implements OnInit  {
//   constructor(private _hotelService: ServiceService, private route: ActivatedRoute, 
//     private router: Router,private location: Location) { }

//     public hotels = [];
//     public hotel;
    
  
//   ngOnInit(): void{
//     this._hotelService.getHotelsBanglore().subscribe((data) => {
//       console.log("data",data)
//       this.hotels = data;
//       this.route.paramMap.subscribe((params: ParamMap) => {
//        // [this.hotel] =  this.getHotel(parseInt(params.get('id')));
//       })
//     });


//   }
//   getHotel(Event:Event){
//     console.log("cards", Event);

//   }
//   openHelp(): void{}

// openContact(): void {
//   this.router.navigate(['/login'], {queryParams: {logout: 'success'}});
// }

//   goBack(): void{
//     this.location.back();
//   }
// }

 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bangalore',
  templateUrl: './bangalore.component.html',
  styleUrls: ['./bangalore.component.css']
})
export class BangaloreComponent implements OnInit {
  constructor(
    private hotelService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  public hotels = [];
  public filteredHotels = []; // Array to store filtered hotels
  public searchQuery: string = ''; // Initialize search query

  ngOnInit(): void {
    this.hotelService.getHotelsBanglore().subscribe((data) => {
      this.hotels = data;
      this.filteredHotels = [...data]; // Initialize filteredHotels with all hotels
    });
  }

  filterHotels() {
    if (this.searchQuery.trim() === '') {
      this.filteredHotels = [...this.hotels]; // Show all hotels when query is empty
    } else {
      this.filteredHotels = this.hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  getHotel(event: Event) {
    console.log("cards", event);
  }

  openHelp(): void {
    // Implement your openHelp logic here
  }

  openContact(): void {
    this.router.navigate(['/login'], {
      queryParams: {
        logout: 'success'
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
