
export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 0)
}


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
