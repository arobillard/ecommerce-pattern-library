(function () {
/**
 * Patternbot includes
 * https://github.com/thomasjbradley/patternbot-includes
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @copyright 2018 Thomas J Bradley
 * @license MIT
 */
const patternBotIncludes = function (manifest) {
  'use strict';

  const loadingScreenConfig = {
    id: 'patternbot-loading-screen',
    cssId: 'patternbot-loading-screen-css',
    get css() { return `
      div#${loadingScreenConfig.id} {
        all: initial;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${manifest.commonInfo.readme.attributes.backgroundColour};
        border: 0;
        opacity: 1;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        text-align: center;
      }

      h1#patternbot-loading-screen-title {
        all: initial;
        margin: 0;
        padding: 0;
        background-color: transparent;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        text-align: center;
      }

      svg#patternbot-loading-gears {
        margin-bottom: 10px;
        height: 64px;
        width: 64px;
        opacity: .8;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-top {
        opacity: .5;
        animation: patternbot-loading-spin 2s linear infinite;
        transform-origin: 80.8px 80.8px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-bottom {
        opacity: .7;
        animation: patternbot-loading-spin 2s linear reverse infinite;
        transform-origin: 176.3px 176.3px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      @keyframes patternbot-loading-spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `},
    get html() { return `
      <div id="${loadingScreenConfig.id}">
        <svg id="patternbot-loading-gears" viewBox="0 0 256 256" width="256" height="256">
          <path id="patternbot-loading-gears-top" d="M151.3 86.9a51.3 51.3 0 0 0 .2-6.1 51.3 51.3 0 0 0-.2-6.1l-12-.9a57.9 57.9 0 0 0-4.3-15.9l9.9-6.8a59.2 59.2 0 0 0-6.1-10.6l-10.9 5a59.6 59.6 0 0 0-11.6-11.6l5.3-10.9a59.2 59.2 0 0 0-10.6-6.2l-7.1 9.7a60.2 60.2 0 0 0-15.8-4.2l-.9-12a57.5 57.5 0 0 0-6.4-.2 51.3 51.3 0 0 0-6.1.2l-.9 12A57.9 57.9 0 0 0 58 26.5l-7-9.7A59.2 59.2 0 0 0 40.4 23l5 10.9a68.4 68.4 0 0 0-11.8 11.5l-10.6-5A59.2 59.2 0 0 0 16.8 51l9.7 6.8a59.5 59.5 0 0 0-4.2 16l-11.8.9a23 23 0 0 0-.5 5.9 51.3 51.3 0 0 0 .2 6.1l11.8.9a59.5 59.5 0 0 0 4.2 16l-9.7 6.8a59.2 59.2 0 0 0 6.1 10.6l10.6-5A54.8 54.8 0 0 0 45 127.6l-5 10.9a59.2 59.2 0 0 0 10.6 6.1l6.8-9.7a60.2 60.2 0 0 0 15.8 4.2l.9 12h6.4a51.3 51.3 0 0 0 6.1-.2l.9-12a60.2 60.2 0 0 0 15.8-4.2l6.8 9.9a59.2 59.2 0 0 0 10.6-6.1l-5-11.1a53.7 53.7 0 0 0 11.6-11.6l10.9 5.2a59.2 59.2 0 0 0 6.1-10.6l-9.7-6.8a60.2 60.2 0 0 0 4.2-15.8zm-70.5 29.3a35.4 35.4 0 1 1 35.4-35.4 35.3 35.3 0 0 1-35.4 35.4z"/>
          <path id="patternbot-loading-gears-bottom" d="M242.8 200.6a51.3 51.3 0 0 0 1.8-5.9 51.3 51.3 0 0 0 1.4-6l-11.4-4a57.9 57.9 0 0 0 0-16.4l11.3-4a59.2 59.2 0 0 0-3.2-11.8l-11.8 2a59.6 59.6 0 0 0-8.1-14.2l7.8-9.1a59.2 59.2 0 0 0-8.7-8.7l-9.4 7.5a60.2 60.2 0 0 0-14.2-8.2l2.2-11.9a57.5 57.5 0 0 0-6.1-1.9 51.3 51.3 0 0 0-6-1.4l-4 11.4a57.9 57.9 0 0 0-16.4 0l-4.1-11.1a59.2 59.2 0 0 0-11.8 3.2l2 11.8a68.4 68.4 0 0 0-14.4 8.1l-9-7.5a59.2 59.2 0 0 0-8.7 8.7l7.6 9.1a59.5 59.5 0 0 0-8.3 14.4l-11.3-2.4a23 23 0 0 0-2 5.6 51.3 51.3 0 0 0-1.4 6l11.1 4a59.5 59.5 0 0 0-.1 16.6l-11.1 4.1a59.2 59.2 0 0 0 3.2 11.8l11.5-2a54.8 54.8 0 0 0 8.4 14.2l-7.6 9.2a59.2 59.2 0 0 0 8.7 8.7l9.1-7.6a60.2 60.2 0 0 0 14.2 8.2l-2.3 11.9 6.1 1.7a51.3 51.3 0 0 0 6 1.4l4-11.4a60.2 60.2 0 0 0 16.4 0l4 11.3a59.2 59.2 0 0 0 11.8-3.2l-1.9-12a53.7 53.7 0 0 0 14.2-8.1l9.1 7.8a59.2 59.2 0 0 0 8.7-8.7l-7.6-9.1a60.2 60.2 0 0 0 8.2-14.2zm-75.7 9.9a35.4 35.4 0 1 1 43.4-24.9 35.3 35.3 0 0 1-43.4 24.9z"/>
        </svg>
        <h1 id="patternbot-loading-screen-title">Building page…</h1>
      </div>
    `},
  };

  let downloadedAssets = {};

  const downloadHandler = function (e) {
    e.target.removeEventListener('load', downloadHandler);
    downloadedAssets[e.target.getAttribute('href')] = true;
  };

  const findRootPath = function () {
    const rootMatcher = /\/common\//;
    const allScripts = document.querySelectorAll('script:not([type])');
    let t = allScripts.length, i = 0;

    for (i = 0; i < t; i++) {
      if (rootMatcher.test(allScripts[i].src)) {
        return allScripts[i].src.split(rootMatcher)[0];
        break;
      }
    }
  };

  const addCssFile = function (href) {
    const newLink = document.createElement('link');

    downloadedAssets[href] = false;

    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('href', href);
    newLink.addEventListener('load', downloadHandler);

    document.head.appendChild(newLink);
  }

  const bindAllCssFiles = function (rootPath) {
    if (manifest.commonInfo && manifest.commonInfo.readme && manifest.commonInfo.readme.attributes &&  manifest.commonInfo.readme.attributes.fontUrl) {
      addCssFile(manifest.commonInfo.readme.attributes.fontUrl);
    }

    if (manifest.patternLibFiles && manifest.patternLibFiles.commonParsable) {
      if (manifest.patternLibFiles.commonParsable.modulifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.modulifier}`);
      if (manifest.patternLibFiles.commonParsable.gridifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.gridifier}`);
      if (manifest.patternLibFiles.commonParsable.typografier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.typografier}`);
      if (manifest.patternLibFiles.commonParsable.theme) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.theme}`);
    }

    manifest.userPatterns.forEach((pattern) => {
      if (!pattern.css) return;

      pattern.css.forEach((css) => {
        addCssFile(`../${css.localPath}`);
      });
    });
  };

  const getPatternInfo = function (patternElem) {
    let patternInfoJson;
    const data = patternElem.innerText.trim();

    if (!data) return {}

    try {
      patternInfoJson = JSON.parse(data);
      return patternInfoJson;
    } catch (e) {
      console.group('JSON error in pattern include');
      console.log(patternElem.dataset.pattern);
      console.log(patternElem.innerText);
      console.log(e);
      console.groupEnd();
      return {};
    }
  };

  const getPatternUrl = function (rootPath, patternName) {
    patternName = (patternName.slice(-5) === '.html') ? patternName.slice(0, -5) : patternName;
    return `${rootPath}/patterns/${patternName}.html`;
  };

  const constructPattern = function (rootPath, patternElem) {
    return {
      name: patternElem.dataset.pattern,
      url: getPatternUrl(rootPath, patternElem.dataset.pattern),
      html: false,
      elem: false,
    };
  };

  const htmlStringToElem = function (html) {
    const doc = (new DOMParser()).parseFromString(html, 'text/html');
    return doc.body;
  };

  const replaceElementValue = function (elem, sel, data) {
    elem.innerText = data;
  };

  const replaceAttributeValue = function (elem, sel, data) {
    const isXlinkAttr = /xlink\:/.test(sel);
    const attr = sel.match(/\[([^\]]+)\]$/)[1];

    if (isXlinkAttr) {
      elem.setAttributeNS('http://www.w3.org/1999/xlink', attr, data);
    } else {
      elem.setAttribute(attr, data);
    }
  };

  const outputPattern = function (patternElem, patternDetails) {
    let patternOutElem, patternData;

    if (!patternDetails.html) return;

    patternOutElem = htmlStringToElem(patternDetails.html);
    patternData = getPatternInfo(patternElem);

    Object.keys(patternData).forEach((sel) => {
      const isAttributeSelector = /\[.*\]/.test(sel);
      const jsSel = sel.replace(/\[.*:/, '[*|');
      const elem = patternOutElem.querySelector(jsSel);

      if (!elem) {
        console.group('Cannot find element');
        console.log(`Selector: ${sel}`);
        console.log(`Pattern: ${patternDetails.name}`);
        console.log(JSON.stringify(patternData, null, 2));
        console.groupEnd();
        return;
      }

      if (isAttributeSelector) {
        replaceAttributeValue(elem, sel, patternData[sel]);
      } else {
        replaceElementValue(elem, sel, patternData[sel]);
      }
    });

    patternElem.parentNode.replaceChild(patternOutElem.firstElementChild, patternElem);
  };

  const showLoadingScreen = function () {
    const loadCssElem = document.createElement('style');

    loadCssElem.id = loadingScreenConfig.cssId;
    loadCssElem.appendChild(document.createTextNode(loadingScreenConfig.css));
    document.head.appendChild(loadCssElem);
    document.body.innerHTML += loadingScreenConfig.html;
  };

  const hideLoadingScreen = function () {
    const allDownloadedInterval = setInterval(() => {
      if (Object.values(downloadedAssets).includes(false)) return;

      clearInterval(allDownloadedInterval);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(loadingScreenConfig.id).remove();
          document.getElementById(loadingScreenConfig.cssId).remove();
        });
      });
    }, 50);
  };

  const findAllPatternTags = function () {
    return document.querySelectorAll('script[type="application/json"][data-pattern]');
  };

  const constructAllPatterns = function (rootPath, allPatternTags) {
    let allPatterns = {};

    [].forEach.call(allPatternTags, (patternElem) => {
      if (allPatterns[patternElem.dataset.pattern]) return;

      allPatterns[patternElem.dataset.pattern] = constructPattern(rootPath, patternElem);
    });

    return allPatterns;
  };

  const buildPatternFetchPromises = function (allPatternUrls) {
    return allPatternUrls.map((url) => {
      return new Promise((resolve, reject) => {
        downloadedAssets[url] = false;

        fetch(url).then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.text();
          } else {
            console.group('Cannot location pattern');
            console.log(resp.url);
            console.log(`Error ${resp.status}: ${resp.statusText}`);
            console.groupEnd();
            return '';
          }
        }).then(function (html) {
          downloadedAssets[url] = true;
          resolve(html);
        }).catch((e) => {
          console.group('Download error');
          console.log(url);
          console.log(e);
          console.groupEnd();
          resolve('');
        });
      });
    });
  };

  const loadAllPatterns = function (allPatterns) {
    let patternUrls = {};
    let allPatternKeys = Object.keys(allPatterns);

    allPatternKeys.forEach((patternKey) => {
      patternUrls[patternKey] = allPatterns[patternKey].url;
    });

    return new Promise((resolve, reject) => {
      Promise.all(buildPatternFetchPromises(Object.values(patternUrls))).then((allPatternsHtml) => {
        allPatternsHtml.forEach((html, i) => {
          allPatterns[allPatternKeys[i]].html = html;
        });
        resolve(allPatterns);
      }).catch((e) => {
        console.group('Pattern load error');
        console.log(e);
        console.groupEnd();
        resolve(allPatterns);
      });
    });
  };

  const renderAllPatterns = function (allPatternTags, allLoadedPatterns) {
    [].forEach.call(allPatternTags, (elem) => {
      outputPattern(elem, allLoadedPatterns[elem.dataset.pattern]);
    });
  };

  const init = function () {
    let rootPath, patternsToLoad, allPatternTags = [], allPatterns = [];

    showLoadingScreen();

    rootPath = findRootPath();
    bindAllCssFiles(rootPath);
    allPatternTags = findAllPatternTags();
    allPatterns = constructAllPatterns(rootPath, allPatternTags);

    loadAllPatterns(allPatterns).then((allLoadedPatterns) => {
      renderAllPatterns(allPatternTags, allLoadedPatterns);
      hideLoadingScreen();
    }).catch((e) => {
      console.group('Pattern load error');
      console.log(e);
      console.groupEnd();
    });
  };

  document.addEventListener('DOMContentLoaded', init);
};


