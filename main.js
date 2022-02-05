const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Con un ciclo forEach intercetto i valori della proprietà color nell'array di oggetti e applico la funzione di generazione di colori casuali
icons.forEach(function (item) {
	item.color = randomColor();
});

//Creo un riferimento all'elemento container
const container = document.getElementById("container");

//Invoco una funzione creata in precedenza
createIcon(container, icons);

//Creo un riferimento all'elemento select dell'HTML
const selectType = document.getElementById("selection");

//Creo un ascoltatore di eventi che intercetti la selezione del menu select
selectType.addEventListener("change", function() {

    //Creo un riferimento al valore della selezione corrente (this)
    let option = this.value;
    console.log(option);

    //Creo una condizione per la quale
    //se il selettore è su all, invoca la funzione regolare di creazione icone
    if (option == "all") {
        createIcon(container, icons);
        //altrimenti 
    } else {
        //filtra gli elementi di icons in un nuovo array
        const newArray = icons.filter(icon => {
            if (icon.type == option) {
                return true;
            }
            return false;
        });
        //e invoca la funzione con i parametri del container e del nuovo array filtrato
        createIcon(container, newArray);
    }
    
});

//FUNZIONI

//Creo una funzione apposita per stampare le icone
function createIcon (container, icons) {

    let content = "";
    //Familiarizzo con l'utilizzo del ciclo forEach
    icons.forEach(object => {
        
        content += `<div class="icon-box">
        <i style="color:${object.color};" class="${object.family} ${object.prefix}${object.name}"></i>
        <span>${object.name}</span>
        </div>
        `

    });
    //Inserisco nell'HTML le iterazioni del ciclo
    container.innerHTML = content;
};

//Funzione di generazione colore esadecimale casuale
function randomColor() {

    //Genero un numero esadecimale
    function randomEsadecimalNumber() {

        //Da una stringa contenente lettere e numeri del sistema esadecimale
        const esadecimal = "0123456789abcdef";
      
        return esadecimal[Math.floor(Math.random() * esadecimal.length)];
      
    }
    
    //Creo un nuovo array con il simbolo dell'hashtag
    let newArray = ["#"];
    
    //Creo un ciclo che inserisca per sei volte un numero esadecimale casuale nel nuovo array
    for (let i = 0; i < 6; i++) {
        newArray.push(randomEsadecimalNumber());
    }
    
    //Unisco come stringa con la funzione join i valori raccolti e restituisco il codice esadecimale del colore
    newColor = newArray.join("");
    return newColor;
    
}




//Creo un ciclo che scorra tutti gli oggetti dell'array e crei un div
//icon per ognuno di essi

/*
for (let i = 0; i < icons.length; i++) {

    content += `<div class="icon-box">
                <i class="${icons[i].family} ${icons[i].prefix}${icons[i].name}"></i>
                <span>${icons[i].name}</span>
                </div>
                `
}
*/