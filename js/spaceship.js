export class Spaceship{

    // Constructor de nave espacial
    constructor(canvasManager){
        this.canvas = canvasManager;
        this.context = canvasManager.getContext();
        this.x = canvasManager.width / 2;
        this.y = canvasManager.height / 2;
        this.height = 30;
        this.width = 15;
        this.rotation = 0;
    }

    setRotation(angle){
        this.rotation = angle;
    }

    draw(){
        // Seccion mas grande
        drawSection(this.height , this.width , "#fff");
        // Generar seccion mas pequenia
        drawSection(this.height / 5 , this.width / 3 , "black");
    }

    drawSection(height , width , color){
        // Guardar el estado actual 
        this.context.save();
        // Mueve el origen al centro de la nave
        this.context.translate(this.x , this.y - this.height/2);
        // Rotacion
        this.context.rotate((this.rotation * Math.PI) / 180);

        this.context.beginPath();
        // Dibujar vertice superior
        this.context.moveTo(0, 0 - height);
        // Dibujar vertice inferior derecho e izquierdo
        this.context.lineTo(0 - width, this.y/2);
        this.context.lineTo(0 + width, this.y/2);
        this.context.fillStyle = `${color}`;
        this.context.fill();
        // Restaurar al estado anterior
        this.context.restore();
    }

}