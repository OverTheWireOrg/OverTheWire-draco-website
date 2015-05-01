elem = document.getElementById("username");

if(elem) {
    window.top.postMessage({"username": elem.getAttribute("name"), "error": "none?"}, "*")
} else {
    // FIXME
}
