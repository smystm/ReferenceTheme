/* Begin::mainJs */
/* begin scroll */
let scrollBar = document.querySelector("#custom-scroll");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let siteHeight = document.body.clientHeight;
  let browserHeight = window.innerHeight;

  scrollPercent = scrollTop / (siteHeight - browserHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  scrollBar.style.width = `${scrollPercentRounded}%`;
});
/* end scroll */
/* End::mainJs */
