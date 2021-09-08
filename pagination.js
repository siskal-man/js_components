function div(val, by) {
    return (val - val % by) / by;
} // целочисленное деление

/* resize */
var gadgetType = null;
var customClass=' col-1 ';

if (document.documentElement.scrollWidth >= 320 && document.documentElement.scrollWidth <= 768) {
    gadgetType = 'smarthphone';
    console.log('smarthphone'); 
    customClass=' col-3 ';
}
if (document.documentElement.scrollWidth > 768 && document.documentElement.scrollWidth <= 1024) {
    gadgetType = 'tablet';
    console.log('tablet');
    customClass=' col-2 ';
}
if (document.documentElement.scrollWidth > 1024) {
    gadgetType = 'PC';
    console.log('PC');
}
/*--------*/

/* input group */

var input =  document.createElement('input');
input.className = "col-1 text-center borde";
input.setAttribute('type', 'text');

/*--------*/


var pagPrev = document.querySelector('.previous').querySelector('button'); // кнопка 'Предыдущие недели'
pagPrev.setAttribute('disabled', '');

var pagNext = document.querySelector('.next').querySelector('button'); // кнопка 'Следующие недели'
var cols = document.querySelector('#weeks-count').querySelectorAll('.col-1');
var currentPage = 0;
var startPage = 0;

var weeksCountObj = document.querySelector('#weeks-count').querySelectorAll('.col-1');

var weeksCount = [];

for (var item = 0; item <= weeksCountObj.length + 1; item++) {
    weeksCount.push(weeksCountObj[item]);
}

weeksCount.pop();

var chapters = [];
var start = 0;

if (gadgetType == 'PC') {
    while (start <= weeksCountObj.length) {
        if (weeksCount.length == 0) {
            break;
        }
        if (weeksCount.length < 4) {
            chapters.push(weeksCount.splice(0, weeksCount.length));
        } else {
            chapters.push(weeksCount.splice(0, 12));
        }
        start++;
    }

}

if (gadgetType == 'tablet') {
    while (start <= weeksCountObj.length) {
        if (weeksCount.length == 0) {
            break;
        }
        if (weeksCount.length < 4) {
            chapters.push(weeksCount.splice(0, weeksCount.length));
        } else {
            chapters.push(weeksCount.splice(0, 6));
        }
        start++;
    }
}

if (gadgetType == 'smarthphone') {
    while (start <= weeksCountObj.length) {
        if (weeksCount.length == 0) {
            break;
        }
        if (weeksCount.length < 4) {
            chapters.push(weeksCount.splice(0, weeksCount.length));
        } else {
            chapters.push(weeksCount.splice(0, 4));
        }
        start++;
    }
}

chapters[chapters.length - 1].pop();

if (!chapters[chapters.length - 1]) {
    chapters.pop();
}

chapters[currentPage].forEach(element => {
    element.className = customClass+'  text-center border';
});


pagNext.addEventListener('click', function () {
    chapters[currentPage].forEach(element => {
        element.className = customClass+' text-center border d-none';
    });

    currentPage++;

    if (currentPage > 0) {
        pagPrev.removeAttribute('disabled');
    }


    if (currentPage === chapters.length - 1) {
        chapters[currentPage].forEach(element => {
            element.className = customClass+' text-center border';
        });

        pagNext.setAttribute('disabled', '');

    } else {
        chapters[currentPage].forEach(element => {
            element.className = customClass+' text-center border';
        });
    }
});

pagPrev.addEventListener('click', function () {
    chapters[currentPage].forEach(element => {
        element.className = customClass+' text-center border d-none';
    });

    currentPage--;

    if (currentPage < chapters.length - 1) {
        pagNext.removeAttribute('disabled');
    }


    if (currentPage === startPage) {
        chapters[currentPage].forEach(element => {
            element.className = customClass+' text-center border';
        });

        pagPrev.setAttribute('disabled', '');

    } else {
        chapters[currentPage].forEach(element => {
            element.className = customClass+' text-center border';
        });
    }
});

window.addEventListener('resize', event => {
    if (document.documentElement.scrollWidth >= 320 && document.documentElement.scrollWidth <= 768) {
        gadgetType = 'smarthphone';
        console.log('smarthphone');
    }
    if (document.documentElement.scrollWidth > 768 && document.documentElement.scrollWidth <= 1024) {
        gadgetType = 'tablet';
        console.log('tablet');
    }
    if (document.documentElement.scrollWidth > 1024) {
        gadgetType = 'PC';
        console.log('PC');
    }
});
