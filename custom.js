	
		
	// $('#add_event').on('click',function(){
		// $('.main_div').show();
	// });
	// $('#hide_event').on('click',function(){
		// $('.main_div').hide();
	// });
	var array_val = new Array();
	
	$("#save_submit").on('click',function(){
		
		//primary form input variable
		var event_ven = $('#event_name').val();
		var event_des = $('#event_des').val();
		var event_contact = $('#event_contact').val();
		var event_email = $('#event_email').val();
		var event_phone = $('#event_phone').val();
		//array for storing value of primary form input	
		array_val.push({
			event_ven,
			event_des,
			event_contact,
			event_email,
			event_phone
		});
		 //count the size of secondary forms
		var event_count = $('.submited_event .row').size();
		
		if(event_count == 5){
			alert("Can't be add more then 5 Event", false);
		} 
		else if(event_ven != '' && event_des != '' && event_contact != '' && event_email != '' && event_phone != '' )
		{
			$('.submited_event').append('<div class="row event_temp" event-div-count="1"><div class="form-group col-sm-6"><label>Event Venue</label><input type="text"  value="'+event_ven+'" id="save_event_name1" class="form-control event_name_input" readonly /></div><div class="form-group col-sm-6">	<label>Event Description</label><input type="text" id="save_event_des1" value="'+event_des+'" class="form-control event_des_input" readonly/></div><div class="form-group col-sm-4"><label>Contact name</label><input type="text" id="save_event_contact1" value="'+event_contact+'" class="form-control event_con_input" readonly/></div><div class="form-group col-sm-4"><label>Email id</label><input type="text" id="save_event_email1" value="'+event_email+'" class="form-control event_email_input" readonly/></div><div class="form-group col-sm-4"><label>Phone number</label><input type="text" id="save_event_phone1" value="'+event_phone+'" class="form-control event_phone_input" readonly/></div><div class="form-group text-right"><button  class="btn event_btn" id="">Edit</button><button class="btn btn-danger del_event" id="">Delete</button></div></div>');
		}
		else{
			alert('fill some event details');
			}
			
		//js for auto increment input id
		$('.event_name_input').each(function(i){
			$(this).attr('id', 'save_event_name' + (i+1));
		});
		$('.event_des_input').each(function(i){
			$(this).attr('id', 'save_event_des' + (i+1));
		});
		$('.event_con_input').each(function(i){
			$(this).attr('id', 'save_event_contact' + (i+1));
		});
		$('.event_email_input').each(function(i){
			$(this).attr('id', 'save_event_email' + (i+1));
		});
		$('.event_phone_input').each(function(i){
			$(this).attr('id', 'save_event_phone' + (i+1));
		});
		$('.submited_event .row').each(function(i){
			$(this).attr('event-div-count', (i+1));
		})
		//js for clear form on submit
		$('#event_form input').each(function(){
			$(this).val('');
		});
		//on click delete btn remove event form
		$('.submited_event').on('click','.del_event',function(){
			$(this).closest('.row').remove();
		});
		
		 
		//bing input value to main form
		$('.event_btn').on('click', function () {
			eventname_id = $(this).closest('.event_temp').attr('event-div-count');
			eventname_id = eventname_id -1;
			$.each(array_val,function(key,value){
				if(key == eventname_id){
					$('#event_name').val(value.event_ven);
					$('#event_des').val(value.event_des);
					$('#event_contact').val(value.event_contact);
					$('#event_email').val(value.event_email);
					$('#event_phone').val(value.event_phone);
					$('#update_submit').attr('update_event',eventname_id+1);
				}
			});
			$('#update_submit').show();
			$('#save_submit').hide();
			$('#update_submit').click(function(){
				$('#event_form input').val('');
				$(this).hide();
				$('#save_submit').show();
			});
		});//end 
		
		//onupdate update the value in relevent event
		$('#update_submit').on('click', function () {
			eventname_id = $(this).attr('update_event');
			
			var event_ven = $('#event_name').val();
			var event_des = $('#event_des').val();
			var event_contact = $('#event_contact').val();
			var event_email = $('#event_email').val();
			var event_phone = $('#event_phone').val();

		
			$('#save_event_name'+eventname_id).val(event_ven);
			$('#save_event_des'+eventname_id).val(event_des);
			$('#save_event_contact'+eventname_id).val(event_contact);
			$('#save_event_email'+eventname_id).val(event_email);
			$('#save_event_phone'+eventname_id).val(event_phone);
		
			eventname_id = eventname_id -1;
			$.each(array_val,function(key,value){	
				if(key == eventname_id){
					var temp = {
						event_ven,
						event_des,
						event_contact,
						event_email,
						event_phone
					};
					array_val.splice(key,1,temp);
				}
			});
		});//end 
		
		//on delete btn delete form with value 
		$('.del_event').on('click', function () {
			eventname_id = $(this).closest('.event_temp').attr('event-div-count');
			eventname_id = eventname_id -1;
			$.each(array_val,function(key,value){
				if(key == eventname_id){
				position_of_array = array_val.indexOf(key);
				array_val.splice(position_of_array,1);
				}
			});
		});//end 
		
	});
	
	
	
		 
