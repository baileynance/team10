import { getLocalStorage } from "./utils.mjs";

export default class Visit {
    construtor(key){
        this.key = key;
    }
    init() {
        this.addVisit();
        this.showMessage();
    }
    checkLocalStorage(){
        try {
            localStorage.getItem(this.key);
            return true;
        } catch (e) {
            return false;
        }
    }
    addVisit(){
        let visits = 0;
        if (this.checkLocalStorage()) {
            visits =  localStorage.getItem(this.key);
        }
        visits++;
        localStorage.setItem(this.key, visits);
    }
    showMessage(){
        const div = document.querySelector('.register');
        const visits = localStorage.getItem(this.key);
        if (visits == 1) {
            const a = document.createElement(a);
            a.textContent = 'Register now for rewards and special discounts!';
            a.setAttribute('href', 'index.html');
            div.appendChild(a);
        }
    }
}