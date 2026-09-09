var prompt = require('prompt-sync')(); 
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
const limitname = /^[a-zA-Z\s'-]+$/;   ;// une expression reguliere pour limiter dans les alphabets avec limitname précisément un objet de type RegExp
let idc=0
const tickets = [];
 


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
function ajouterNom(){
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
function ajouterIdentifiant(){
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
function ajouterIdentifiantTicket(){
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
function acheterTicket(tab,id){
   let nom=ajouterNom();
   let Place=0
   let trajetexicte={}
   let exicte=false
   for(const variable of tab){
    if(variable.id ==id){
        exicte=true
        trajetexicte=variable
        variable.availableSeats--
        Place=50-variable.availableSeats
        break
    } 
   }
   if(!exicte){
    console.log("Trajet introuvable.")
   }
   else{
    if ( trajetexicte.availableSeats===0){
        console.log("Train complet.")
    }
    else {
        idc++
        console.log(idc);
        tickets.push(
            {id:idc,
             passengerName:nom,
             tripId:trajetexicte.id, 
             seatNumber:Place, 
             price:trajetexicte. price})
       
        console.log("Ticket acheté avec succès.")
        console.log(`Ticket #${trajetexicte.id}`)
        console.log(`Passager : ${nom}`)
        console.log(`Trajet : ${trajetexicte.departure} → ${trajetexicte.destination}`)
        console.log(`Place :${Place}`)
        console.log(`Prix : ${trajetexicte. price}DH`)
        
        
    }
   }

}
function chercherTragets(tab,id){
    for (const variable of tab ){
        if (variable.id ===id){
            
            return `${variable.departure}  → ${variable.destination} `
        }
    }
}

function afficherTickets(tab){
    console.log("=== TICKETS ===")
    // console.log (tab)// le tableau nest pas vide je dois faire afficher apres quitter  
    for(const variable of tab ){
        console.log(` Ticket#${variable.id} `)
        console.log(` Passager : ${variable.passengerName}`)
        console.log(` Trajet :${chercherTragets(trips,variable.tripId)} `)
        console.log(` Place : ${variable.seatNumber}`)
        console.log(` Prix  :${variable.price} DH`)   
        console.log(`*************************************`)    

    }

}
function chercherTicket(id,tab){
    for(  let i = 0;i<tab.length;i++){
        if (tab[i].id===id){
             return i
        }   
    }

    return false
}

function annulerTicket(id){
    if(chercherTicket(id,tickets)===false){// === car le 0 va etre traite comme false 
        console.log("Ticket introuvable.")
    }
    else{
        const index = chercherTicket(id,tickets)
        let indexTrip =tickets[index].tripId
        tickets.splice(index,1) // splice pour suprimer l'element d'indice "index"
        console.log(tickets) 
        for (const variable of trips){
            if (variable.id==indexTrip){
                variable. availableSeats ++
            }
        }
        console.log (`Identifiant du ticket ${id}`)
        console.log ("Ticket annulé avec succès.") 
    }


}
function rechercherTicket(str){
    console.log(`Nom du passager ${str}`)
    for(const variable of tickets){
        if (variable.passengerName===str){
             console.log(` Ticket#${variable.id} `)
             console.log(` Passager : ${variable.passengerName}`)
             console.log(` Trajet :${chercherTragets(trips,variable.tripId)} `)
             console.log(` Place : ${variable.seatNumber}`)
             console.log(` Prix  :${variable.price} DH`)    
        }
    }

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
        console.log("0. Quitter ")
      
        console.log("************************");
    
        n = Number(prompt("Votre choix: "))
        switch (n) {
            case 0: 
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
                     break;
            case 7: 
                     break;
            
        
            default:
                console.log("Votre reposne n'etait pas acceptable, Svp donne moi une valeur entre 0 et 7");
                break;
        }
    } while (n!=0)
}

main()

