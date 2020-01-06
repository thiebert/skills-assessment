function setInfo() {
    var value = document.getElementById("contact-info-select").value;
    var phones = document.getElementsByClassName('phone');
    for (var i = 0; i < phones.length; i++) {
        phones[i].style.display = value == "phone" ? "table-cell" : "none";
    }
    var emails = document.getElementsByClassName('email');
    for (var i = 0; i < emails.length; i++) {
        emails[i].style.display = value == "email" ? "table-cell" : "none";
    }
}

function toggleHighlight(index) {
    var blackouts = document.getElementsByClassName('blackout');
    var isOn = blackouts[0].style.display == "none" && blackouts[1].style.display == "none";
    for (var i = 0; i < blackouts.length; i++) {
        blackouts[i].style.display = isOn ? "table-cell" : "none";
        blackouts[i].style["background-color"] = "rgba(24, 24, 24, .8)";
    }
    var rows = document.getElementsByClassName("row");

    var phones = document.getElementsByClassName('phone');
    var emails = document.getElementsByClassName('email');
    var infos = document.getElementsByClassName('full-info');
    for (var i = 0; i < infos.length; i++) {
        infos[i].style.display = "none";
    }
    for (var i = 0; i < rows.length; i++) {
        rows[i].style["background-color"] = i % 2 ? "#1a1a1a" : "#212121";
    }

    phones[index + 1].style.display = isOn ? "none" : "table-cell";
    emails[index + 1].style.display = isOn ? "none" : "table-cell";
    infos[index + 1].style.display = isOn ? "table-cell" : "none";
    rows[index].style["background-color"] = isOn ? "#444444" : index % 2 ? "#1a1a1a" : "#212121";
    blackouts[index + 1].style["background-color"] = isOn ? "transparent" : "rgba(24, 24, 24, .8)";
    if (!isOn) setInfo();
}
