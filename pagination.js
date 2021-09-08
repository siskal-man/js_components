function div(val, by) {
    return (val - val % by) / by;
} // целочисленное деление

/* resize */
var gadgetType = null;
var customClass = ' col-1 ';

if (document.documentElement.scrollWidth >= 320 && document.documentElement.scrollWidth <= 768) {
    gadgetType = 'smarthphone';
    console.log('smarthphone');
    customClass = ' col-3 ';
}
if (document.documentElement.scrollWidth > 768 && document.documentElement.scrollWidth <= 1024) {
    gadgetType = 'tablet';
    console.log('tablet');
    customClass = ' col-2 ';
}
if (document.documentElement.scrollWidth > 1024) {
    gadgetType = 'PC';
    console.log('PC');
}
/*--------*/




var pagPrev = document.querySelector('.previous').querySelector('button'); // кнопка 'Предыдущие недели'
pagPrev.setAttribute('disabled', '');

var pagNext = document.querySelector('.next').querySelector('button'); // кнопка 'Следующие недели'
var currentPage = 0;
var startPage = 0;
var studentsCount = document.querySelector('#students-count').querySelectorAll('.row').length;


var weeksCountObj = document.querySelector('#weeks-count').querySelectorAll('.col-1');

var weeksCount = [];

for (var item = 0; item <= weeksCountObj.length + 1; item++) {
    weeksCount.push(weeksCountObj[item]);
}

weeksCount.pop();

/* input group */

var rowInputGroup = []; // строки с input'ами
var colInputGroup = []; // столбцы с input'ами

for (let index = 0; index < studentsCount; index++) {
    var rowInput = document.createElement('div');
    rowInput.classList = 'row w-100 m-0 py-2 border-bottom rowInput';
    rowInputGroup.push(rowInput);
    document.querySelector('#tableCol').appendChild(rowInput);
}

for (let index = 0; index < rowInputGroup.length; index++) {
    var temporaryArray = [];
    for (let index2 = 0; index2 < weeksCount.length; index2++) {
        var colInput = document.createElement('input');
        colInput.classList = 'col-1 text-center border';
        colInput.setAttribute('maxlength', '1');
        temporaryArray.push(colInput);
        rowInputGroup[index].appendChild(colInput);
    }
    colInputGroup.push(temporaryArray);
}

console.log(colInputGroup)

/*---------------------------------------------------------------------------------------------*/




var chapters = [];
var start = 0;




if (gadgetType == 'PC') {
    while (start <= weeksCountObj.length) {
        if (weeksCount.length == 0) {
            break;
        }
        if (weeksCount.length < 4) {
            chapters.push(weeksCount.splice(0));
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
    element.className = customClass + '  text-center border';
});







pagNext.addEventListener('click', function () {
    chapters[currentPage].forEach(element => {
        element.className = customClass + ' text-center border d-none';
    });

    currentPage++;

    if (currentPage > 0) {
        pagPrev.removeAttribute('disabled');
    }

    if (currentPage === chapters.length - 1) {
        chapters[currentPage].forEach(element => {
            element.className = customClass + ' text-center border';
        });

        pagNext.setAttribute('disabled', '');

    } else {
        chapters[currentPage].forEach(element => {
            element.className = customClass + ' text-center border';
        });
    }
});

pagPrev.addEventListener('click', function () {
    chapters[currentPage].forEach(element => {
        element.className = customClass + ' text-center border d-none';
    });

    currentPage--;

    if (currentPage < chapters.length - 1) {
        pagNext.removeAttribute('disabled');
    }


    if (currentPage === startPage) {
        chapters[currentPage].forEach(element => {
            element.className = customClass + ' text-center border';
        });

        pagPrev.setAttribute('disabled', '');

    } else {
        chapters[currentPage].forEach(element => {
            element.className = customClass + ' text-center border';
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
