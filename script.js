const contenedor = document.getElementById("contenedor-regalos");

const SUPABASE_URL = "https://oylvgvequxxfggdbjhgu.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IkpXVCJ9.WMekvSfboTOBYUDJDWvgwy1isYPFJGwVpqFVF7aArxY";

// =====================================================
// CATEGORÍAS
// =====================================================

function obtenerCategoria(nombre) {

    const n = nombre.toLowerCase();

    if (
        n.includes("pañal") ||
        n.includes("toallita") ||
        n.includes("disco absorbente") ||
        n.includes("bolsa para leche") ||
        n.includes("sacaleche") ||
        n.includes("lactancia") ||
        n.includes("purelan")
    ) {
        return "Mamá y lactancia";
    }

    if (
        n.includes("bod") ||
        n.includes("conjunto") ||
        n.includes("ropa") ||
        n.includes("vestido") ||
        n.includes("pijama") ||
        n.includes("saco de dormir") ||
        n.includes("calcet") ||
        n.includes("babero")
    ) {
        return "Ropita y accesorios";
    }

    if (
        n.includes("baño") ||
        n.includes("gel") ||
        n.includes("crema") ||
        n.includes("higiene") ||
        n.includes("cepillo") ||
        n.includes("termómetro") ||
        n.includes("aspirador nasal") ||
        n.includes("uñas")
    ) {
        return "Higiene y cuidado";
    }

    if (
        n.includes("cuna") ||
        n.includes("colchón") ||
        n.includes("sábana") ||
        n.includes("sábanas") ||
        n.includes("manta") ||
        n.includes("protector") ||
        n.includes("cojín") ||
        n.includes("dormir")
    ) {
        return "Dormitorio";
    }

    if (
        n.includes("coche") ||
        n.includes("carricoche") ||
        n.includes("silla") ||
        n.includes("maxi-cosi") ||
        n.includes("maxicosi") ||
        n.includes("portabebé") ||
        n.includes("porteo")
    ) {
        return "Paseo y transporte";
    }

    if (
        n.includes("bañera") ||
        n.includes("trona") ||
        n.includes("hamaca") ||
        n.includes("mecedora") ||
        n.includes("sacaleches")
    ) {
        return "Para Vienna";
    }

    return "Otros";
}


// =====================================================
// ID ÚNICO PARA CADA REGALO
// =====================================================

function obtenerIdRegalo(nombre) {
    return nombre
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


// =====================================================
// CARGAR RESERVAS DESDE SUPABASE
// =====================================================

async function cargarReservas() {

    try {

        const respuesta = await fetch(
            `${SUPABASE_URL}/rest/v1/reservas?select=regalo_id,reservado`,
            {
                method: "GET",
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`
                }
            }
        );

        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar las reservas.");
        }

        const reservas = await respuesta.json();

        regalos.forEach(regalo => {

            const id = obtenerIdRegalo(regalo.nombre);

            const reserva = reservas.find(
                r => r.regalo_id === id && r.reservado === true
            );

            regalo.reservado = !!reserva;
        });

    } catch (error) {

        console.error("Error cargando reservas:", error);

    }
}


// =====================================================
// RESERVAR REGALO
// =====================================================

async function reservarRegalo(regalo, boton) {

    const id = obtenerIdRegalo(regalo.nombre);

    boton.disabled = true;
    boton.textContent = "Reservando...";

    try {

        const respuesta = await fetch(
            `${SUPABASE_URL}/rest/v1/reservas`,
            {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify({
                    regalo_id: id,
                    reservado: true
                })
            }
        );

        // Si otra persona ya lo reservó
        if (respuesta.status === 409) {

            regalo.reservado = true;

            alert(
                "Este regalo acaba de ser reservado por otra persona. 💕"
            );

            renderizarRegalos();
            return;
        }

        if (!respuesta.ok) {
            throw new Error("No se pudo guardar la reserva.");
        }

        regalo.reservado = true;

        renderizarRegalos();

        // Abrir WhatsApp después de guardar la reserva
        const mensaje = `Hola Joselyn 😊. He reservado el regalo "${regalo.nombre}" para el Baby Shower de Vienna.`;

        window.open(
            `https://wa.me/34603587634?text=${encodeURIComponent(mensaje)}`,
            "_blank"
        );

    } catch (error) {

        console.error(error);

        alert(
            "No hemos podido registrar la reserva. Por favor, inténtalo nuevamente."
        );

        boton.disabled = false;
        boton.textContent = "💬 Reservar";
    }
}


// =====================================================
// MOSTRAR REGALOS
// =====================================================

function renderizarRegalos() {

    contenedor.innerHTML = "";

    const categorias = [
        ...new Set(regalos.map(r => r.categoria))
    ];

    categorias.forEach(categoria => {

        const titulo = document.createElement("h2");

        titulo.className = "categoria";
        titulo.textContent = categoria;

        contenedor.appendChild(titulo);

        const grid = document.createElement("div");

        grid.className = "grid-regalos";

        regalos
            .filter(r => r.categoria === categoria)
            .forEach(regalo => {

                const tarjeta = document.createElement("div");

                tarjeta.className = "tarjeta";

                tarjeta.innerHTML = `
                    <h3>${regalo.nombre}</h3>

                    <div class="precio">
                        ${regalo.precio}
                    </div>

                    <div class="botones">

                        <a class="ver"
                           href="${regalo.enlace}"
                           target="_blank">
                           🛍 Ver regalo
                        </a>

                        ${
                            regalo.reservado
                            ?
                            `<div class="reservado">
                                🔒 Reservado
                            </div>`
                            :
                            `<button class="reservar"
                                    type="button">
                                💬 Reservar
                            </button>`
                        }

                    </div>
                `;

                const botonReservar =
                    tarjeta.querySelector(".reservar");

                if (botonReservar) {

                    botonReservar.addEventListener(
                        "click",
                        () => reservarRegalo(regalo, botonReservar)
                    );
                }

                grid.appendChild(tarjeta);
            });

        contenedor.appendChild(grid);
    });
}


// =====================================================
// INICIAR
// =====================================================

async function iniciarRegalos() {

    regalos.forEach(regalo => {
        regalo.categoria = obtenerCategoria(regalo.nombre);
    });

    await cargarReservas();

    renderizarRegalos();
}

iniciarRegalos();
