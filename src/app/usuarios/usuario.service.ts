import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint: string ='http://localhost:8080/api/usuarios';
  private httpHeaders = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  //-------------List--------------//
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlEndPoint); 
  }
  
  //-------------Create------------//
  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint, usuario, this.httpHeaders)
  }
  //--------------And--------------//

  //-------------Update------------//
  getUsuario(id: any): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`)
  }

  update(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPoint}/${usuario.id}`, usuario, this.httpHeaders)
  }
  //---------------And-------------//

  delete(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`,this.httpHeaders)
  }
}
