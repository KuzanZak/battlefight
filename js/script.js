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
        eachChamp.innerHTML = `<a class="link-img" href="#"><img class="image-xs" src="${fighter.images.xs}"></a><p class="displayN">${fighter.name}</p>`
    })

    listChamps.addEventListener("click", function(event) {
        if (event.target.classList.contains("list-champs-item")) {
            document.getElementById("list-fighters-battle").appendChild(listFighters);
            const eachFighters = document.createElement("li");
            listFighters.appendChild(eachFighters);
            eachFighters.classList.add("list-champs-item");
            const a = event.target.firstElementChild; 
            eachFighters.innerHTML = `<a class ="link-imgM" href="#"><img class="image-xs-middle" src="${a.firstElementChild.src}"></a>`
            console.log(event.target.dataset.id)

            async function waitingForResponseId() {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${event.target.dataset.id}.json`)
                const fighterCList = await response.json();
                const eachChampName = document.createElement("li");
                listCharacteristics.appendChild(eachChampName);
                eachChampName.innerHTML = `${fighterCList.name} : force:  ${fighterCList.powerstats.strength},
                combat :  ${fighterCList.powerstats.combat}, durabilité:  ${fighterCList.powerstats.durability},
                power:  ${fighterCList.powerstats.power}`               
            }
            waitingForResponseId()

        };
    });
    
    listFighters.addEventListener("click", function(event){
            if(event.target.classList.contains("image-xs-middle")) {
                        const aM = event.target.parentElement;
                        const liM = aM.parentElement;
                        const firstChild = listChamps.firstElementChild; 
                        listChamps.insertBefore(liM, firstChild)
                        event.target.classList.replace("image-xs-middle", "image-xs")
                    }
                });      
        };
        
        
        

        
        
        // // FIGHT BATTLE
        // function getRandomValue(max){
            //     return parseInt(Math.random()*max)
            // }
            
            // // Récupérer le score d'attaque d'un personnage
            // function getAttackScore(fighter){
                //     return fighter.strength + getRandomValue(fighter.combat)
                // }
                
                // // Récupérer le score de défense d'un joueur
                // function getDefenseScore(fighter){
                    //     return fighter.strength + getRandomValue(fighter.durability)
                    // } 

// // Baisser les points de power d'un joueur (vie)
// function decreasePower(fighter, value){
    //     fighter.power -= value;
    //     return fighter.power;
    // }
    
    // function getOutNoob(){
        //     fighterList = fighterList.filter(fighter => fighter.power > 0);
        // }
        
        // // Faire s'affronter 2 joueurs 
        // function fighter (a, d){
            //     const attackScore = getAttackScore(a);
            //     if (attackScore > getDefenseScore(d)) {
                //         decreaseLife(d, attackScore);
//         buryTheDeads();
//         return true;
//     }
//     return false;
// }

// function battle(){
//     const attacker = getRandomChar();
//     const defender = getRandomChar(attacker);
//     console.log(`${attacker.name} is attacking ${defender.name}.`);
    
//     const resultText = fight(attacker, defender) ? "win" : "lose";
//     console.log(`${attacker.name} ${resultText}.`);
    
//     console.table(fighterList);
    
//     if (fighterList.length <= 1) {
//         console.table(fighterList);
//         console.log(`The winner is ${fighterList[0].name}.`);
//         return;
//     }
//     return battle();
// }

// battle();
