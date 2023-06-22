const planeModels = Object.keys(data.Model);
const dataOptionsInterior = [
  "Typical Passengers",
  "Sleeps",
  "Galley",
  "Lav",
  "Crew Rest Area",
];
const dataOptionsPerformance = [
  "Max Cruise Speed",
  "Typical Cruise Speed",
  "Max Range",
  "Typical Range (Full Capacity)",
  "Typical Endurance",
  "Max Cruise Altitude",
];
const dataOptionsSpecifications = [
  "Cabin Length",
  "Cabin Height",
  "Cabin Width",
  "Flat Floors",
];
const dataOptionsCarryingCapacity = ["Baggage"];

const currentSelection = [planeModels[0], planeModels[1], planeModels[2]];

let removed;

let $el;
let width;

const getElWidth = () => {
  $el = jQuery(".fixedElement");
  width = $el.outerWidth();
};

const handleResize = () => {
  if (window.innerWidth < 767 && !removed) {
    removed = currentSelection.pop();
  } else if (window.innerWidth > 767 && removed) {
    currentSelection.push(removed);
    removed = null;
  }
  document.getElementById("comparison-tool--wrapper").innerHTML = "";
  renderTool();
};

const changeDisplay = (oldPlane) => {
  let hasRun = false;
  document.querySelectorAll(".essos-dropdown").forEach((dropdown, index) => {
    // if selected plane is not one of the currently selected planes
    if (!currentSelection.includes(dropdown.value)) {
      toggleImgSizeLock(true);
      const newPlane = dropdown.value;
      // Remove Previous Value From currentSelection
      let index = currentSelection.indexOf(oldPlane);
      if (index > -1) {
        currentSelection.splice(index, 1);
      }
      currentSelection.splice(index, 0, newPlane);
      index++;

      const colToRemove = document.querySelector(
        `#comparison-tool--wrapper > div:nth-child(${index})`
      );
      colToRemove.parentElement.removeChild(colToRemove);

      // Add the new plane
      const render = renderSelectCol(newPlane);
      document.querySelector("#comparison-tool--wrapper").innerHTML +=
        renderSelectCol(newPlane);
    } else if (currentSelection.indexOf(dropdown.value) !== index && !hasRun) {
      toggleImgSizeLock(true);
      [
        currentSelection[currentSelection.indexOf(dropdown.value)],
        currentSelection[index],
      ] = [
        currentSelection[index],
        currentSelection[currentSelection.indexOf(dropdown.value)],
      ];
      hasRun = true;

      document.querySelector(`.${oldPlane}-col select`).value = oldPlane;
    }
  });
  refreshFsLightbox();
  sortCols();
};

const toggleImgSizeLock = (bool) => {
  const imgs = document.querySelectorAll(".plane-thumbnail");
  if (bool) {
    const height = imgs[0].parentElement.clientHeight;
    const width = imgs[0].parentElement.clientWidth;

    imgs.forEach((img) => {
      img.parentElement.style.height = `${height}px`;
      img.parentElement.style.height = `${width}px`;
    });
  } else {
    imgs.forEach((img) => {
      img.parentElement.style.height = "initial";
      img.parentElement.style.clientWidth = "initial";
    });
  }
};

const sortCols = () => {
  let wrapper = document.querySelector("#comparison-tool--wrapper");
  const { children } = wrapper;
  for (let i = 0; i < currentSelection.length; i++) {
    for (let j = 0; j < currentSelection.length; j++) {
      if (currentSelection[i] === children[j].dataset.plane) {
        wrapper.appendChild(children[j]);
        break;
      }
    }
  }
  refreshFsLightbox();
  toggleImgSizeLock(false);
  checkFixedPositioning();
};

