function obterValorConsulta(parametro) {
    const urlParametro = new URLSearchParams(window.location.search);
    return urlParametro.get(parametro);
}

// Função responsável pela pesquisa dinamica
function search(){
    // Captura dos componentes importantes
    let pesquisa = window.document.querySelector("#search").value
    let mostrarNoticias = window.document.getElementById('noticias')

    // Capturar conteudo da url (NEWS API)
    let url = `https://newsapi.org/v2/everything?q=${pesquisa}&language=pt&pageSize=30&sortBy=publishedAt&apiKey=b42cefeaf183405d95940739d2eaaca6`
    
    // Apagar lixo residual da section
    mostrarNoticias.innerHTML = ""

    // Tratar o .json retornado
    fetch(url).then(resp =>{
        return resp.json()
    }).then(dados=>{
        // pega todas as noticias retornadas
        let noticias = (dados.articles)

        // Se o resultado das pesquisa for maior que 0, continue
        if (dados.totalResults > 0){
                // trata e organiza as noticias
                noticias.map(function(numero){
                let article = document.createElement('article')
                article.className = "news"
                // Se o titulo (noticia) não for removido e não for nulo, continue
                if (numero.title != "[Removed]" && numero.title != null){
                    // mostra a noticia (já dentro do article)
                    article.innerHTML = `
                                    <img class='imagem' src=${numero.urlToImage}>
                                    <h2> ${numero.title}</h2>
                                    <p> ${numero.description}</p>
                                    <a href =${numero.url} target='blank'>
                                    <p class="link"> Leia mais </p></a>`
                    mostrarNoticias.appendChild(article)
                }
            })
        // Caso o número de noticias for 0, continue
        }else{
            mostrarNoticias.innerHTML = "<h2>Nenhum Resultado para a busca :(</h2>"
        }
    })
}

// Capturar o termo da URL automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    let termo = obterValorConsulta("query"); // Recupera o termo da URL
    if (termo) {
        document.querySelector("#search").value = termo; // Preenche o campo de pesquisa
        search(termo); // Faz a busca automaticamente
    }
});