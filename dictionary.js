let definition;
function thatMeans(word) {
    if (word === "JS") {
        definition = "Otherwise known as Javascript, a language used to program stuff on the web.";
    }
    else if (word === "godot") {
        definition = "Godot is a game engine, used for making video games. An example of a popular godot game is Brotato. My Godot games are at https://www.rowancodes.dev/godot-games."
    }
    else {
        definition = "Can't find the word: " + word + ". :(";
    }
    alert(definition);
}