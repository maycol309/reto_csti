import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class IntegrationService {

  base = `${environment.base_url}`;

  constructor(private http: HttpClient,) { }

  listarProductos() {
    const headers = new HttpHeaders().set("Authorization", "token");
    return this.http.get<any>(this.base + '/products', {
      headers: headers
    });
  }

}
