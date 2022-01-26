
let imgCont = document.querySelector("#fox-image-container");
let speciesUl = document.querySelector("#fox-species");
const imgUrl = "https://randomfox.ca/floof/";


fetch("https://randomfox.ca/floof/")
  .then((resp) => resp.json())
  .then((foxObj) => {
    renderOneImg(foxObj);
  });

function renderOneImg(foxObj) {
  const imgDiv = document.createElement("div");
  const foxFrame = document.createElement("img");
  foxFrame.src = foxObj.image;

  imgDiv.append(foxFrame);
  imgCont.append(imgDiv);
}