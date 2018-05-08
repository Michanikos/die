"use strict";

export default class EventHandler {
    constructor() {
        this.handlerRoll();
    }

    handlerRoll() {
        for (let i = 0, qty = 0; i < document.getElementsByName("formSubmit").length; i++) {
            document.getElementsByName("formSubmit")[i].addEventListener("click", () => {
                let value = document.getElementsByName("formSubmit")[i].getAttribute("value");
                if (value === "roll") {
                    this.roll(qty, value);
                }
                else {
                    qty++
                }
            });
        }


    }

    roll(qty, value) {
        let results = [];
        let total = 0;
        for (let i = 0; i < qty; i++) {
            results[i] = Math.floor((Math.random() * value) + 1);
            total += results[i];
            console.log(results[i]);
        }
      alert(total);
    }
}


