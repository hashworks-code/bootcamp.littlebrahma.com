(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: 'Rubik-Medium';\n  src: url('Rubik-Medium.ttf'); }\n@font-face {\n  font-family: 'Heebo-Regular';\n  src: url('Heebo-Regular.ttf'); }\n@font-face {\n  font-family: 'Heebo-Medium';\n  src: url('Heebo-Medium.ttf'); }\n@media only screen and (min-width: 320px) {\n  .curriculam-inner {\n    padding: 0px 15px; }\n  .fade,\n  body,\n  .modal-open {\n    padding-right: 0px !important; }\n  .enroll-pop {\n    margin: 0px;\n    width: 286px !important;\n    height: 582px; }\n  .error-message {\n    color: red !important;\n    font-size: 13px !important;\n    font-weight: 500 !important;\n    font-family: 'Rubik-Medium' !important; }\n  .form-text {\n    position: relative; }\n  .error-wrapper {\n    position: absolute;\n    top: 64px; }\n  .navigator {\n    color: #636363;\n    line-height: 1.7;\n    padding: 0px !important; }\n  .progress-bar {\n    background-color: #48c43c !important;\n    border-radius: 10px !important; }\n  h1-size,\n  h2-size,\n  h3,\n  h4,\n  p {\n    margin: 0px;\n    padding: 0px; }\n  button {\n    outline: none !important; }\n  .enroller {\n    margin-top: 0px;\n    width: 100px;\n    height: 32px;\n    border-radius: 15px;\n    background-color: #ea1c49 !important;\n    color: white !important; }\n  .popup-button {\n    width: 109px;\n    height: 32px;\n    color: white;\n    border-radius: 15px;\n    background-color: #ea1c49; }\n  .nopadding {\n    padding: 0px; }\n  .svg-icon {\n    stroke: white;\n    width: 13px;\n    height: 13px; }\n  .nomargin {\n    margin: 0px; }\n  .hero {\n    font-size: 20px;\n    font-family: 'Rubik-Medium'; }\n  .h1-size {\n    font-size: 17px;\n    font-family: 'Rubik-Medium'; }\n  .h2-size {\n    font-size: 13px;\n    font-family: 'Rubik-Medium'; }\n  .b1-regular {\n    font-size: 12px;\n    font-family: 'Heebo-Regular'; }\n  .b2-medium {\n    font-size: 12px;\n    font-family: 'Heebo-Medium'; }\n  .b3-regular {\n    font-size: 10px;\n    font-family: 'Heebo-Regular'; }\n  .Label {\n    font-size: 14px;\n    font-family: 'Heebo-Medium'; }\n  .commonButton {\n    border: solid 2px #ea1c49;\n    background-color: #ea1c49;\n    border-radius: 25px;\n    font-size: 12px;\n    padding: 6px 12px;\n    font-family: 'Heebo-Medium';\n    color: #fff;\n    outline: none;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    font-weight: 500; }\n  .commonButton:hover {\n    border: solid 2px #333;\n    background-color: transparent;\n    color: #333; }\n  .commonButton--bw {\n    border: solid 2px #ea1c49;\n    background-color: #fff;\n    border-radius: 25px;\n    font-size: 12px;\n    padding: 6px 12px;\n    font-family: 'Heebo-Medium';\n    color: #ea1c49;\n    outline: none;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    font-weight: 500; }\n  .commonButton--bw:hover {\n    border: solid 2px #333;\n    background-color: transparent;\n    color: #333; }\n  .form-text__message .error-wrapper {\n    top: 78px; } }\n@media only screen and (min-width: 768px) {\n  .error-wrapper {\n    top: 64px; }\n  .enroll-pop {\n    width: 701px !important;\n    height: 633px; }\n  .enroll-btn {\n    width: 100px;\n    height: 32px;\n    border-radius: 15px;\n    background-color: #ea1c49;\n    color: white;\n    opacity: 0.8;\n    margin-top: 21px; }\n  .nav-pills > li.active > a {\n    color: #636363;\n    background-color: white; }\n  .scroll-wrapper {\n    width: 137px;\n    padding: 0px;\n    background-color: #ffffff; }\n  .popup-button {\n    width: 100px;\n    height: 32px;\n    line-height: 0 !important;\n    color: white !important;\n    border-radius: 15px;\n    background-color: #ea1c49 !important; }\n  .svg-icon {\n    width: 16px;\n    height: 16px; }\n  .hero {\n    font-size: 28px; }\n  .h1-size {\n    font-size: 24px; }\n  .h2-size {\n    font-size: 15px; }\n  .b1-regular {\n    font-size: 14px; }\n  .b2-medium {\n    font-size: 16px; }\n  .b3-regular {\n    font-size: 12px; }\n  .Label {\n    font-size: 17px; }\n  .navbar-inverse {\n    background-color: #ffffff;\n    border-color: #ffffff; }\n  .btn-primary:hover {\n    color: black;\n    background-color: #fff;\n    /* border-color: #204d74; */\n    border: none; }\n  .btn {\n    font-family: 'Heebo-Medium';\n    font-size: 14px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.29;\n    letter-spacing: normal;\n    color: #393939;\n    background-color: white; }\n  primary:active:focus,\n  .btn-primary:active:hover,\n  .open > .dropdown-toggle.btn-primary.focus,\n  .open > .dropdown-toggle.btn-primary:focus,\n  .open > .dropdown-toggle.btn-primary:hover {\n    color: black;\n    background-color: #fff;\n    /* border-color: #122b40; */\n    border: none; }\n  .btn:focus,\n  .btn:active {\n    outline: none !important;\n    box-shadow: none; }\n  .btn-primary {\n    color: black;\n    background-color: white;\n    border-color: white; }\n  .commonButton,\n  .commonButton--bw {\n    font-size: 14px; } }\n@media only screen and (min-width: 1024px) {\n  .enroller {\n    margin-top: 0px;\n    width: 130px;\n    height: 40px;\n    border-radius: 20px; }\n  .enroll-pop {\n    width: 845px !important; }\n  .popup-button {\n    width: 148px;\n    height: 40px;\n    border-radius: 28px; }\n  .svg-icon {\n    width: 20px;\n    height: 20px; }\n  .scroll-wrapper {\n    width: 165px; }\n  .hero {\n    font-size: 31px; }\n  .h1-size {\n    font-size: 28px; }\n  .h2-size {\n    font-size: 18px; }\n  .b1-regular {\n    font-size: 16px; }\n  .b2-medium {\n    font-size: 16px; }\n  .b3-regular {\n    font-size: 14px; }\n  .Label {\n    font-size: 20px; }\n  .btn {\n    font-size: 16px;\n    line-height: 1.88; }\n  .commonButton,\n  .commonButton--bw {\n    border-radius: 20px;\n    font-size: 17px;\n    padding: 7px 12px; } }\n@media only screen and (min-width: 1440px) {\n  .enroll-pop {\n    width: 965px !important; }\n  .popup-button {\n    width: 175px;\n    height: 56px;\n    border-radius: 28px; }\n  .hero {\n    font-size: 42px; }\n  .h1-size {\n    font-size: 31px; }\n  .h2-size {\n    font-size: 18px; }\n  .b1-regular {\n    font-size: 17px; }\n  .b2-medium {\n    font-size: 17px; }\n  .b3-regular {\n    font-size: 14px; }\n  .btn {\n    font-size: 17px;\n    line-height: 1.47; }\n  .enroller {\n    margin-top: 0px;\n    width: 160px;\n    height: 56px;\n    border-radius: 28px; }\n  .commonButton,\n  .commonButton--bw {\n    border-radius: 28px;\n    font-size: 17px;\n    padding: 8px 16px; } }\n@media screen and (min-width: 320px) {\n  .cards-row .card-set {\n    border-radius: 12px;\n    margin-top: 24px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.19);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22239%22 height%3D%22342%22 viewBox%3D%220 0 239 342%22%3E    %3Cdefs%3E        %3ClinearGradient id%3D%22a%22 x1%3D%2250%25%22 x2%3D%2250%25%22 y1%3D%220%25%22 y2%3D%22100%25%22%3E            %3Cstop offset%3D%220%25%22 stop-color%3D%22%23FAFAFD%22%2F%3E            %3Cstop offset%3D%22100%25%22 stop-color%3D%22%23F2F2FA%22%2F%3E        %3C%2FlinearGradient%3E        %3ClinearGradient id%3D%22b%22 x1%3D%2250%25%22 x2%3D%2250%25%22 y1%3D%220%25%22 y2%3D%22100%25%22%3E            %3Cstop offset%3D%220%25%22 stop-color%3D%22%23E0E0E0%22%2F%3E            %3Cstop offset%3D%22100%25%22 stop-color%3D%22%23DBDBF9%22%2F%3E        %3C%2FlinearGradient%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cpath fill%3D%22url(%23a)%22 d%3D%22M132.494.905h28.283L271 154.451 77.813 343.494H0l191.795-187.429L77.813.891z%22 opacity%3D%22.585%22 transform%3D%22translate(-72 -2)%22%2F%3E        %3Cpath fill%3D%22url(%23b)%22 d%3D%22M172.346.905h28.251L311 154.668l-193.274 185.5H40l191.883-183.901L117.726.89z%22 opacity%3D%22.11%22 transform%3D%22translate(-72 -2)%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n    width: 260px;\n    background-repeat: no-repeat;\n    padding-bottom: 41px; } }\n@media screen and (min-width: 768px) {\n  .cards-row .card-set {\n    height: 382px;\n    border-radius: 12px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22336%22 height%3D%22383%22 viewBox%3D%220 0 336 383%22%3E    %3Cdefs%3E        %3ClinearGradient id%3D%22a%22 x1%3D%2250%25%22 x2%3D%2250%25%22 y1%3D%220%25%22 y2%3D%22100%25%22%3E            %3Cstop offset%3D%220%25%22 stop-color%3D%22%23FAFAFD%22%2F%3E            %3Cstop offset%3D%22100%25%22 stop-color%3D%22%23F2F2FA%22%2F%3E        %3C%2FlinearGradient%3E        %3ClinearGradient id%3D%22b%22 x1%3D%2250%25%22 x2%3D%2250%25%22 y1%3D%220%25%22 y2%3D%22100%25%22%3E            %3Cstop offset%3D%220%25%22 stop-color%3D%22%23E0E0E0%22%2F%3E            %3Cstop offset%3D%22100%25%22 stop-color%3D%22%23DBDBF9%22%2F%3E        %3C%2FlinearGradient%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cpath fill%3D%22url(%23a)%22 d%3D%22M102.696.016h36.614L282 177.45 102.696 383H0l179.465-203.685L31.91 0z%22 opacity%3D%22.585%22%2F%3E        %3Cpath fill%3D%22url(%23b)%22 d%3D%22M156.395.016h36.595L336 178.684 174.8 383H67l166.516-202.458L85.644 0z%22 opacity%3D%22.11%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n    margin-top: 16px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.19);\n    width: 580px;\n    padding-bottom: 0px; } }\n@media screen and (min-width: 1024px) {\n  .cards-row .card-set {\n    height: 393px;\n    border-radius: 12px;\n    margin-top: 51px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.19);\n    width: 780px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22418%22 height%3D%22396%22 viewBox%3D%220 0 418 396%22%3E    %3Cdefs%3E        %3ClinearGradient id%3D%22a%22 x1%3D%2250%25%22 x2%3D%2250%25%22 y1%3D%220%25%22 y2%3D%22100%25%22%3E            %3Cstop offset%3D%220%25%22 stop-color%3D%22%23FAFAFD%22%2F%3E            %3Cstop offset%3D%22100%25%22 stop-color%3D%22%23F2F2FA%22%2F%3E        %3C%2FlinearGradient%3E        %3ClinearGradient id%3D%22b%22 x1%3D%2250%25%22 x2%3D%2250%25%22 y1%3D%220%25%22 y2%3D%22100%25%22%3E            %3Cstop offset%3D%220%25%22 stop-color%3D%22%23E0E0E0%22%2F%3E            %3Cstop offset%3D%22100%25%22 stop-color%3D%22%23DBDBF9%22%2F%3E        %3C%2FlinearGradient%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cpath fill%3D%22url(%23a)%22 d%3D%22M171.606.016h36.632L351 177.493 100.784 396H0l248.413-216.64L100.783 0z%22 opacity%3D%22.585%22%2F%3E        %3Cpath fill%3D%22url(%23b)%22 d%3D%22M238.414 3.016h36.592L418 176.14 167.671 385H67l248.528-207.059L167.67 3z%22 opacity%3D%22.11%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\"); } }\n@media screen and (min-width: 1440px) {\n  .cards-row .card-set {\n    height: 383px;\n    border-radius: 12px;\n    margin-top: 51px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.19);\n    width: 920px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22418%22 height%3D%22382%22 viewBox%3D%220 0 418 382%22%3E    %3Cdefs%3E        %3ClinearGradient id%3D%22a%22 x1%3D%2250%25%22 x2%3D%2250%25%22 y1%3D%220%25%22 y2%3D%22100%25%22%3E            %3Cstop offset%3D%220%25%22 stop-color%3D%22%23FAFAFD%22%2F%3E            %3Cstop offset%3D%22100%25%22 stop-color%3D%22%23F2F2FA%22%2F%3E        %3C%2FlinearGradient%3E        %3ClinearGradient id%3D%22b%22 x1%3D%2250%25%22 x2%3D%2250%25%22 y1%3D%220%25%22 y2%3D%22100%25%22%3E            %3Cstop offset%3D%220%25%22 stop-color%3D%22%23E0E0E0%22%2F%3E            %3Cstop offset%3D%22100%25%22 stop-color%3D%22%23DBDBF9%22%2F%3E        %3C%2FlinearGradient%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cpath fill%3D%22url(%23a)%22 d%3D%22M171.606.016h36.632L351 171.218 100.784 382H0l248.413-208.982L100.783 0z%22 opacity%3D%22.585%22%2F%3E        %3Cpath fill%3D%22url(%23b)%22 d%3D%22M238.414.016h36.592L418 173.14 167.671 382H67l248.528-207.059L167.67 0z%22 opacity%3D%22.11%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\"); } }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hashworks/Desktop/bootcamp/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map