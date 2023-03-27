let landen = [];
landen.push({
    "land": "Nederland",
    "hoofdstad": "Amsterdam"
})
landen.push({
    "land": "indonesië",
    "hoofdstad": "Jakarta"
})
landen.push({
    "land": "Amerika",
    "hoofdstad": "Washington D.C"
})
landen.push({
    "land": "Verenigd Koninkrijk",
    "hoofdstad": "London"
})

function zoeklanden(zoektekst){
    zoektekst = zoektekst.toUpperCase();
    let myGrid = "<div class='cell'><b>land</b></div> <div class'cell'><b>hoofdstad</b></div>";

    for (let x = 0; x < landen.length; x++) {
        if (landen[x].land.toUpperCase().includes(zoektekst)) {
            myGrid += '<div class="cell">' + landen[x].land + '</div>';
            myGrid += '<div class="cell">' + landen[x].hoofdstad + '</div>';
        
        }
    }
    document.getElementById('grid').innerHTML = myGrid;
}