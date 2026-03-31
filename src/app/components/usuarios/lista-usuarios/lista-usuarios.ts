import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario';
import { FormUsuario } from '../form-usuario/form-usuario';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule,FormUsuario],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario | null = null;
  mostrarFormulario: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  cargarUsuarios(): void {
    this.usuarios = this.usuarioService.getUsuarios();
  }
  abrirNuevo(): void {
    this.usuarioSeleccionado = null;
    this.mostrarFormulario = true;
  }
  abrirEdicion(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
    this.mostrarFormulario = true;
  }
  guardarUsuario(usuario: Usuario): void {
    if (usuario.id) {
      this.usuarioService.updateUsuario(usuario);
    } else {
      this.usuarioService.addUsuario(usuario);
    }
    this.mostrarFormulario = false;
    this.cargarUsuarios();
  }
  editarUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
    this.mostrarFormulario = true;
  }
  eliminarUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id);
    this.cargarUsuarios();
  }
  cancelarEdicion(): void {
    this.mostrarFormulario = false;
  }

}
