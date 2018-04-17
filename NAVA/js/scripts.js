/* global document, window, setInterval, clearInterval */
                                      /* start counter up section */
var id1 = document.querySelector('#nm1'), id3 = document.querySelector('#nm3'), id4 = document.querySelector('#nm4'), id2 = document.querySelector('#nm2'), i = 0, value1 = parseInt(id1.textContent), value2 = parseInt(id2.textContent), value3 = parseInt(id3.textContent), value4 = parseInt(id4.textContent);
function countdown(id, value1, speed) {
	'use strict';
	/*console.log(countaato);*/
	id.textContent = 0;
    var countaato = value1, cc = setInterval(function () {
		id.textContent = parseInt(id.textContent) + i;
		i = i + 1;
		if (id.textContent > value1) {
			clearInterval(cc);
			i = 0;
			id.textContent = countaato;
		}
	}, speed);
}
countdown(id1, value1, 150);
countdown(id2, value2, 100);
countdown(id3, value3, 15);
countdown(id4, value4, 10);
                                    /* end counter  up section */
                                    /* start focus on input and blur function  for 2 inputs    */
var elem = document.querySelector('.findingboat input'),
	elem2 = document.querySelector('.bottom2 input');
function focusandblur(element) {
	'use strict';
	var elemm = element, text = elemm.getAttribute('placeholder');
	elemm.onfocus = function () {
		this.setAttribute('placeholder', ' ');
	};
	elemm.onblur = function () {
		this.setAttribute('placeholder', text);
	};
}
focusandblur(elem);
focusandblur(elem2);
document.getElementById('signup-BTN').onclick = function () {
	'use strict';
	window.location.href = './html/Signup-Form.html';
};
document.getElementById('findaboat-btn').onclick = function () {
	'use strict';
	window.location.href = './html/Signup-Form.html';
};
document.getElementById('makemoney-btn').onclick = function () {
	'use strict';
	window.location.href = './html/Signup-Form.html';
};