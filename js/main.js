let ourTeam = 
[
{
    name: "Wayne",
    surname: "Barnett",
    role: "Founder & CEO",
    photo: "./img/wayne-barnett-founder-ceo.jpg"
},

{
    name: "Angela",
    surname: "Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg"
},

{
    name: "Walter",
    surname: "Gordon",
    role: "Office Manager",
    photo: "walter-goldon-office-manager.jpg"
},

{
    name: "Angela",
    surname: "Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg"
},

{
    name: "Scott",
    surname: "Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg"
},

{
    name: "Barbara",
    surname: "Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg"
}
]

console.log(ourTeam);

for(let i = 0; i < ourTeam.length; i++){
    console.log("Nome:", ourTeam[i].name);
    console.log("Cognome:", ourTeam[i].surname);
    console.log("Ruolo:", ourTeam[i].role);
    console.log("foto:", ourTeam[i].photo);
    console.log("");
}

let containerdiv= document.getElementById("container")
for(let i=0;i<ourTeam.length;i++){
    let member= ourTeam[i]
    for(let key in object){
        let details= member[key]
    }
}