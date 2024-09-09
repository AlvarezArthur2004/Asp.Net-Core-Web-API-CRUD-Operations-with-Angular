import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailFormComponent, CommonModule, FormsModule],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service : PaymentDetailService){

  }
  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData =Object.assign({},selectedRecord);
  }
  
 onDelete(id:number){
  if(confirm('Are you sure?'))
  this.service.deletePaymentDetail(id)
  .subscribe({
    next: res => {
      this.service.list = res as PaymentDetail[]
    },
    error: err => { console.log(err) }
  })
 }

}
