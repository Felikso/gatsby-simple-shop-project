/* import createHistory from 'history/createBrowserHistory';
import {
  pageTransitionEvent,
  pageTransitionTime,
  pageTransitionExists,
  componentTransitionTime,
} from './transitions.js';

exports.onClientEntry = (_, { transitionTime }) => {
  global.window[pageTransitionTime] = transitionTime || 250;
};

const getUserConfirmation = (pathname, callback) => {
  const event = new global.window.CustomEvent(pageTransitionEvent, {
    detail: { pathname },
  });
  global.window.dispatchEvent(event);
  const time =
    global.window[componentTransitionTime] || global.window[pageTransitionTime];
  global.window[pageTransitionExists]
    ? setTimeout(() => callback(true), time)
    : callback(true);
};

const history = createHistory({ getUserConfirmation });
history.block(location => location.pathname);
exports.replaceHistory = () => history; */



/* export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 0)
}
 */

// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }


