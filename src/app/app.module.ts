import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Importamos los modulos creados
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './usuarios/form.component';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes =[
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/form', component: FormComponent},
  {path: 'usuarios/form/:id', component: FormComponent},
  {path: 'cursos', component: CursosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
