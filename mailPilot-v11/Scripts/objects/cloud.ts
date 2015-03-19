/// <reference path="../managers/asset.ts" />
module objects {
    // Cloud class
    export class Cloud {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "cloud");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update()
        {
       this.image.y += this.dy;
       this.image.x += this.dx;

       this._checkBounds();
}

        // Reset position of island to the top
         reset() {
    this.image.y = Math.floor(Math.random() * 640);
    this.image.x = -this.height;
    this.dy = Math.floor(Math.random() * 4) - 2;
    this.dx = Math.floor(Math.random() * 5) + 5;
}

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
    // check if island has left the bottom of the screen
    if (this.image.x >= (640 + this.height)) {
        this.reset();
    }
}
        destroy() {
            game.removeChild(this.image);
        }
    }

}