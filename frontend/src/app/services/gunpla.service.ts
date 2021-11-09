import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gunpla } from '../models/gunplas';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class GunplaService {

  endpoint: string = "http://localhost:8080/maquetas"

  constructor(private httpClient: HttpClient) { }

  getGunplas(): Observable<Gunpla[]>{
    return this.httpClient.get<Gunpla[]>(this.endpoint)
    .pipe(
      tap(users => console.log('Users retrieved!')),
      catchError(this.handleError<Gunpla[]>('Get user', []))
    );
  }

  getGunplaById(idMaqueta: number): Observable<Gunpla>{
    return this.httpClient.get<Gunpla>(this.endpoint + "/" + idMaqueta)
    .pipe(
      tap(_ => console.log(`Gunpla fetched: ${idMaqueta}`)),
      catchError(this.handleError<Gunpla>(`Get gunpla id=${idMaqueta}`))
    );;
  }

  getGunplaByName(nombre: string): Observable<Gunpla>{
    return this.httpClient.get<Gunpla>(this.endpoint + "/" + nombre)
    .pipe(
      tap(_ => console.log(`Gunpla fetched: ${nombre}`)),
      catchError(this.handleError<Gunpla>(`Get gunpla nombre=${nombre}`))
    );;
  }

  createGunpla(gunpla: Gunpla): Observable<Gunpla>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", gunpla.nombre);
    bodyEncoded.append("precio", gunpla.precio.toString());
    bodyEncoded.append("escala", gunpla.escala);
    bodyEncoded.append("tipoGrado", gunpla.tipoGrado);
    bodyEncoded.append("descripcion", gunpla.descripcion);
    bodyEncoded.append("img", gunpla.img);
    const body = bodyEncoded.toString();
    return this.httpClient.post<Gunpla>(this.endpoint, body, httpOptions)
    .pipe(
      catchError(this.handleError<Gunpla>('Error occured'))
    );
  }

  deleteGunpla(idMaqueta: number): Observable<Gunpla>{
    return this.httpClient.delete<Gunpla>(this.endpoint + "/" + idMaqueta)
    .pipe(
      tap(_ => console.log(`Gunpla deleted: ${idMaqueta}`)),
      catchError(this.handleError<Gunpla>('Delete Gunpla'))
    );
  }

  updateGunpla(idMaqueta, gunpla: Gunpla): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", gunpla.nombre);
    bodyEncoded.append("precio", gunpla.precio.toString());
    bodyEncoded.append("escala", gunpla.escala);
    bodyEncoded.append("tipoGrado", gunpla.tipoGrado);
    bodyEncoded.append("descripcion", gunpla.descripcion);
    bodyEncoded.append("img", gunpla.img);
    const body = bodyEncoded.toString();
    return this.httpClient.put(this.endpoint + '/' + idMaqueta, body, httpOptions)
    .pipe(
      tap(_ => console.log(`gunpla updated: ${idMaqueta}`)),
      catchError(this.handleError<Gunpla[]>('Update gunpla'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
