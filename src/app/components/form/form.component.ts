import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService, Converter } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormModel } from '../../form-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  convertCurrency: Array<string> = ['USD', 'EUR', 'GBP', 'JPY', 'NGN'];

  model = new FormModel(1, this.convertCurrency[0], this.convertCurrency[0]);

  result: any = 0;
  currency: any = 0;

  constructor(private api: ApiService, private toastr: ToastrService) {}

  ngOnInit() {}

  showError(message: string, title: string) {
    this.toastr.error(message, title);
  }

  onSubmit(form: NgForm) {
    // console.log(form, this.currency);
    if (this.model.prevCurrency === this.model.newCurrency) {
      this.currency = null;
      this.showError('Cannot convert same currency!', 'Currency error!');
    } else {
      setTimeout(() => {
        this.api
          .getCurrency(this.model.prevCurrency, this.model.newCurrency)
          .subscribe((data) => {
            this.result =
              Number(Object.values(data).toString()) * form.value.amount;
            this.currency = this.result;
          });
      });
    }
  }
}
