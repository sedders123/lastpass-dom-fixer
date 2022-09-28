const staticEmptyDivs = Array.from(document.getElementsByTagName("div")).filter(
  (div) => div.innerHTML === "" && div.style.position === "static"
);
staticEmptyDivs.forEach((div) => div.remove());
