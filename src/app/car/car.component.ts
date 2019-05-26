import { Component } from '@angular/core';

@Component({
	selector: 'app-car',
	templateUrl: './car.component.html',
	styleUrls: ['./car.component.css']
})

export class CarComponent {
	constructor() {}
	CarProducts;
	totalVal:number;
	ngOnInit(){
		this.load();
	}
	fakePay(){
		console.warn("%cNo te emociones","font-weight:bold;font-size:18px;");
	}

	load(){
		this.totalVal = 0;

		this.CarProducts = (JSON.parse(localStorage.getItem("AllCarProducts")) == null) ? [] : JSON.parse(localStorage.getItem("AllCarProducts"));
		for (var i = 0; i <= this.CarProducts.length -1 ; i++) {
			 this.totalVal += parseInt(this.CarProducts[i].price);
		}
	}	

	remove(ind){
		this.CarProducts.splice(ind,1);
		localStorage.setItem("AllCarProducts", JSON.stringify(this.CarProducts));
		this.load();
	}
}