import { Component } from '@angular/core';
import { PRODUCTS } from '../mock/mock.products';

import { Products } from '../service/products.service';

@Component({
	selector:'app-listing',
	templateUrl: './listing.component.html',
	styleUrls:['./listing.component.css'],
	providers:[Products]
})

export class ListingComponent {
	prods;
	productsInCar:number;
	alert_added = false;
	ProductsInCar = [];
	currentProName:string = "";

	constructor( public products:Products ) {}

	ngOnInit(){
		/*
			* Nota: Esto es un ejemplo de una llamada a una API Rest Online.
			* Cantidad de registros: 5000
		*/
		/*this.products.getProducts().subscribe(
			result =>{ 
				this.prods = result;
				console.warn(this.prods);
			},
			error=>{
				console.warn(error);
			}
		);*/

		this.prods = PRODUCTS;
		//localStorage.clear();
		this.checkProductInCar();
	}

	checkProductInCar(){
		let thereISregs = localStorage.getItem("AllCarProducts");
		//Verficar que hayan registros
		if ( thereISregs != null ) {
			let carProd = JSON.parse(thereISregs);
			//Recorrer los registros y agregarlos al array de esta vista
			for (var i = 0; i <= carProd.length - 1; i++) {
				this.ProductsInCar.push(carProd[i]);
			}
		}else{

		}
	}

	addToCar(product:any){
		this.alert_added = true;
  		this.ProductsInCar.push(product);
  		//Contar productos
  		let totalCarProducts = this.ProductsInCar.length;
  			//Añadir al storage
			localStorage.setItem("AllCarProducts", JSON.stringify(this.ProductsInCar));
		this.currentProName = product.title;
	}

}