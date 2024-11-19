document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const toggleButton = document.getElementById('theme-toggle');

    // Encriptar texto
    function encriptarTexto(texto) {
        const reemplazos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        texto = texto.toLowerCase();
        reemplazos.forEach(([original, reemplazo]) => {
            texto = texto.replaceAll(original, reemplazo);
        });
        return texto;
    }

    // Desencriptar texto
    function desencriptarTexto(texto) {
        const reemplazos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        texto = texto.toLowerCase();
        reemplazos.forEach(([reemplazo, original]) => {
            texto = texto.replaceAll(original, reemplazo);
        });
        return texto;
    }

    // Botones
    window.btnEncriptar = () => {
        mensaje.value = encriptarTexto(textArea.value);
        textArea.value = '';
        mensaje.style.backgroundImage = "none";
    };

    window.btnDesencriptar = () => {
        mensaje.value = desencriptarTexto(textArea.value);
        textArea.value = '';
        mensaje.style.backgroundImage = "none";
    };

    // Copiar texto
    window.copiarTexto = () => {
        if (mensaje.value) {
            navigator.clipboard.writeText(mensaje.value).then(() => {
                alert("Texto copiado al portapapeles.");
            });
        } else {
            alert("No hay texto para copiar.");
        }
    };

    // Cambiar tema
    toggleButton.addEventListener('click', () => {
        const temaActual = document.documentElement.getAttribute('data-theme');
        const nuevoTema = temaActual === 'dark' ? null : 'dark';
        document.documentElement.setAttribute('data-theme', nuevoTema);
        toggleButton.textContent = nuevoTema === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro';
    });
});
