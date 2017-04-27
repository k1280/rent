import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IProduct } from './product';


@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json'; //here normally would be the url of webserver, now it's just a json with the list of products
    constructor(private _http: Http) { }
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
        .map((response: Response) => <IProduct[]> response.json());
    }
}