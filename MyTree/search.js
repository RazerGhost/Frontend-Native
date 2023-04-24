// projecten
let projecten = [];
projecten[0] = {
  "project": "Duurzame landbouw",
  "land": "Bangladesh"
}
projecten[1] = {
  "project": "Red de regenwouden",
  "land": "Benin Republiek"
}
projecten[2] = {
  "project": "Red de regenwouden",
  "land": "Mali"
}
projecten[3] = {
  "project": "Voedselbossen",
  "land": "Colombia"
}
projecten[4] = {
  "project": "Voedselbossen",
  "land": "Mali"
}

function selecteerProjecten(zoektekst) {
  zoektekst = zoektekst.toUpperCase();
  let toonProjecten = "<div class='cell'><b>Project</b></div><div class='cell'><b>Land</b></div>";

  for (x = 0; x < projecten.length; x++) {
    if (projecten[x].project.toUpperCase().includes(zoektekst) || projecten[x].land.toUpperCase().includes(zoektekst)) {
      toonProjecten = toonProjecten + '<div class="cell">' + projecten[x].project + '</div>';
      toonProjecten = toonProjecten + '<div class="cell">' + projecten[x].land + '</div>';
    }
  }
  document.getElementById('grid').innerHTML = toonProjecten;
}