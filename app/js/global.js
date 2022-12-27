document.addEventListener("DOMContentLoaded", function () {
  const carouselText = [
    {text: "Welcome to Dianthe Studio!", color: "#6082bc"},
    {text: "It's pronounced dye / ANN / thee", color: "#120F02"},
    {text: "We work with womxn-led small businesses and startups to create custom online shopping experiences.", color: "#120F02"},
    {text: "...because your customers should feel your presence through every interactioin with your brand.", color: "#120F02"},
    {text: "Our website is currently under construction", color: "#120F02"},
    {text: "We'll be accepting new clients soon <3", color: "#82b8d4"}
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
  }

  carousel(carouselText, '#sentence')
});