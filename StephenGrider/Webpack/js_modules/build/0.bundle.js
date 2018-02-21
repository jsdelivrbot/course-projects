webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import big from '../assets/big.jpeg';
exports.default = function () {
  // create an html element of type image and assign it to const image
  var image = document.createElement('img');

  // give image a src tag
  //image.src = 'http://lorempixel.com/400/400';
  image.src = _small2.default;

  // append image to the DOM
  document.body.appendChild(image);
};

//
// const bigImage = document.createElement('img');
// bigImage.src = big;
//
// document.body.appendChild(bigImage);


// This image_viewer only runs, it does not export code,
// so we can just import it this way
// Anything non js needs the extension ....  .css

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "img {\n  border: 10px solid black;\n}\n", ""]);

// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNzAK/9sAhAAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQyAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCADIAMgDASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAAAgMAAQQFBgcI/9oACAEBAAAAAHNY12rTp0btuzbqKSSDlz5MPzY2tbo0adOzbs26nSSQMeTLi+eNY1r9D9OvXs1b2lJS6zYcmTwJtZp9RhQ9+zVt0sacSoARix+EY093t8PBbp1cz5t9e7jGRSlAGTJ4o2Nbuu3adXiPj3rfe+p9FFKWpSU+PM2Na1z9DfPfHcleg/Q0WK1KWrypsM28DxHd56uAXOHV+kehVLUpQeZYbGMaCsfX3eD+QTb+ktlUtSwVwCYTGY/PeYdk8uhTfQfoiDAFSw4RsI/jPpdqDmPJ5DD737dJBWsQ4xkxlkZ2Xg/Gdf55s+2+usACqDjEZGR2ZWWDheC8l6/7bKGqoOSR2dkZWZnKWdyhqpXIsis7MrJOuxlyUMqpyru7KyOzhGuXdVQ1Vcy7K7s7srkl3KqoNT5opnQ27azchHRf1M3Evqel88qXmyM+WjLh2VkVnTGylrEYM6iOhVvdNejr7trevo1NmXNyOLh5/PlvNzde3dt19jqbXtIFlh8zyuR8maZmbTY42a4yNJaGRKB+en09HJOVdm3ac1ar38XnhjzZyu2pKqhy6GS6oKkqHcoyGpckuCFSVck//8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/2gAIAQIQAAAA6TDJoydc5jK6zNNzMZ3kHSTKb1yK3Mpd3iVWUvS8ZoiRLqQEFyU3I1CFd5RCCiRJC+hrUYxJbenQRzwH/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAgBAxAAAADnq1YFc9WlktjF0upLFc6vTrxzoOa6sjQmLdGbojNrSGs1lpoCXlVFpHEooQrQ0kzmwWkRE0Af/8QAIxAAAgEDBQADAQEAAAAAAAAAAQIDAAQHBQYREhMQFiAUFf/aAAgBAQABAgBaUrSmMo0bI0TwzJNDKhjX9SGQu0tOQAAFCiMIEqOoqiqIxNHJ+nqUu0rylQAAoULS0lR1FURRojEO4PwX9WeUy1IZSAAAogii0G9sEpShRojCRMrdxIZGkZjKWczVLQAACjT5Um1aRSlJUVbl3FNkbbevrIHEhkZzIz+rPK0hAAAAWoL6W4WkqIR1kzTy+zN1nLm293rIXLlmZmLM0hAAAAAUKEpKSg2p743FqEUnttDWxKXMhZmZmYsxAAAAAA3nb7c34+Vp8pvku80/R7SaUSQPoN3zySxYsWJIoUKFChSiWxl0L6VY6dzurH8qrUA0m279izMSSSSKFAChQqfXdQyfd5bgy/qGVbjWHuw4bZtmGLc8kkkkkihQoURNp9limXE8WIrjEUWIJsR3eKdX0MHFKdueeSSTRo0KFCloUAKBBBB3Dvhsj69vhq0/Udk7wDclixJbuSCCCCCCCCCCGqXQNUxxrWNJrbGlt27Fu/PJokUKBBBBDBg3YMHDE8yxIO3YsW7c9iQQeewYNyCDzzdqpJ7889ue3bsW7du/bt2DBgwcOJO/eOZ5/T07+hkL9/Tv6d/Tv6dw/cOHEnoJfT09PTv6enqX7+vp37tko5LhyXBkO23tb7ll3V95vMl22TIskLkUb0l3zLkuHJGkb6lu7nfc+QIcgPv58jNkwZK6kcdeoTy8vIReYiA8hCIfBovEwmERBOpSLbi29joI20+2YNrjacO1n2ZDsWyxbDiKHC0GGIMHDCAwmuFmwtJhRsIT4fTHWobCOzzCCigtMkss3+gm4od2We/YcmWeVoMqjJIyCu/Puzb0beP2O5124hvtSIEqR+S0AKAAVQATVvay2/Huk0s5uWuU1CXUG1JtVGqgrLZXsymcXhvP7P7Rf/6bahBrsuti7Sd71NZl1ybc0u4TrsuqSXpf4BnuPgklTXPNc89i/sXLc88/APPIoCjRArnmgfkn8cVzz//EAEQQAAEDAgMEBAsECAYDAAAAAAECAxEABAUSITFBUXEGEyBhECIjMDJCUoGRobEUFZLBJDRAQ0RjcvA1UGJzotGCk9L/2gAIAQEAAz8A8waIpRpXGia07cDwaeAfsungiidPPEmt5odiKipFSPMF50ISJJNMtMjrZLm+KFsQpMlPf2orcKk1u7U0Dt7fUXbTvsqpLg5imk2kKgrV6I/Psjo9hyHUpQp9wwgE6DvrHWrgLRfE+NJSUiDTPSHBmb9mElWjqJnIobRUCp7c+YuGQAh1QHOnbhzM6oqPYir68sGbu2SFs2oV1oHpCY15CKlVXPRu6cUhIetnI61kmJjeDuNWCU/4c/m4ZxFYf0kbc+y9Yh1sAqadABjiI2jzE+bgeDAsMvnLC6eUpxIIXlRmSNNhrDMTxRy4w2wVZtqPo5hlPJIGnxNZG6k0cFx+1usxDebK6OKToaBEg+fxm4wUJwVTgdC5dDSsqimDsrEMBbcssQt3LptJMBaiFoO8SaMHqsJ5FT9Y0o+SZtGx3IJ+prpFcIyNLZbJ9ZpmTWMvtPYi/Y3ZbUoqdeLJAk6kzFYPcMOnEMTds3h6HkCtJ5ka/KglwpCgoAwCNh8BzCjeYBh9wdq7dsnnGv7BaXCsz9qw4ri4gE1hD4h3DLNQ72E/9V0cUvMcKZnmY+E1Y4a3ksrVm3SdoQgCaSRBgg8awq4ZdxCyuGcOWkFSwvRk/wDzQQ8tIWlYSYCk7DWtFToSBqTAHfX3fhFpZ72GUtnmBr5/CrXP1+I2qCj0gXhI91YJZym2D12sb0pyprE1Ofotjasp/mSs1eJah/DGFue0lZSKxu6RktUMWYPrJGZVYjfLz3V9cvE+26TTzjeRTqigbATp4TiPSrD2IkdcHFck6mtPOkpOUwY0NdKMf6QvYfcOvLfQrypWqEIHHTSKakG/xNxXFLKI+ZmsIUPJX14k95Sass8rxV8t8A0AasVfq2Jvt/1oCqtQjx8WdUviGQBV0FeQxNlSP5iCDWMssOLZubV8pEhCSQVdwkRWIYDdIt8RY6lxSQ4kSCCOYo1n6VlZUAW2FKAPmhw7Aoce1jWC4w+y3gxXYtkQ6tChPEyDEVjf3+cQS6QxP6mTKMtdHuk2Eli/w66ZukjyLyQlfVH4iRSQ4QkymdCRFXOG3Sbm0fUy6nYpJik9I7Ms3EJv2R44GxY9oef7uzO2sGuFFT2E2S1HaSwmT8q6P4gCWWFWbvtMGsZw0ldpF8yN6NFD/wAauLZwofZcbWNziSDV690rZfYSoMspUXlboIIA/Yu6hwoUKFCmHhDrLax/qSDSGk5WkJQjgkQO2eNT5y4W2n7M/wBWoLSToDKZEjXumpojs99d/Z7/ADuU1m/yW3DhCcPcKNxLoBrXxcN073qbJPXYeof0uzWELTLqbls8CkH6GsEuJ/S+rI3OpIrCLlBWjEWIBg51ZfrWDMtlSsSYIHsqzH4CsBAB+3H/ANSqt0O5bSyU8gestWWaXB+04eCd2RcVhyh5W1uUngINYOXQkpugPayCKwJbch9Q8WdUH4VgSGVrF0pRT6gQZPxqT5DDtJ2rd3copUHrcOBMaZXYq1xC4Rb3DJtnVmE65kk891MstlbrqUNjapSoFYLbvZA849xU0mRWCtAlC3njwSiPrFYK62VLW8yR6qkSflNYElMh91fclo1hKQMrN0qdvigRVrusHjzWKw/qgTaXIXw0j4zS6I2UrhSuBpUbKVxpz+zSqI3ij7Q+Nd9T6wogRmNAnbXA0Y20qdtOkBOYxwo8aO6lcRRmJFDesA1yrXaI41cPAlqVBO0gGrRhNyi46zrAkdVKSNeBH97KtMVbSLe4LbwQFOpXokHgDUqWlNw2op2wZpTYBLoEkbQRvrrnkMouGs6jAkgD3knSgTAumSZIgEEiOInQd50pp17qhdthXeAPzpDRh2+aScs7KaWgKGJMQTzIp26UUoxBnQ65hEDcaW6TGJMaHLJQQJpSmusXitqimHXcgxhhR4paJFW2mfEQf6UirD1r5f4RWEp23rx5JTWBTKrq4J5JrAVfxN1/xrAlaC+fnkmsIIkX7/4U1hTK3B94O+InNokGsGuLhbVvfvuLSrLolOum0Vh9g+40t98ZCBKkgAz3xGyDVg4w46l17IiJPiga95ArKCAHCnZuH50wlR0UZ4KGnzq3mQogcCtO341bSCpTY4pLyRPvq1GQh1s8fLbvhVjsdxBtAOu0q+lYcZ6rEGtuhUTs79KwVLBm7SpZIMJzQI5jUH+zWCLBQb1xlCkgKhBUAQd3i9w4b6wC2UvLduLzoIDeRYg8dEg/OsMt2mQt9xxaU+n1WUiCSNidvHnVogZFSoKVK8icoI5RWBNN9Utq7gkkqyia6NlCU5rzmpoV0cMRcOmf5ddHT/GKHNs10fUJF6PwGsAift6fwGujyiP06d4ISqujMibhCj/tExXRy5ZUUXTAyHNChlk1gFzcdSH7X0gEqGkRp/fdIoIV1zASLklY8jcIKTvJIGpHCfnT12UPqS0u5klSjkhW3dB2CKuEF7qlFJuE5VgOgaEzFImOtV7qQo+Ksn360lMyowO+mfaJPM1b74Hvq3AjMn8RpmNnzNMbMvypg93uNW4MTHMVbgavJA5CkNBKs8hWwhI/7pFw0VNLKhEnTQVapcyOv9SsaEb6t0GU3X/E0AoZHm3OYIFP5pCGFcs1XO5hudugJ/Kn8pH2VueRqCT1SgRtgKoKVACgN2h1+NJOhKpHeKQk6qII400fXTppsNBMkvROzxjRGwkUsbTQchp5Ic3Catk2jqwSlaYhPGa7p5mnRonTlpT59c0+P3qvjVwIIfJ37auR+9NXMQF/KkvhHXMhRQIEkmBw+tJZYUxkKWlbUpUYNMXLy13CrlS1etnk/OrR30b55HNM1hjKQVXL6uOV3LPvgx8KwZog/Zrpc7Cq7n6JFYSGkj7qEpVOYvlRisGatSthPlS7CQoHLl4k5tOUUMxHU2ye9KCY95P5U8VAJdOSNkBP0FEJhSnl92cgfWiokhhsHiZP1p5e8DkIok6nwwZFB3KdQY112mpqO3w7BjaaUDoTRNE7T5mTWnYjsg0PBu7QoeD/xAAfEQADAQACAgMBAAAAAAAAAAAAARESAiAQIQMTMDH/2gAIAQIBAT8AfS/m3C+WJlL25KiUH4nr9J+kZliUL2pRMpWJsrQ/Z/OtL1rQvlY+VKUpe974ZlkZGYZlj4s+tjTRlmWZZllKUpTRorPZWVmilKXpTTNcjXIrKykMGURGEYQ/jRgyZMIi8ce77f/EAB0RAAMAAgMBAQAAAAAAAAAAAAABERASAiAhMDH/2gAIAQMBAT8AX1WZmE+C8GxKkP0aIQmJ0SOKNUlXi4fxo2TE7JdPH3nSEIaoSmYTEITpCdaiopUbo3QuaZui0qKjdG6xMQhqzUiPDwiIQhCEzEa8TTiacSIaJilKUpsymxsVl+//2Q=="

/***/ }
]);