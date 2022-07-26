let elrowlogo = document.querySelector(".rowlogo");
let elimgDiv = document.querySelector(".imgDiv");
let elimgDiv2 = document.querySelector(".imgDiv2");


let elRow1 = document.querySelector(".row1");
let elRow2 = document.querySelector(".row2");
let elbtnPokemon = document.querySelector(".btnPokemon");
let elbtnMowies = document.querySelector(".btnMowies");
let elbtnBoth = document.querySelector(".btnBoth");
let elbtnClear = document.querySelector(".btnClear ");


let arrayPokemon = pokemons;
let arrayMovies = movies.slice(0, 100);
let arraypokVsmov = arrayPokemon.concat(arrayMovies);
console.log(arraypokVsmov)

elbtnPokemon.addEventListener("click", function() {
    elimgDiv2.style.display = "none";
    elimgDiv.style.display = "block";
    elRow2.innerHTML = null;
    renderPokemon(arrayPokemon);
})

elbtnMowies.addEventListener("click", function() {
    elimgDiv.style.display = "none";
    elimgDiv2.style.display = "block";
    elRow1.innerHTML = null;
    renderMovies(arrayMovies);
})


elbtnBoth.addEventListener("click", function() {
    elimgDiv.style.display = "block";
    elimgDiv2.style.display = "block";
    elRow1.innerHTML = null;
    elRow2.innerHTML = null;
    renderPokemon(arrayPokemon);
    renderMovies(arrayMovies);
})


elbtnClear.addEventListener("click", function() {
    elimgDiv.style.display = "none";
    elimgDiv2.style.display = "none";
    elRow1.innerHTML = null;
    elRow2.innerHTML = null;
})



function renderPokemon(array) {


    for (const item of array) {



        let newCol = document.createElement("div");
        newCol.classList = "col-3"

        let newCard = document.createElement("div");
        newCard.classList = "card h-100 text-center "

        let newiImg = document.createElement("img");
        newiImg.classList = "card-img-top m-0 mt-2 m-auto";
        newiImg.style = "width: 170px; "
        newiImg.src = item.img;


        let newCardbody = document.createElement("div");
        newCardbody.classList = "card-body"

        let newH5 = document.createElement("h5");
        newH5.classList = "card-title fw-bold fs-2 fw-bold"
        newH5.textContent = item.name;


        let newP = document.createElement("p");
        newP.classList = "card-text fw-bold fs-5 m-0"
        newP.textContent = item.type;

        let newP1 = document.createElement("p");
        newP1.classList = "card-text fw-bold fs-5 m-0"
        newP1.textContent = item.weight;

        let newP2 = document.createElement("p");
        newP2.classList = "card-text fw-bold fs-5 m-0"
        newP2.textContent = item.height;

        newCol.appendChild(newCard);
        newCard.appendChild(newiImg);
        newCard.appendChild(newCardbody);
        newCardbody.appendChild(newH5);
        newCardbody.appendChild(newP);
        newCardbody.appendChild(newP1);
        newCardbody.appendChild(newP2);

        elRow1.appendChild(newCol);

    }
}


function renderMovies(array) {
    for (const item of array) {

        let newColdiv = document.createElement("div");
        newColdiv.classList = "col-3 ";

        let newCarddiv = document.createElement("div");
        newCarddiv.classList = "card h-100  text-center";

        let newiImd = document.createElement("img");
        newiImd.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
        newiImd.classList = "card-img-top";


        let newCardbody = document.createElement("div");
        newCardbody.classList = "card-body p-0";

        let newH5 = document.createElement("h5");
        newH5.classList = "card-title mb-2 m-0 fw-bold bg-primary";
        newH5.textContent = item.Title;

        let newP1 = document.createElement("p");
        newP1.classList = "card-text m-0  fw-bold";
        newP1.textContent = item.Categories;

        let newP2 = document.createElement("p");
        newP2.classList = "card-text m-0  fw-bold";
        newP2.textContent = item.imdb_rating;

        let newP3 = document.createElement("p");
        newP3.classList = "card-text m-0  fw-bold";
        newP3.textContent = item.movie_year;

        let newBtnwrapper = document.createElement("div");
        newBtnwrapper.classList = "d-flex justify-content-around mb-3";

        let newLink1 = document.createElement("a");
        newLink1.classList = "btn btn-outline-danger";
        newLink1.textContent = "Watch Tralier";

        let newLink2 = document.createElement("a");
        newLink2.classList = "btn btn-outline-success";
        newLink2.textContent = "Bookmark";

        let newLink3 = document.createElement("a");
        newLink3.classList = "btn btn-outline-info";
        newLink3.textContent = "More info";

        newColdiv.appendChild(newCarddiv);
        newCarddiv.appendChild(newiImd);
        newCarddiv.appendChild(newCardbody);
        newCarddiv.appendChild(newBtnwrapper);
        newCardbody.appendChild(newH5);
        newCardbody.appendChild(newP1);
        newCardbody.appendChild(newP2);
        newCardbody.appendChild(newP3);
        newBtnwrapper.appendChild(newLink1);
        newBtnwrapper.appendChild(newLink2);
        newBtnwrapper.appendChild(newLink3);

        elRow2.appendChild(newColdiv);
    }

}





// task-1
var users = [{
        name: "Avazbek",
        telNumber: "998911645099"
    },
    {
        name: "Umid",
        telNumber: "998911758585"
    },
    {
        name: "O'ktam",
        telNumber: "998911777767"
    },
    {
        name: "Valijon",
        telNumber: "998917777777"
    },
    {
        name: "Sarvar",
        telNumber: "998911222222"
    },
    {
        name: "Toxir",
        telNumber: "998911645022"
    },
    {
        name: "Sardor",
        telNumber: "998911222322"
    },
]



function findUser(array, number) {
    let user = ""

    for (const item of array) {
        if (item.telNumber == number) {
            user = item.name;
            return user;
        } else {
            user = "Nomer mavjud emas"
        }

    }
    return user
}

console.log(findUser(users, 998911758585));




// task-2
var users = [{
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]



function ageGreaterThan(array, minAge) {
    let newArray = []

    for (const item of array) {
        if (item.age >= minAge) {
            newArray.push(item);
        }

    }

    return newArray

}

console.log(ageGreaterThan(users, 22));