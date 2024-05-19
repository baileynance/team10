import { loadHeaderFooter } from "./utils.mjs";
import { Alert } from "./alert.js";

loadHeaderFooter();

const alert = new Alert();
// create an instance for alert class
alert.init();
// run init method 
