/* -------- EXAMPLE 1 -------- */

/* Step 1 CREATE THE ELEMENT */
// const newH1 = document.createElement("h1");

/* STEP 2 ADD ATTRIBUTES/PROPETIES */
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

/* STEP 3 APPEND ELEMENT TO DOM */
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box1);

/* REMOVE HTML ELEMENT */
// document.getElementById("box1").removeChild(newH1);

/* -------- EXAMPLE 2 -------- */

/* Step 1 CREATE THE ELEMENT */
const newListItem = document.createElement("li");

/* STEP 2 ADD ATTRIBUTES/PROPETIES */
newListItem.textContent = "Coconut";
newListItem.id = "Coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

/* STEP 3 APPEND ELEMENT TO DOM */
// document.body.append(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

/* REMOVE HTML ELEMENT */
// document.getElementById("fruits").removeChild(newListItem);