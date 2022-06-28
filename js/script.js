async function waitingForResponse() {
    const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
    const fighterList = await response.json();
    getImageFighter(fighterList);
    // getCharacteristics(fighterList)
}
waitingForResponse()

async function waitingForResponseId(id) {
    const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    const fighterCList = await response.json();
    getCharacteristics(fighterCList);        
}
// async function waitingForResponseId() {
//     const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/1.json")
//     const fighterCList = await response.json();
//     // getImageFighter(fighterList);
//     // getCharacteristics(fighterList)
//     console.log(fighterCList)
// }
// waitingForResponseId()

    /* Image */ 

const listChamps = document.getElementById("list-champs")

const listFighters = document.getElementById("list-fighters")

const listCharacteristics = document.getElementById("list-fighters-caracteristics");


// function getImageFighter(array){
//     array.forEach(fighter => {
//         const eachChamp = document.createElement("li");
//         listChamps.appendChild(eachChamp);
//         eachChamp.classList.add("list-champs-item");
//         eachChamp.innerHTML = `<a class="link-img" href="#"><img class="image-xs" src="${fighter.images.xs}"></a><p class="displayN">${fighter.name}</p>`
//     })

// listChamps.addEventListener("click", function(event) {
//     if (event.target.classList.contains("image-xs")) {
//         document.getElementById("list-fighters-battle").appendChild(listFighters);
//         const eachFighters = document.createElement("li");
//         listFighters.appendChild(eachFighters);
//         eachFighters.classList.add("list-champs-item");
//         eachFighters.innerHTML = `<a class ="link-imgM" href="#"><img class="image-xs-middle" src="${event.target.src}"></a>`
//         const a = event.target.parentElement
//         const li = a.parentElement

//         const eachChampName = document.createElement("li");
//         listCharacteristics.appendChild(eachChampName);
//         eachChampName.innerHTML = `<p>${li.lastChild.innerText}</p>`;

//         li.remove();
//     };
// });

//     listFighters.addEventListener("click", function(event){
//         if(event.target.classList.contains("image-xs-middle")) {
//                 const aM = event.target.parentElement;
//                 const liM = aM.parentElement;
//                 const firstChild = listChamps.firstElementChild; 
//                 // console.log(firstChild);
//                 listChamps.insertBefore(liM, firstChild)
//                 event.target.classList.replace("image-xs-middle", "image-xs")
//             }
//         });      
// };

let eachChampName;
function getImageFighter(array){
    let string ="";
    array.forEach(fighter => {
        string += `<li class="list-champs-item" data-id="${fighter.id}"><a class="link-img" href="#"><img class="image-xs" src="${fighter.images.sm}"></a></li>`;
    });
    listChamps.innerHTML = string;
    getFighter();
    removeFighter();
};


function removeFighter(){
    listFighters.addEventListener("click", function(event){
        if(event.target.classList.contains("image-xs-middle")) {
            const aM = event.target.parentElement;
            const liM = aM.parentElement;
            const firstChild = listChamps.firstElementChild; 
            listChamps.insertBefore(liM, firstChild)
            event.target.classList.replace("image-xs-middle", "image-xs");
            eachChampName.innerHTML ="";
        }
    });
}

function getFighter(){
    listChamps.addEventListener("click", function(event) {
        let li,
        img; 
    
        if (event.target.hasAttribute("src")) {
            li = event.target.parentElement.parentElement;
            img = event.target;
            
        } else if (event.target.hasAttribute("href")){
            li = event.target.parentElement;
            img = event.target.firstElementChild;          
        }
    
        document.getElementById("list-fighters-battle").appendChild(listFighters);
        const eachFighters = document.createElement("li");
        listFighters.appendChild(eachFighters);
        eachFighters.classList.add("list-champs-item");
        eachFighters.innerHTML = `<a class ="link-imgM" href="#"><img class="image-xs-middle" src="${img.src}"></a>`
    
        waitingForResponseId(li.dataset.id);
        li.remove()
    });
}


function getCharacteristics(array){
    listCharacteristics.innerHTML += `<li class="skills-fighters"><p class="characterisctis-name">${array.name}</p><p class="skills-ttl"><span class="span-ttl">Force :</span> ${array.powerstats.strength}</p>
    <p class="skills-ttl"><span class="span-ttl">Combat :</span>  ${array.powerstats.combat}</p><p class="skills-ttl"><span class="span-ttl">Power :</span> ${array.powerstats.durability}</p><p class="skills-ttl"><span class="span-ttl">Power :</span>  ${array.powerstats.power}</p></li>`; 
};
