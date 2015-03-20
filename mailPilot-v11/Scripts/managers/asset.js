var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "space", src: "assets/images/background.png" },
        { id: "star", src: "assets/images/goldenstar.png" },
        { id: "ship", src: "assets/images/ship.png" },
        { id: "asteroid", src: "assets/images/asteroid.png" },
        { id: "playButton", src: "assets/images/playbutton.png" },
        { id: "tryAgainButton", src: "assets/images/playagainbutton2.png" },
        { id: "instructionsButton", src: "assets/images/btnInstructions.png" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ];
    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/buttonpage.png"],
        "frames": [
            [9, 10, 208, 65],
            [20, 86, 213, 69],
            [8, 160, 220, 80]
        ],
        "animations": {
            "instructionsButton": [0],
            "playButton": [1],
            "tryAgainButton": [2]
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map