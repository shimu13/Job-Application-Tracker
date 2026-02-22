


card.dataset.status="none";


}


else{


if(status==="rejected") rejected--;


interview++;


card.dataset.status="interview";


}


update();


}




if(e.target.classList.contains("rejected-btn")){


const card=e.target.closest(".job-card");


const status=card.dataset.status;



if(status==="rejected"){


rejected--;


card.dataset.status="none";


}


else{


if(status==="interview") interview--;


rejected++;


card.dataset.status="rejected";


}


update();


}




if(e.target.classList.contains("delete-btn")){


const card=e.target.closest(".job-card");


const status=card.dataset.status;



if(status==="interview") interview--;


if(status==="rejected") rejected--;



card.remove();


update();


}



});




function update(){



interviewText.innerText=interview;


rejectedText.innerText=rejected;


totalText.innerText=document.querySelectorAll(".job-card").length;



}






// tabs




document.getElementById("all-tab").onclick=()=>show("all");


document.getElementById("interview-tab").onclick=()=>show("interview");


document.getElementById("rejected-tab").onclick=()=>show("rejected");





function show(type){


const cards=document.querySelectorAll(".job-card");


let visible=0;



cards.forEach(card=>{


if(type==="all"){


card.style.display="block";


visible++;


}


else{


if(card.dataset.status===type){


card.style.display="block";


visible++;


}


else{


card.style.display="none";


}


}


});



document.getElementById("empty")

.style.display=visible?"none":"block";



}