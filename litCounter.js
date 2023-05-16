import {LitElement, html} from 'lit';

export class LitCounter extends LitElement{
    static properties = {
        count: {type: Number},
    };

    constructor(){
        super();
        this.count = 0;
    }

    render() {
        return html `

        <p><button @click = "${this._increment}">+</button></p>
        <p> <span>${this.count}</span></p>
        <p><button @click = "${this._decrement}">-</button></p>

        `
    }

    _increment(e) {
        let totalCount = this.count
        const addition = parseInt(totalCount) > 0;
        let totalCounter = Math.min(25, addition + 1)

        return totalCounter;
    }

    _decrement(e) {
        let totalCount = this.count
        const subtration = parseInt(totalCount) < 0;
        let totalCounter = Math.max(0, addition - 1)

        return totalCounter;
    }
}
customElements.define('lit-counter', LitCounter);