let url = 'https://newsapi.org/v2/everything?q=pesquisa&language=pt&sortBy=publishedAt&apiKey=b42cefeaf183405d95940739d2eaaca6';
mostrarNoticias = document.getElementById('noticias');

fetch(url).then(resp =>{
    return resp.json();
}).then(dados=>{
    console.log(dados);
    let noticias = (dados.articles);
        noticias.map(function(numero){
            let div = document.createElement('div');
            div.className = "news";

            div.innerHTML = `
                            <img class='imagem' src=${numero.urlToImage}>
                            <h2> ${numero.title}</h2>
                            <p> ${numero.description}</p>
                            <a href =${numero.url} target='blank'>
                            <p class="link"> Leia mais </p></a>
                            `;
            mostrarNoticias.appendChild(div);
        })
});