let ourTeam = 
[
{
    name: "Wayne",
    surname: "Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.png"
},

{
    name: "Angela",
    surname: "Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.png"
},

{
    name: "Walter",
    surname: "Gordon",
    role: "Office Manager",
    photo: "walter-goldon-office-manager.png"
},

{
    name: "Angela",
    surname: "Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.png"
},

{
    name: "Scott",
    surname: "Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.png"
},

{
    name: "Barbara",
    surname: "Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.png"
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