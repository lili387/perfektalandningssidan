
function expandableList(elem) {
    console.log(elem);
    if (elem.children[1].style.display == "block") {
        elem.children[1].style.display = "none";
    } else {
        elem.children[1].style.display = "block";
    }
}

window.addEventListener("load", function() {
    let expandables = document.getElementsByClassName("expandable");
    for (element of expandables) {
        element.children[0].addEventListener("click", function() {
            expandableList(this.parentElement);
        });
    };
});