import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Customer } from '@app/website/interfaces/customer.interface';
import { CustomersService } from '@app/website/services/customers.service';
import { Observable } from 'rxjs';
import { CustomerSwiperComponent } from '../../customers/customer-swiper/customer-swiper.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [AsyncPipe, CustomerSwiperComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  constructor(private customersService: CustomersService) {}
  customers$: Observable<Customer[]> = this.customersService.getCustomers();
}
