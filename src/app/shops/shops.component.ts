import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {NgFor} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent {
  availableColors: ChipColor[] = [
    {name: 'Chennai', color: 'warn'},
    {name: 'Noida', color: 'primary'},
    {name: 'Bangalore', color: 'accent'},
    {name: 'Hyderabad', color: 'warn'},
  ];
  selectedChip: string | undefined;
 

  constructor(private router: Router) {}

 
  goBack() {
    console.log("back to login");
    this.router.navigate(['login']); // Use Location service to navigate back to the previous page
  }
  onChipSelect(chipName: string) {
    this.selectedChip = chipName; // Set the selected chip
  }
  navigateToDifferentPage() {
    // Add logic to navigate to a different page based on the selected chip
    if (this.selectedChip === 'Chennai') {
      this.router.navigate(['/chennai']);
    } else if (this.selectedChip === 'Noida') {
      this.router.navigate(['/noida']);
    } else if (this.selectedChip === 'Bangalore') {
      this.router.navigate(['/bangalore']);
    }
    else {
      // Add other chip navigation scenarios as needed
      this.router.navigate(['/hyderabad']);
    }
  }
}


