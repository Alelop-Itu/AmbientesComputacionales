import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

private usuarios: Usuario[] = [
    {id:1,nombre:"Joel Caza",email:'je.caza@itq.edu.ec',rol : 'Administrativo'},
    {id:2,nombre:"Pedro Caiza",email:'je.caza@itq.edu.ec',rol : 'Docente'},
    {id:3,nombre:"Cristina Sasa",email:'je.caza@itq.edu.ec',rol : 'Estudiante'}
  ];

// Obtener la lista de usuarios
  getUsuarios() : Usuario[]{
    return this.usuarios;
  }
  // Agregar un usuario
  addUsuario(usuario : Usuario) : void{
    const nuevoId = Math.max(...this.usuarios.map(u => u.id))+1;
    this.usuarios.push({...usuario, id: nuevoId});
  }
  //Actualizar un usuario
  updateUsuario( editedUsuario : Usuario) : void{
    const index = this.usuarios.findIndex(u => u.id === editedUsuario.id);
    if(index !== -1){
      this.usuarios[index] = editedUsuario;
    }
  }
  // Eliminar un usuario
  deleteUsuario(id : number) : void{
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }
 

}