/** 
 * Patternbot library manifest
 * /Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library
 * @version 1520359263794
 */
const patternManifest_1520359263794 = {
  "commonInfo": {
    "modulifier": [
      "responsive",
      "images",
      "list-group",
      "embed",
      "media-object",
      "icons",
      "hidden",
      "positioning",
      "nice-lists",
      "forms",
      "buttons",
      "accessibility",
      "print"
    ],
    "modulifierUrl": "responsive;images;list-group;embed;media-object;icons;hidden;positioning;nice-lists;forms;buttons;accessibility;print",
    "gridifier": [
      {
        "prefix": "xs",
        "columns": 4,
        "mq": 0
      },
      {
        "prefix": "s",
        "columns": 4,
        "mq": 25
      },
      {
        "prefix": "m",
        "columns": 6,
        "mq": 38
      },
      {
        "prefix": "l",
        "columns": 6,
        "mq": 60
      }
    ],
    "gridifierUrl": "xs,4,0,0,0;s,4,25,0,0;m,6,38,1,1;l,6,60,1,1",
    "typografier": [
      {
        "mq": 0,
        "fontSize": 100,
        "lineHeight": 1.3,
        "scale": 1.2
      },
      {
        "mq": 38,
        "fontSize": 110,
        "lineHeight": 1.4,
        "scale": 1.25
      },
      {
        "mq": 60,
        "fontSize": 120,
        "lineHeight": 1.5,
        "scale": 1.333
      },
      {
        "mq": 90,
        "fontSize": 130,
        "lineHeight": 1.5,
        "scale": 1.333
      }
    ],
    "typografierUrl": "0,100,1.3,1.200,0;38,110,1.4,1.250,1;60,120,1.5,1.333,1;90,130,1.5,1.333,1",
    "theme": {
      "colours": {
        "primary": [
          {
            "name": "--color-primary",
            "namePretty": "Primary",
            "raw": "#00953b",
            "hex": "#00953b",
            "rgba": "rgba(0, 149, 59, 1)"
          },
          {
            "name": "--color-primary-light",
            "namePretty": "Primary light",
            "raw": "#7ccb99",
            "hex": "#7ccb99",
            "rgba": "rgba(124, 203, 153, 1)"
          },
          {
            "name": "--color-primary-dark",
            "namePretty": "Primary dark",
            "raw": "#034b26",
            "hex": "#034b26",
            "rgba": "rgba(3, 75, 38, 1)"
          }
        ],
        "secondary": [
          {
            "name": "--color-secondary",
            "namePretty": "Secondary",
            "raw": "#666",
            "hex": "#666",
            "rgba": "rgba(102, 102, 102, 1)"
          },
          {
            "name": "--color-secondary-dark",
            "namePretty": "Secondary dark",
            "raw": "#333",
            "hex": "#333",
            "rgba": "rgba(51, 51, 51, 1)"
          }
        ],
        "neutral": [],
        "accent": [
          {
            "name": "--color-grey-medium",
            "namePretty": "Grey medium",
            "raw": "#f3f3f3",
            "hex": "#f3f3f3",
            "rgba": "rgba(243, 243, 243, 1)"
          },
          {
            "name": "--color-grey-light",
            "namePretty": "Grey light",
            "raw": "#fafafa",
            "hex": "#fafafa",
            "rgba": "rgba(250, 250, 250, 1)"
          }
        ]
      },
      "fonts": {
        "primary": {
          "name": "--font-primary",
          "namePretty": "Roboto",
          "raw": "\"Roboto\", sans-serif",
          "weights": {
            "500": {
              "weight": "500",
              "hasNormal": true,
              "hasItalic": false
            },
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": true
            },
            "bold": {
              "weight": "bold",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "secondary": {},
        "accent": []
      },
      "coloursRaw": {
        "--color-primary": "#00953b",
        "--color-primary-light": "#7ccb99",
        "--color-primary-dark": "#034b26",
        "--color-secondary": "#666",
        "--color-secondary-dark": "#333",
        "--color-grey-medium": "#f3f3f3",
        "--color-grey-light": "#fafafa"
      },
      "fontsRaw": {
        "--font-primary": "\"Roboto\", sans-serif"
      }
    },
    "readme": {
      "attributes": {
        "backgroundColor": "#f3f3f3",
        "name": "TopTable",
        "fontUrl": "https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700",
        "backgroundColour": "#f3f3f3",
        "interfaceColours": {
          "primary": 0,
          "opposite": 255
        }
      }
    },
    "icons": [
      "cart",
      "facebook",
      "instagram",
      "profile",
      "search",
      "twitter"
    ],
    "interfaceColours": {
      "primary": 0,
      "opposite": 255
    }
  },
  "patternLibFiles": {
    "commonParsable": {
      "gridifier": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/common/grid.css",
      "typografier": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/common/type.css",
      "modulifier": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/common/modules.css",
      "theme": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/common/theme.css"
    },
    "imagesParsable": {
      "icons": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/images/icons.svg"
    },
    "logos": {
      "sizeLarge": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/images/logo.svg",
      "size64": false,
      "size32": false,
      "size16": false,
      "sizeLargeLocal": "logo.svg"
    },
    "patterns": [
      "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/banners",
      "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/buttons",
      "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/cards",
      "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/footer",
      "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms",
      "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/header",
      "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/navigation",
      "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/sections"
    ],
    "pages": []
  },
  "userPatterns": [
    {
      "name": "banners",
      "namePretty": "Banners",
      "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/banners",
      "html": [
        {
          "name": "banner",
          "namePretty": "Banner",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/banners/banner.html",
          "localPath": "patterns/banners/banner.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/banners/README.md",
          "localPath": "patterns/banners/README.md"
        }
      ],
      "css": [
        {
          "name": "banners",
          "namePretty": "Banners",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/banners/banners.css",
          "localPath": "patterns/banners/banners.css"
        }
      ]
    },
    {
      "name": "buttons",
      "namePretty": "Buttons",
      "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/buttons",
      "html": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/buttons/buttons.html",
          "localPath": "patterns/buttons/buttons.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/buttons/README.md",
          "localPath": "patterns/buttons/README.md"
        }
      ],
      "css": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/buttons/buttons.css",
          "localPath": "patterns/buttons/buttons.css"
        }
      ]
    },
    {
      "name": "cards",
      "namePretty": "Cards",
      "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/cards",
      "html": [
        {
          "name": "category-cards",
          "namePretty": "Category cards",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/cards/category-cards.html",
          "localPath": "patterns/cards/category-cards.html",
          "readme": {
            "width": 600,
            "padding": "1.5rem"
          }
        },
        {
          "name": "preview-card",
          "namePretty": "Preview card",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/cards/preview-card.html",
          "localPath": "patterns/cards/preview-card.html",
          "readme": {
            "width": 600,
            "padding": "1.5rem"
          }
        },
        {
          "name": "product-card",
          "namePretty": "Product card",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/cards/product-card.html",
          "localPath": "patterns/cards/product-card.html",
          "readme": {
            "width": 500,
            "padding": "1.5rem"
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/cards/README.md",
          "localPath": "patterns/cards/README.md"
        }
      ],
      "css": [
        {
          "name": "cards",
          "namePretty": "Cards",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/cards/cards.css",
          "localPath": "patterns/cards/cards.css"
        }
      ]
    },
    {
      "name": "footer",
      "namePretty": "Footer",
      "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/footer",
      "html": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/footer/footer.html",
          "localPath": "patterns/footer/footer.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/footer/README.md",
          "localPath": "patterns/footer/README.md"
        }
      ],
      "css": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/footer/footer.css",
          "localPath": "patterns/footer/footer.css"
        }
      ]
    },
    {
      "name": "forms",
      "namePretty": "Forms",
      "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms",
      "html": [
        {
          "name": "checkbox",
          "namePretty": "Checkbox",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/checkbox.html",
          "localPath": "patterns/forms/checkbox.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "numbers",
          "namePretty": "Numbers",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/numbers.html",
          "localPath": "patterns/forms/numbers.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "password",
          "namePretty": "Password",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/password.html",
          "localPath": "patterns/forms/password.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "radio",
          "namePretty": "Radio",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/radio.html",
          "localPath": "patterns/forms/radio.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "select",
          "namePretty": "Select",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/select.html",
          "localPath": "patterns/forms/select.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "text-area",
          "namePretty": "Text area",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/text-area.html",
          "localPath": "patterns/forms/text-area.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "text",
          "namePretty": "Text",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/text.html",
          "localPath": "patterns/forms/text.html",
          "readme": {
            "width": 400
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/README.md",
          "localPath": "patterns/forms/README.md"
        }
      ],
      "css": [
        {
          "name": "forms",
          "namePretty": "Forms",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/forms/forms.css",
          "localPath": "patterns/forms/forms.css"
        }
      ]
    },
    {
      "name": "header",
      "namePretty": "Header",
      "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/header",
      "html": [
        {
          "name": "header",
          "namePretty": "Header",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/header/header.html",
          "localPath": "patterns/header/header.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/header/README.md",
          "localPath": "patterns/header/README.md"
        }
      ],
      "css": [
        {
          "name": "header",
          "namePretty": "Header",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/header/header.css",
          "localPath": "patterns/header/header.css"
        }
      ]
    },
    {
      "name": "navigation",
      "namePretty": "Navigation",
      "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/navigation",
      "html": [
        {
          "name": "product-categories",
          "namePretty": "Product categories",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/navigation/product-categories.html",
          "localPath": "patterns/navigation/product-categories.html",
          "readme": {}
        },
        {
          "name": "product-search",
          "namePretty": "Product search",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/navigation/product-search.html",
          "localPath": "patterns/navigation/product-search.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/navigation/README.md",
          "localPath": "patterns/navigation/README.md"
        }
      ],
      "css": [
        {
          "name": "navigation",
          "namePretty": "Navigation",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/navigation/navigation.css",
          "localPath": "patterns/navigation/navigation.css"
        }
      ]
    },
    {
      "name": "sections",
      "namePretty": "Sections",
      "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/sections",
      "html": [
        {
          "name": "photo-array",
          "namePretty": "Photo array",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/sections/photo-array.html",
          "localPath": "patterns/sections/photo-array.html",
          "readme": {
            "width": 600,
            "padding": "1.5rem"
          }
        },
        {
          "name": "section-light",
          "namePretty": "Section light",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/sections/section-light.html",
          "localPath": "patterns/sections/section-light.html",
          "readme": {
            "padding": "1.5rem 0"
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/sections/README.md",
          "localPath": "patterns/sections/README.md"
        }
      ],
      "css": [
        {
          "name": "sections",
          "namePretty": "Sections",
          "path": "/Users/robillard-adam/OneDrive - Algonquin College/school-algonquin/graphic-design/semester-4/web-development-4/pattern-library/ecommerce-pattern-library/patterns/sections/sections.css",
          "localPath": "patterns/sections/sections.css"
        }
      ]
    }
  ],
  "config": {
    "patternLibFilename": "index.html",
    "manifestFilename": ".patternbot-manifest.json",
    "includesFilename": "patternbot.js",
    "commonFolder": "/common",
    "commonParsableFilenames": {
      "modulifier": "modules.css",
      "gridifier": "grid.css",
      "typografier": "type.css",
      "theme": "theme.css"
    },
    "imagesFolder": "/images",
    "imagesParsableFilenames": {
      "icons": "icons.svg"
    },
    "patternsFolder": "/patterns",
    "pagesFolder": "/pages"
  }
};

patternBotIncludes(patternManifest_1520359263794);
}());