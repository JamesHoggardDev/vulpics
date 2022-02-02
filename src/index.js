
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
  const specLiBtn = document.createElement('button');
  specLi.dataset.id = specObj.id;
  specLiBtn.dataset.id = specObj.id;
  specLiBtn.addEventListener('click', updateSpecs);
  specLi.textContent = specObj.title;
  specLi.append(specLiBtn);
  speciesUl.append(specLi);
};

function updateSpecs(specObj) {
  console.log(event.target);
  
}

renderAllSpecs();
