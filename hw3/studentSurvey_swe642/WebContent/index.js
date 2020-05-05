$( document ).ready(function() {
	
	Date.prototype.toDateInputValue = (function() {
	    var local = new Date(this);
	    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	    return local.toJSON().slice(0,10);
	});
	
	document.getElementById('date').value = new Date().toDateInputValue();
	    
  //  $('#zipcode').on('blur', validateZipcode);
    $("form").submit(function(e){
        validate(e);
        
    });
});


// $( "form" ).submit(validate())
function wrongPerson(){
    var date = new Date();
    var curr = date.toString();
    document.cookie= "name=null;" + "expires" + curr;
    location.reload();
}
function average(){
    var inputData = document.getElementById("dataBox").value;
    var tokens = inputData.split(",");
    if (tokens.length > 9){
        tokens = tokens.map((x) => parseInt(x, 10));
        var error = tokens.some((item) => item > 100 || item < 1 || isNaN(item));
        if (!error) {
            var arrAvg = tokens.reduce((a,b) => a + b, 0);
            var output = arrAvg / tokens.length;
            var max = Math.max(...tokens);
            document.getElementById("outputAvr").value = output.toString();
            document.getElementById("outputMax").value = max.toString();
        } else {
            $('#outputMax')[0].value = 'Your input is not valid';
            $('#outputAvr')[0].value = 'Your input is not valid';
        }
    } else {
        $('#outputMax')[0].value = 'Your input is not valid';
        $('#outputAvr')[0].value = 'Your input is not valid';
    }
}
function validate(e){
    const allForm = [$('#fullname'),$('#street'),$('#zipcode'),$('#phonenum'),$('#email'),$('#url'),$('#date'), $("input[name='graduationYear']")] // ,$("select[name='DOBMonth']")]
    let ifHaveEmpty = allForm.some((item) => item.val() === '') // likely
    const checkBoxCount = $('input[type="checkbox"]:checked').length;
    let notSubmit = false;
    
    if (!ifHaveEmpty) {
        if($("select[name='DOBMonth']").val() ==='- Month -' || $("select[name='likely']").val() === '-Please select-' || checkBoxCount < 2) {
            ifHaveEmpty = true
            notSubmit = true
        }
    }
    if (ifHaveEmpty) {
        alert('Please finish your form, Thanks')
    }
    if (checkBoxCount < 2) {
        notSubmit = true
        alert('Please select at least 2 reasons');
    }
    const fullname = $('#fullname').val().split(' ').join('');
    const ifValidName = /^[A-Z]+$/i.test(fullname);
    if (!ifValidName) {
        notSubmit = true
        alert('Your name can only contain Alphabets.');
        resetDom($('#fullname'))
    }
    const ifValidAddress = /^[0-9a-zA-Z]+$/.test($('#street').val().split(' ').join(''));
    if (!ifValidAddress) {
        notSubmit = true
        alert('You address input can only contains numeric, alphabet or alphanumeric characters')
        resetDom($('#street'))
    }
    const radioButton = $("input:radio[name='howBecomeInterested']").is(":checked");
    if (!radioButton) {
        notSubmit = true
        alert('Please select how do you hear about us.')
    }
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#email').val());
    if(!emailValidation) {
        notSubmit = true
        alert('Please enter a valid email address.');
        resetDom($('#email'))
    }
    if (notSubmit) {
        e.preventDefault();
    }
}
function resetDom(dom) {
    dom.val('');
}
function reset() {
    $('#fullname').val('');
    $('#street').val('');
    $('#email').val('');
    $('#date').val('');
    $('#city').text('');
    $('#state').text('');
    $('#url').val('');
    $('#phonenum').val('');
    $('#zipcode').val('');
    $('zip_code_error').addClass('hide');
}



//function validateZipcode() {
//    const user_zipcode = $('#zipcode').val();
//    $.getJSON('address.json',function(data){
//        console.log(data);
//        const zipcode = data.zipcodes;
//        const zip_obj = {};
//        zipcode.forEach((item) => {
//            zip_obj[item.zip] = {
//                city: item.city,
//                state: item.state,
//            }
//        });
//        if(zip_obj[user_zipcode]) {
//            $('#city').text(zip_obj[user_zipcode].city);
//            $('#state').text(zip_obj[user_zipcode].state);
//            $('.zip_code_error').addClass('hide');
//            
//        } else {
//            $('#city').text('');
//            $('#state').text('');
//            $('.zip_code_error').removeClass('hide');
//
//        }
//    }).fail(function (jqxhr, textStatus, error) {
//        var err = textStatus + ", " + error;
//        alert("There has been an error. If the problem persists contact the customer service");
//    });
//}
