"use strict";

import EventHandler from "./EventHandler.js";

class Die {
    constructor() {
        this.theUser();
    }

    theUser() {
        new EventHandler();
    }
}

window.addEventListener('load', () => {
    new Die();
});