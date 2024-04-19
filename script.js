/* script grabbed from https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp */

window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "10px 10px";
            document.getElementById("toggle").style.fontSize = "25px";
          } else {
            document.getElementById("navbar").style.padding = "20px 10px";
            document.getElementById("toggle").style.fontSize = "35px";
          }
        }