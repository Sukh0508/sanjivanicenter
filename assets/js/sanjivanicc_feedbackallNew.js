
// *** COMMON CROSS-BROWSER COMPATIBILITY CODE ***


	function onSubmit(){
	if (document.Enquiry.contact_person.value == "")
	{
		alert("Please enter Contact Person Name .");
		document.Enquiry.contact_person.focus()
		return false;
	}
	if (document.Enquiry.telNo.value == "")
	{
		alert("Please enter Telephone No .");
		document.Enquiry.telNo.focus()
		return false;
	}

		if (document.Enquiry.from.value == "")
	{
		alert("Please enter Email Address.");
		document.Enquiry.from.focus()
		return false;
	}
	
	if (document.Enquiry.clinic_location.selectedindex==-1){
		alert("Please enter preferred clinic location.");
		document.Enquiry.clinic_location.focus();
		return false;
	}

	if (document.Enquiry.clinic_location.value == "")
    	{
        	alert("Please select Clinic Location");
        	document.Enquiry.clinic_location.focus();
        	return false;
    	}

	if (document.Enquiry.Address.value == "")
	{
		alert("Please enter your Address.");
		document.Enquiry.Address.focus();
		return false;
	}
		
	if (document.Enquiry.requirement_details.value == "")
	{
		alert("Please enter Requirement Details .");
		document.Enquiry.requirement_details.focus();
		return false;
	}
		
	if (document.Enquiry.q.value == "")
	{
		alert("Please enter Captcha code.");
		document.Enquiry.q.focus();
		return false;
	}	
	
}


