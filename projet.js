var prompt = require('prompt-sync')();
// data  
  const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

// declaration des variables globales 
const limitname = /^[a-zA-Z\s'-]+$/;   ;// une expression reguliere pour limiter dans les alphabets avec limitname précisément un objet de type RegExp
let idT=0
const tickets = [];
// fonction Principale 1 : Afficher les trajets
function afficherTrajets(tab){
  console.log ("=== TRAJETS DISPONIBLES ===")
  for (const variable of tab) {
  console.log(`# ${variable.id} ${variable.departure}  →  ${variable.destination}`)
  console.log(`Départ : ${variable.departureTime}`)
  console.log(`Arrivée : ${variable.arrivalTime} `)
  console.log(`Prix : ${variable.price} DH`)
  console.log(`Places disponibles :${variable.availableSeats} `)   
  console.log(`*************************************`)     
}  
}
function ajouterNom(){// fonction pour check que le nom est valide 
  let nomSaisi
  do{
    nomSaisi=prompt("Nom du passager : ")
    if (!limitname.test(nomSaisi) || nomSaisi === " " ) {
    console.log("Le nom n'est pas inclus (invalide).");
     } else {
    console.log("Le nom est inclus et valide !");
} 
  
  }while((!limitname.test(nomSaisi) || nomSaisi === " "))
    return nomSaisi
}
function ajouterIdentifiant(){// fonction pour check que l'id du trajet choisi est valide 
    let idSaisi
    do{
        idSaisi=Number(prompt("Identifiant du trajet : "))
        if(isNaN(idSaisi)|| idSaisi<1 || idSaisi>20){
            console.log("choisi un id entre 1 et 20")
            }
        else{
            console.log("id est valide ! ")
        }     
    }while((isNaN(idSaisi)|| idSaisi<1 || idSaisi>20))
        return idSaisi

}
function ajouterIdentifiantTicket(){// fonction pour check que l'id du ticket  choisi est valide 
    let idSaisi
    do{
        idSaisi=Number(prompt("Identifiant du Ticket : "))
        if(isNaN(idSaisi)|| idSaisi<1 ){
            console.log("choisi un id superieur de 1")
            }
        else{
            console.log("id est valide ! ")
        }     
    }while((isNaN(idSaisi)|| idSaisi<1))
        return idSaisi
}
function ajouterNomVille(){// fonction pour check que le nom du ville est validé
  let nomSaisi
  do{
    nomSaisi=prompt("Nom du ville de depart  : ")
    if (!limitname.test(nomSaisi) || nomSaisi === " " ) {
    console.log("Le nom n'est pas inclus (invalide).");
     } else {
    console.log("Le nom est inclus et valide !");
} 
  
  }while((!limitname.test(nomSaisi) || nomSaisi === " "))
    return nomSaisi
}
function missingPlace(tab,id) { // cette fonction sert a cheker apres l annulation pour ne pas sauter des places vide 
    let tripexicte=[]
    for( let i=0;i<tab.length;i++){
        if(tab[i].tripId==id){
            tripexicte.push(tab[i])
        }
    }
  let ok;
  for (let i = 1; i <= 50 + 1; i++) {
    ok = false;
    for (let j = 0; j < tripexicte.length; j++) {
      if (tripexicte[j].seatNumber == i) { //
        ok = true;
        break;
      }
    }
    if (!ok) {
      return i; // Retourne le premier ID disponible
    }
  }
}
// fonction Principale 2 : Acheter un ticket
function acheterTicket(tab,id){
   let nom=ajouterNom();
   let trajetexicte=null
   for(const variable of tab){
    if(variable.id ==id){
        trajetexicte=variable // stocke la variable qui valide la condition 
        break
    } 
   }
   if(!trajetexicte){// si le  trajet n'exicte pas 
    console.log("Trajet introuvable.")
   }
   else if( trajetexicte.availableSeats===0){
        console.log("Train complet.")
    }
    else {
        // let Place=50-trajetexicte.availableSeats+1
        let Place=missingPlace(tickets,id)
        trajetexicte.availableSeats--
        idT++
        tickets.push(
            {id:idT,
             passengerName:nom,
             tripId:trajetexicte.id, 
             seatNumber:Place, 
             price:trajetexicte. price})
       
        console.log("Ticket acheté avec succès.")
        console.log(`Ticket #${idT}`)
        console.log(`Passager : ${nom}`)
        console.log(`Trajet : ${trajetexicte.departure} → ${trajetexicte.destination}`)
        console.log(`Place :${Place}`)
        console.log(`Prix : ${trajetexicte. price}DH`)
        
        
    }
}
function chercherTragets(tab,id){// aide la fonction d'affichage pour afficher le trip match le ticket
    for (const variable of tab ){
        if (variable.id ===id){
            
            return `${variable.departure}  → ${variable.destination} `
        }
    }
}

// fonction Principale 3 : Afficher les tickets
function afficherTickets(tab){
    console.log("=== TICKETS ===")
    for(const variable of tab ){
        console.log(` Ticket#${variable.id} `)
        console.log(` Passager : ${variable.passengerName}`)
        console.log(` Trajet :${chercherTragets(trips,variable.tripId)} `)
        console.log(` Place : ${variable.seatNumber}`)
        console.log(` Prix  :${variable.price} DH`)   
        console.log(`*************************************`)    
    }
}
function chercherTicket(id,tab){// pour checker si le ticket exicte ou non
    for(  let i = 0;i<tab.length;i++){
        if (tab[i].id===id){
             return i
        }   
    }
    return false
}
// fonction Principale 4 : Annuler un ticket
function annulerTicket(id){
    if(chercherTicket(id,tickets)===false){// === car le 0 va etre traite comme false 
        console.log("Ticket introuvable.")
    }
    else{
        const index = chercherTicket(id,tickets)// le i est lindex ou l'object qu'on a entré l'id 
        let indexTrip =tickets[index].tripId // id de trip dapres le tableau des objects de tickets  pour incrementer apres lannulation  
        tickets.splice(index,1) // splice pour suprimer l'element d'indice "index" 
        for (const variable of trips){
            if (variable.id===indexTrip){ 
                variable. availableSeats ++
            }
        }
        console.log (`Identifiant du ticket ${id}`)
        console.log ("Ticket annulé avec succès.") 
    }


}
// fonction Principale 5 :Rechercher un ticket par le nom de passager
function rechercherTicket(str){
    let exicte=false  // pour tester l'exception 
    console.log(`Nom du passager ${str}`)
    for(const variable of tickets){
        if ((variable.passengerName).toUpperCase()===str.toUpperCase()){// ou cas ou il a taper le nom lower ou upper de qui est enrejitrer 
             console.log(` Ticket#${variable.id} `)
             console.log(` Passager : ${variable.passengerName}`)
             console.log(` Trajet :${chercherTragets(trips,variable.tripId)} `)
             console.log(` Place : ${variable.seatNumber}`)
             console.log(` Prix  :${variable.price} DH`)  
             exicte=true
        }
    }
    if(!exicte){
        console.log("Ce passager n'exicte pas ")
    }
}
// fonction Principale 6 :Filtrer les trajets par le nom de ville de depart 
function Filtrer(str,tab){
    let exicte =false
    for (const variable of tab){
        if ((variable.departure).toUpperCase()===str.toUpperCase()) {
            exicte=true;
            console.log (`${variable.departure}  → ${variable.destination} : ${variable.price} DH `)
        }
    }
    if(!exicte){
        console.log(`${str} n'exicte pas dans les voyages `)
    }
}
function bubbleSort(arr){// tri le tableau avec bubble sort 
    let ok 
    do{
        ok=false 
        for (let i=0;i<arr.length-1;i++){
            if(arr[i].price>arr[i+1].price){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                ok=true
            }
        }
    }while(ok)
        return arr
}
// fonction Principale 7 :Trier les trajets avec le prix  
function affichertrier(tab){
   let tab1  =bubbleSort(tab)// le tab1 est un tableau des prix qui ont trié 
   console.log(tab1)
    for(let i=0;i<tab1.length;i++){ 
        console.log(`${tab1[i].departure}  →${tab1[i].destination} : ${tab1[i].price} DH  `)
    }
}
// fonction bonus 
function nombreTotalTickets(tab){// Nombre total de tickets vendus
     console.log(`Nombre total de tickets vendus : ${tab.length}`)
}
function chiffreAffairesTotal(tab){// Chiffre d'affaires total
    let total = 0;
    for (let i = 0; i < tab.length; i++) {
        total += tab[i].price;
    }
    console.log(`Chiffre d'affaires total : ${total} DH `);
}
function plusVendu(tab){
    let obj = {
        number : 0,
        index : ""
    }
    for(let i =0;i<tab.length;i++){
         let count =0
        for (let j =0;j<tickets.length;j++){
            if (tab[i].id===tickets[j].tripId){
                count++              
            }
        }
        if (count>obj.number){
            obj.number=count;
            obj.index=(tab[i].departure + " → " + tab[i].destination)// probleme daffichage 
        }
    }
    console.log(obj.index)
    console.log(obj.number)
}
function main() {
    let n;
    do {
        console.log("================================= ");
        console.log ("    RAILWAY MANAGER     ")
        console.log("================================= ");
        console.log("1. Afficher les trajets ");
        console.log("2. Acheter un ticket ");
        console.log("3. Afficher les tickets ");
        console.log("4. Annuler un ticket ");
        console.log("5. Rechercher un ticket ");
        console.log("6. Filtrer les trajets ");
        console.log("7. Trier les trajets ");
        console.log("8. Nombre total de tickets vendus ");
        console.log("9 : Chiffre d'affaires total");
        console.log("10 : Trajet le plus vendu");
        console.log("0. Quitter ")
        console.log("************************");
         n = Number(prompt("Votre choix: "))
        switch (n) {
            case 0: 
                    console.log (" merci pour votre temps !")
                     break;
            case 1:
                afficherTrajets(trips);
                break;
            case 2:
                let id=ajouterIdentifiant();
                acheterTicket(trips,id);
                break;
            case 3:
                afficherTickets(tickets);
                break;
            case 4:
                 let id4=ajouterIdentifiantTicket();
                annulerTicket(id4)
                break;
            case 5:
                let str=ajouterNom()
                rechercherTicket(str) 
                break;
            case 6: 
                let str6=ajouterNomVille()
                 Filtrer(str6,trips)
                     break;
            case 7: 
                  affichertrier(trips)
                     break;
            case 8:
                   nombreTotalTickets(tickets)
                  break;
            case 9: 
                  chiffreAffairesTotal(tickets)
                  break;
            case 10 :
                     plusVendu(trips) 
                     break;     
            default:
                console.log("Votre reposne n'etait pas acceptable, Svp donne moi une valeur entre 0 et 10");
                break;
        }
    } while (n!==0)
}

main()

