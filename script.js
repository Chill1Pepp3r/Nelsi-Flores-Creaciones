document.addEventListener('DOMContentLoaded', function() {
    const frases = [
        "¡Donde los sueños se hornear realidad! 🎂",
        "Dulces momentos en cada mordida 🧁",
        "Amasamos felicidad con cada receta 🥐",
        "¡Endulzamos tu vida a todo color! 🌈",
        "Creando magia con harina y pasión ✨",
        "Tu alegría es nuestra mejor levadura 🍰",
        "Dulces capítulos de sabor 📖",
        "¡Pequeños detalles que endulzan el alma! 💖",
        "Postres que son pura química... ¡de amor! 🧪❤️",
        "La vida es mejor con un poco de dulzura 🍭",
        "¡Dulces que derriten corazones y no solo en la boca! ❤️🔥",
        "Nuestro secreto: una pizca de magia en cada receta ✨🧁",
        "Horneando sonrisas desde el primer mordisco 😁🍪",
        "¡La vida es corta, pide postre primero! 🍰⏳",
        "Amor a primera vista... ¡y a primer mordisco! 👀💘",
        "Mezclando tradición con una pizca de locura 🎩🥄",
        "¿Azúcar? ¡Sí, por favor! Y repítalo 3 veces 🍭🍭🍭",
        "Capas de felicidad en cada porción 🎂🌈",
        "¡Nuestros cupcakes son abrazos comestibles! 🤗🧁",
        "Endulzando tu día una chispa a la vez ⚡🍫",
        "La magia ocurre cuando el horno se enciende 🔮🔥",
        "¡Descorcha la felicidad, pide tu postre! 🍾🎉",
        "Dulce tentación en cada esquina... resistirse es inútil 😈🍩",
        "Pequeñas delicias con grandes sabores 🐾🌼",
        "¡Nuestras galletas tienen chip de alegría! 🍪💃",
        "Glaseado de sueños sobre esponjosas nubes ☁️🍦",
        "El amor está en el aire... y huele a canela recién horneada 🌬️❤️",
        "¡Haz de cada día una celebración con sabor! 🎊🍓",
        "Dulces que son puro 'food for the soul' 🧘♀️🍯",
        "Creando arte que puedes saborear 🎨👅",
        "¡El mejor remedio contra el mal humor! 😠→😋",
        "Nunca subestimes el poder de un buen postre 💪🍮",
        "Donde los suspiros se convierten en merengues 😌🍥",
        "¡Dulce alerta! Felicidad en camino 🚨🎂",
        "Mezcla perfecta: 1 taza de amor + 2 cucharadas de pasión 💞🥣",
        "Horneando memorias deliciosas 🧠📸",
        "¡Nuestros pasteles son Instagram-Ready! 📸🌟",
        "El cielo existe... y tiene sabor a vainilla 🌌🍦",
        "¡Descorre la cortina de tu próxima dulce aventura! 🎭🍭",
        "La vida es como un pastel: mejor compartida 🍰👫",
        "I'm Afraid 🤠🐎",
        "01000010 01101001 01101100 01101100 01101001 01100101 00100000 01001010 01100101 01100001 01101110 00100000 01101001 01110011 00100000 01101110 01101111 01110100 00100000 01101101 01111001 00100000 01101100 01101111 01110110 01100101 01110010 00100000 "
    ];

    function mostrarFraseAleatoria() {
        const elemento = document.getElementById('frase-dinamica');
        const frase = frases[Math.floor(Math.random() * frases.length)];
        elemento.innerHTML = frase;
    }

    mostrarFraseAleatoria();
    
    // Opcional: Descomenta para cambio automático cada 5 segundos
    // setInterval(mostrarFraseAleatoria, 5000);

});