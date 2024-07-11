function onStyleRadioMenuInput(e) {
  // document.body.dataset.style = "style-1";
  if (e.srcElement.id === "style-1") {
    document.body.classList.add("style-1");
    document.body.classList.remove("style-2");
  } else {
    document.body.classList.remove("style-1");
    document.body.classList.add("style-2");
  }
}

let awardsSection = null;
let hiddenElements = [];
function onShowAwardsInput(e) {
  toggleAwards(e.target.checked);
}
function toggleAwards(isChecked) {
  if (isChecked) {
    hiddenElements.forEach((el) => {
      awardsSection.appendChild(el);
    });
    hiddenElements = [];
  } else {
    const oldCertificates = document.querySelectorAll(".award");
    oldCertificates.forEach((el) => {
      hiddenElements.push(el);
      awardsSection.removeChild(el);
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  awardsSection = document.querySelector(".section--awards");
  toggleAwards(false);
});

function onHideSkillDetailsInput(e) {
  if (e.target.checked) {
    document.querySelectorAll(".skills__item-details").forEach((el) => {
      el.classList.add("hidden");
    });
  } else {
    document.querySelectorAll(".skills__item-details").forEach((el) => {
      el.classList.remove("hidden");
    });
  }
}

let resumeRightSections = null;
let toolsStyleOne = null;
let toolsStyleTwo = null;
function onToolsStyleInput(e) {
  setToolsSections(e.srcElement.id);
}
function setToolsSections(id) {
  if (id === "tools-style-1") {
    resumeRightSections.appendChild(toolsStyleOne);
    toolsStyleTwo.classList.add("hidden");
  } else if (id === "tools-style-2") {
    if (resumeRightSections.contains(toolsStyleOne)) {
      resumeRightSections.removeChild(toolsStyleOne);
    }
    toolsStyleTwo.classList.remove("hidden");
  } else {
    if (resumeRightSections.contains(toolsStyleOne)) {
      resumeRightSections.removeChild(toolsStyleOne);
    }
    toolsStyleTwo.classList.add("hidden");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  toolsStyleOne = document.querySelector(".tools-style-1");
  toolsStyleTwo = document.querySelector(".tools-style-2");
  resumeRightSections = document.querySelector(".resume__right > .sections");
  setToolsSections(undefined);
});

let themeSelector = null;
let theme = "";
let rotatingDisk = null;
let rotationDegrees = 0;
document.addEventListener("DOMContentLoaded", function () {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // set themeSelector to El
  themeSelector = document.querySelector(".theme-selector");
  // set theme to preference
  theme = prefersDark ? "dark" : "light";
  // set data-theme body attribute to preference
  document.body.setAttribute("data-theme", theme);
  // set class of .theme-selector
  themeSelector.classList.add(`theme-selector--${theme}`);
  // set rotatingDisk to El
  rotatingDisk = document.querySelector(".theme-selector__rotating-disk");
  // set rotationDegrees based on preference
  rotationDegrees = theme === "dark" ? 0 : 180;

  advanceDiskRotation();
});
function setTheme() {
  themeSelector.classList.remove(`theme-selector--${theme}`);
  theme = theme === "light" ? "dark" : "light";
  themeSelector.classList.add(`theme-selector--${theme}`);
  document.body.setAttribute("data-theme", theme);
  sessionStorage.setItem("data-theme", theme);
  advanceDiskRotation();
}
async function advanceDiskRotation() {
  rotatingDisk.classList.add("theme-selector__rotating-disk--rotating");
  rotationDegrees = rotationDegrees - 180;
  const keyframes = [
    { transform: `translateY(0.8rem) translateX(-50%) rotate(${rotationDegrees + 180}deg)` },
    { transform: `translateY(0.8rem) translateX(-50%) rotate(${rotationDegrees}deg)` }
  ];
  const timing = {
    duration: 400,
    easing: "cubic-bezier(0.88, -0.07, 0, 1.18)",
    fill: "forwards"
  };
  await rotatingDisk.animate(keyframes, timing).finished;
  rotatingDisk.classList.remove("theme-selector__rotating-disk--rotating");
}

// let awardsSection = null;
let hiddenCourseCertificateElements = [];
function onShowCourseCertificatesInput(e) {
  toggleCourseCertificates(e.target.checked);
}
function toggleCourseCertificates(isChecked) {
  if (isChecked) {
    hiddenCourseCertificateElements.forEach((el) => {
      awardsSection.appendChild(el);
    });
    hiddenCourseCertificateElements = [];
  } else {
    const oldCertificates = document.querySelectorAll(".course-certificate");
    oldCertificates.forEach((el) => {
      hiddenCourseCertificateElements.push(el);
      awardsSection.removeChild(el);
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // awardsSection = document.querySelector(".section--awards");
  toggleCourseCertificates(false);
});
