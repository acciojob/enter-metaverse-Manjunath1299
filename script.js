function updateContent() {
  // Get the p element with the id "status"
  const statusP = document.getElementById("status");

  // Create an h1 element with the new text
  const newContent = document.createElement("h1");
  newContent.textContent = "Entered Metaverse";

  // Replace the existing content of the p element with the h1 element
  statusP.innerHTML = ""; // Clear the existing content
  statusP.appendChild(newContent); // Add the h1 element
}
