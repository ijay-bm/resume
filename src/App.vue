<template>
  <div class="menu menu--theme-selector">
    <div class="menu__group">
      <button class="theme-selector" @click="setTheme">
        <div class="theme-selector__rotating-disk">
          <span class="theme-selector__icontainer theme-selector__sun">
            <i class="icon-sun"></i>
          </span>
          <span class="theme-selector__icontainer theme-selector__moon">
            <i class="icon-moon"></i>
          </span>
        </div>
      </button>
    </div>
  </div>

  <div class="menu">
    <div class="menu__group radio-menu" @input="onStyleRadioMenuInput">
      <input type="radio" class="radio-menu__radio-input" name="style-radio-menu" id="style-1" />
      <label for="style-1" class="radio-menu__radio-label">Style 1</label>
      <input
        type="radio"
        class="radio-menu__radio-input"
        name="style-radio-menu"
        id="style-2"
        checked
      />
      <label for="style-2" class="radio-menu__radio-label">Style 2</label>
      <span class="radio-menu__radio-dot"></span>
    </div>
  </div>

  <div class="menu menu--middle-left">
    <div class="menu__group">
      <label class="checkbox" for="show-awards">
        <input type="checkbox" id="show-awards" @input="onShowAwardsInput" />
        <div class="checkbox__checkbox">
          <span class="checkbox__tick"></span>
        </div>
        <span class="checkbox__text">Show Awards</span>
      </label>
    </div>

    <div class="menu__group">
      <label class="checkbox" for="show-course-certificates">
        <input
          type="checkbox"
          id="show-course-certificates"
          @input="onShowCourseCertificatesInput"
        />
        <div class="checkbox__checkbox">
          <span class="checkbox__tick"></span>
        </div>
        <span class="checkbox__text">Show Course Certificates</span>
      </label>
    </div>
  </div>

  <div class="menu menu--middle-right">
    <div class="menu__group">
      <label class="checkbox" for="hide-skill-details">
        <input type="checkbox" id="hide-skill-details" @input="onHideSkillDetailsInput" />
        <div class="checkbox__checkbox">
          <span class="checkbox__tick"></span>
        </div>
        <span class="checkbox__text">Hide Skill Details</span>
      </label>
    </div>

    <div class="menu__group radio-menu" @input="onToolsStyleInput">
      <input
        type="radio"
        class="radio-menu__radio-input"
        name="tools-style-radio-menu"
        id="tools-style-1"
      />
      <label for="tools-style-1" class="radio-menu__radio-label">Tool Style 1</label>
      <input
        type="radio"
        class="radio-menu__radio-input"
        name="tools-style-radio-menu"
        id="tools-style-2"
        checked
      />
      <label for="tools-style-2" class="radio-menu__radio-label">Tool Style 2</label>
      <input
        type="radio"
        class="radio-menu__radio-input"
        name="tools-style-radio-menu"
        id="tools-style-3"
        checked
      />
      <label for="tools-style-3" class="radio-menu__radio-label">Hide Tools</label>
      <span class="radio-menu__radio-dot"></span>
    </div>
  </div>
  <Resume />
</template>

<script setup>
import Resume from "./components/Resume.vue";

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
  console.log(e);
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
</script>
