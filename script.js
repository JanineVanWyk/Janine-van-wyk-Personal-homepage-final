/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify } =
window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
getH1 = document.querySelectorAll("h1"),
getSiteHeader = document.querySelectorAll(".c-site-header"),
getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
getMain = document.querySelectorAll("main"),
getFooter = document.querySelectorAll("footer"),
getSiteFooter = document.querySelectorAll(".c-site-footer"),
getIFrame = document.querySelectorAll("iframe"),
getImage = document.querySelectorAll("img"),
getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
document.getElementById('button').addEventListener('click', event => {
  let element_button = document.getElementById('button');
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('Thank you for visiting my webpage'));

});

var images;


images = ['https://drive.google.com/thumbnail?id=1AV6XWJw-_uAXGF1K1coT2E0EYXDwDl3c', 'https://drive.google.com/thumbnail?id=1GFuAiRC3k2HockTYWQ-CefwSABGf0tvA', 'https://drive.google.com/thumbnail?id=1Nkl9KdBvTShWXzoK4ps7Xz3WGRqXL2XR', 'https://drive.google.com/thumbnail?id=1XXqgenlrSwWzw7zMM3--B5GeDXsSehfq', 'https://drive.google.com/thumbnail?id=1RtDf-kCcXbA4YzFCqwx29i7MeSl6ke65', 'https://drive.google.com/thumbnail?id=1MeW9yOW6VeliSkxbS9ehOenwUgZ2Hqmm', 'https://drive.google.com/thumbnail?id=1XU1wrGnFAuJoZ7go8JL_QM8G4hRguhJb'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', event => {
  let element_image2 = document.getElementById('image');
  element_image2.replaceChildren();
  element_image2.setAttribute("src", images[0]);
  images.push(images.shift());

});

document.getElementById('previous').addEventListener('click', event => {
  let element_image3 = document.getElementById('image');
  element_image3.replaceChildren();
  element_image3.setAttribute("src", images.slice(-1)[0]);
  images.unshift(images.pop());

});