document.addEventListener("DOMContentLoaded", function () {

  // HEADER TOGGLE ==============================================================
  const checkbox = document.getElementById('checkbox')
  const mainContent = document.getElementById("mainContent");

  checkbox.addEventListener('change', (e) => {
    mainContent.classList.toggle("slide");
  })

  // CAROUSEL TEXT ==============================================================
  const carouselText = [
    {text: "Welcome to Dianthe Studio!", color: "#6082bc"},
    {text: "( pronounced dye / ANN / thee )", color: "#e3b722"},
    {text: "We work with womxn-led small businesses and startups to create custom online shopping experiences,", color: "#120F02"},
    {text: "...because your customers should feel your unique presence through every interaction with your brand.", color: "#120F02"}
  ]

  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }

  async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
  }

  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
    $('.input-cursor').css('background-color', color);
  }

  carousel(carouselText, '#sentence')

    // DETECT WHICH BROWSER IS BEING USED ================================
  function fnBrowserDetect(){
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if(userAgent.match(/edg/i)){
      browserName = "edge";
    }else{
      browserName="No browser detection";
    }
    
    document.querySelector("body").classList.add(browserName);         
  }

  fnBrowserDetect()
});