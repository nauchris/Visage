$( document ).ready(function() {
    $("#target").submit(function(e){

        e.preventDefault();        
        var email = $("#email").val();
        var isValid = validate(email);
        if(isValid)
        {
            $("#error1").remove();
            $("#fountainG").show();
            $.ajax({
                url: 'http://obasiservices.tk/api/v1/email/' + email,
                type: 'get',
                success: function(data){
                    $("#fountainG").hide(); 
                    $("#email").val('');
                    $("#submit").attr("disabled", true);
                    $("#submission").append("<p>" + data + "</p>");
                },
                error: function(){
                    $("#fountainG").hide();
                    $("#email").val('');
                    $("#submit").attr("disabled", true); 
                    $("#submission").append("<p>We seem to be having issues. Please try again later.</p>");
                }
            });  
        }
        else
        {
            $("#submission").append("<p id='error1'>The email that you provided was not valid. Please submit a valid email address.</p>");
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    function validate(email) {
      if (validateEmail(email)) {
        return true;
      } 
      else {
        return false;
      }
    };  
});