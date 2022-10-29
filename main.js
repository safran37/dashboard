const toggle = document.querySelector(".toggle");
const container = document.querySelector(".container");
const evenColumns = document.querySelectorAll(".even-columns");
const gridColumns = document.querySelectorAll(".grid-column");
const bold = document.querySelector(".bold");
const total = document.querySelector(".total");
const h1 = document.querySelectorAll("h1");
const h4 = document.querySelectorAll("h4");
const bot = document.querySelectorAll(".bot-p");
const lime = document.querySelectorAll(".lime-green");
const red = document.querySelectorAll(".red");
const name1 = document.querySelectorAll(".name");
const dark = document.querySelector(".dark");
const toggleButton = document.querySelector(".toggle-button");

const addDarkMode = () => {
  if (localStorage.getItem("DarkMode") === null) {
    localStorage.setItem("DarkMode", "false");
  }
};
const lightModeApplication = () => {
  if (localStorage.getItem("DarkMode") === "false") {
    document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    container.style.backgroundColor = "hsl(0, 0%, 100%)";
    gridColumns.forEach((card) => {
      card.style.backgroundColor = "hsl(227, 47%, 96%)";
      card.addEventListener("mouseover", () => {
        card.style.backgroundColor = "lightgrey";
      });
      card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "hsl(227, 47%, 96%)";
      });
    });
    evenColumns.forEach((topCard) => {
      topCard.style.backgroundColor = "hsl(227, 47%, 96%)";
      topCard.addEventListener("mouseover", () => {
        topCard.style.backgroundColor = "lightgrey";
      });
      topCard.addEventListener("mouseleave", () => {
        topCard.style.backgroundColor = "hsl(227, 47%, 96%)";
      });
    });
    bold.style.color = "hsl(230, 17%, 14%)";
    total.style.color = "hsl(228, 34%, 66%)";
    h1.forEach((heading) => {
      heading.style.color = "hsl(230, 17%, 14%)";
    });
    h4.forEach((heading) => {
      heading.style.color = "hsl(230, 17%, 14%)";
    });
    bot.forEach((color) => {
      color.style.color = "hsl(230, 17%, 14%)";
    });
    lime.forEach((opak) => {
      opak.style.opacity = "1";
    });
    red.forEach((opak) => {
      opak.style.opacity = "1";
    });
    name1.forEach((nameColor) => {
      nameColor.style.color = "hsl(230, 17%, 14%)";
    });
    dark.style.color = "hsl(228, 34%, 66%)";
    toggleButton.classList.toggle("toTheLeft");
    toggle.classList.remove("bg");
    toggleButton.classList.remove("black");
  }
};
const darkModeApplication = () => {
  if (localStorage.getItem("DarkMode") === "true") {
    document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    container.style.backgroundColor = "hsl(230, 17%, 14%)";
    gridColumns.forEach((card) => {
      card.style.backgroundColor = "hsl(228, 28%, 20%)";
      card.addEventListener("mouseover", () => {
        card.style.backgroundColor = "hsl(228, 12%, 44%)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "hsl(228, 28%, 20%)";
      });
    });
    evenColumns.forEach((topCard) => {
      topCard.style.backgroundColor = "hsl(228, 28%, 20%)";
      topCard.addEventListener("mouseover", () => {
        topCard.style.backgroundColor = "hsl(228, 12%, 44%)";
      });
      topCard.addEventListener("mouseleave", () => {
        topCard.style.backgroundColor = "hsl(228, 28%, 20%)";
      });
    });
    bold.style.color = "hsl(0, 0%, 100%)";
    total.style.color = "hsl(228, 34%, 66%)";
    h1.forEach((heading) => {
      heading.style.color = "hsl(0, 0%, 100%)";
    });
    h4.forEach((heading) => {
      heading.style.color = "hsl(0, 0%, 100%)";
    });
    bot.forEach((color) => {
      color.style.color = "hsl(230, 17%, 14%)";
    });
    lime.forEach((opak) => {
      opak.style.opacity = "0.7";
    });
    red.forEach((opak) => {
      opak.style.opacity = "0.7";
    });
    name1.forEach((nameColor) => {
      nameColor.style.color = "hsl(228, 34%, 66%)";
    });
    dark.style.color = "white";
    toggleButton.classList.toggle("toTheLeft");
    toggle.classList.add("bg");
    toggleButton.classList.add("black");
  }
};
const checkDarkMode = () => {
  if (localStorage.getItem("DarkMode", "true")) {
    darkModeApplication();
  } else if (localStorage.getItem("DarkMode", "false")) {
    lightModeApplication();
  }
};
toggle.addEventListener("click", () => {
  if (localStorage.getItem("DarkMode") === "true") {
    localStorage.setItem("DarkMode", "false");
    lightModeApplication();
  } else if (localStorage.getItem("DarkMode") === "false") {
    localStorage.setItem("DarkMode", "true");
    darkModeApplication();
  }
});
checkDarkMode();
addDarkMode();
