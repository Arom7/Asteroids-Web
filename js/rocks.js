export class Rocks{

    // Constructor de rocas
    constructor(canvasManager, quantity = 8){
        this.canvas = canvasManager;
        this.context = canvasManager.getContext();
        this.rocks = [];
        this.quantity = quantity;
        this.velocity = 1;
        this.initializeRocks();
    }

    // Inicializar posiciones de rocas
    initializeRocks() {
        for (let i = 0; i < this.quantity; i++) {
            this.rocks.push({
                x: this.randomPosition(this.canvas.width),
                y: this.randomPosition(this.canvas.height),
                vx: this.getRandomVelocity(),
                vy: this.getRandomVelocity(),
                size: 100
            });
        }
    }

    // Generar posiciones randoms
    randomPosition(max) {
        let position = Math.floor(Math.random() * max) + 1;
        if (position > positionXShip + 100 || position < positionXShip - 100) {
            return position;
        } else {
            return this.randomPosition(max);
        }
    }

    /*  generatePositionInitialRock(param) {
            let position = Math.floor(Math.random() * param) + 1;
            if (position > positionXShip + 100 || position < positionXShip - 100) {
                console.log("Posicion limpia:" + position);
                return position;
            } else {
                return generatePositionInitialRock(param);
            }
        } 
            */



    // Dibujo de rocas
    draw() {
        this.rocks.forEach(rock => {
            this.context.beginPath();
            this.context.strokeStyle = "#fff";
            this.context.strokeRect(rock.x, rock.y, rock.size, rock.size);
            this.context.closePath();
        });
    }
}