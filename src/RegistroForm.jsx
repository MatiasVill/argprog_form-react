import React, { useState } from "react";
import "./RegistroForm.css";

const RegistroForm = () => {
    // Estados para almacenar los datos del formulario
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");

    // Función para manejar el evento onSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Mostrar los datos en la consola
        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
        console.log("Email:", email);
        console.log("Teléfono:", telefono);
        console.log("Password:", password);
        console.log("Confirmar Password:", confirmarPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="confirmarPassword">Confirmar Password:</label>
                <input
                    type="password"
                    id="confirmarPassword"
                    value={confirmarPassword}
                    onChange={(e) => setConfirmarPassword(e.target.value)}
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default RegistroForm;
