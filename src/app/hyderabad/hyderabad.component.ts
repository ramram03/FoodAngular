import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hyderabad',
  templateUrl: './hyderabad.component.html',
  styleUrls: ['./hyderabad.component.css']
})
export class HyderabadComponent {

  constructor(private _hotelService: ServiceService, private route: ActivatedRoute, 
    private router: Router, private location: Location) { }

    public hotels = [];
    public hotel: any;
  ngOnInit(): void{
    this._hotelService.getHostelshyd().subscribe((data) => {
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

  openContact(): void {
    this.router.navigate(['/login'], {queryParams: {logout: 'success'}});


  }
}
