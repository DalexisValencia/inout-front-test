import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontTest';
  productsInCar_Amount;
  ProductsInCar:any;

  ngOnInit(){
  	this.productsInCar_Amount = this.totalProductInCar();
  }

	totalProductInCar(){
		let car_total_items = localStorage.getItem("productsAmount");
		//console.warn(localStorage.getItem("productsAmount"));
		return (!car_total_items)? 0 : car_total_items ;
	}
}
