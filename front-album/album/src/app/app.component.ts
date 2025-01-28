import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results !: any;
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('http://localhost:3000/api/album-animali').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(this.results);
      });
    }
}