import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Products {
	url:string = "https://jsonplaceholder.typicode.com/photos";
	constructor( public http_:  HttpClient ){}
	getProducts(){
		return this.http_.get(this.url);
	}
}