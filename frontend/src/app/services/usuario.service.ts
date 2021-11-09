import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuarios';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  endpoint: string = "http://localhost:8080/usuario"

  constructor(private httpClient: HttpClient) { }

  getUsuario(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<Usuario[]>('Get user', []))
      );
  }

  getUsuarioById(idUsuario: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.endpoint + "/" + idUsuario)
    .pipe(
      tap(_ => console.log(`Usuario fetched: ${idUsuario}`)),
      catchError(this.handleError<Usuario>(`Get Usuario id=${idUsuario}`))
    );;
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", usuario.nombre);
    bodyEncoded.append("apellidos", usuario.apellidos);
    bodyEncoded.append("contrasena", usuario.contrasena);
    bodyEncoded.append("correoElectronico", usuario.correoElectronico);
    const body = bodyEncoded.toString();
    return this.httpClient.post<Usuario>(this.endpoint, body, httpOptions)
      .pipe(
        catchError(this.handleError<Usuario>('Error occured'))
      );
  }

  deleteUsuario(idUsuario: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(this.endpoint + "/" + idUsuario)
      .pipe(
        tap(_ => console.log(`Usuario deleted: ${idUsuario}`)),
        catchError(this.handleError<Usuario>('Delete usuario'))
      );
  }

  updateUsuario(idUsuario, usuario: Usuario): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", usuario.nombre);
    bodyEncoded.append("apellidos", usuario.apellidos);
    bodyEncoded.append("contrasena", usuario.contrasena);
    bodyEncoded.append("correoElectronico", usuario.correoElectronico);
    bodyEncoded.append("admin","0");
    const body = bodyEncoded.toString();
    return this.httpClient.put(this.endpoint + '/' + idUsuario, body, httpOptions)
      .pipe(
        tap(_ => console.log(`usuario updated: ${idUsuario}`)),
        catchError(this.handleError<Usuario[]>('Update usuario'))
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