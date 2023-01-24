import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '0ZuFrrnLjnMZDmyr0YCOlHvYR1j8J2LO'
  private _historial: string[] = []

  get historial() {
    return [...this._historial]
  }

  
  buscarGifs(query:string){
    if (query.trim().length === 0) return
    if (this._historial.includes(query.toLowerCase())) return
    
    this._historial.unshift(query.toLowerCase())
    this._historial = this._historial.splice(0,10)

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=0ZuFrrnLjnMZDmyr0YCOlHvYR1j8J2LO&q=dragon&limit=10')
    .subscribe((res:any) => {
      console.log(res.data)
    })

  }



  constructor(private http: HttpClient) { }
}
