import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = '0ZuFrrnLjnMZDmyr0YCOlHvYR1j8J2LO';
  private _historial: string[] = [];
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs'
  public resultados: Gif[] = [];


  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    if (query.trim().length === 0) return;
    if (!this._historial.includes(query.toLowerCase())) {
      this._historial.unshift(query.toLowerCase());
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams() 
      .set("api_key", this.apiKey)
      .set("limit", "10")
      .set("q", query)
    

    this.http
      .get<SearchGIFResponse>(
        `${this.servicioUrl}/search`, {params})
      .subscribe((res) => {
        this.resultados = res.data;
        localStorage.setItem(
          'ultimoResultado',
          JSON.stringify(this.resultados)
        );
      });
  }
  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    if (localStorage.getItem('ultimoResultado')) {
      this.resultados = JSON.parse(localStorage.getItem('ultimoResultado')!);
    }
  }
}
