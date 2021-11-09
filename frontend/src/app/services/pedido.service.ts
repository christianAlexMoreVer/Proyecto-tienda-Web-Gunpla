import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Pedido } from "../models/pedidos";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

  endpoint: string = "http://localhost:8080/pedido"

  constructor(private httpClient: HttpClient) { }

  getPedidos(): Observable<Pedido[]>{
    return this.httpClient.get<Pedido[]>(this.endpoint)
    .pipe(
      tap(users => console.log('Users retrieved!')),
      catchError(this.handleError<Pedido[]>('Get user', []))
    );
  }

  getPedidoById(idPedido: number): Observable<Pedido>{
    return this.httpClient.get<Pedido>(this.endpoint + "/" + idPedido)
    .pipe(
      tap(_ => console.log(`Pedido fetched: ${idPedido}`)),
      catchError(this.handleError<Pedido>(`Get Pedido id=${idPedido}`))
    );;
  }

  createPedido(pedido: Pedido): Observable<Pedido>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idUsuarioPedido", pedido.idUsuarioPedido.toString());
    bodyEncoded.append("idMaqueta", pedido.idMaqueta.toString());
    const body = bodyEncoded.toString();
    return this.httpClient.post<Pedido>(this.endpoint, body, httpOptions)
    .pipe(
      catchError(this.handleError<Pedido>('Error occured'))
    );
  }

  deletePedido(idPedido: number): Observable<Pedido>{
    return this.httpClient.delete<Pedido>(this.endpoint + "/" + idPedido)
    .pipe(
      tap(_ => console.log(`Pedido deleted: ${idPedido}`)),
      catchError(this.handleError<Pedido>('Delete pedido'))
    );
  }

  updatePedido(idPedido, pedido: Pedido): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idUsuarioPedido", pedido.idUsuarioPedido.toString());
    bodyEncoded.append("idMaqueta", pedido.idMaqueta.toString());
    const body = bodyEncoded.toString();
    return this.httpClient.put(this.endpoint + '/' + idPedido, body, httpOptions)
    .pipe(
      tap(_ => console.log(`Pedido updated: ${idPedido}`)),
      catchError(this.handleError<Pedido[]>('Update pedido'))
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