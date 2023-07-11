// auto fill form data using dom object
// document.addEventListener('DOMContentLoaded', function() {
// 	chrome.tabs.executeScript(null,{code:getUserName()});
// });

getUserName();
function getUserName(){
    const username = 'username';
    inputfields = document.querySelectorAll('input[type=text]');
    for(let i=0;i<inputfields.length;i++){
        if (inputfields[i].placeholder.toLowerCase() === username || 
        inputfields[i].name.toLowerCase() === username){
            inputfields[i].value = "test";
        }
    }
}