const renderDropdown = (plane) => {
  const planeToString = plane.toString();

  const optGroups = {};

  const groupOrder = [
    "Turbo Prop",
    "Very Light",
    "Light",
    "Light - Cross Over",
    "Mid Size",
    "Super Mid",
    "Large Cabin",
    "Ultra Long Range",
  ];

  planeModels.map((planeOption) => {
    let planeClass = data.Class[planeOption];

    if (!optGroups.hasOwnProperty(planeClass)) {
      optGroups[planeClass] = [];
    }

    optGroups[planeClass].push(
      `<option value="${planeOption}" ${
        planeOption === planeToString ? "selected" : ""
      }>${data["Model"][planeOption]}</option>`
    );
  });

  let options;

  groupOrder.forEach((planeClass) => {
    if (optGroups.hasOwnProperty(planeClass)) {
      options += `
      <optgroup label="${planeClass}">
        ${optGroups[planeClass].join("")}
      </optgroup>`;
    }
  });

  return `
  <div class="essos-dropdown-wrapper fixedElement static">
    <select 
      name="plane" 
      id="plane" 
      class="essos-dropdown ${planeToString}-select" 
      onchange="changeDisplay('${planeToString}')">*
      ${options}
    </select>
    <div class="pseudo-arrow"></div>
  </div>`;
};

const renderOptions = (model, options, category) => {
  const cells = [];
  if (category === "performance") {
    options.forEach((option) => {
      const optionData = data[option][model].split(" ");
      let altOptionText;
      switch (option) {
        case "Max Range":
          altOptionText = "Max Range <br/>(4-Passengers)";
          break;
        case "Typical Range (Full Capacity)":
          altOptionText = "Typical Range <br/>(Full Capacity)";
          break;
        default:
          option;
      }
      cells.push(`
      <div class="essos-data-cell">
        <p class="title ${option}">${altOptionText ? altOptionText : option}</p>
        <p class="data ${option}">${
        optionData[0]
      }<span class="small-option-text">${
        optionData[1] ? optionData[1] : ""
      }</span></p>
      </div>
      `);
    });
  } else if (category === "specs") {
    options.forEach((option) => {
      let optionData;
      try {
        optionData = data[option][model].split(" ").filter((el) => el !== "");

        const secondOption = optionData[1] ? optionData[1] : "";
        const thirdOption = optionData[2] ? optionData[2] : "";
        const fourthOption = optionData[3] ? optionData[3] : "";

        cells.push(`
      <div class="essos-data-cell">
        <p class="title">${option}</p>
        <p class="data">${optionData[0]}<span class="small-option-text">${secondOption}</span> ${thirdOption}<span class="small-option-text">${fourthOption}</span></p>
      </div>
      `);
      } catch {
        optionData = data[option][model];
        cells.push(`
      <div class="essos-data-cell">
        <p class="title">${option}</p>
        <p class="data">${optionData}</p>
      </div>`);
      }
    });
  } else if (category === "cc") {
    options.forEach((option) => {
      const optionData = data[option][model].split(" ");
      const secondOption = optionData[1] ? optionData[1] : "";
      const thirdOption = optionData[2] ? optionData[2] : "";
      cells.push(`
      <div class="essos-data-cell">
        <p class="title">${option}</p>
        <p class="data">${optionData[0]}<span class="small-option-text">${secondOption}</span> <span class="small-option-text">${thirdOption}</span></p>
      </div>
      `);
    });
  } else {
    options.forEach((option) => {
      cells.push(`
    <div class="essos-data-cell">
      <p class="title ${option.toLowerCase()}">${option}</p>
      <p class="data ${option.toLowerCase()}">${data[option][model]}</p>
    </div>
    `);
    });
  }
  return cells.join(" ");
};

const renderFloorPlan = (plane, formattedModel) => {
  let href;
  formattedModel.includes("+")
    ? (formattedModel = formattedModel.replace(/\+/g, "-1"))
    : formattedModel;

  console.log(`/wp-content/uploads/floorplan-${formattedModel}-portrait.png`);
  if (screen.width < 767 || window.innerWidth < 767) {
    href = `/wp-content/uploads/floorplan-${formattedModel}-portrait.png`;
  } else {
    href = `/wp-content/uploads/floorplan-${formattedModel}.png`;
  }
  return `<a
            data-caption="${data["Model"][plane]} Floor Plan"
            data-fslightbox="floorplan"
            href="${href}"
            class="lightbox-btn no-swipebox">
              Floor Plan
          </a>`;
};

