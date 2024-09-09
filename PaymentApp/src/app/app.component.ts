import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailFormComponent } from "./payment-details/payment-detail-form/payment-detail-form.component";
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule ,CommonModule ,RouterOutlet, PaymentDetailFormComponent, PaymentDetailsComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'PaymentApp';
}
