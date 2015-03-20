/// <reference path="../managers/asset.ts" />
module objects {
    // Island Class
    export class Island {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("star"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }

        public update() {
            this.image.x += this.dy;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.image.y = Math.floor(Math.random() * 640);
            this.image.x = -this.height;
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