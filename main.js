$(document).ready(function () {

  $$('#btnValidate').click(function() {
var sEmail = $('#emailaddress').val();
// Checking Empty Fields
function validateEmail(sEmail) {
var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if (filter.test(sEmail)) {
return true;
}
else {
return false;
}
}
e.preventDefault();
})
if (validateEmail(sEmail)) {
alert('Nice!! your Email is valid!');
}
else {
alert('Invalid Email Address');
e.preventDefault();
}
});
