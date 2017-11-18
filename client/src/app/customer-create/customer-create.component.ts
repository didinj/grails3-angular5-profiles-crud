import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveCustomer() {
    this.http.post('http://localhost:8080/customer', this.customer)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/customer-details/', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
