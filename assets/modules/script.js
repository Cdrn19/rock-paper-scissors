/* Modal input */ 
const rulesModal = document.getElementById("rules-modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn"); 

/* Modal */ 
openBtn.addEventListener("click", () => {
    rulesModal.style.display = "grid";  
}); 

closeBtn.addEventListener("click", () => {
    rulesModal.style.display = "none";
});