
const imgCont = document.querySelector("#fox-image-container");
const speciesUl = document.querySelector("#fox-species");
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
};

fetch('http://localhost:3000/species')
  .then((resp) => resp.json())
  .then((specArr) => {
    specArr.forEach((specObj) => {
      renderAllSpecs(specObj);
    })
  });
  
function renderAllSpecs(specObj) {
  const specLi = document.createElement('li');
  specLi.dataset.id = specObj.id;
  specLi.textContent = specObj.title;
  speciesUl.append(specLi);
};
renderAllSpecs();
