
  function light(bulb) {
    var pic;
    if (bulb == 0) {
      pic = "pic_bulboff.gif"
    } else {
      pic = "pic_bulbon.gif"
    }
    document.getElementById('img').src = pic;
  }