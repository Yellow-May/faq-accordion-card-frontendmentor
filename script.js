let items = document.querySelectorAll(".list-item");

items.forEach((item, index) => {
  if (index === 1) {
    item.classList.add("on");
    style(item, "inline-block", "600", "rotate(180deg)");
  }

  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("on");
      style(item, "none", "500", "rotate(0deg)");
    });
    if (item.classList.contains("on")) {
      item.classList.remove("on");
      style(item, "none", "500", "rotate(0deg)");
    } else {
      item.classList.add("on");
      style(item, "inline-block", "600", "rotate(180deg)");
    }
  });
});

let body = document.querySelector("body");

body.addEventListener("click", (e) => {
  if (!e.target.classList.contains("list-item")) {
    items.forEach((item) => {
      item.classList.remove("on");
      style(item, "none", "500", "rotate(0deg)");
    });
  }
});

function style(item, display, fontWeight, transform) {
  item.lastElementChild.style.display = display;
  item.firstElementChild.style.fontWeight = fontWeight;
  item.firstElementChild.lastElementChild.style.transform = transform;
}
