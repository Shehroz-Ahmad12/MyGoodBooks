      
      var $editlistForm = $('#editlistform');
      
      if($editlistForm.length){
      
      $editlistForm.validate({
          rules:{
            
            status: {
                  required: true
            },
            rating: {
                required: true
            }
            
          },
          messages:{
            status: {
              required: 'Please Choose Status'
            },
            rating: {
                required: 'Please enter your rating'
            }
            
          },
          errorPlacement: function(error, element) 
          {
                error.insertAfter( element );
           }
      });
    }

    