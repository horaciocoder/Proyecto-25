class Paper {
    constructor(x, y, radius) {
        var properties = {
            restitution: 0,
            friction: 0.4,
            density: 1.2,
        }
        this.body = Bodies.circle(x, y, radius, properties);
        World.add(world, this.body)
        this.image = loadImage("sprites/paper ball.png");
        this.radius = radius;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(angle);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius + 30, this.radius + 30);
        pop();

    }
}