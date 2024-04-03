document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const matricula = document.getElementById('matricula').value;
        const nombre = document.getElementById('nombre').value;
        const ingles = parseFloat(document.getElementById('ingles').value);
        const matematicas = parseFloat(document.getElementById('matematicas').value);
        const espanol = parseFloat(document.getElementById('espanol').value);

        if (isNaN(ingles) || ingles < 0 || ingles > 100 ||
            isNaN(matematicas) || matematicas < 0 || matematicas > 100 ||
            isNaN(espanol) || espanol < 0 || espanol > 100) {
            alert('Por favor ingrese calificaciones válidas entre 0 y 100.');
            return;
        }

        const promedio = (ingles + matematicas + espanol) / 3;
        const promedioGeneral = (ingles + matematicas + espanol) / 3;

        const tabla = `
            <h2>Resultados</h2>
            <table>
                <tr>
                    <th>Matrícula</th>
                    <th>Nombre</th>
                    <th>Inglés</th>
                    <th>Matemáticas</th>
                    <th>Español</th>
                    <th>Promedio</th>
                </tr>
                <tr>
                    <td>${matricula}</td>
                    <td>${nombre}</td>
                    <td>${ingles}</td>
                    <td>${matematicas}</td>
                    <td>${espanol}</td>
                    <td>${promedio.toFixed(2)}</td>
                </tr>
                <tr>
                    <td colspan="5">Promedio General</td>
                    <td>${promedioGeneral.toFixed(2)}</td>
                </tr>
            </table>
        `;

        resultado.innerHTML = tabla;
    });
});
