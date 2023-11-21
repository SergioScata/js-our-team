let ourTeam =
    [
        {
            name: "Wayne Barnett",
            role: "Founder & CEO",
            photo: "./img/wayne-barnett-founder-ceo.jpg"
        },

        {
            name: "Angela Caroll",
            role: "Chief Editor",
            photo: "./img/angela-caroll-chief-editor.jpg"
        },

        {
            name: "Walter Gordon",
            role: "Office Manager",
            photo: "./img/walter-gordon-office-manager.jpg"
        },

        {
            name: "Angela Lopez",
            role: "Social Media Manager",
            photo: "./img/angela-lopez-social-media-manager.jpg"
        },

        {
            name: "Scott Estrada",
            role: "Developer",
            photo: "./img/scott-estrada-developer.jpg"
        },

        {
            name: "Barbara Ramos",
            role: "Graphic Designer",
            photo: "./img/barbara-ramos-graphic-designer.jpg"
        }
    ];

console.log(ourTeam);



for (let i = 0; i < ourTeam.length; i++) {
    console.log("name:", ourTeam[i].name);
    console.log("role:", ourTeam[i].role);
    console.log("picture:", ourTeam[i].photo);
    console.log("");
}

let containerCard = document.getElementById("container")
for (let i = 0; i < ourTeam.length; i++) {
    let member = ourTeam[i]

    for (let key in member) {
        let details = member[key]

    }


    let card =` 
    <div class="col-4"> <div class="card">
<img src="${[member.photo]}" class="card-img-top" alt="foto">
<div class="card-body">
  <h5 class="card-title">${[member.name]}</h5>
  <p class="card-text">
  ${[member.role]}</p>
  
</div>
</div>
</div>` 

containerCard.insertAdjacentHTML("beforeend",card);

}