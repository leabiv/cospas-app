import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from './curso'

@Injectable({
    providedIn: 'root'
  })

  export class cursoService {
    
    private urlEndPoint: string ='http://localhost:8080/api/cursos';
    private httpHeaders = { headers: new HttpHeaders({'Content-Type': 'application/json'})};  

    constructor(private http: HttpClient) { }

    getCursos(): Observable<Curso[]>{
      return this.http.get<Curso[]>(this.urlEndPoint);
    }
    
    createCursos(curso: Curso): Observable<Curso>{
      return this.http.post<Curso>(this.urlEndPoint, curso, this.httpHeaders);
    }

    getCurso(id: any): Observable<Curso>{
      return this.http.get<Curso>(`${this.urlEndPoint}/${id}`, this.httpHeaders);
    }

    udploadCurso(curso: Curso): Observable<Curso>{
      return this.http.put<Curso>(`${this.urlEndPoint}/${curso.id}`, curso, this.httpHeaders);
    }
  }