/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-owl-carousel */ "./node_modules/react-owl-carousel/umd/OwlCarousel.js");
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



// import { select } from "@wordpress/data";







/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */

const TestimonialPosts = ({
  resolved,
  items,
  attributes
}) => {
  if (!resolved) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null);
  }
  if (items.length === 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No post found");
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default()), {
    className: "owl-theme",
    loop: true,
    margin: 20,
    dots: attributes.dots,
    autoplay: attributes.autoplay,
    autoplayTimeout: attributes.autoplaySpeed,
    responsive: {
      0: {
        items: attributes.sliderToShowOnMobile,
        nav: false
      },
      600: {
        items: attributes.sliderToShowOnTablet,
        nav: false
      },
      1000: {
        items: attributes.slidesToShow,
        nav: false
      }
    }
  }, items.map((el, elIndex) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "testimonial",
    key: elIndex
  }, el?._embedded['wp:featuredmedia'][0]?.source_url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "testimonial_img"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "img_client"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: el?._embedded['wp:featuredmedia'][0]?.source_url,
    alt: el?._embedded['wp:featuredmedia'][0]?.['alt-text'],
    img: "img-fluid"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "testimonial_text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, dompurify__WEBPACK_IMPORTED_MODULE_6___default().sanitize(el.content.rendered))), el?.meta?.testimonial_client_name && el?.meta?.testimonial_client_name.trim().length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "testimonial_brand_name"
  }, el?.meta?.testimonial_client_name), el?.meta?.testimonial_client_designation && el?.meta?.testimonial_client_designation.trim().length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "testimonial_sub_name"
  }, el?.meta?.testimonial_client_designation))));
};
function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const posts = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityRecords)("postType", "testimonial", {
    per_page: -1,
    '_embed': true
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings", "owl-testimonial-carousel")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "owl-testimonial-carousel-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slides To Show", "owl-testimonial-carousel")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    type: "number",
    value: attributes.slidesToShow,
    onChange: value => {
      setAttributes({
        slidesToShow: parseInt(value)
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slides To Show On Tablet", "owl-testimonial-carousel")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    type: "number",
    value: attributes.sliderToShowOnTablet,
    onChange: value => {
      setAttributes({
        sliderToShowOnTablet: parseInt(value)
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slides To Show On Mobile", "owl-testimonial-carousel")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    type: "number",
    value: attributes.sliderToShowOnMobile,
    onChange: value => {
      setAttributes({
        sliderToShowOnMobile: parseInt(value)
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Speed", "owl-testimonial-carousel")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    type: "number",
    value: attributes.speed,
    onChange: value => {
      setAttributes({
        speed: parseInt(value)
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dots", "owl-testimonial-carousel"),
    value: attributes.dots,
    options: [{
      label: "Enable",
      value: true
    }, {
      label: "Disable",
      value: false
    }],
    onChange: value => setAttributes({
      dots: value === "true" ? true : false
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Autoplay", "owl-testimonial-carousel"),
    value: attributes.autoplay,
    options: [{
      label: "Enable",
      value: true
    }, {
      label: "Disable",
      value: false
    }],
    onChange: value => setAttributes({
      autoplay: value === "true" ? true : false
    })
  })), attributes.autoplay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Autoplay Speed", "owl-testimonial-carousel")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    type: "number",
    value: attributes.autoplaySpeed,
    onChange: value => setAttributes({
      autoplaySpeed: value
    })
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TestimonialPosts, {
    resolved: posts.hasResolved,
    items: posts.records,
    attributes: attributes
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */


const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: () => null
});

/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/***/ (function(module) {

/*! @license DOMPurify 3.0.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.4/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  const {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor
  } = Object;
  let {
    freeze,
    seal,
    create
  } = Object; // eslint-disable-line import/no-mutable-exports

  let {
    apply,
    construct
  } = typeof Reflect !== 'undefined' && Reflect;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return new Func(...args);
    };
  }

  const arrayForEach = unapply(Array.prototype.forEach);
  const arrayPop = unapply(Array.prototype.pop);
  const arrayPush = unapply(Array.prototype.push);
  const stringToLowerCase = unapply(String.prototype.toLowerCase);
  const stringToString = unapply(String.prototype.toString);
  const stringMatch = unapply(String.prototype.match);
  const stringReplace = unapply(String.prototype.replace);
  const stringIndexOf = unapply(String.prototype.indexOf);
  const stringTrim = unapply(String.prototype.trim);
  const regExpTest = unapply(RegExp.prototype.test);
  const typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    var _transformCaseFunc;

    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;

    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    let l = array.length;

    while (l--) {
      let element = array[l];

      if (typeof element === 'string') {
        const lcElement = transformCaseFunc(element);

        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    const newObject = create(null);

    for (const [property, value] of entries(object)) {
      newObject[property] = value;
    }

    return newObject;
  }
  /* This method automatically checks if the prop is function
   * or getter and behaves accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      const desc = getOwnPropertyDescriptor(object, prop);

      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  const text = freeze(['#text']);

  const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  const DOCTYPE_NAME = seal(/^html$/i);

  var EXPRESSIONS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    ERB_EXPR: ERB_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR,
    DATA_ATTR: DATA_ATTR,
    ARIA_ATTR: ARIA_ATTR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    DOCTYPE_NAME: DOCTYPE_NAME
  });

  const getGlobal = () => typeof window === 'undefined' ? null : window;
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {HTMLScriptElement} purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */


  const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.


    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';

    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }

    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML(html) {
          return html;
        },

        createScriptURL(scriptUrl) {
          return scriptUrl;
        }

      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    const DOMPurify = root => createDOMPurify(root);
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */


    DOMPurify.version = '3.0.4';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }

    const originalDocument = window.document;
    const currentScript = originalDocument.currentScript;
    let {
      document
    } = window;
    const {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes
    } = window;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      const template = document.createElement('template');

      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    let trustedTypesPolicy;
    let emptyHTML = '';
    const {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName
    } = document;
    const {
      importNode
    } = originalDocument;
    let hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const {
      MUSTACHE_EXPR,
      ERB_EXPR,
      TMPLIT_EXPR,
      DATA_ATTR,
      ARIA_ATTR,
      IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE
    } = EXPRESSIONS;
    let {
      IS_ALLOWED_URI: IS_ALLOWED_URI$1
    } = EXPRESSIONS;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
    /* Allowed attribute names */

    let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    let CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    let FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    let FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    let ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    let ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    let ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

    let ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    let SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    let WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    let SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    let FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    let RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    let RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    let RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    let SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    let KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    let IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    let USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    let PARSER_MEDIA_TYPE;
    const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    let CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    const formElement = document.createElement('form');

    const isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity


    const _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */


      if (!cfg || typeof cfg !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */


      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */


      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [...text]);
        ALLOWED_ATTR = [];

        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */


      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */


      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }

      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }

        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        } // Overwrite existing TrustedTypes policy.


        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY; // Sign local variables required by `sanitize`.

        emptyHTML = trustedTypesPolicy.createHTML('');
      } else {
        // Uninitialized policy, attempt to initialize the internal dompurify policy.
        if (trustedTypesPolicy === undefined) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
        } // If creating the internal policy succeeded sign internal variables.


        if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
          emptyHTML = trustedTypesPolicy.createHTML('');
        }
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.


      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    const HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    const ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    const ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    const _checkValidNamespace = function _checkValidNamespace(element) {
      let parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }

      const tagName = stringToLowerCase(element.tagName);
      const parentTagName = stringToLowerCase(parent.tagName);

      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.


        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.


        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points


        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.


        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace


        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces


      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.


      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */


    const _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });

      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        node.remove();
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */


    const _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */


    const _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      let doc;
      let leadingWhitespace;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        const matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */


      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);

        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }

      const body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */


      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */


    const _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */


    const _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */


    const _isNode = function _isNode(object) {
      return typeof Node === 'object' ? object instanceof Node : object && typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */


    const _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], hook => {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */


    const _sanitizeElements = function _sanitizeElements(currentNode) {
      let content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */


      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Now let's check the element's type and name */


      const tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */


      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Remove element if anything forbids its presence */


      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */


        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          const parentNode = getParentNode(currentNode) || currentNode.parentNode;
          const childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            const childCount = childNodes.length;

            for (let i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);

        return true;
      }
      /* Check whether element has a valid namespace */


      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Make sure that older browsers don't get fallback-tag mXSS */


      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Sanitize element content to be template-safe */


      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR, ' ');
        content = stringReplace(content, ERB_EXPR, ' ');
        content = stringReplace(content, TMPLIT_EXPR, ' ');

        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity


    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */

      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if (value) {
        return false;
      } else ;

      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */


    const _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */


    const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      let attr;
      let value;
      let lcName;
      let l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);

      const {
        attributes
      } = currentNode;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      const hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        const {
          name,
          namespaceURI
        } = attr;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */


        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */


        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */


        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);

          continue;
        }
        /* Sanitize attribute content to be template-safe */


        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR, ' ');
          value = stringReplace(value, ERB_EXPR, ' ');
          value = stringReplace(value, TMPLIT_EXPR, ' ');
        }
        /* Is `value` valid for this attribute? */


        const lcTag = transformCaseFunc(currentNode.nodeName);

        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */


        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */


        if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }

              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */


        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */


    const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      let shadowNode;

      const shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */


      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */


        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */


        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity


    DOMPurify.sanitize = function (dirty) {
      let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let body;
      let importedNode;
      let currentNode;
      let returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;

      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */


      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();

          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }
      /* Return dirty HTML if DOMPurify cannot run */


      if (!DOMPurify.isSupported) {
        return dirty;
      }
      /* Assign config vars */


      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */


      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          const tagName = transformCaseFunc(dirty.nodeName);

          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);

        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */


        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */


      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */


      const nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */


      while (currentNode = nodeIterator.nextNode()) {
        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */


        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(currentNode);
      }
      /* If we sanitized `dirty` in-place, return it. */


      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */


      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */


      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */


    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);

      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */


    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */


    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      const lcTag = transformCaseFunc(tag);
      const lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */


    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */


    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */


    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */


    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/owl.carousel/dist/assets/owl.carousel.css":
