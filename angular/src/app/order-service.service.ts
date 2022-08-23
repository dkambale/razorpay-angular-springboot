import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  
  constructor(private http: HttpClient) {

	}
  
  createOrder(order): Observable<any> {
		return this.http.post("http://localhost:8080/pg/createOrder", {
		customerName: order.name,
		email: order.email,
		phoneNumber: order.phone,
		amount: order.amount
		}, httpOptions);
	}

}
