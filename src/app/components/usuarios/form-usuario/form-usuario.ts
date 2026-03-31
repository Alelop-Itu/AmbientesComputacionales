import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-usuario.html',
  styleUrl: './form-usuario.css',
})
export class FormUsuario implements OnInit {
  @Input() usuario : Usuario | null = null;
  @Output() guardar = new EventEmitter<Usuario>();
  @Output() cancelar = new EventEmitter<void>();

  form : Usuario = { id:0, nombre:'', email:'', rol:''};

  ngOnInit(): void {
    if(this.usuario) {
      this.form = { ...this.usuario };
    }
  }
  guardarUsuario(): void {
    this.guardar.emit(this.form);
  }
  cancelarEdicion(): void {
    this.cancelar.emit();
  }


}
