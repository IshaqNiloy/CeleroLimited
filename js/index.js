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
          // console.log($(this).scrollTop());
            // do stuff when window `.scrollTop()` > 75
        
            var teamCapabilitiesLeftSection = $(".team-capabilities-left-section").offset().top - 200;
            
            var teamCapabilitiesRightSection = $(".team-capabilities-right-section").offset().top;
            
            if ($(this).scrollTop() > teamCapabilitiesLeftSection) {
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

//shows font awesome icons on the images
var fontAwesomeIconsDiv = document.getElementsByClassName('fontawesome-icons');

document.getElementsByClassName('founder-img-block')[0].onmouseover = function() {
    fontAwesomeIconsDiv[0].style.opacity = '1';
    fontAwesomeIconsDiv[0].style.bottom = '70px';
}

document.getElementsByClassName('founder-img-block')[0].onmouseout = function() {
    fontAwesomeIconsDiv[0].style.opacity = '0';
    fontAwesomeIconsDiv[0].style.bottom = '50px';
}

document.getElementsByClassName('technology-partner-img-block')[0].onmouseover = function() {
    fontAwesomeIconsDiv[1].style.opacity = '1';
    fontAwesomeIconsDiv[1].style.bottom = '70px';
}

document.getElementsByClassName('technology-partner-img-block')[0].onmouseout = function() {
    fontAwesomeIconsDiv[1].style.opacity = '0';
    fontAwesomeIconsDiv[1].style.bottom = '50px';
}

document.getElementsByClassName('logistics-partner-img-block')[0].onmouseover = function() {
    fontAwesomeIconsDiv[2].style.opacity = '1';
    fontAwesomeIconsDiv[2].style.bottom = '70px';
}

document.getElementsByClassName('logistics-partner-img-block')[0].onmouseout = function() {
    fontAwesomeIconsDiv[2].style.opacity = '0';
    fontAwesomeIconsDiv[2].style.bottom = '50px';
}
                
//end
                
//slider

var i = 0;
var m = 0;
setInterval(slider, 3000);

function slider() {
    const iconDict = {
        "group 1": ["images/icons/mfs.png", "images/icons/tie.png", "images/icons/distribution.png"],
        "group 2": ["images/icons/wireless_to_cashless.png", "images/icons/team.png", "images/icons/telecom.png"],
        "group 3": ["images/icons/tech.png", "images/icons/app.png", "images/icons/gis.png"],
    };
    
    const paraDict = {
        "group 1": ["Establishing 2 MFS companies from scratch", "Strong tie with existing partners", "Own distribution business"],
        "group 2": ["20+yrs Experience from wireless to cash less", "Team experience in MFS/ Telecom/FMCG", "Partnership with Fis/ Telecom / MFS"],
        "group 3": ["Association with global tech partners", "ERP & Apps(KIU)", "GIS platform (ESRI)"],
    };
    
    
    const elem = document.getElementsByClassName("slider-card-group");
    const teamCapabilitiesIcon = document.getElementsByClassName("team-capabilities-icon");
    const teamCapabilitiesPara = document.getElementsByClassName("team-capabilities-para"); 
    const keysArr = Object.keys(iconDict);
    
    
    for(var n = 0; n < 3; n++){
        teamCapabilitiesIcon[n].src = iconDict[keysArr[m]][n];
        teamCapabilitiesPara[n].innerHTML = paraDict[keysArr[m]][n];
    }
    
    m++;
    
    if(m > 2) {
        m = 0;
    }
    
    if(i==0) {
        elem[elem.length-1].style.opacity="0";
        //elem[elem.length-1].style.display="none";
    }else {
        elem[i-1].style.opacity="0";
        //elem[i-1].style.display="none";
    }
    elem[i].style.opacity="1";
    //elem[i].style.webkitTransition = 'opacity 1s';
    //elem[i].style.mozTransition = 'opacity 1s';
    //elem[i].style.display="flex";
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


































