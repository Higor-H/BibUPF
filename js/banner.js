// cria uma variavel banner e pega o elemento do HTML
var bannerHtml = document.querySelector(".banner-destaque img");
var bannerCjt = ["img/destaque1.png","img/destaque2.png"];

var  bannerAtual = 0;

function trocaBanner(){
    bannerAtual += 1;
    if(bannerAtual == bannerCjt.length){
        bannerAtual = 0;
    }
    bannerHtml.src = bannerCjt[bannerAtual];
}

//executa a função a cada 2000 milisegundos
setInterval(trocaBanner, 2000)

// cria uma variavel banner e pega o elemento do HTML
var bannerHtmlp = document.querySelector(".banner-destaquep img");
var bannerCjtp = ["img/produtosamz/2.png","img/produtosamz/destaquenew3.png","img/produtosamz/1.png"];

var  bannerAtualp = 0;

function trocaBannerp(){
    bannerAtualp += 1;
    if(bannerAtualp == bannerCjtp.length){
        bannerAtualp = 0;
    }
    bannerHtmlp.src = bannerCjtp[bannerAtualp];
}

//executa a função a cada 2000 milisegundos
setInterval(trocaBannerp, 2000)
