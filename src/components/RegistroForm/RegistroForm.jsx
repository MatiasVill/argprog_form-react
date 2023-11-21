import React, { useState } from "react";
import "./RegistroForm.css";

const RegistroForm = () => {
    // Estados para almacenar los datos del formulario
    const [usuario, cambiarUsuario] = useState(
        {
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            contra: '',
            confirmarContra: ''
        }
    )

    // Función para manejar el evento onSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Mostrar los datos en la consola
        console.log('\n',"Nombre:", usuario.nombre,'\n',"Apellido:", usuario.apellido, '\n', "Email:", usuario.email,'\n', "Teléfono:", usuario.telefono, '\n',"Password:", usuario.contra,'\n',"Confirmar Password:", usuario.confirmarContra,)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={usuario.nombre} onChange={(cambio) => cambiarUsuario({...usuario, nombre: cambio.target.value})} />
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" value={usuario.apellido} onChange={(cambio) => cambiarUsuario({...usuario, apellido: cambio.target.value})} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={usuario.email} onChange={(cambio) => cambiarUsuario({...usuario, email: cambio.target.value})} />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" value={usuario.telefono} onChange={(cambio) => cambiarUsuario({...usuario, telefono: cambio.target.value})} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={usuario.contra} onChange={(cambio) => cambiarUsuario({...usuario, contra: cambio.target.value})} />
            </div>
            <div>
                <label htmlFor="confirmarPassword">Confirmar Password:</label>
                <input
                    type="password"
                    id="confirmarPassword"
                    value={usuario.confirmarContra}
                    onChange={(cambio) => cambiarUsuario({...usuario, confirmarContra: cambio.target.value})}
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default RegistroForm;
