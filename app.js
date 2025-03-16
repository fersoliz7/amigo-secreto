// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

/**
 * Agrega un nombre a la lista de amigos y lo muestra en el elemento HTML con id 'listaAmigos'.
 */
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();

    if (amigo) {
        amigos.push(amigo);
        mostrarAmigos();
        input.value = '';
        console.log(`${amigo} ha sido agregado a la lista.`);
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

/**
 * Muestra la lista de amigos en el elemento HTML con id 'listaAmigos'.
 */
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

/**
 * Selecciona de manera aleatoria uno de los nombres almacenados en el array amigos y lo muestra en el elemento HTML con id 'resultado'.
 */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    console.log(`El amigo sorteado es: ${amigoSorteado}`);
}

// Ejemplo de uso
// agregarAmigo('Juan');
// agregarAmigo('María');
// console.log(amigos);

