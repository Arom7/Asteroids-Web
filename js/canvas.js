export class CanvasManager{
    
    // Constructor del modelo de canvas
    constructor(widthPercentage = 0.6, heightPercentage = 0.7)
    {
        // Definicion de contexto -> 2D
        this.canvas = document.querySelector("canvas");
        this.context = canvas.getContext("2d");
        // Definicion de tamanio
        this.canvas.width = window.innerWidth * widthPercentage;
        this.canvas.height = window.innerHeight * heightPercentage;
    }

    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    getContext() {
        return this.context;
    }

}