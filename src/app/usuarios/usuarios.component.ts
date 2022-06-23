import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  'usuarios': Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      usuarios =>this.usuarios = usuarios
    );
  }

  delete(usuario: Usuario): void{
    this.usuarioService.delete(usuario.id).subscribe(
      response => {
        this.usuarios = this.usuarios.filter(user => user !==usuario)
        Swal.fire('Usuario Eliminado', '','success')
      })
  }
}
