export default class Alert {
    async init() {
        const response = await fetch('../public/json/alerts.json');
        const data = await JSON.stringify(response);
        this.createAlert(alerts);
    }

    createAlert(alerts) {
        let alert = `<section class"alert-list">`;
        alerts.foreach((a) => alert + `<p style="background-color: ${alerts.background};color: ${alerts.color}">${alerts.message}</p>`);
        document.querySelector("main").prepend(alert);
    }
}