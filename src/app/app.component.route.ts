import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingComponent } from './listing/listing.component';
import { CarComponent } from './car/car.component';


const appRoutes:Routes = [
	{ path: '',  redirectTo: 'products', pathMatch: 'full' },
	{ path: 'products', component: ListingComponent},
	{ path: 'car', component: CarComponent}
	//{ path: '**', component:NotFound}
]

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);