validateform: function () {

            $.validator.addMethod("emailExt", function(value, element, param) {
                return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
            },'This field is invalid.');

            $('.email-box').on('change',function () {
                var url = "http://umano.project-staging.com/thankyou.html";
                var email = $(this).val();
                $('input[name="returnURL"]').val(url + '?email=' + email);
            });

            $('#book-demo-form').validate({
                highlight: function (element, errorClass, validClass) {
                    $(element).closest('.form-group').addClass(errorClass).removeClass(validClass);
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).closest('.form-group').addClass(validClass).removeClass(errorClass);
                },
                rules: {
                    "First Name": {
                        required: true
                    },
                    "Last Name": {
                        required: true
                    },
                    Email: {
                        required: true,
                        emailExt: true
                    },
                    Phone : {
                        required: true
                    },
                    LEADCF3: {
                        required: true
                    }
                },
                messages: {
                    "First Name": 'This field is required.',
                    "Last Name": 'This field is required.',
                    Phone: 'This field is required.',
                    Email: {
                        required: 'This field is required.',
                        emailExt: 'This field is invalid.',
                    },
                    LEADCF3: 'This field is required.',
                }
            });


        $('#get-in-touch-form').validate({
            highlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').addClass(errorClass).removeClass(validClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').addClass(validClass).removeClass(errorClass);
            },
            rules: {
                "First Name": {
                    required: true
                },
                "Last Name": {
                    required: true
                },
                Email: {
                    required: true,
                    emailExt: true
                },
                Phone : {
                    required: true
                },

                CONTACTCF4: {
                    required: true
                }
            },
            messages: {
                "First Name": 'This field is required.',
                "Last Name": 'This field is required.',
                Phone: 'This field is required.',
                Email: {
                    required: 'This field is required.',
                    emailExt: 'This field is invalid.',
                },
                CONTACTCF4: 'This field is required.'
            }
        });


    },
    
