class Form {
    constructor() {
        this.title = createImg("assets/title.png")
        this.input = createInput("").attribute("placeholder", "ENTER YOUR NAME")
        this.button = createButton("PLAY")
        this.greeting = createElement("h2")
    }

    setElementPositions() {
        this.title.position(120, 50)
        this.input.position(width / 2 - 110, height / 2 - 80)
        this.button.position(width / 2 - 90, height / 2 - 20)
        this.greeting.position(width / 2 - 300, height / 2 - 100)
    }

    setElementStyle() {
        this.input.class("customInput")
        this.title.class("gameTitle")
        this.button.class("customButton")
        this.greeting.class("greeting")
    }

    hide() {
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display() {
        this.setElementPositions()
        this.setElementStyle()
        this.handleMousePressed()
    }

    handleMousePressed() {
        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            console.log("test")
            var message = `HELLO ${this.input.value()}!
            <br>WAIT FOR ANOTHER PLAYER TO JOIN`
            this.greeting.html(message)
        })

    }
}