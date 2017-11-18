import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getCustomerDetail(this.route.snapshot.params['id']);
  }

  getCustomerDetail(id) {
    this.http.get('http://localhost:8080/customer/'+id).subscribe(data => {
      this.customer = data;
    });
  }

  deleteCustomer(id) {
    this.http.delete('http://localhost:8080/customer/'+id)
      .subscribe(res => {
          this.router.navigate(['/customers']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
