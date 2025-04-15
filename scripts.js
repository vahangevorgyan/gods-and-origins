/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

let favorites = {};
let userPantheon = {
  name: "",
  gods: [],
};
let currentGodsData = [];
let currentSortOrder = "default";

window.addEventListener("load", function () {
  loadGods(greek_gods_data);

  const savedFavorites = localStorage.getItem("favorites");
  if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
  }

  const savedPantheon = localStorage.getItem("userPantheon");
  if (savedPantheon) {
    userPantheon = JSON.parse(savedPantheon);
    updatePantheonDisplay();
  }
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("god-checkbox")) {
    if (e.target.checked) {
      const checkboxes = document.querySelectorAll(".god-checkbox:checked");
      if (checkboxes.length > 10) {
        e.target.checked = false;
        alert("You can only select up to 10 gods for your pantheon.");
      }
    }
  }
});

window.addEventListener("click", function (event) {
  const godModal = document.getElementById("god-modal");
  if (event.target === godModal) {
    godModal.style.display = "none";
  }

  const favoritesModal = document.getElementById("favorites-modal");
  if (event.target === favoritesModal) {
    favoritesModal.style.display = "none";
  }

  const pantheonModal = document.getElementById("pantheon-modal");
  if (event.target === pantheonModal) {
    pantheonModal.style.display = "none";
  }
});

function createGodCard(god) {
  const godCard = document.createElement("div");
  godCard.className = "god-card";
  godCard.addEventListener("click", function () {
    document.getElementById("favorites-modal").style.display = "none";
    showGodDetails(god);
  });

  const godImage = document.createElement("img");
  godImage.src = god.image;
  godImage.alt = god.name;
  godImage.className = "god-image";

  const titleContainer = document.createElement("div");
  titleContainer.className = "god-card-title-container";

  const titleElement = document.createElement("p");
  titleElement.className = "god-card-title";
  titleElement.textContent = god.name;

  const domainElement = document.createElement("p");
  domainElement.className = "god-card-description";
  domainElement.textContent = god.domain.replaceAll(",", " •") || "";

  titleContainer.appendChild(titleElement);
  titleContainer.appendChild(domainElement);
  godCard.appendChild(godImage);
  godCard.appendChild(titleContainer);

  return godCard;
}

function showGodDetails(god) {
  const modal = document.getElementById("god-modal");
  const godName = document.getElementById("modal-god-name");
  const godImage = document.getElementById("modal-god-image");
  const godDomain = document.getElementById("modal-god-domain");
  const godRelated = document.getElementById("modal-god-related");
  const godDescription = document.getElementById("modal-god-description");
  const godFunFact = document.getElementById("modal-god-fun-fact");
  const starIcon = document.querySelector(".star-modal");

  godName.textContent = god.name;
  godImage.src = god.image;
  godImage.alt = god.name;
  godDomain.textContent = god.domain;
  godRelated.textContent = god.related_gods.join(" • ");
  godDescription.textContent = god.description;
  godFunFact.textContent = god.fun_fact;

  modal.style.display = "flex";

  document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.onclick = () => {
      btn.closest(".modal").style.display = "none";
    };
  });

  if (favorites[god.name]) {
    starIcon.classList.remove("fa-regular");
    starIcon.classList.add("fa-solid");
  } else {
    starIcon.classList.remove("fa-solid");
    starIcon.classList.add("fa-regular");
  }
}

function loadGods(data, keepSortOrder = false) {
  currentGodsData = data;
  const godsContainer = document.getElementById("gods-container");
  godsContainer.innerHTML = "";

  data.forEach((god) => {
    const godCard = createGodCard(god);
    godsContainer.appendChild(godCard);
  });

  if (!keepSortOrder && currentSortOrder !== "default") {
    sortGods(currentSortOrder);
  } else if (keepSortOrder === false) {
    currentSortOrder = "default";
  }
}

