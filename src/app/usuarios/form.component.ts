import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public titulo: string ="Crear Usuario";

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router, 
    private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario()
  }

  public cargarUsuario(): void{
    this.activateRouter.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id)
        .subscribe( (usuario) => 
          this.usuario = usuario)
      }
    })
  }

  public create(): void{
    this.usuarioService.create(this.usuario)
    .subscribe(usuario => {
      this.router.navigate(['/usuarios'])
      Swal.fire('Nuevo usuario', `Usuario ${usuario.nombres} creado con exito`, 'success')
    })
  }

  public update(): void{
    this.usuarioService.update(this.usuario)
    .subscribe(usuario => {
      this.router.navigate(['/usuarios'])
      Swal.fire('Usuario Actualizado', `Usuario ${usuario.nombres} actualizado con exito`, 'success')
    })
  }

}
