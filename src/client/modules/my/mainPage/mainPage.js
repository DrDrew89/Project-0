import { LightningElement, api } from 'lwc';


export default class mainPage extends LightningElement {
    buttonClicked = false;

    handleClicked(e) {
        if(this.buttonClicked == true) {
            this.buttonClicked = false;
        } else {
        this.buttonClicked = true;
        }

        if(e.target.style.color == "red"){
        //method to add to cart
            e.target.style.color = "black";
            e.target.innerHTML = "Add to Cart";

        } else {
        //method to remove from cart
            e.target.style.color = "red";
            e.target.innerHTML = "Remove from Cart";
        }
    }
    
}

