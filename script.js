// ===== SELECT ELEMENTS =====

const jobCards = document.querySelectorAll(".job-card");

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const jobsCount = document.getElementById("jobs-count");

const allTab = document.getElementById("all-tab");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

const jobContainer = document.getElementById("job-container");


// ===== INITIAL COUNT =====

updateDashboard();

// ===== BUTTON EVENTS =====

jobCards.forEach(card => {

    const interviewBtn = card.children[0].querySelector(".btn-success");
    const rejectedBtn = card.children[0].querySelector(".btn-error");
    const deleteBtn = card.children[0].querySelector(".btn-ghost");


    // INTERVIEW CLICK
    interviewBtn.addEventListener("click", function(){

        card.dataset.status = "interview";

        updateDashboard();

    });
     // REJECTED CLICK
    rejectedBtn.addEventListener("click", function(){

        card.dataset.status = "rejected";

        updateDashboard();

    });


    // DELETE CLICK
    deleteBtn.addEventListener("click", function(){

        card.remove();

        updateDashboard();

    });

});







// SHOW CARDS

function showCards(type){

    const cards = document.querySelectorAll(".job-card");

    let visibleCount = 0;


    cards.forEach(card => {

        if(type === "all"){

            card.style.display = "block";

            visibleCount++;

        }

        else if(card.dataset.status === type){

            card.style.display = "block";

            visibleCount++;

        }

        else{

            card.style.display = "none";

        }

    });


    showEmptyMessage(visibleCount);

}




