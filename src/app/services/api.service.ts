import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Converter {
  currency: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getCurrency = (first: string, second: string) => {
    return this.http.get<Converter[]>(
      `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=c694e8c527f28ee28c46`
    );
  };
}
