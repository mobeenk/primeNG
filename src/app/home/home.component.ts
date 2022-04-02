import { Component, OnInit } from '@angular/core';
import { FilterService } from "primeng/api";
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CountryService } from '../_services/countryservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CountryService, FilterService]
})
export class HomeComponent implements OnInit {
  selectedCountry: any;

  countries: any[]=[];


  filteredCountries: any[]=[];
  constructor(    private countryService: CountryService,
    private filterService: FilterService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });

  }
  filterCountry(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.countries.length; i++) {
        let country = this.countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }

    this.filteredCountries = filtered;
}

}
