// main.js

// Mensaje de bienvenida en consola
console.log("Sistema CAVE-U cargado correctamente");

// Función para mostrar una alerta (puedes llamarla desde cualquier archivo HTML si se enlaza el JS)
function mostrarAlerta(mensaje) {
    alert(mensaje);
}

// Función para marcar enlaces activos en el menú
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.href.includes(currentLocation.split("/").pop())) {
            link.classList.add("active");
        }
    });

    // === Funcionalidad del catálogo solo si estás en catalogo.html ===
    if (currentLocation.includes("catalogo.html")) {
        const servicios = [
            {
                idServicio: "001",
                nombre: "Asesorías contables",
                descripcion: "Asesoría en procesos contables empresariales.",
                categoria: "Contable"
            },
            {
                idServicio: "002",
                nombre: "Consultorías administrativas",
                descripcion: "Optimización de procesos administrativos.",
                categoria: "Administrativa"
            },
            {
                idServicio: "003",
                nombre: "Capacitaciones empresariales",
                descripcion: "Formación y talleres para empresas.",
                categoria: "Empresarial"
            },
            {
                idServicio: "004",
                nombre: "Soporte legal y tributario",
                descripcion: "Apoyo en temas legales y fiscales.",
                categoria: "Legal"
            }
        ];

        const listaServicios = document.getElementById("listaServicios");
        const categoriaSelect = document.getElementById("categoriaSelect");

        if (listaServicios && categoriaSelect) {
            function renderServicios(filtro = "todas") {
                listaServicios.innerHTML = "";
                const filtrados = filtro === "todas"
                    ? servicios
                    : servicios.filter(s => s.categoria === filtro);

                filtrados.forEach(servicio => {
                    const div = document.createElement("div");
                    div.classList.add("servicio-card");
                    div.innerHTML = `
                        <h3>${servicio.nombre}</h3>
                        <p>${servicio.descripcion}</p>
                        <p><strong>Categoría:</strong> ${servicio.categoria}</p>
                        <a href="registro.html?idServicio=${servicio.idServicio}" class="btn">Solicitar</a>
                    `;
                    listaServicios.appendChild(div);
                });

                if (filtrados.length === 0) {
                    listaServicios.innerHTML = "<p>No hay servicios disponibles en esta categoría.</p>";
                }
            }

            categoriaSelect.addEventListener("change", () => {
                renderServicios(categoriaSelect.value);
            });

            renderServicios();
        }
    }
});
