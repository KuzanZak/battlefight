async function waitingForResponse() {
const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
const fighterList = await response.json();
getImageFighter(fighterList);
// getCharacteristics(fighterList)
}
waitingForResponse()

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

//     listChamps.addEventListener("click", function(event) {
//         if (event.target.classList.contains("image-xs")) {
//             document.getElementById("list-fighters-battle").appendChild(listFighters);
//             const eachFighters = document.createElement("li");
//             listFighters.appendChild(eachFighters);
//             eachFighters.classList.add("list-champs-item");
//             eachFighters.innerHTML = `<a class ="link-imgM" href="#"><img class="image-xs-middle" src="${event.target.src}"></a>`
//             const a = event.target.parentElement
//             const li = a.parentElement

//             const eachChampName = document.createElement("li");
//             listCharacteristics.appendChild(eachChampName);
//             eachChampName.innerHTML = `<p>${li.lastChild.innerText}</p>`;

//             li.remove();
//         };
//     });

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

function getImageFighter(array){
    array.forEach(fighter => {
        const eachChamp = document.createElement("li");
        listChamps.appendChild(eachChamp);
        eachChamp.setAttribute("data-id", fighter.id);
        eachChamp.classList.add("list-champs-item");
        eachChamp.innerHTML = `<a class="link-img" href="#"><img class="image-xs" src="${fighter.images.xs}"></a>`
        // eachChamp.innerHTML = `<button class="link-img"><img class="image-xs" src="${fighter.images.xs}"></button>`
    })
    addImageSkills();
    removeImg();
};


function removeImg(){
    listFighters.addEventListener("click", function(event){
        if(event.target.classList.contains("image-xs-middle")) {
            const aM = event.target.parentElement;
            const liM = aM.parentElement;
            const firstChild = listChamps.firstElementChild; 
            listChamps.insertBefore(liM, firstChild)
            event.target.classList.replace("image-xs-middle", "image-xs")
        }
    });
}

function addImageSkills(){
    listChamps.addEventListener("click", function(event) {
        let li,
        img; 
    
        if (event.target.hasAttribute("src")) {
            li = event.target.parentElement.parentElement;
            img = event.target;
            console.log(img)
            
        } else if (event.target.hasAttribute("href")){
            li = event.target.parentElement;
            img = event.target.firstElementChild;
            console.log(img)
            
        }
    
        document.getElementById("list-fighters-battle").appendChild(listFighters);
        const eachFighters = document.createElement("li");
        listFighters.appendChild(eachFighters);
        eachFighters.classList.add("list-champs-item");
        eachFighters.innerHTML = `<a class ="link-imgM" href="#"><img class="image-xs-middle" src="${img.src}"></a>`
    
        async function waitingForResponseId() {
            const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${li.dataset.id}.json`)
            const fighterCList = await response.json();
            addRemoveText(fighterCList);        
        }
        waitingForResponseId()
            
        li.remove()
    });
}


function addRemoveText(array){
    const eachChampName = document.createElement("li");
    eachChampName.classList.add("skills-fighters")
    listCharacteristics.appendChild(eachChampName);
    eachChampName.innerHTML = `${array.name} : force:  ${array.powerstats.strength},
    combat :  ${array.powerstats.combat}, durabilité:  ${array.powerstats.durability},
    power:  ${array.powerstats.power}`; 
};
