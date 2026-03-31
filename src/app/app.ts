import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioService } from './services/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
  /*
  constructor(private usuarioService: UsuarioService) {}
  ngOnInit(): void {
    //getUsuarios()
    console.log('usuarios:', this.usuarioService.getUsuarios());
    //addUsuario()
    this.usuarioService.addUsuario({id:4,nombre: "Pablo Perez",email:'pablo.perez@itq.edu.ec',rol : 'Docente'});
    console.log(this.usuarioService.getUsuarios());
    //UpdateUsuario()
    this.usuarioService.updateUsuario({id:1,nombre:"Joel Caza Modificado",email:'je.caza@itq.edu.ec',rol : 'Administrativo'})
    console.log(this.usuarioService.getUsuarios());
    //deleteUsuario()
    this.usuarioService.deleteUsuario(4);
    console.log(this.usuarioService.getUsuarios());
  }
*/

