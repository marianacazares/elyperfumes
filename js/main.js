document.addEventListener('DOMContentLoaded', () => {
    const aromaQuiz = document.getElementById('aroma-quiz');

    if (aromaQuiz) {
        aromaQuiz.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const selectedAroma = document.querySelector('input[name="aroma"]:checked');

            if (selectedAroma) {
                const aromaValue = selectedAroma.value;
                // For now, we'll just show an alert. 
                // Later, this can be changed to redirect to a specific catalog page or section.
                alert(`Has seleccionado la familia olfativa: ${aromaValue}. Próximamente te redirigiremos al catálogo correspondiente.`);
                
                // Example of redirection:
                // window.location.href = `catalogo.html#${aromaValue}`;
            } else {
                alert('Por favor, selecciona una opción para descubrir tu aroma ideal.');
            }
        });
    }
});
