// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {

  //let parsedData = JSON.stringify(data);
  let keys = getLocalStorage(key);

  if (keys && Array.isArray(keys)) {
    let dataArray = [...keys, data];
    localStorage.setItem(key, JSON.stringify(dataArray));
  }
  else if (keys) {
    let dataArray = [keys, data];
    localStorage.setItem(key, JSON.stringify(dataArray));
  }
  else{
    let dataArray = [data];
    localStorage.setItem(key, JSON.stringify(dataArray));
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
// Return product id from url
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get('product')
  return product
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(templateFn);
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}
