let definition;
function thatMeans(word) {
    if (word === "JS") {
        definition = "JavaScript";
    }
    else if (word !== "JS") {
        definition = "ERROR!"
    }
    alert(`Otherwise known as ${definition}!`);
}