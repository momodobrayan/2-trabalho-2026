function buscarPagina() {
    // Pega o que o usuário digitou e converte para minúsculas (evita erros de digitação)
    let termo = document.getElementById("campoPesquisa").value.toLowerCase().trim();
    
    // Configura o redirecionamento baseado no termo digitado
    if (termo === "codigo1" || termo === "html") {
        window.location.href = "sua-pagina-de-exemplo-1.html";
    } else if (termo === "codigo2" || termo === "css") {
        window.location.href = "sua-pagina-de-exemplo-2.html";
    } else {
        alert("Código ou resposta não encontrada. Tente 'html' ou 'css'.");
    }
}

// Permite buscar também quando o usuário aperta a tecla "Enter"
document.getElementById("campoPesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buscarPagina();
    }
});
