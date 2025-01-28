import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Animal } from './animal.model';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  animali !: Array<Animal>;
  results: any;
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('http://localhost:3000/api/album-animali').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      this.animali = this.results.animal;
      console.log(this.animali );
      });
    }
}
