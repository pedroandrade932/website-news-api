// Capturar conteudo da url (NEWS API)
let url = 'https://newsapi.org/v2/everything?q=pesquisa&language=pt&sortBy=publishedAt&apiKey=b42cefeaf183405d95940739d2eaaca6';
mostrarNoticias = document.getElementById('noticias');

//Converte os dados da url para o formato.json
fetch(url).then(resp =>{
    return resp.json();
}).then(dados=>{
    console.log(dados);
    //lida com os dados convertidos
    let noticias = (dados.articles);

        //trata e organiza as notícias
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

        let btnPesquisa = document.querySelector('.btn-pesquisa input');

        // Evento para capturar o termo e redirecionar
        btnPesquisa.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                let termo = btnPesquisa.value.trim();
                if (termo) {
                    // Redireciona para a página de pesquisa 
                    window.location.href = `/search-news.html?query=${encodeURIComponent(termo)}`;
                }
            }
        });
});