const contenedor = document.getElementById("contenedor-regalos");

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
        return "🤱 Mamá y lactancia";
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
        return "👗 Ropita y accesorios";
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
        return "🛁 Higiene y cuidado";
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
        return "🛏️ Dormitorio";
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
        return "🚗 Paseo y transporte";
    }

    if (
        n.includes("bañera") ||
        n.includes("trona") ||
        n.includes("hamaca") ||
        n.includes("mecedora") ||
        n.includes("sacaleches")
    ) {
        return "🍼 Para Vienna";
    }

    return "🎁 Otros";
}

regalos.forEach(regalo => {
    regalo.categoria = obtenerCategoria(regalo.nombre);
});

const categorias = [...new Set(regalos.map(r => r.categoria))];
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

                <div class="precio">${regalo.precio}</div>

                <div class="botones">

                    <a class="ver"
                       href="${regalo.enlace}"
                       target="_blank">
                       🛍 Ver regalo
                    </a>

                    ${
                        regalo.reservado
                        ?
                        `<div class="reservado">🔒 Reservado</div>`
                        :
                        `<a class="reservar"
                           target="_blank"
                           href="https://wa.me/34603587634?text=${encodeURIComponent(
                                `Hola Joselyn 😊. Quisiera reservar el regalo "${regalo.nombre}" para el Baby Shower de Vienna.`
                           )}">
                           💬 Reservar
                        </a>`
                    }

                </div>
            `;

            grid.appendChild(tarjeta);

        });

    contenedor.appendChild(grid);

});
