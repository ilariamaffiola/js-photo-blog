// const dataCard = document.getElementById('date-card');
// const descriptionCard = document.getElementById('description-card');
//quindi andiamo a selezionare la row 
const row = document.getElementById('row');
//console.log(row);
//e andiamo ad appendere le card create col ciclo for
//quindi andiamo a fare una chiamata ad axios per ottenere i dati delle immagini
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp)=>{
    //console.log(resp.data);
    //come vediamo qui abbiamo un array di oggetti, quindi andiamo a fare un ciclo for per creare le card
    // for (let i = 0; i < resp.data.length; i++){
    //     //visualizziamo in console i singoli oggetti dell'array così possiamo avere un idea più rapida sul da farsi
    //     console.log(resp.data[i]);
    //     //proviamo a prendere i dati di un singolo oggetto
    //     console.log(resp.data[i].url);
    //     console.log(resp.data[i].title);
    //     console.log(resp.data[i].date);
    //     //facendo questo abbiamo la conferma che i dati sono giusti e possiamo procedere a creare le card
    //     //quindi andiamo a creare una card per ogni oggetto dell'array
    //     //creiamo la colonna
    // }
    //abbiamo le card già fatte in html, ora dobbiamo solo riempirle con i dati delle immagini cambiando l'attributo src delle immagini e il testo del titolo e del paragrafo, quindi dobbiamo selezionare le card e cambiare il loro contenuto. quindi andiamo a commentare in html quello che c'è all'interno delle card e andiamo a selezionare le card in js.
    let createNewCard = (data) => {
        const {url, title, date} = data;
        //creiamo la colonna
        const col = `<div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card p-3">
        <img class="pin" src="./img/pin.svg" alt="">
        <div class="card-img-top">
        <img class="img-fluid w-100" src="${url}" alt="pic">
        </div>
        <div class="card-body">
        <h5 id="date-card">${date}</h5>
        <p id="description-card">${title.toUpperCase()}</p>
        </div>
        </div>
        </div>`
        return col;
    }
    let renderCard = (array) => {
        let colls = '';
        //quindi in un ciclo for vado a creare le col che ho commentato per la lunghezza dell'array di oggetti
        //inserisco il contenuto nel ciclo for e lo vado ad appendere alla row che abbiamo lasciato in html
        for (let i = 0; i < array.length; i++){
            //creiamo la colonna
            colls += createNewCard(array[i]);
        }
        //quindi andiamo a selezionare la row e andiamo ad appendere le card create nel ciclo for
        row.innerHTML = colls;
        //console.log(colls);
    }
    renderCard(resp.data);

//in questo modo abbiamo creato le card in js e non in html, quindi possiamo anche decidere di fare un numero di card diverso da quelle che abbiamo in html, quindi se un giorno cambiasse il numero di elementi nell'array di oggetti ottenuto possiamo farlo senza problemi, perché tanto nel ciclo for metteremo la lunghezza dell'array di oggetti e non un numero specifico.

//facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
let cards = document.querySelectorAll('.card');
let overlay = document.querySelector('.overlay');
console.log(overlay);
cards.forEach(element => {
    console.log(element);
    element.addEventListener('click', function(){
        if(overlay.classList.contains('d-none')){
            overlay.classList.remove('d-none');
        }
        else{
            overlay.classList.add('d-none');
        }
    //Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
    let imgCards = element.querySelector('.card-img-top img');
    console.log(imgCards.src);
    let imgOverlay = document.querySelector('.img-overlay');
    console.log(imgOverlay.src);
    imgOverlay.src = imgCards.src;
    });
});

//Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
let button =document.getElementById('button');
console.log(button);
button.addEventListener('click', function(){
    if(overlay.classList.contains('d-none')){
        overlay.classList.remove('d-none');
    }
    else{
        overlay.classList.add('d-none');
    }
});

});