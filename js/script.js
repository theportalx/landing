var words = ["organization's", "community's", "team's", "favorite"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 25,
  speed = 90;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

// baseUrl = "http://localhost:4200/"
baseUrl = "https://app.dataset.at/";

document.querySelector(".second-button").addEventListener("click", function () {
  document.querySelector(".animated-icon").classList.toggle("open");
  //     document.querySelector('#navbarToggleExternalContent10').classList.toggle('collapse')
});

document.querySelector(".claim-button").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  if (username.length > 3) {
    window.open(baseUrl + "auth/signup?username=" + username, "_blank");
  }
});

document
  .querySelector(".footer-claim-button")
  .addEventListener("click", function () {
    var username = document.getElementById("username2").value;
    if (username.length > 3) {
      window.open(baseUrl + "auth/signup?username=" + username, "_blank");
    }
  });

document
  .querySelector(".early-access-button")
  .addEventListener("click", function () {
    window.open(baseUrl + "auth/signup", "_blank");
  });
