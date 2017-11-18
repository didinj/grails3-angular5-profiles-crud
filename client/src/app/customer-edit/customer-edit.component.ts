import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
  }

  getCustomer(id) {
    this.http.get('http://localhost:8080/customer/'+id).subscribe(data => {
      this.customer = data;
    });
  }

  updateCustomer(id) {
    this.http.put('http://localhost:8080/customer/'+id, this.customer)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/customer-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