const renderSelectCol = (plane) => {
  const planeToString = plane.toString();
  const model = data["Model"][planeToString].toString();
  let formattedModel = model.toLowerCase().replace(/\s/g, "");

  formattedModel.includes("+")
    ? (formattedModel = formattedModel.replace(/\+/g, "-1"))
    : formattedModel;

  const col = `
    <div class="essos-col splide__slide ${planeToString}-col" data-plane="${planeToString}">
      <div class="plain-details__top">${renderDropdown(planeToString)}
        <div class="img-container">
          <img
            src="/wp-content/uploads/${formattedModel}.png"
            alt="${data.Model[planeToString]}"
            onerror="if (this.src != '/wp-content/uploads/placeholder.png') this.src = '/wp-content/uploads/placeholder.png';"
            class="no-lazy plane-thumbnail"/>
        </div>
      </div>

      <!-- INTERIOR -->

      <div class="essos-divider essos-divider__interior"></div>
      <div class="plain-details plain-details__interior">
        ${renderOptions(planeToString, dataOptionsInterior, "interior")}
        <a
          href="/wp-content/uploads/interior-${formattedModel}.png"
          data-caption="${data.Model[planeToString]}"
          data-fslightbox="gallery"
          class="lightbox-btn no-swipebox">
            Compare Plane Interiors
        </a>
      </div>

      <!-- Performance -->

      <div class="essos-divider essos-divider__performance"></div>
      <div class="plain-details plain-details__performance">
        ${renderOptions(planeToString, dataOptionsPerformance, "performance")}
      </div>

      <!-- Specs -->

      <div class="essos-divider essos-divider__specifications"></div>
      <div class="plain-details plain-details__specifications">
        ${renderOptions(planeToString, dataOptionsSpecifications, "specs")}
        ${renderFloorPlan(planeToString, formattedModel)}
      </div>

      <!-- Carrying Capacity -->

      <div class="essos-divider essos-divider__carrying-capacity"></div>
      <div class="plain-details plain-details__carrying-capacity">
        ${renderOptions(planeToString, dataOptionsCarryingCapacity, "cc")}
      </div>
    </div>
  `;

  return col;
};

const renderTool = () => {
  currentSelection.forEach((plane) => {
    const planToString = plane.toString();
    document.getElementById("comparison-tool--wrapper").innerHTML +=
      renderSelectCol(planToString);
  });

  getElWidth();
  window.refreshFsLightbox ? refreshFsLightbox() : null;
};

function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

const preloadImages = () => {
  for (key in data.Model) {
    key = key.toString();
    model = data.Model[key].toString();
    let formattedModel = `${model.toLowerCase().replace(/\s/g, "")}.png`;
    formattedModel.includes("+")
      ? (formattedModel = formattedModel.replace(/\+/g, "-1"))
      : formattedModel;
    const url = `/wp-content/uploads/${formattedModel}`;
    preloadImage(url);
  }
};

const checkFixedPositioning = () => {
  $el = jQuery(".fixedElement");
  const distFromTop = window.innerWidth < 767 ? 200 : 300;
  const distToStop = window.innerWidth < 767 ? 2845 : 3585;
  if (
    jQuery(this).scrollTop() > distFromTop &&
    jQuery(this).scrollTop() < distToStop
  ) {
    $el.removeClass("static");
  }

  if (jQuery(this).scrollTop() < 300 || jQuery(this).scrollTop() > distToStop) {
    $el.addClass("static");
  }

  if (width > 1000) {
    getElWidth();
  }

  if ($el.css.width !== width) {
    $el.css({ width });
  }
};

renderTool();
handleResize();
window.addEventListener("resize", handleResize);
jQuery(window).scroll(checkFixedPositioning);
checkFixedPositioning();
setTimeout(preloadImages, 1000);
