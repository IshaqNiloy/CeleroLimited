var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


$(function () {
        var fx = function fx() {
          var dfd = $(".numbers-highlight").map(function (i, el) {
              var data = parseInt(this.dataset.n, 10);
              var props = {
                "from": {
                    "count": 0
                },
                "to": {
                    "count": data
                }
              };
            return $(props.from).animate(props.to, {
                duration: 1000 * 1,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete: function() {
                   if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                   }
                }
            }).promise();
        }).toArray();
            // return jQuery promise when all animations complete
            return $.when.apply($, dfd);
        };
        
        var reset = function reset() {
          console.log($(this).scrollTop());
            // do stuff when window `.scrollTop()` > 75
            if ($(this).scrollTop() > 3550) {
              // turn off scroll event so `fx` not called
              // during ongoing animation
              $(this).off("scroll");
                // when all animations complete
                fx()
            }
        };
        // if `fx` should only be called once ,
        // change `.on()` to `.one()` ,
        // remove `.then()` callback following `fx()`
        // within `reset`
        $(window).on("scroll", reset);
    });

var i = 0;
setInterval(slider, 3000);

function slider() {
    var elem = document.getElementsByClassName("slider-card-group"); 
    
    if(i==0) {
        //elem[elem.length-1].style.opacity="0";
        elem[elem.length-1].style.display="none";
        //elem[elem.length-1].style.height="0";
    }else {
        //elem[i-1].style.opacity="0";
        elem[i-1].style.display="none";
        //elem[elem.length-1].style.height="0";
    }
    //elem[i].style.opacity="1";
    elem[i].style.display="flex";
    i++;
    
    if(i==elem.length){
        i = 0;
        }
}


var j = 0;
setInterval(sliderHeader, 3000);

function sliderHeader() {
    var elem = document.getElementsByClassName("slider-header-card-group"); 
    
    if(j==0) {
        //elem[elem.length-1].style.opacity="0";
        elem[elem.length-1].style.display="none";
        //elem[elem.length-1].style.height="0";
    }else {
        //elem[i-1].style.opacity="0";
        elem[j-1].style.display="none";
        //elem[elem.length-1].style.height="0";
    }
    //elem[i].style.opacity="1";
    elem[j].style.display="flex";
    j++;
    
    if(j==elem.length){
        j = 0;
        }
}


