/*!****************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.carousel.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-owl-carousel/umd/OwlCarousel.js":
/*!************************************************************!*\
  !*** ./node_modules/react-owl-carousel/umd/OwlCarousel.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
     true ? module.exports = factory(__webpack_require__(/*! react */ "react")) :
    0;
}(this, (function (React) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    /**
     * Owl Carousel v2.3.4
     * Copyright 2013-2018 David Deutsch
     * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
     */
    (function($, window, document, undefined) {

    	/**
    	 * Creates a carousel.
    	 * @class The Owl Carousel.
    	 * @public
    	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
    	 * @param {Object} [options] - The options
    	 */
    	function Owl(element, options) {

    		/**
    		 * Current settings for the carousel.
    		 * @public
    		 */
    		this.settings = null;

    		/**
    		 * Current options set by the caller including defaults.
    		 * @public
    		 */
    		this.options = $.extend({}, Owl.Defaults, options);

    		/**
    		 * Plugin element.
    		 * @public
    		 */
    		this.$element = $(element);

    		/**
    		 * Proxied event handlers.
    		 * @protected
    		 */
    		this._handlers = {};

    		/**
    		 * References to the running plugins of this carousel.
    		 * @protected
    		 */
    		this._plugins = {};

    		/**
    		 * Currently suppressed events to prevent them from being retriggered.
    		 * @protected
    		 */
    		this._supress = {};

    		/**
    		 * Absolute current position.
    		 * @protected
    		 */
    		this._current = null;

    		/**
    		 * Animation speed in milliseconds.
    		 * @protected
    		 */
    		this._speed = null;

    		/**
    		 * Coordinates of all items in pixel.
    		 * @todo The name of this member is missleading.
    		 * @protected
    		 */
    		this._coordinates = [];

    		/**
    		 * Current breakpoint.
    		 * @todo Real media queries would be nice.
    		 * @protected
    		 */
    		this._breakpoint = null;

    		/**
    		 * Current width of the plugin element.
    		 */
    		this._width = null;

    		/**
    		 * All real items.
    		 * @protected
    		 */
    		this._items = [];

    		/**
    		 * All cloned items.
    		 * @protected
    		 */
    		this._clones = [];

    		/**
    		 * Merge values of all items.
    		 * @todo Maybe this could be part of a plugin.
    		 * @protected
    		 */
    		this._mergers = [];

    		/**
    		 * Widths of all items.
    		 */
    		this._widths = [];

    		/**
    		 * Invalidated parts within the update process.
    		 * @protected
    		 */
    		this._invalidated = {};

    		/**
    		 * Ordered list of workers for the update process.
    		 * @protected
    		 */
    		this._pipe = [];

    		/**
    		 * Current state information for the drag operation.
    		 * @todo #261
    		 * @protected
    		 */
    		this._drag = {
    			time: null,
    			target: null,
    			pointer: null,
    			stage: {
    				start: null,
    				current: null
    			},
    			direction: null
    		};

    		/**
    		 * Current state information and their tags.
    		 * @type {Object}
    		 * @protected
    		 */
    		this._states = {
    			current: {},
    			tags: {
    				'initializing': [ 'busy' ],
    				'animating': [ 'busy' ],
    				'dragging': [ 'interacting' ]
    			}
    		};

    		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
    			this._handlers[handler] = $.proxy(this[handler], this);
    		}, this));

    		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
    			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
    				= new plugin(this);
    		}, this));

    		$.each(Owl.Workers, $.proxy(function(priority, worker) {
    			this._pipe.push({
    				'filter': worker.filter,
    				'run': $.proxy(worker.run, this)
    			});
    		}, this));

    		this.setup();
    		this.initialize();
    	}

    	/**
    	 * Default options for the carousel.
    	 * @public
    	 */
    	Owl.Defaults = {
    		items: 3,
    		loop: false,
    		center: false,
    		rewind: false,
    		checkVisibility: true,

    		mouseDrag: true,
    		touchDrag: true,
    		pullDrag: true,
    		freeDrag: false,

    		margin: 0,
    		stagePadding: 0,

    		merge: false,
    		mergeFit: true,
    		autoWidth: false,

    		startPosition: 0,
    		rtl: false,

    		smartSpeed: 250,
    		fluidSpeed: false,
    		dragEndSpeed: false,

    		responsive: {},
    		responsiveRefreshRate: 200,
    		responsiveBaseElement: window,

    		fallbackEasing: 'swing',
    		slideTransition: '',

    		info: false,

    		nestedItemSelector: false,
    		itemElement: 'div',
    		stageElement: 'div',

    		refreshClass: 'owl-refresh',
    		loadedClass: 'owl-loaded',
    		loadingClass: 'owl-loading',
    		rtlClass: 'owl-rtl',
    		responsiveClass: 'owl-responsive',
    		dragClass: 'owl-drag',
    		itemClass: 'owl-item',
    		stageClass: 'owl-stage',
    		stageOuterClass: 'owl-stage-outer',
    		grabClass: 'owl-grab'
    	};

    	/**
    	 * Enumeration for width.
    	 * @public
    	 * @readonly
    	 * @enum {String}
    	 */
    	Owl.Width = {
    		Default: 'default',
    		Inner: 'inner',
    		Outer: 'outer'
    	};

    	/**
    	 * Enumeration for types.
    	 * @public
    	 * @readonly
    	 * @enum {String}
    	 */
    	Owl.Type = {
    		Event: 'event',
    		State: 'state'
    	};

    	/**
    	 * Contains all registered plugins.
    	 * @public
    	 */
    	Owl.Plugins = {};

    	/**
    	 * List of workers involved in the update process.
    	 */
    	Owl.Workers = [ {
    		filter: [ 'width', 'settings' ],
    		run: function() {
    			this._width = this.$element.width();
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			cache.current = this._items && this._items[this.relative(this._current)];
    		}
    	}, {
    		filter: [ 'items', 'settings' ],
    		run: function() {
    			this.$stage.children('.cloned').remove();
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var margin = this.settings.margin || '',
    				grid = !this.settings.autoWidth,
    				rtl = this.settings.rtl,
    				css = {
    					'width': 'auto',
    					'margin-left': rtl ? margin : '',
    					'margin-right': rtl ? '' : margin
    				};

    			!grid && this.$stage.children().css(css);

    			cache.css = css;
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
    				merge = null,
    				iterator = this._items.length,
    				grid = !this.settings.autoWidth,
    				widths = [];

    			cache.items = {
    				merge: false,
    				width: width
    			};

    			while (iterator--) {
    				merge = this._mergers[iterator];
    				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

    				cache.items.merge = merge > 1 || cache.items.merge;

    				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
    			}

    			this._widths = widths;
    		}
    	}, {
    		filter: [ 'items', 'settings' ],
    		run: function() {
    			var clones = [],
    				items = this._items,
    				settings = this.settings,
    				// TODO: Should be computed from number of min width items in stage
    				view = Math.max(settings.items * 2, 4),
    				size = Math.ceil(items.length / 2) * 2,
    				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
    				append = '',
    				prepend = '';

    			repeat /= 2;

    			while (repeat > 0) {
    				// Switch to only using appended clones
    				clones.push(this.normalize(clones.length / 2, true));
    				append = append + items[clones[clones.length - 1]][0].outerHTML;
    				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
    				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
    				repeat -= 1;
    			}

    			this._clones = clones;

    			$(append).addClass('cloned').appendTo(this.$stage);
    			$(prepend).addClass('cloned').prependTo(this.$stage);
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function() {
    			var rtl = this.settings.rtl ? 1 : -1,
    				size = this._clones.length + this._items.length,
    				iterator = -1,
    				previous = 0,
    				current = 0,
    				coordinates = [];

    			while (++iterator < size) {
    				previous = coordinates[iterator - 1] || 0;
    				current = this._widths[this.relative(iterator)] + this.settings.margin;
    				coordinates.push(previous + current * rtl);
    			}

    			this._coordinates = coordinates;
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function() {
    			var padding = this.settings.stagePadding,
    				coordinates = this._coordinates,
    				css = {
    					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
    					'padding-left': padding || '',
    					'padding-right': padding || ''
    				};

    			this.$stage.css(css);
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var iterator = this._coordinates.length,
    				grid = !this.settings.autoWidth,
    				items = this.$stage.children();

    			if (grid && cache.items.merge) {
    				while (iterator--) {
    					cache.css.width = this._widths[this.relative(iterator)];
    					items.eq(iterator).css(cache.css);
    				}
    			} else if (grid) {
    				cache.css.width = cache.items.width;
    				items.css(cache.css);
    			}
    		}
    	}, {
    		filter: [ 'items' ],
    		run: function() {
    			this._coordinates.length < 1 && this.$stage.removeAttr('style');
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
    			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
    			this.reset(cache.current);
    		}
    	}, {
    		filter: [ 'position' ],
    		run: function() {
    			this.animate(this.coordinates(this._current));
    		}
    	}, {
    		filter: [ 'width', 'position', 'items', 'settings' ],
    		run: function() {
    			var rtl = this.settings.rtl ? 1 : -1,
    				padding = this.settings.stagePadding * 2,
    				begin = this.coordinates(this.current()) + padding,
    				end = begin + this.width() * rtl,
    				inner, outer, matches = [], i, n;

    			for (i = 0, n = this._coordinates.length; i < n; i++) {
    				inner = this._coordinates[i - 1] || 0;
    				outer = Math.abs(this._coordinates[i]) + padding * rtl;

    				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
    					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
    					matches.push(i);
    				}
    			}

    			this.$stage.children('.active').removeClass('active');
    			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

    			this.$stage.children('.center').removeClass('center');
    			if (this.settings.center) {
    				this.$stage.children().eq(this.current()).addClass('center');
    			}
    		}
    	} ];

    	/**
    	 * Create the stage DOM element
    	 */
    	Owl.prototype.initializeStage = function() {
    		this.$stage = this.$element.find('.' + this.settings.stageClass);

    		// if the stage is already in the DOM, grab it and skip stage initialization
    		if (this.$stage.length) {
    			return;
    		}

    		this.$element.addClass(this.options.loadingClass);

    		// create stage
    		this.$stage = $('<' + this.settings.stageElement + '>', {
    			"class": this.settings.stageClass
    		}).wrap( $( '<div/>', {
    			"class": this.settings.stageOuterClass
    		}));

    		// append stage
    		this.$element.append(this.$stage.parent());
    	};

    	/**
    	 * Create item DOM elements
    	 */
    	Owl.prototype.initializeItems = function() {
    		var $items = this.$element.find('.owl-item');

    		// if the items are already in the DOM, grab them and skip item initialization
    		if ($items.length) {
    			this._items = $items.get().map(function(item) {
    				return $(item);
    			});

    			this._mergers = this._items.map(function() {
    				return 1;
    			});

    			this.refresh();

    			return;
    		}

    		// append content
    		this.replace(this.$element.children().not(this.$stage.parent()));

    		// check visibility
    		if (this.isVisible()) {
    			// update view
    			this.refresh();
    		} else {
    			// invalidate width
    			this.invalidate('width');
    		}

    		this.$element
    			.removeClass(this.options.loadingClass)
    			.addClass(this.options.loadedClass);
    	};

    	/**
    	 * Initializes the carousel.
    	 * @protected
    	 */
    	Owl.prototype.initialize = function() {
    		this.enter('initializing');
    		this.trigger('initialize');

    		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

    		if (this.settings.autoWidth && !this.is('pre-loading')) {
    			var imgs, nestedSelector, width;
    			imgs = this.$element.find('img');
    			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
    			width = this.$element.children(nestedSelector).width();

    			if (imgs.length && width <= 0) {
    				this.preloadAutoWidthImages(imgs);
    			}
    		}

    		this.initializeStage();
    		this.initializeItems();

    		// register event handlers
    		this.registerEventHandlers();

    		this.leave('initializing');
    		this.trigger('initialized');
    	};

    	/**
    	 * @returns {Boolean} visibility of $element
    	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
    	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
    	 */
    	Owl.prototype.isVisible = function() {
    		return this.settings.checkVisibility
    			? this.$element.is(':visible')
    			: true;
    	};

    	/**
    	 * Setups the current settings.
    	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
    	 * @todo Support for media queries by using `matchMedia` would be nice.
    	 * @public
    	 */
    	Owl.prototype.setup = function() {
    		var viewport = this.viewport(),
    			overwrites = this.options.responsive,
    			match = -1,
    			settings = null;

    		if (!overwrites) {
    			settings = $.extend({}, this.options);
    		} else {
    			$.each(overwrites, function(breakpoint) {
    				if (breakpoint <= viewport && breakpoint > match) {
    					match = Number(breakpoint);
    				}
    			});

    			settings = $.extend({}, this.options, overwrites[match]);
    			if (typeof settings.stagePadding === 'function') {
    				settings.stagePadding = settings.stagePadding();
    			}
    			delete settings.responsive;

    			// responsive class
    			if (settings.responsiveClass) {
    				this.$element.attr('class',
    					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
    				);
    			}
    		}

    		this.trigger('change', { property: { name: 'settings', value: settings } });
    		this._breakpoint = match;
    		this.settings = settings;
    		this.invalidate('settings');
    		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    	};

    	/**
    	 * Updates option logic if necessery.
    	 * @protected
    	 */
    	Owl.prototype.optionsLogic = function() {
    		if (this.settings.autoWidth) {
    			this.settings.stagePadding = false;
    			this.settings.merge = false;
    		}
    	};

    	/**
    	 * Prepares an item before add.
    	 * @todo Rename event parameter `content` to `item`.
    	 * @protected
    	 * @returns {jQuery|HTMLElement} - The item container.
    	 */
    	Owl.prototype.prepare = function(item) {
    		var event = this.trigger('prepare', { content: item });

    		if (!event.data) {
    			event.data = $('<' + this.settings.itemElement + '/>')
    				.addClass(this.options.itemClass).append(item);
    		}

    		this.trigger('prepared', { content: event.data });

    		return event.data;
    	};

    	/**
    	 * Updates the view.
    	 * @public
    	 */
    	Owl.prototype.update = function() {
    		var i = 0,
    			n = this._pipe.length,
    			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
    			cache = {};

    		while (i < n) {
    			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
    				this._pipe[i].run(cache);
    			}
    			i++;
    		}

    		this._invalidated = {};

    		!this.is('valid') && this.enter('valid');
    	};

    	/**
    	 * Gets the width of the view.
    	 * @public
    	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
    	 * @returns {Number} - The width of the view in pixel.
    	 */
    	Owl.prototype.width = function(dimension) {
    		dimension = dimension || Owl.Width.Default;
    		switch (dimension) {
    			case Owl.Width.Inner:
    			case Owl.Width.Outer:
    				return this._width;
    			default:
    				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    		}
    	};

    	/**
    	 * Refreshes the carousel primarily for adaptive purposes.
    	 * @public
    	 */
    	Owl.prototype.refresh = function() {
    		this.enter('refreshing');
    		this.trigger('refresh');

    		this.setup();

    		this.optionsLogic();

    		this.$element.addClass(this.options.refreshClass);

    		this.update();

    		this.$element.removeClass(this.options.refreshClass);

    		this.leave('refreshing');
    		this.trigger('refreshed');
    	};

    	/**
    	 * Checks window `resize` event.
    	 * @protected
    	 */
    	Owl.prototype.onThrottledResize = function() {
    		window.clearTimeout(this.resizeTimer);
    		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    	};

    	/**
    	 * Checks window `resize` event.
    	 * @protected
    	 */
    	Owl.prototype.onResize = function() {
    		if (!this._items.length) {
    			return false;
    		}

    		if (this._width === this.$element.width()) {
    			return false;
    		}

    		if (!this.isVisible()) {
    			return false;
    		}

    		this.enter('resizing');

    		if (this.trigger('resize').isDefaultPrevented()) {
    			this.leave('resizing');
    			return false;
    		}

    		this.invalidate('width');

    		this.refresh();

    		this.leave('resizing');
    		this.trigger('resized');
    	};

    	/**
    	 * Registers event handlers.
    	 * @todo Check `msPointerEnabled`
    	 * @todo #261
    	 * @protected
    	 */
    	Owl.prototype.registerEventHandlers = function() {
    		if ($.support.transition) {
    			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
    		}

    		if (this.settings.responsive !== false) {
    			this.on(window, 'resize', this._handlers.onThrottledResize);
    		}

    		if (this.settings.mouseDrag) {
    			this.$element.addClass(this.options.dragClass);
    			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
    			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
    		}

    		if (this.settings.touchDrag){
    			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
    			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
    		}
    	};

    	/**
    	 * Handles `touchstart` and `mousedown` events.
    	 * @todo Horizontal swipe threshold as option
    	 * @todo #261
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragStart = function(event) {
    		var stage = null;

    		if (event.which === 3) {
    			return;
    		}

    		if ($.support.transform) {
    			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
    			stage = {
    				x: stage[stage.length === 16 ? 12 : 4],
    				y: stage[stage.length === 16 ? 13 : 5]
    			};
    		} else {
    			stage = this.$stage.position();
    			stage = {
    				x: this.settings.rtl ?
    					stage.left + this.$stage.width() - this.width() + this.settings.margin :
    					stage.left,
    				y: stage.top
    			};
    		}

    		if (this.is('animating')) {
    			$.support.transform ? this.animate(stage.x) : this.$stage.stop();
    			this.invalidate('position');
    		}

    		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

    		this.speed(0);

    		this._drag.time = new Date().getTime();
    		this._drag.target = $(event.target);
    		this._drag.stage.start = stage;
    		this._drag.stage.current = stage;
    		this._drag.pointer = this.pointer(event);

    		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

    		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
    			var delta = this.difference(this._drag.pointer, this.pointer(event));

    			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

    			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
    				return;
    			}

    			event.preventDefault();

    			this.enter('dragging');
    			this.trigger('drag');
    		}, this));
    	};

    	/**
    	 * Handles the `touchmove` and `mousemove` events.
    	 * @todo #261
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragMove = function(event) {
    		var minimum = null,
    			maximum = null,
    			pull = null,
    			delta = this.difference(this._drag.pointer, this.pointer(event)),
    			stage = this.difference(this._drag.stage.start, delta);

    		if (!this.is('dragging')) {
    			return;
    		}

    		event.preventDefault();

    		if (this.settings.loop) {
    			minimum = this.coordinates(this.minimum());
    			maximum = this.coordinates(this.maximum() + 1) - minimum;
    			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
    		} else {
    			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
    			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
    			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
    			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    		}

    		this._drag.stage.current = stage;

    		this.animate(stage.x);
    	};

    	/**
    	 * Handles the `touchend` and `mouseup` events.
    	 * @todo #261
    	 * @todo Threshold for click event
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragEnd = function(event) {
    		var delta = this.difference(this._drag.pointer, this.pointer(event)),
    			stage = this._drag.stage.current,
    			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

    		$(document).off('.owl.core');

    		this.$element.removeClass(this.options.grabClass);

    		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
    			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
    			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
    			this.invalidate('position');
    			this.update();

    			this._drag.direction = direction;

    			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
    				this._drag.target.one('click.owl.core', function() { return false; });
    			}
    		}

    		if (!this.is('dragging')) {
    			return;
    		}

    		this.leave('dragging');
    		this.trigger('dragged');
    	};

    	/**
    	 * Gets absolute position of the closest item for a coordinate.
    	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
    	 * @protected
    	 * @param {Number} coordinate - The coordinate in pixel.
    	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
    	 * @return {Number} - The absolute position of the closest item.
    	 */
    	Owl.prototype.closest = function(coordinate, direction) {
    		var position = -1,
    			pull = 30,
    			width = this.width(),
    			coordinates = this.coordinates();

    		if (!this.settings.freeDrag) {
    			// check closest item
    			$.each(coordinates, $.proxy(function(index, value) {
    				// on a left pull, check on current index
    				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
    					position = index;
    				// on a right pull, check on previous index
    				// to do so, subtract width from value and set position = index + 1
    				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
    					position = index + 1;
    				} else if (this.op(coordinate, '<', value)
    					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
    					position = direction === 'left' ? index + 1 : index;
    				}
    				return position === -1;
    			}, this));
    		}

    		if (!this.settings.loop) {
    			// non loop boundries
    			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
    				position = coordinate = this.minimum();
    			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
    				position = coordinate = this.maximum();
    			}
    		}

    		return position;
    	};

    	/**
    	 * Animates the stage.
    	 * @todo #270
    	 * @public
    	 * @param {Number} coordinate - The coordinate in pixels.
    	 */
    	Owl.prototype.animate = function(coordinate) {
    		var animate = this.speed() > 0;

    		this.is('animating') && this.onTransitionEnd();

    		if (animate) {
    			this.enter('animating');
    			this.trigger('translate');
    		}

    		if ($.support.transform3d && $.support.transition) {
    			this.$stage.css({
    				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
    				transition: (this.speed() / 1000) + 's' + (
    					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
    				)
    			});
    		} else if (animate) {
    			this.$stage.animate({
    				left: coordinate + 'px'
    			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
    		} else {
    			this.$stage.css({
    				left: coordinate + 'px'
    			});
    		}
    	};

    	/**
    	 * Checks whether the carousel is in a specific state or not.
    	 * @param {String} state - The state to check.
    	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
    	 */
    	Owl.prototype.is = function(state) {
    		return this._states.current[state] && this._states.current[state] > 0;
    	};

    	/**
    	 * Sets the absolute position of the current item.
    	 * @public
    	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
    	 * @returns {Number} - The absolute position of the current item.
    	 */
    	Owl.prototype.current = function(position) {
    		if (position === undefined) {
    			return this._current;
    		}

    		if (this._items.length === 0) {
    			return undefined;
    		}

    		position = this.normalize(position);

    		if (this._current !== position) {
    			var event = this.trigger('change', { property: { name: 'position', value: position } });

    			if (event.data !== undefined) {
    				position = this.normalize(event.data);
    			}

    			this._current = position;

    			this.invalidate('position');

    			this.trigger('changed', { property: { name: 'position', value: this._current } });
    		}

    		return this._current;
    	};

    	/**
    	 * Invalidates the given part of the update routine.
    	 * @param {String} [part] - The part to invalidate.
    	 * @returns {Array.<String>} - The invalidated parts.
    	 */
    	Owl.prototype.invalidate = function(part) {
    		if ($.type(part) === 'string') {
    			this._invalidated[part] = true;
    			this.is('valid') && this.leave('valid');
    		}
    		return $.map(this._invalidated, function(v, i) { return i });
    	};

    	/**
    	 * Resets the absolute position of the current item.
    	 * @public
    	 * @param {Number} position - The absolute position of the new item.
    	 */
    	Owl.prototype.reset = function(position) {
    		position = this.normalize(position);

    		if (position === undefined) {
    			return;
    		}

    		this._speed = 0;
    		this._current = position;

    		this.suppress([ 'translate', 'translated' ]);

    		this.animate(this.coordinates(position));

    		this.release([ 'translate', 'translated' ]);
    	};

    	/**
    	 * Normalizes an absolute or a relative position of an item.
    	 * @public
    	 * @param {Number} position - The absolute or relative position to normalize.
    	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
    	 * @returns {Number} - The normalized position.
    	 */
    	Owl.prototype.normalize = function(position, relative) {
    		var n = this._items.length,
    			m = relative ? 0 : this._clones.length;

    		if (!this.isNumeric(position) || n < 1) {
    			position = undefined;
    		} else if (position < 0 || position >= n + m) {
    			position = ((position - m / 2) % n + n) % n + m / 2;
    		}

    		return position;
    	};

    	/**
    	 * Converts an absolute position of an item into a relative one.
    	 * @public
    	 * @param {Number} position - The absolute position to convert.
    	 * @returns {Number} - The converted position.
    	 */
    	Owl.prototype.relative = function(position) {
    		position -= this._clones.length / 2;
    		return this.normalize(position, true);
    	};

    	/**
    	 * Gets the maximum position for the current item.
    	 * @public
    	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
    	 * @returns {Number}
    	 */
    	Owl.prototype.maximum = function(relative) {
    		var settings = this.settings,
    			maximum = this._coordinates.length,
    			iterator,
    			reciprocalItemsWidth,
    			elementWidth;

    		if (settings.loop) {
    			maximum = this._clones.length / 2 + this._items.length - 1;
    		} else if (settings.autoWidth || settings.merge) {
    			iterator = this._items.length;
    			if (iterator) {
    				reciprocalItemsWidth = this._items[--iterator].width();
    				elementWidth = this.$element.width();
    				while (iterator--) {
    					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
    					if (reciprocalItemsWidth > elementWidth) {
    						break;
    					}
    				}
    			}
    			maximum = iterator + 1;
    		} else if (settings.center) {
    			maximum = this._items.length - 1;
    		} else {
    			maximum = this._items.length - settings.items;
    		}

    		if (relative) {
    			maximum -= this._clones.length / 2;
    		}

    		return Math.max(maximum, 0);
    	};

    	/**
    	 * Gets the minimum position for the current item.
    	 * @public
    	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
    	 * @returns {Number}
    	 */
    	Owl.prototype.minimum = function(relative) {
    		return relative ? 0 : this._clones.length / 2;
    	};

    	/**
    	 * Gets an item at the specified relative position.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
    	 */
    	Owl.prototype.items = function(position) {
    		if (position === undefined) {
    			return this._items.slice();
    		}

    		position = this.normalize(position, true);
    		return this._items[position];
    	};

    	/**
    	 * Gets an item at the specified relative position.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
    	 */
    	Owl.prototype.mergers = function(position) {
    		if (position === undefined) {
    			return this._mergers.slice();
    		}

    		position = this.normalize(position, true);
    		return this._mergers[position];
    	};

    	/**
    	 * Gets the absolute positions of clones for an item.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
    	 */
    	Owl.prototype.clones = function(position) {
    		var odd = this._clones.length / 2,
    			even = odd + this._items.length,
    			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

    		if (position === undefined) {
    			return $.map(this._clones, function(v, i) { return map(i) });
    		}

    		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    	};

    	/**
    	 * Sets the current animation speed.
    	 * @public
    	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
    	 * @returns {Number} - The current animation speed in milliseconds.
    	 */
    	Owl.prototype.speed = function(speed) {
    		if (speed !== undefined) {
    			this._speed = speed;
    		}

    		return this._speed;
    	};

    	/**
    	 * Gets the coordinate of an item.
    	 * @todo The name of this method is missleanding.
    	 * @public
    	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
    	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
    	 */
    	Owl.prototype.coordinates = function(position) {
    		var multiplier = 1,
    			newPosition = position - 1,
    			coordinate;

    		if (position === undefined) {
    			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
    				return this.coordinates(index);
    			}, this));
    		}

    		if (this.settings.center) {
    			if (this.settings.rtl) {
    				multiplier = -1;
    				newPosition = position + 1;
    			}

    			coordinate = this._coordinates[position];
    			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    		} else {
    			coordinate = this._coordinates[newPosition] || 0;
    		}

    		coordinate = Math.ceil(coordinate);

    		return coordinate;
    	};

    	/**
    	 * Calculates the speed for a translation.
    	 * @protected
    	 * @param {Number} from - The absolute position of the start item.
    	 * @param {Number} to - The absolute position of the target item.
    	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
    	 * @returns {Number} - The time in milliseconds for the translation.
    	 */
    	Owl.prototype.duration = function(from, to, factor) {
    		if (factor === 0) {
    			return 0;
    		}

    		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    	};

    	/**
    	 * Slides to the specified item.
    	 * @public
    	 * @param {Number} position - The position of the item.
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.to = function(position, speed) {
    		var current = this.current(),
    			revert = null,
    			distance = position - this.relative(current),
    			direction = (distance > 0) - (distance < 0),
    			items = this._items.length,
    			minimum = this.minimum(),
    			maximum = this.maximum();

    		if (this.settings.loop) {
    			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
    				distance += direction * -1 * items;
    			}

    			position = current + distance;
    			revert = ((position - minimum) % items + items) % items + minimum;

    			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
    				current = revert - distance;
    				position = revert;
    				this.reset(current);
    			}
    		} else if (this.settings.rewind) {
    			maximum += 1;
    			position = (position % maximum + maximum) % maximum;
    		} else {
    			position = Math.max(minimum, Math.min(maximum, position));
    		}

    		this.speed(this.duration(current, position, speed));
    		this.current(position);

    		if (this.isVisible()) {
    			this.update();
    		}
    	};

    	/**
    	 * Slides to the next item.
    	 * @public
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.next = function(speed) {
    		speed = speed || false;
    		this.to(this.relative(this.current()) + 1, speed);
    	};

    	/**
    	 * Slides to the previous item.
    	 * @public
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.prev = function(speed) {
    		speed = speed || false;
    		this.to(this.relative(this.current()) - 1, speed);
    	};

    	/**
    	 * Handles the end of an animation.
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onTransitionEnd = function(event) {

    		// if css2 animation then event object is undefined
    		if (event !== undefined) {
    			event.stopPropagation();

    			// Catch only owl-stage transitionEnd event
    			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
    				return false;
    			}
    		}

    		this.leave('animating');
    		this.trigger('translated');
    	};

    	/**
    	 * Gets viewport width.
    	 * @protected
    	 * @return {Number} - The width in pixel.
    	 */
    	Owl.prototype.viewport = function() {
    		var width;
    		if (this.options.responsiveBaseElement !== window) {
    			width = $(this.options.responsiveBaseElement).width();
    		} else if (window.innerWidth) {
    			width = window.innerWidth;
    		} else if (document.documentElement && document.documentElement.clientWidth) {
    			width = document.documentElement.clientWidth;
    		} else {
    			console.warn('Can not detect viewport width.');
    		}
    		return width;
    	};

    	/**
    	 * Replaces the current content.
    	 * @public
    	 * @param {HTMLElement|jQuery|String} content - The new content.
    	 */
    	Owl.prototype.replace = function(content) {
    		this.$stage.empty();
    		this._items = [];

    		if (content) {
    			content = (content instanceof jQuery) ? content : $(content);
    		}

    		if (this.settings.nestedItemSelector) {
    			content = content.find('.' + this.settings.nestedItemSelector);
    		}

    		content.filter(function() {
    			return this.nodeType === 1;
    		}).each($.proxy(function(index, item) {
    			item = this.prepare(item);
    			this.$stage.append(item);
    			this._items.push(item);
    			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		}, this));

    		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

    		this.invalidate('items');
    	};

    	/**
    	 * Adds an item.
    	 * @todo Use `item` instead of `content` for the event arguments.
    	 * @public
    	 * @param {HTMLElement|jQuery|String} content - The item content to add.
    	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
    	 */
    	Owl.prototype.add = function(content, position) {
    		var current = this.relative(this._current);

    		position = position === undefined ? this._items.length : this.normalize(position, true);
    		content = content instanceof jQuery ? content : $(content);

    		this.trigger('add', { content: content, position: position });

    		content = this.prepare(content);

    		if (this._items.length === 0 || position === this._items.length) {
    			this._items.length === 0 && this.$stage.append(content);
    			this._items.length !== 0 && this._items[position - 1].after(content);
    			this._items.push(content);
    			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		} else {
    			this._items[position].before(content);
    			this._items.splice(position, 0, content);
    			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		}

    		this._items[current] && this.reset(this._items[current].index());

    		this.invalidate('items');

    		this.trigger('added', { content: content, position: position });
    	};

    	/**
    	 * Removes an item by its position.
    	 * @todo Use `item` instead of `content` for the event arguments.
    	 * @public
    	 * @param {Number} position - The relative position of the item to remove.
    	 */
    	Owl.prototype.remove = function(position) {
    		position = this.normalize(position, true);

    		if (position === undefined) {
    			return;
    		}

    		this.trigger('remove', { content: this._items[position], position: position });

    		this._items[position].remove();
    		this._items.splice(position, 1);
    		this._mergers.splice(position, 1);

    		this.invalidate('items');

    		this.trigger('removed', { content: null, position: position });
    	};

    	/**
    	 * Preloads images with auto width.
    	 * @todo Replace by a more generic approach
    	 * @protected
    	 */
    	Owl.prototype.preloadAutoWidthImages = function(images) {
    		images.each($.proxy(function(i, element) {
    			this.enter('pre-loading');
    			element = $(element);
    			$(new Image()).one('load', $.proxy(function(e) {
    				element.attr('src', e.target.src);
    				element.css('opacity', 1);
    				this.leave('pre-loading');
    				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
    			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
    		}, this));
    	};

    	/**
    	 * Destroys the carousel.
    	 * @public
    	 */
    	Owl.prototype.destroy = function() {

    		this.$element.off('.owl.core');
    		this.$stage.off('.owl.core');
    		$(document).off('.owl.core');

    		if (this.settings.responsive !== false) {
    			window.clearTimeout(this.resizeTimer);
    			this.off(window, 'resize', this._handlers.onThrottledResize);
    		}

    		for (var i in this._plugins) {
    			this._plugins[i].destroy();
    		}

    		this.$stage.children('.cloned').remove();

    		this.$stage.unwrap();
    		this.$stage.children().contents().unwrap();
    		this.$stage.children().unwrap();
    		this.$stage.remove();
    		this.$element
    			.removeClass(this.options.refreshClass)
    			.removeClass(this.options.loadingClass)
    			.removeClass(this.options.loadedClass)
    			.removeClass(this.options.rtlClass)
    			.removeClass(this.options.dragClass)
    			.removeClass(this.options.grabClass)
    			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
    			.removeData('owl.carousel');
    	};

    	/**
    	 * Operators to calculate right-to-left and left-to-right.
    	 * @protected
    	 * @param {Number} [a] - The left side operand.
    	 * @param {String} [o] - The operator.
    	 * @param {Number} [b] - The right side operand.
    	 */
    	Owl.prototype.op = function(a, o, b) {
    		var rtl = this.settings.rtl;
    		switch (o) {
    			case '<':
    				return rtl ? a > b : a < b;
    			case '>':
    				return rtl ? a < b : a > b;
    			case '>=':
    				return rtl ? a <= b : a >= b;
    			case '<=':
    				return rtl ? a >= b : a <= b;
    			default:
    				break;
    		}
    	};

    	/**
    	 * Attaches to an internal event.
    	 * @protected
    	 * @param {HTMLElement} element - The event source.
    	 * @param {String} event - The event name.
    	 * @param {Function} listener - The event handler to attach.
    	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
    	 */
    	Owl.prototype.on = function(element, event, listener, capture) {
    		if (element.addEventListener) {
    			element.addEventListener(event, listener, capture);
    		} else if (element.attachEvent) {
    			element.attachEvent('on' + event, listener);
    		}
    	};

    	/**
    	 * Detaches from an internal event.
    	 * @protected
    	 * @param {HTMLElement} element - The event source.
    	 * @param {String} event - The event name.
    	 * @param {Function} listener - The attached event handler to detach.
    	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
    	 */
    	Owl.prototype.off = function(element, event, listener, capture) {
    		if (element.removeEventListener) {
    			element.removeEventListener(event, listener, capture);
    		} else if (element.detachEvent) {
    			element.detachEvent('on' + event, listener);
    		}
    	};

    	/**
    	 * Triggers a public event.
    	 * @todo Remove `status`, `relatedTarget` should be used instead.
    	 * @protected
    	 * @param {String} name - The event name.
    	 * @param {*} [data=null] - The event data.
    	 * @param {String} [namespace=carousel] - The event namespace.
    	 * @param {String} [state] - The state which is associated with the event.
    	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
    	 * @returns {Event} - The event arguments.
    	 */
    	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
    		var status = {
    			item: { count: this._items.length, index: this.current() }
    		}, handler = $.camelCase(
    			$.grep([ 'on', name, namespace ], function(v) { return v })
    				.join('-').toLowerCase()
    		), event = $.Event(
    			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
    			$.extend({ relatedTarget: this }, status, data)
    		);

    		if (!this._supress[name]) {
    			$.each(this._plugins, function(name, plugin) {
    				if (plugin.onTrigger) {
    					plugin.onTrigger(event);
    				}
    			});

    			this.register({ type: Owl.Type.Event, name: name });
    			this.$element.trigger(event);

    			if (this.settings && typeof this.settings[handler] === 'function') {
    				this.settings[handler].call(this, event);
    			}
    		}

    		return event;
    	};

    	/**
    	 * Enters a state.
    	 * @param name - The state name.
    	 */
    	Owl.prototype.enter = function(name) {
    		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
    			if (this._states.current[name] === undefined) {
    				this._states.current[name] = 0;
    			}

    			this._states.current[name]++;
    		}, this));
    	};

    	/**
    	 * Leaves a state.
    	 * @param name - The state name.
    	 */
    	Owl.prototype.leave = function(name) {
    		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
    			this._states.current[name]--;
    		}, this));
    	};

    	/**
    	 * Registers an event or state.
    	 * @public
    	 * @param {Object} object - The event or state to register.
    	 */
    	Owl.prototype.register = function(object) {
    		if (object.type === Owl.Type.Event) {
    			if (!$.event.special[object.name]) {
    				$.event.special[object.name] = {};
    			}

    			if (!$.event.special[object.name].owl) {
    				var _default = $.event.special[object.name]._default;
    				$.event.special[object.name]._default = function(e) {
    					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
    						return _default.apply(this, arguments);
    					}
    					return e.namespace && e.namespace.indexOf('owl') > -1;
    				};
    				$.event.special[object.name].owl = true;
    			}
    		} else if (object.type === Owl.Type.State) {
    			if (!this._states.tags[object.name]) {
    				this._states.tags[object.name] = object.tags;
    			} else {
    				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
    			}

    			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
    				return $.inArray(tag, this._states.tags[object.name]) === i;
    			}, this));
    		}
    	};

    	/**
    	 * Suppresses events.
    	 * @protected
    	 * @param {Array.<String>} events - The events to suppress.
    	 */
    	Owl.prototype.suppress = function(events) {
    		$.each(events, $.proxy(function(index, event) {
    			this._supress[event] = true;
    		}, this));
    	};

    	/**
    	 * Releases suppressed events.
    	 * @protected
    	 * @param {Array.<String>} events - The events to release.
    	 */
    	Owl.prototype.release = function(events) {
    		$.each(events, $.proxy(function(index, event) {
    			delete this._supress[event];
    		}, this));
    	};

    	/**
    	 * Gets unified pointer coordinates from event.
    	 * @todo #261
    	 * @protected
    	 * @param {Event} - The `mousedown` or `touchstart` event.
    	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
    	 */
    	Owl.prototype.pointer = function(event) {
    		var result = { x: null, y: null };

    		event = event.originalEvent || event || window.event;

    		event = event.touches && event.touches.length ?
    			event.touches[0] : event.changedTouches && event.changedTouches.length ?
    				event.changedTouches[0] : event;

    		if (event.pageX) {
    			result.x = event.pageX;
    			result.y = event.pageY;
    		} else {
    			result.x = event.clientX;
    			result.y = event.clientY;
    		}

    		return result;
    	};

    	/**
    	 * Determines if the input is a Number or something that can be coerced to a Number
    	 * @protected
    	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
    	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
    	 */
    	Owl.prototype.isNumeric = function(number) {
    		return !isNaN(parseFloat(number));
    	};

    	/**
    	 * Gets the difference of two vectors.
    	 * @todo #261
    	 * @protected
    	 * @param {Object} - The first vector.
    	 * @param {Object} - The second vector.
    	 * @returns {Object} - The difference.
    	 */
    	Owl.prototype.difference = function(first, second) {
    		return {
    			x: first.x - second.x,
    			y: first.y - second.y
    		};
    	};

    	/**
    	 * The jQuery Plugin for the Owl Carousel
    	 * @todo Navigation plugin `next` and `prev`
    	 * @public
    	 */
    	$.fn.owlCarousel = function(option) {
    		var args = Array.prototype.slice.call(arguments, 1);

    		return this.each(function() {
    			var $this = $(this),
    				data = $this.data('owl.carousel');

    			if (!data) {
    				data = new Owl(this, typeof option == 'object' && option);
    				$this.data('owl.carousel', data);

    				$.each([
    					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
    				], function(i, event) {
    					data.register({ type: Owl.Type.Event, name: event });
    					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
    						if (e.namespace && e.relatedTarget !== this) {
    							this.suppress([ event ]);
    							data[event].apply(this, [].slice.call(arguments, 1));
    							this.release([ event ]);
    						}
    					}, data));
    				});
    			}

    			if (typeof option == 'string' && option.charAt(0) !== '_') {
    				data[option].apply(data, args);
    			}
    		});
    	};

    	/**
    	 * The constructor for the jQuery Plugin
    	 * @public
    	 */
    	$.fn.owlCarousel.Constructor = Owl;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the auto refresh plugin.
    	 * @class The Auto Refresh Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var AutoRefresh = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Refresh interval.
    		 * @protected
    		 * @type {number}
    		 */
    		this._interval = null;

    		/**
    		 * Whether the element is currently visible or not.
    		 * @protected
    		 * @type {Boolean}
    		 */
    		this._visible = null;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoRefresh) {
    					this.watch();
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	AutoRefresh.Defaults = {
    		autoRefresh: true,
    		autoRefreshInterval: 500
    	};

    	/**
    	 * Watches the element.
    	 */
    	AutoRefresh.prototype.watch = function() {
    		if (this._interval) {
    			return;
    		}

    		this._visible = this._core.isVisible();
    		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    	};

    	/**
    	 * Refreshes the element.
    	 */
    	AutoRefresh.prototype.refresh = function() {
    		if (this._core.isVisible() === this._visible) {
    			return;
    		}

    		this._visible = !this._visible;

    		this._core.$element.toggleClass('owl-hidden', !this._visible);

    		this._visible && (this._core.invalidate('width') && this._core.refresh());
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	AutoRefresh.prototype.destroy = function() {
    		var handler, property;

    		window.clearInterval(this._interval);

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the lazy plugin.
    	 * @class The Lazy Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Lazy = function(carousel) {

    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Already loaded items.
    		 * @protected
    		 * @type {Array.<jQuery>}
    		 */
    		this._loaded = [];

    		/**
    		 * Event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
    				if (!e.namespace) {
    					return;
    				}

    				if (!this._core.settings || !this._core.settings.lazyLoad) {
    					return;
    				}

    				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
    					var settings = this._core.settings,
    						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
    						i = ((settings.center && n * -1) || 0),
    						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
    						clones = this._core.clones().length,
    						load = $.proxy(function(i, v) { this.load(v); }, this);
    					//TODO: Need documentation for this new option
    					if (settings.lazyLoadEager > 0) {
    						n += settings.lazyLoadEager;
    						// If the carousel is looping also preload images that are to the "left"
    						if (settings.loop) {
                  position -= settings.lazyLoadEager;
                  n++;
                }
    					}

    					while (i++ < n) {
    						this.load(clones / 2 + this._core.relative(position));
    						clones && $.each(this._core.clones(this._core.relative(position)), load);
    						position++;
    					}
    				}
    			}, this)
    		};

    		// set the default options
    		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

    		// register event handler
    		this._core.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Lazy.Defaults = {
    		lazyLoad: false,
    		lazyLoadEager: 0
    	};

    	/**
    	 * Loads all resources of an item at the specified position.
    	 * @param {Number} position - The absolute position of the item.
    	 * @protected
    	 */
    	Lazy.prototype.load = function(position) {
    		var $item = this._core.$stage.children().eq(position),
    			$elements = $item && $item.find('.owl-lazy');

    		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
    			return;
    		}

    		$elements.each($.proxy(function(index, element) {
    			var $element = $(element), image,
                    url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

    			this._core.trigger('load', { element: $element, url: url }, 'lazy');

    			if ($element.is('img')) {
    				$element.one('load.owl.lazy', $.proxy(function() {
    					$element.css('opacity', 1);
    					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
    				}, this)).attr('src', url);
                } else if ($element.is('source')) {
                    $element.one('load.owl.lazy', $.proxy(function() {
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this)).attr('srcset', url);
    			} else {
    				image = new Image();
    				image.onload = $.proxy(function() {
    					$element.css({
    						'background-image': 'url("' + url + '")',
    						'opacity': '1'
    					});
    					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
    				}, this);
    				image.src = url;
    			}
    		}, this));

    		this._loaded.push($item.get(0));
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Lazy.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this.handlers) {
    			this._core.$element.off(handler, this.handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the auto height plugin.
    	 * @class The Auto Height Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var AutoHeight = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		this._previousHeight = null;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight) {
    					this.update();
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
    					this.update();
    				}
    			}, this),
    			'loaded.owl.lazy': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight
    					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
    					this.update();
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);
    		this._intervalId = null;
    		var refThis = this;

    		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
    		// and have been made compatible with the latest jQuery version
    		$(window).on('load', function() {
    			if (refThis._core.settings.autoHeight) {
    				refThis.update();
    			}
    		});

    		// Autoresize the height of the carousel when window is resized
    		// When carousel has images, the height is dependent on the width
    		// and should also change on resize
    		$(window).resize(function() {
    			if (refThis._core.settings.autoHeight) {
    				if (refThis._intervalId != null) {
    					clearTimeout(refThis._intervalId);
    				}

    				refThis._intervalId = setTimeout(function() {
    					refThis.update();
    				}, 250);
    			}
    		});

    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	AutoHeight.Defaults = {
    		autoHeight: false,
    		autoHeightClass: 'owl-height'
    	};

    	/**
    	 * Updates the view.
    	 */
    	AutoHeight.prototype.update = function() {
    		var start = this._core._current,
    			end = start + this._core.settings.items,
    			lazyLoadEnabled = this._core.settings.lazyLoad,
    			visible = this._core.$stage.children().toArray().slice(start, end),
    			heights = [],
    			maxheight = 0;

    		$.each(visible, function(index, item) {
    			heights.push($(item).height());
    		});

    		maxheight = Math.max.apply(null, heights);

    		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
    			maxheight = this._previousHeight;
    		}

    		this._previousHeight = maxheight;

    		this._core.$stage.parent()
    			.height(maxheight)
    			.addClass(this._core.settings.autoHeightClass);
    	};

    	AutoHeight.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] !== 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the video plugin.
    	 * @class The Video Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Video = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Cache all video URLs.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._videos = {};

    		/**
    		 * Current playing item.
    		 * @protected
    		 * @type {jQuery}
    		 */
    		this._playing = null;

    		/**
    		 * All event handlers.
    		 * @todo The cloned content removale is too late
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
    				}
    			}, this),
    			'resize.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
    					e.preventDefault();
    				}
    			}, this),
    			'refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.is('resizing')) {
    					this._core.$stage.find('.cloned .owl-video-frame').remove();
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'position' && this._playing) {
    					this.stop();
    				}
    			}, this),
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (!e.namespace) {
    					return;
    				}

    				var $element = $(e.content).find('.owl-video');

    				if ($element.length) {
    					$element.css('display', 'none');
    					this.fetch($element, $(e.content));
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Video.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);

    		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
    			this.play(e);
    		}, this));
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Video.Defaults = {
    		video: false,
    		videoHeight: false,
    		videoWidth: false
    	};

    	/**
    	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
    	 * @protected
    	 * @param {jQuery} target - The target containing the video data.
    	 * @param {jQuery} item - The item containing the video.
    	 */
    	Video.prototype.fetch = function(target, item) {
    			var type = (function() {
    					if (target.attr('data-vimeo-id')) {
    						return 'vimeo';
    					} else if (target.attr('data-vzaar-id')) {
    						return 'vzaar'
    					} else {
    						return 'youtube';
    					}
    				})(),
    				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
    				width = target.attr('data-width') || this._core.settings.videoWidth,
    				height = target.attr('data-height') || this._core.settings.videoHeight,
    				url = target.attr('href');

    		if (url) {

    			/*
    					Parses the id's out of the following urls (and probably more):
    					https://www.youtube.com/watch?v=:id
    					https://youtu.be/:id
    					https://vimeo.com/:id
    					https://vimeo.com/channels/:channel/:id
    					https://vimeo.com/groups/:group/videos/:id
    					https://app.vzaar.com/videos/:id

    					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
    			*/

    			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

    			if (id[3].indexOf('youtu') > -1) {
    				type = 'youtube';
    			} else if (id[3].indexOf('vimeo') > -1) {
    				type = 'vimeo';
    			} else if (id[3].indexOf('vzaar') > -1) {
    				type = 'vzaar';
    			} else {
    				throw new Error('Video URL not supported.');
    			}
    			id = id[6];
    		} else {
    			throw new Error('Missing video URL.');
    		}

    		this._videos[url] = {
    			type: type,
    			id: id,
    			width: width,
    			height: height
    		};

    		item.attr('data-video', url);

    		this.thumbnail(target, this._videos[url]);
    	};

    	/**
    	 * Creates video thumbnail.
    	 * @protected
    	 * @param {jQuery} target - The target containing the video data.
    	 * @param {Object} info - The video info object.
    	 * @see `fetch`
    	 */
    	Video.prototype.thumbnail = function(target, video) {
    		var tnLink,
    			icon,
    			path,
    			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
    			customTn = target.find('img'),
    			srcType = 'src',
    			lazyClass = '',
    			settings = this._core.settings,
    			create = function(path) {
    				icon = '<div class="owl-video-play-icon"></div>';

    				if (settings.lazyLoad) {
    					tnLink = $('<div/>',{
    						"class": 'owl-video-tn ' + lazyClass,
    						"srcType": path
    					});
    				} else {
    					tnLink = $( '<div/>', {
    						"class": "owl-video-tn",
    						"style": 'opacity:1;background-image:url(' + path + ')'
    					});
    				}
    				target.after(tnLink);
    				target.after(icon);
    			};

    		// wrap video content into owl-video-wrapper div
    		target.wrap( $( '<div/>', {
    			"class": "owl-video-wrapper",
    			"style": dimensions
    		}));

    		if (this._core.settings.lazyLoad) {
    			srcType = 'data-src';
    			lazyClass = 'owl-lazy';
    		}

    		// custom thumbnail
    		if (customTn.length) {
    			create(customTn.attr(srcType));
    			customTn.remove();
    			return false;
    		}

    		if (video.type === 'youtube') {
    			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
    			create(path);
    		} else if (video.type === 'vimeo') {
    			$.ajax({
    				type: 'GET',
    				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
    				jsonp: 'callback',
    				dataType: 'jsonp',
    				success: function(data) {
    					path = data[0].thumbnail_large;
    					create(path);
    				}
    			});
    		} else if (video.type === 'vzaar') {
    			$.ajax({
    				type: 'GET',
    				url: '//vzaar.com/api/videos/' + video.id + '.json',
    				jsonp: 'callback',
    				dataType: 'jsonp',
    				success: function(data) {
    					path = data.framegrab_url;
    					create(path);
    				}
    			});
    		}
    	};

    	/**
    	 * Stops the current video.
    	 * @public
    	 */
    	Video.prototype.stop = function() {
    		this._core.trigger('stop', null, 'video');
    		this._playing.find('.owl-video-frame').remove();
    		this._playing.removeClass('owl-video-playing');
    		this._playing = null;
    		this._core.leave('playing');
    		this._core.trigger('stopped', null, 'video');
    	};

    	/**
    	 * Starts the current video.
    	 * @public
    	 * @param {Event} event - The event arguments.
    	 */
    	Video.prototype.play = function(event) {
    		var target = $(event.target),
    			item = target.closest('.' + this._core.settings.itemClass),
    			video = this._videos[item.attr('data-video')],
    			width = video.width || '100%',
    			height = video.height || this._core.$stage.height(),
    			html,
    			iframe;

    		if (this._playing) {
    			return;
    		}

    		this._core.enter('playing');
    		this._core.trigger('play', null, 'video');

    		item = this._core.items(this._core.relative(item.index()));

    		this._core.reset(item.index());

    		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
    		html.attr( 'height', height );
    		html.attr( 'width', width );
    		if (video.type === 'youtube') {
    			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
    		} else if (video.type === 'vimeo') {
    			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
    		} else if (video.type === 'vzaar') {
    			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
    		}

    		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

    		this._playing = item.addClass('owl-video-playing');
    	};

    	/**
    	 * Checks whether an video is currently in full screen mode or not.
    	 * @todo Bad style because looks like a readonly method but changes members.
    	 * @protected
    	 * @returns {Boolean}
    	 */
    	Video.prototype.isInFullScreen = function() {
    		var element = document.fullscreenElement || document.mozFullScreenElement ||
    				document.webkitFullscreenElement;

    		return element && $(element).parent().hasClass('owl-video-frame');
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	Video.prototype.destroy = function() {
    		var handler, property;

    		this._core.$element.off('click.owl.video');

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the animate plugin.
    	 * @class The Navigation Plugin
    	 * @param {Owl} scope - The Owl Carousel
    	 */
    	var Animate = function(scope) {
    		this.core = scope;
    		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    		this.swapping = true;
    		this.previous = undefined;
    		this.next = undefined;

    		this.handlers = {
    			'change.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name == 'position') {
    					this.previous = this.core.current();
    					this.next = e.property.value;
    				}
    			}, this),
    			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					this.swapping = e.type == 'translated';
    				}
    			}, this),
    			'translate.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
    					this.swap();
    				}
    			}, this)
    		};

    		this.core.$element.on(this.handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Animate.Defaults = {
    		animateOut: false,
    		animateIn: false
    	};

    	/**
    	 * Toggles the animation classes whenever an translations starts.
    	 * @protected
    	 * @returns {Boolean|undefined}
    	 */
    	Animate.prototype.swap = function() {

    		if (this.core.settings.items !== 1) {
    			return;
    		}

    		if (!$.support.animation || !$.support.transition) {
    			return;
    		}

    		this.core.speed(0);

    		var left,
    			clear = $.proxy(this.clear, this),
    			previous = this.core.$stage.children().eq(this.previous),
    			next = this.core.$stage.children().eq(this.next),
    			incoming = this.core.settings.animateIn,
    			outgoing = this.core.settings.animateOut;

    		if (this.core.current() === this.previous) {
    			return;
    		}

    		if (outgoing) {
    			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
    			previous.one($.support.animation.end, clear)
    				.css( { 'left': left + 'px' } )
    				.addClass('animated owl-animated-out')
    				.addClass(outgoing);
    		}

    		if (incoming) {
    			next.one($.support.animation.end, clear)
    				.addClass('animated owl-animated-in')
    				.addClass(incoming);
    		}
    	};

    	Animate.prototype.clear = function(e) {
    		$(e.target).css( { 'left': '' } )
    			.removeClass('animated owl-animated-out owl-animated-in')
    			.removeClass(this.core.settings.animateIn)
    			.removeClass(this.core.settings.animateOut);
    		this.core.onTransitionEnd();
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Animate.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this.handlers) {
    			this.core.$element.off(handler, this.handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the autoplay plugin.
    	 * @class The Autoplay Plugin
    	 * @param {Owl} scope - The Owl Carousel
    	 */
    	var Autoplay = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * The autoplay timeout id.
    		 * @type {Number}
    		 */
    		this._call = null;

    		/**
    		 * Depending on the state of the plugin, this variable contains either
    		 * the start time of the timer or the current timer value if it's
    		 * paused. Since we start in a paused state we initialize the timer
    		 * value.
    		 * @type {Number}
    		 */
    		this._time = 0;

    		/**
    		 * Stores the timeout currently used.
    		 * @type {Number}
    		 */
    		this._timeout = 0;

    		/**
    		 * Indicates whenever the autoplay is paused.
    		 * @type {Boolean}
    		 */
    		this._paused = true;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'settings') {
    					if (this._core.settings.autoplay) {
    						this.play();
    					} else {
    						this.stop();
    					}
    				} else if (e.namespace && e.property.name === 'position' && this._paused) {
    					// Reset the timer. This code is triggered when the position
    					// of the carousel was changed through user interaction.
    					this._time = 0;
    				}
    			}, this),
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoplay) {
    					this.play();
    				}
    			}, this),
    			'play.owl.autoplay': $.proxy(function(e, t, s) {
    				if (e.namespace) {
    					this.play(t, s);
    				}
    			}, this),
    			'stop.owl.autoplay': $.proxy(function(e) {
    				if (e.namespace) {
    					this.stop();
    				}
    			}, this),
    			'mouseover.owl.autoplay': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.pause();
    				}
    			}, this),
    			'mouseleave.owl.autoplay': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.play();
    				}
    			}, this),
    			'touchstart.owl.core': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.pause();
    				}
    			}, this),
    			'touchend.owl.core': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause) {
    					this.play();
    				}
    			}, this)
    		};

    		// register event handlers
    		this._core.$element.on(this._handlers);

    		// set default options
    		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Autoplay.Defaults = {
    		autoplay: false,
    		autoplayTimeout: 5000,
    		autoplayHoverPause: false,
    		autoplaySpeed: false
    	};

    	/**
    	 * Transition to the next slide and set a timeout for the next transition.
    	 * @private
    	 * @param {Number} [speed] - The animation speed for the animations.
    	 */
    	Autoplay.prototype._next = function(speed) {
    		this._call = window.setTimeout(
    			$.proxy(this._next, this, speed),
    			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
    		);

    		if (this._core.is('interacting') || document.hidden) {
    			return;
    		}
    		this._core.next(speed || this._core.settings.autoplaySpeed);
    	};

    	/**
    	 * Reads the current timer value when the timer is playing.
    	 * @public
    	 */
    	Autoplay.prototype.read = function() {
    		return new Date().getTime() - this._time;
    	};

    	/**
    	 * Starts the autoplay.
    	 * @public
    	 * @param {Number} [timeout] - The interval before the next animation starts.
    	 * @param {Number} [speed] - The animation speed for the animations.
    	 */
    	Autoplay.prototype.play = function(timeout, speed) {
    		var elapsed;

    		if (!this._core.is('rotating')) {
    			this._core.enter('rotating');
    		}

    		timeout = timeout || this._core.settings.autoplayTimeout;

    		// Calculate the elapsed time since the last transition. If the carousel
    		// wasn't playing this calculation will yield zero.
    		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

    		if (this._paused) {
    			// Start the clock.
    			this._time = this.read();
    			this._paused = false;
    		} else {
    			// Clear the active timeout to allow replacement.
    			window.clearTimeout(this._call);
    		}

    		// Adjust the origin of the timer to match the new timeout value.
    		this._time += this.read() % timeout - elapsed;

    		this._timeout = timeout;
    		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    	};

    	/**
    	 * Stops the autoplay.
    	 * @public
    	 */
    	Autoplay.prototype.stop = function() {
    		if (this._core.is('rotating')) {
    			// Reset the clock.
    			this._time = 0;
    			this._paused = true;

    			window.clearTimeout(this._call);
    			this._core.leave('rotating');
    		}
    	};

    	/**
    	 * Pauses the autoplay.
    	 * @public
    	 */
    	Autoplay.prototype.pause = function() {
    		if (this._core.is('rotating') && !this._paused) {
    			// Pause the clock.
    			this._time = this.read();
    			this._paused = true;

    			window.clearTimeout(this._call);
    		}
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	Autoplay.prototype.destroy = function() {
    		var handler, property;

    		this.stop();

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the navigation plugin.
    	 * @class The Navigation Plugin
    	 * @param {Owl} carousel - The Owl Carousel.
    	 */
    	var Navigation = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Indicates whether the plugin is initialized or not.
    		 * @protected
    		 * @type {Boolean}
    		 */
    		this._initialized = false;

    		/**
    		 * The current paging indexes.
    		 * @protected
    		 * @type {Array}
    		 */
    		this._pages = [];

    		/**
    		 * All DOM elements of the user interface.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._controls = {};

    		/**
    		 * Markup for an indicator.
    		 * @protected
    		 * @type {Array.<String>}
    		 */
    		this._templates = [];

    		/**
    		 * The carousel element.
    		 * @type {jQuery}
    		 */
    		this.$element = this._core.$element;

    		/**
    		 * Overridden methods of the carousel.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._overrides = {
    			next: this._core.next,
    			prev: this._core.prev,
    			to: this._core.to
    		};

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
    						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
    				}
    			}, this),
    			'added.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.splice(e.position, 0, this._templates.pop());
    				}
    			}, this),
    			'remove.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.splice(e.position, 1);
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name == 'position') {
    					this.draw();
    				}
    			}, this),
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && !this._initialized) {
    					this._core.trigger('initialize', null, 'navigation');
    					this.initialize();
    					this.update();
    					this.draw();
    					this._initialized = true;
    					this._core.trigger('initialized', null, 'navigation');
    				}
    			}, this),
    			'refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._initialized) {
    					this._core.trigger('refresh', null, 'navigation');
    					this.update();
    					this.draw();
    					this._core.trigger('refreshed', null, 'navigation');
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

    		// register event handlers
    		this.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 * @todo Rename `slideBy` to `navBy`
    	 */
    	Navigation.Defaults = {
    		nav: false,
    		navText: [
    			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
    			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
    		],
    		navSpeed: false,
    		navElement: 'button type="button" role="presentation"',
    		navContainer: false,
    		navContainerClass: 'owl-nav',
    		navClass: [
    			'owl-prev',
    			'owl-next'
    		],
    		slideBy: 1,
    		dotClass: 'owl-dot',
    		dotsClass: 'owl-dots',
    		dots: true,
    		dotsEach: false,
    		dotsData: false,
    		dotsSpeed: false,
    		dotsContainer: false
    	};

    	/**
    	 * Initializes the layout of the plugin and extends the carousel.
    	 * @protected
    	 */
    	Navigation.prototype.initialize = function() {
    		var override,
    			settings = this._core.settings;

    		// create DOM structure for relative navigation
    		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
    			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

    		this._controls.$previous = $('<' + settings.navElement + '>')
    			.addClass(settings.navClass[0])
    			.html(settings.navText[0])
    			.prependTo(this._controls.$relative)
    			.on('click', $.proxy(function(e) {
    				this.prev(settings.navSpeed);
    			}, this));
    		this._controls.$next = $('<' + settings.navElement + '>')
    			.addClass(settings.navClass[1])
    			.html(settings.navText[1])
    			.appendTo(this._controls.$relative)
    			.on('click', $.proxy(function(e) {
    				this.next(settings.navSpeed);
    			}, this));

    		// create DOM structure for absolute navigation
    		if (!settings.dotsData) {
    			this._templates = [ $('<button role="button">')
    				.addClass(settings.dotClass)
    				.append($('<span>'))
    				.prop('outerHTML') ];
    		}

    		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
    			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

    		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
    			var index = $(e.target).parent().is(this._controls.$absolute)
    				? $(e.target).index() : $(e.target).parent().index();

    			e.preventDefault();

    			this.to(index, settings.dotsSpeed);
    		}, this));

    		/*$el.on('focusin', function() {
    			$(document).off(".carousel");

    			$(document).on('keydown.carousel', function(e) {
    				if(e.keyCode == 37) {
    					$el.trigger('prev.owl')
    				}
    				if(e.keyCode == 39) {
    					$el.trigger('next.owl')
    				}
    			});
    		});*/

    		// override public methods of the carousel
    		for (override in this._overrides) {
    			this._core[override] = $.proxy(this[override], this);
    		}
    	};

    	/**
    	 * Destroys the plugin.
    	 * @protected
    	 */
    	Navigation.prototype.destroy = function() {
    		var handler, control, property, override, settings;
    		settings = this._core.settings;

    		for (handler in this._handlers) {
    			this.$element.off(handler, this._handlers[handler]);
    		}
    		for (control in this._controls) {
    			if (control === '$relative' && settings.navContainer) {
    				this._controls[control].html('');
    			} else {
    				this._controls[control].remove();
    			}
    		}
    		for (override in this.overides) {
    			this._core[override] = this._overrides[override];
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	/**
    	 * Updates the internal state.
    	 * @protected
    	 */
    	Navigation.prototype.update = function() {
    		var i, j, k,
    			lower = this._core.clones().length / 2,
    			upper = lower + this._core.items().length,
    			maximum = this._core.maximum(true),
    			settings = this._core.settings,
    			size = settings.center || settings.autoWidth || settings.dotsData
    				? 1 : settings.dotsEach || settings.items;

    		if (settings.slideBy !== 'page') {
    			settings.slideBy = Math.min(settings.slideBy, settings.items);
    		}

    		if (settings.dots || settings.slideBy == 'page') {
    			this._pages = [];

    			for (i = lower, j = 0, k = 0; i < upper; i++) {
    				if (j >= size || j === 0) {
    					this._pages.push({
    						start: Math.min(maximum, i - lower),
    						end: i - lower + size - 1
    					});
    					if (Math.min(maximum, i - lower) === maximum) {
    						break;
    					}
    					j = 0, ++k;
    				}
    				j += this._core.mergers(this._core.relative(i));
    			}
    		}
    	};

    	/**
    	 * Draws the user interface.
    	 * @todo The option `dotsData` wont work.
    	 * @protected
    	 */
    	Navigation.prototype.draw = function() {
    		var difference,
    			settings = this._core.settings,
    			disabled = this._core.items().length <= settings.items,
    			index = this._core.relative(this._core.current()),
    			loop = settings.loop || settings.rewind;

    		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

    		if (settings.nav) {
    			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
    			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
    		}

    		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

    		if (settings.dots) {
    			difference = this._pages.length - this._controls.$absolute.children().length;

    			if (settings.dotsData && difference !== 0) {
    				this._controls.$absolute.html(this._templates.join(''));
    			} else if (difference > 0) {
    				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
    			} else if (difference < 0) {
    				this._controls.$absolute.children().slice(difference).remove();
    			}

    			this._controls.$absolute.find('.active').removeClass('active');
    			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
    		}
    	};

    	/**
    	 * Extends event data.
    	 * @protected
    	 * @param {Event} event - The event object which gets thrown.
    	 */
    	Navigation.prototype.onTrigger = function(event) {
    		var settings = this._core.settings;

    		event.page = {
    			index: $.inArray(this.current(), this._pages),
    			count: this._pages.length,
    			size: settings && (settings.center || settings.autoWidth || settings.dotsData
    				? 1 : settings.dotsEach || settings.items)
    		};
    	};

    	/**
    	 * Gets the current page position of the carousel.
    	 * @protected
    	 * @returns {Number}
    	 */
    	Navigation.prototype.current = function() {
    		var current = this._core.relative(this._core.current());
    		return $.grep(this._pages, $.proxy(function(page, index) {
    			return page.start <= current && page.end >= current;
    		}, this)).pop();
    	};

    	/**
    	 * Gets the current succesor/predecessor position.
    	 * @protected
    	 * @returns {Number}
    	 */
    	Navigation.prototype.getPosition = function(successor) {
    		var position, length,
    			settings = this._core.settings;

    		if (settings.slideBy == 'page') {
    			position = $.inArray(this.current(), this._pages);
    			length = this._pages.length;
    			successor ? ++position : --position;
    			position = this._pages[((position % length) + length) % length].start;
    		} else {
    			position = this._core.relative(this._core.current());
    			length = this._core.items().length;
    			successor ? position += settings.slideBy : position -= settings.slideBy;
    		}

    		return position;
    	};

    	/**
    	 * Slides to the next item or page.
    	 * @public
    	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
    	 */
    	Navigation.prototype.next = function(speed) {
    		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    	};

    	/**
    	 * Slides to the previous item or page.
    	 * @public
    	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
    	 */
    	Navigation.prototype.prev = function(speed) {
    		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    	};

    	/**
    	 * Slides to the specified item or page.
    	 * @public
    	 * @param {Number} position - The position of the item or page.
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
    	 */
    	Navigation.prototype.to = function(position, speed, standard) {
    		var length;

    		if (!standard && this._pages.length) {
    			length = this._pages.length;
    			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
    		} else {
    			$.proxy(this._overrides.to, this._core)(position, speed);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the hash plugin.
    	 * @class The Hash Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Hash = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Hash index for the items.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._hashes = {};

    		/**
    		 * The carousel element.
    		 * @type {jQuery}
    		 */
    		this.$element = this._core.$element;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
    					$(window).trigger('hashchange.owl.navigation');
    				}
    			}, this),
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

    					if (!hash) {
    						return;
    					}

    					this._hashes[hash] = e.content;
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'position') {
    					var current = this._core.items(this._core.relative(this._core.current())),
    						hash = $.map(this._hashes, function(item, hash) {
    							return item === current ? hash : null;
    						}).join();

    					if (!hash || window.location.hash.slice(1) === hash) {
    						return;
    					}

    					window.location.hash = hash;
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

    		// register the event handlers
    		this.$element.on(this._handlers);

    		// register event listener for hash navigation
    		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
    			var hash = window.location.hash.substring(1),
    				items = this._core.$stage.children(),
    				position = this._hashes[hash] && items.index(this._hashes[hash]);

    			if (position === undefined || position === this._core.current()) {
    				return;
    			}

    			this._core.to(this._core.relative(position), false, true);
    		}, this));
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Hash.Defaults = {
    		URLhashListener: false
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Hash.prototype.destroy = function() {
    		var handler, property;

    		$(window).off('hashchange.owl.navigation');

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	var style = $('<support>').get(0).style,
    		prefixes = 'Webkit Moz O ms'.split(' '),
    		events = {
    			transition: {
    				end: {
    					WebkitTransition: 'webkitTransitionEnd',
    					MozTransition: 'transitionend',
    					OTransition: 'oTransitionEnd',
    					transition: 'transitionend'
    				}
    			},
    			animation: {
    				end: {
    					WebkitAnimation: 'webkitAnimationEnd',
    					MozAnimation: 'animationend',
    					OAnimation: 'oAnimationEnd',
    					animation: 'animationend'
    				}
    			}
    		},
    		tests = {
    			csstransforms: function() {
    				return !!test('transform');
    			},
    			csstransforms3d: function() {
    				return !!test('perspective');
    			},
    			csstransitions: function() {
    				return !!test('transition');
    			},
    			cssanimations: function() {
    				return !!test('animation');
    			}
    		};

    	function test(property, prefixed) {
    		var result = false,
    			upper = property.charAt(0).toUpperCase() + property.slice(1);

    		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
    			if (style[property] !== undefined) {
    				result = prefixed ? property : true;
    				return false;
    			}
    		});

    		return result;
    	}

    	function prefixed(property) {
    		return test(property, true);
    	}

    	if (tests.csstransitions()) {
    		/* jshint -W053 */
    		$.support.transition = new String(prefixed('transition'));
    		$.support.transition.end = events.transition.end[ $.support.transition ];
    	}

    	if (tests.cssanimations()) {
    		/* jshint -W053 */
    		$.support.animation = new String(prefixed('animation'));
    		$.support.animation.end = events.animation.end[ $.support.animation ];
    	}

    	if (tests.csstransforms()) {
    		/* jshint -W053 */
    		$.support.transform = new String(prefixed('transform'));
    		$.support.transform3d = tests.csstransforms3d();
    	}

    })(window.Zepto || window.jQuery, window, document);

    var $ = window.jQuery;
    var ReactOwlCarousel = /** @class */ (function (_super) {
        __extends(ReactOwlCarousel, _super);
        function ReactOwlCarousel(props) {
            var _this = _super.call(this, props) || this;
            _this.containerRef = function (inst) {
                _this.container = inst;
            };
            var _a = filterOptions(_this.props), options = _a[0], propsWithoutOptions = _a[1];
            _this.options = options;
            _this.propsWithoutOptions = propsWithoutOptions;
            return _this;
        }
        ReactOwlCarousel.prototype.componentDidMount = function () {
            this.$ele = $(this.container);
            this.create();
        };
        ReactOwlCarousel.prototype.UNSAFE_componentWillReceiveProps = function () {
            this.destory();
        };
        ReactOwlCarousel.prototype.componentDidUpdate = function () {
            var _a = filterOptions(this.props), options = _a[0], propsWithoutOptions = _a[1];
            this.options = options;
            this.propsWithoutOptions = propsWithoutOptions;
            this.create();
        };
        ReactOwlCarousel.prototype.next = function (speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof speed === 'number') {
                this.$ele.trigger('next.owl.carousel', [speed]);
            }
            else {
                this.$ele.trigger('next.owl.carousel', speed);
            }
        };
        ReactOwlCarousel.prototype.prev = function (speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof speed === 'number') {
                this.$ele.trigger('prev.owl.carousel', [speed]);
            }
            else {
                this.$ele.trigger('prev.owl.carousel', speed);
            }
        };
        ReactOwlCarousel.prototype.to = function (position, speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof position === 'number' && typeof speed === 'number') {
                this.$ele.trigger('to.owl.carousel', [position, speed]);
            }
            else {
                this.$ele.trigger('to.owl.carousel');
            }
        };
        ReactOwlCarousel.prototype.create = function (options) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.owlCarousel(options || this.options);
        };
        ReactOwlCarousel.prototype.destory = function () {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.trigger('destroy.owl.carousel');
        };
        ReactOwlCarousel.prototype.play = function (timeout, speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof timeout === 'number' && typeof speed === 'number') {
                this.$ele.trigger('play.owl.autoplay', [timeout, speed]);
            }
            else {
                this.$ele.trigger('play.owl.autoplay');
            }
        };
        ReactOwlCarousel.prototype.stop = function () {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.trigger('stop.owl.autoplay');
        };
        ReactOwlCarousel.prototype.render = function () {
            var _a = this.propsWithoutOptions, className = _a.className, props = __rest(_a, ["className"]);
            return (React__default.createElement("div", __assign({ className: "owl-carousel " + className, ref: this.containerRef }, props)));
        };
        return ReactOwlCarousel;
    }(React.Component));
    var OPTIONS = new Set([
        'items',
        'margin',
        'loop',
        'center',
        'mouseDrag',
        'touchDrag',
        'pullDrag',
        'freeDrag',
        'stagePadding',
        'merge',
        'mergeFit',
        'autoWidth',
        'startPosition',
        'URLhashListener',
        'nav',
        'rewind',
        'navText',
        'navElement',
        'slideBy',
        'dots',
        'dotsEach',
        'dotData',
        'lazyLoad',
        'lazyContent',
        'autoplay',
        'autoplayTimeout',
        'autoplayHoverPause',
        'smartSpeed',
        'fluidSpeed',
        'autoplaySpeed',
        'navSpeed',
        'dotsSpeed',
        'dragEndSpeed',
        'callbacks',
        'responsive',
        'responsiveRefreshRate',
        'responsiveBaseElement',
        'video',
        'videoHeight',
        'videoWidth',
        'animateOut',
        'animateIn',
        'fallbackEasing',
        'info',
        'nestedItemSelector',
        'itemElement',
        'stageElement',
        'navContainer',
        'dotsContainer',
        // 'CLASSES'
        'refreshClass',
        'loadingClass',
        'loadedClass',
        'rtlClass',
        'dragClass',
        'grabClass',
        'stageClass',
        'stageOuterClass',
        'navContainerClass',
        'navClass',
        'controlsClass',
        'dotClass',
        'dotsClass',
        'autoHeightClass',
        'responsiveClass',
        // 'EVENTS'
        'onInitialize',
        'onInitialized',
        'onResize',
        'onResized',
        'onRefresh',
        'onRefreshed',
        'onDrag',
        'onDragged',
        'onTranslate',
        'onTranslated',
        'onChange',
        'onChanged',
        'onLoadLazy',
        'onLoadedLazy',
        'onStopVideo',
        'onPlayVideo',
    ]);
    function filterOptions(item) {
        var options = {};
        var propsWithoutOptions = {};
        Object.keys(item).forEach(function (key) {
            if (OPTIONS.has(key)) {
                options[key] = item[key];
            }
            else {
                propsWithoutOptions[key] = item[key];
            }
        });
        return [options, propsWithoutOptions];
    }

    return ReactOwlCarousel;

})));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wedevoop-slider/owl-testimonial-carousel","version":"0.1.0","title":"Owl Testimonial Carousel","category":"widgets","textdomain":"owl-testimonial-carousel","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"slidesToShow":{"type":"number","default":1},"sliderToShowOnTablet":{"type":"number","default":1},"sliderToShowOnMobile":{"type":"number","default":1},"speed":{"type":"number","default":300},"dots":{"type":"boolean","default":true},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":3000}},"supports":{"align":["wide","full"],"html":false,"anchor":true}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkowl_testimonial_carousel"] = globalThis["webpackChunkowl_testimonial_carousel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map