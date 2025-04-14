var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.9);

var camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 20, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);

var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

BABYLON.SceneLoader.ImportMesh("", "models/", "PUSHILIN_house.obj", scene, function (meshes) {
    console.log("Model loaded:", meshes);
});

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});
