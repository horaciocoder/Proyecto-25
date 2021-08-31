class Floor extends BaseClass {
    constructor(height) {
        super(canvas.width/2, canvas.height - height / 2.5, canvas.width, height);
        Matter.Body.setStatic(this.body, true);
    }
    display() {
        super.display();
    }
}