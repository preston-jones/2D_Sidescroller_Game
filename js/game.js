let canvas;
let world;
let ctx;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    ctx = canvas.getContext('2d');

    console.log('My Character is', world.character);
    console.log('My Enemie is', world.enemies);
    console.log('My Vehicles are', world.vehicles);
}