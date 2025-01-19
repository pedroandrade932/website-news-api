// Função responsável pela pesquisa dinamica
function search(){
    // Captura dos componentes importates
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
        console.log(dados)
        let noticias = (dados.articles)
        if (dados.totalResults > 0){
                noticias.map(function(numero){
                let article = document.createElement('article')
                article.className = "news"
                if (numero.title != "[Removed]"){
                    article.innerHTML = `
                                    <img class='imagem' src=${numero.urlToImage}>
                                    <h2> ${numero.title}</h2>
                                    <p> ${numero.description}</p>
                                    <a href =${numero.url} target='blank'>
                                    <p class="link"> Leia mais </p></a>`
                    mostrarNoticias.appendChild(article)
                }
            })
        }else{
            mostrarNoticias.innerHTML = "<h2>Nenhum Resultado para a busca :(</h2>"
        }
    })
}