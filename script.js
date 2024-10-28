function copyToClipboard(element) {
    var text = document.querySelector(element).textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('📋 Code copied to clipboard!');
    }, function(err) {
        alert('❌ Could not copy text: ' + err);
    });
}

function runCode(element) {
    var code = document.querySelector(element).textContent;
    try {
        eval(code);
    } catch (e) {
        alert('❌ Error in code execution: ' + e.message);
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}