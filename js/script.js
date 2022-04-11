const url = 'https://type.fit/api/quotes';
const url1 = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
let inp = document.getElementById('inp');
let myImg = document.getElementById('imgblock');



async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    const jpgres = await fetch(url1);
    const datajpg = await jpgres.json();
    showData(data,datajpg);
    
}


function showData(data,datajpg){
    let number =  Math.floor(Math.random() * (21 - 1) + 1);
    let imgNumber = Math.floor(Math.random() * 10);
    
    myImg.style.backgroundImage = 'url(' + datajpg.results[imgNumber].urls.small_s3 + ')';
    inp.innerHTML = (data[number].text + "<p> Цитата: " + data[number].author + "</p>")
    document.body.style.backgroundImage
    }

