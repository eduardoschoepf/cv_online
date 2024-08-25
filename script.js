document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Função para esconder todas as seções
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = "none";
        });
    }

    // Função para mostrar a seção selecionada
    function showSection(sectionId) {
        hideAllSections();
        document.getElementById(sectionId).style.display = "block";
    }

    // Adiciona um evento de clique a cada link do menu
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // Mostra a primeira seção por padrão
    showSection("sobre-mim");
});