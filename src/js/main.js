import { loadHeaderFooter } from "./utils.mjs";
import Visit from "./visit.mjs"

loadHeaderFooter();

const newVisit = new Visit('visit');
newVisit.init();
