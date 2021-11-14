import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.showSuccess();
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
