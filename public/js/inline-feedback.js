if (typeof Promise !== "function" && document.querySelector('details') !== null) {
    document.write('<script src="/js/details-element-polyfill.js"><\/script>');
}
var inlineFeedbackDiv = document.querySelector('.inline-feedback')
var inlineFeedbackDivClasses = inlineFeedbackDiv.classList
var componentOpenClass = 'expanded'
const inlineFeedbackOpenEl = inlineFeedbackDiv.querySelector('a.open')
const inlineFeedbackCloseEl = inlineFeedbackDiv.querySelector('a.close')

inlineFeedbackOpenEl.addEventListener("click", function(e) {	
    e.preventDefault();	
    inlineFeedbackDivClasses.add(componentOpenClass);	
    return false;	
});	

inlineFeedbackCloseEl.addEventListener("click", function(e) {	
    e.preventDefault();	
    inlineFeedbackDivClasses.remove(componentOpenClass);	
    return false;	
});