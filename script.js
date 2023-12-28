function updateContent() {
  // Get the p element with the id "status"
  const statusP = document.getElementById("status");

  
  const newContent = document.createElement("h1");
  newContent.textContent = "Entered Metaverse";

  statusP.innerHTML = ""; 
  statusP.appendChild(newContent); 
}
