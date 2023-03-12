import { Usuario } from "./usuario";

export class UsuariosLista {
    private lista: Usuario[] = [];

    constructor() {        
    }

    // Agregar un usuario
    public agregar(usuario: Usuario) {

        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
        
    }

    public actualizarNombre(id: string, nombre: string) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id === id) {
                this.lista[i].nombre = nombre
                break;
            }            
        }

        console.log("==== Actualizando usuario ====");
        console.log(this.lista);
    }

    // Obtener lista de usuarios
    public getLista() {
        return this.lista;
    }

    // Obtener un usuario
    public getUsuario(id: string) {
        return this.lista.find( usuario => usuario.id === id );
    }

    // Obtener usuarios en una sala en particular
    public getUsuarioEnSala(sala: string) {
        return this.lista.filter( usuario => usuario.sala === sala);
    }

    // Borrar usuario
    public borrarUsuario(id: string) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        return tempUsuario;
    }

}