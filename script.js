const contenedor = document.getElementById("contenedor-regalos");

regalos.forEach(regalo => {

    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    tarjeta.innerHTML = `

        <h3>${regalo.nombre}</h3>

        <div class="precio">${regalo.precio}</div>

        <div class="botones">

            <a class="ver"
               href="${regalo.enlace}"
               target="_blank">
               Ver regalo
            </a>

            ${
                regalo.reservado

                ?

                `<div class="reservado">
                    🔒 Reservado
                 </div>`

                :

                `<a
                    class="reservar"
                    target="_blank"
                    href="https://wa.me/34603587634?text=${encodeURIComponent(
                        `Hola Joselyn 😊. Quisiera reservar el regalo "${regalo.nombre}" para el Baby Shower de Vienna.`
                    )}">
                    Reservar este regalo
                 </a>`
            }

        </div>

    `;

    contenedor.appendChild(tarjeta);

});
