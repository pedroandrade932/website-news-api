function search(){
    let pesquisa = window.document.querySelector("#search").value
    let url = `https://newsapi.org/v2/everything?q=${pesquisa}&language=pt&pageSize=25&sortBy=publishedAt&apiKey=b42cefeaf183405d95940739d2eaaca6`
    let mostrarNoticias = window.document.getElementById('noticias')
    mostrarNoticias.innerHTML = ""

    fetch(url).then(resp =>{
        return resp.json()
    }).then(dados=>{
        console.log(dados)
        let noticias = (dados.articles)
        if (dados.totalResults > 0){
                noticias.map(function(numero){
                let div = document.createElement('div')
                div.className = "news"
                if (numero.title != "[Removed]"){
                    div.innerHTML = `
                                    <img class='imagem' src=${numero.urlToImage}>
                                    <h2> ${numero.title}</h2>
                                    <p> ${numero.description}</p>
                                    <a href =${numero.url} target='blank'>
                                    <p class="link"> Leia mais </p></a>`
                    mostrarNoticias.appendChild(div)
                }
            })
        }else{
            mostrarNoticias.innerHTML = "<h2>Nenhum Resultado para a busca :(</h2>"
        }
    })
}