function sortGods(order) {
  if (order === currentSortOrder) return;

  currentSortOrder = order;

  if (order === "default") {
    loadGods(currentGodsData, true);
    return;
  }

  const godsContainer = document.getElementById("gods-container");
  const godCards = Array.from(godsContainer.children);

  godCards.sort((a, b) => {
    const nameA = a.querySelector(".god-card-title").textContent;
    const nameB = b.querySelector(".god-card-title").textContent;

    if (order === "az") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  godsContainer.innerHTML = "";
  godCards.forEach((card) => godsContainer.appendChild(card));
}

function searchGods() {
  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    loadGods(greek_gods_data);
    return;
  }

  const allGods = [
    ...greek_gods_data,
    ...roman_gods_data,
    ...norse_gods_data,
    ...egyptian_gods_data,
  ];

  const filteredGods = allGods.filter(
    (god) =>
      god.name.toLowerCase().includes(searchTerm) ||
      (god.domain && god.domain.toLowerCase().includes(searchTerm))
  );

  loadGods(filteredGods);
}

function scrollToGods() {
  const godsSection = document.getElementById("god-selector");
  godsSection.scrollIntoView({ behavior: "smooth" });
}

function toggleStar(element) {
  const godName = document.getElementById("modal-god-name").textContent;
  const isFavorited = favorites[godName];

  if (isFavorited) {
    delete favorites[godName];
    element.classList.remove("fa-solid");
    element.classList.add("fa-regular");
  } else {
    favorites[godName] = true;
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function openFavoritesModal() {
  const modal = document.getElementById("favorites-modal");
  const container = document.getElementById("favorites-container");
  container.innerHTML = "";

  const allGods = [
    ...greek_gods_data,
    ...roman_gods_data,
    ...norse_gods_data,
    ...egyptian_gods_data,
  ];

  const favoriteGods = allGods.filter((god) => favorites[god.name]);

  if (favoriteGods.length === 0) {
    container.innerHTML = "<p class='no-favorites-text'>No favorites yet.</p>";
  } else {
    favoriteGods.forEach((god) => {
      const card = createGodCard(god);
      container.appendChild(card);
    });
  }

  modal.style.display = "block";
}

function closeFavoritesModal() {
  document.getElementById("favorites-modal").style.display = "none";
}

function initPantheon() {
  const savedPantheon = localStorage.getItem("userPantheon");
  if (savedPantheon) {
    userPantheon = JSON.parse(savedPantheon);
    updatePantheonDisplay();
  }
}

function openPantheonModal() {
  const modal = document.getElementById("pantheon-modal");
  const nameInput = document.getElementById("pantheon-name-input");
  const selectionContainer = document.getElementById(
    "pantheon-selection-container"
  );

  nameInput.value = userPantheon.name || "";

  selectionContainer.innerHTML = "";

  const allGods = [
    ...greek_gods_data,
    ...roman_gods_data,
    ...norse_gods_data,
    ...egyptian_gods_data,
  ];

  allGods.forEach((god) => {
    const container = document.createElement("div");
    container.className = "god-checkbox-container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "god-checkbox";
    checkbox.id = `god-check-${god.name.replace(/\s+/g, "-").toLowerCase()}`;
    checkbox.value = god.name;
    checkbox.dataset.godData = JSON.stringify(god);
    checkbox.checked = userPantheon.gods.some((g) => g.name === god.name);

    const label = document.createElement("label");
    label.className = "god-checkbox-label";
    label.htmlFor = checkbox.id;
    label.textContent = god.name;

    container.appendChild(checkbox);
    container.appendChild(label);
    selectionContainer.appendChild(container);
  });

  modal.style.display = "flex";
}

function closePantheonModal() {
  document.getElementById("pantheon-modal").style.display = "none";
}

function savePantheon() {
  const nameInput = document.getElementById("pantheon-name-input");
  const checkboxes = document.querySelectorAll(".god-checkbox:checked");

  userPantheon.name = nameInput.value;

  userPantheon.gods = [];
  checkboxes.forEach((checkbox, index) => {
    if (index < 10) {
      const godData = JSON.parse(checkbox.dataset.godData);
      userPantheon.gods.push(godData);
    }
  });

  localStorage.setItem("userPantheon", JSON.stringify(userPantheon));

  updatePantheonDisplay();

  closePantheonModal();
}

function updatePantheonDisplay() {
  const statusElement = document.getElementById("pantheon-status");
  const displaySection = document.getElementById("pantheon-display-section");

  displaySection.innerHTML = "";

  if (userPantheon.gods && userPantheon.gods.length > 0) {
    statusElement.textContent = userPantheon.name
      ? `Your pantheon: ${userPantheon.name}`
      : "Your personal pantheon";

    userPantheon.gods.forEach((god) => {
      const godCard = document.createElement("div");
      godCard.className = "god-card";
      godCard.addEventListener("click", function () {
        showGodDetails(god);
      });

      const godImage = document.createElement("img");
      godImage.src = god.image;
      godImage.alt = god.name;
      godImage.className = "god-image";

      const titleContainer = document.createElement("div");
      titleContainer.className = "god-card-title-container";

      const titleElement = document.createElement("p");
      titleElement.className = "god-card-title";
      titleElement.textContent = god.name;

      const domainElement = document.createElement("p");
      domainElement.className = "god-card-description";
      domainElement.textContent = god.domain.replaceAll(",", " •") || "";

      titleContainer.appendChild(titleElement);
      titleContainer.appendChild(domainElement);
      godCard.appendChild(godImage);
      godCard.appendChild(titleContainer);

      displaySection.appendChild(godCard);
    });
  } else {
    statusElement.textContent = "You haven't created a pantheon yet.";
  }
}
