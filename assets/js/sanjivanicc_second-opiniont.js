
// *** COMMON CROSS-BROWSER COMPATIBILITY CODE ***


	function onSubmit(){
       
		if (document.Enquiry.contact_person.value  == "")
		{
			alert("Please enter Contact Person Name .");
			document.Enquiry.contact_person.focus()
			return false;
        }
        if (document.Enquiry.from.value  == "")
	{
		alert("Please enter Email Address.");
		document.Enquiry.from.focus()
		return false;
	}	
		if (document.Enquiry.telNo.value  == "")
		{
			alert("Please enter Telephone No .");
			document.Enquiry.telNo.focus()
			return false;
		}
		
        if (document.Enquiry.Appointment_Date.value  == "")
        {
            alert("Please enter Preferred Date.");
            document.Enquiry.Appointment_Date.focus();
            return false;
        }

        
	if (document.Enquiry.Address.value  == "")
	{
		alert("Please enter your Address.");
		document.Enquiry.Address.focus();
		return false;
	}
	
	
    if (document.Enquiry.requirement_details.value  == "")
	{
		alert("Please enter Requirement Details .");
		document.Enquiry.requirement_details.focus();
		return false;
	}	



    if (document.Enquiry.Diagnosis.value  == "")
	{
		alert("Please enter Diagnosis Details .");
		document.Enquiry.Diagnosis.focus();
		return false;
	}	


    if (document.Enquiry.Reference.value  == "")
	{
		alert("Please enter Reference Doctor Name .");
		document.Enquiry.Reference.focus();
		return false;
	}

    if (document.Enquiry.q.value  == "")
	{
		alert("Please enter captcha code .");
		document.Enquiry.q.focus();
		return false;
	}	

	
}


/*Validation for Home Appointment Form Footer*/
function onSubmitHome(){
	if (document.EnquiryHome.clinic_location.selectedindex==-1){
		alert("Please enter preferred clinic location.");
		document.EnquiryHome.clinic_location.focus();
		return false;
	}
	if (document.EnquiryHome.clinic_location.value  == "")
	{
		alert("Please select Clinic Location");
		document.EnquiryHome.clinic_location.focus();
		return false;
	}
	if (document.EnquiryHome.contact_person.value  == "")
	{
		alert("Please enter Contact Person Name .");
		document.EnquiryHome.contact_person.focus()
		return false;
	}
	if (document.EnquiryHome.from.value  == "")
{
	alert("Please enter Email Address.");
	document.EnquiryHome.from.focus()
	return false;
}	
	if (document.EnquiryHome.telNo.value  == "")
	{
		alert("Please enter Telephone No .");
		document.EnquiryHome.telNo.focus()
		return false;
	}
	
	if (document.EnquiryHome.Appointment_Date.value  == "")
	{
		alert("Please enter Preferred Date.");
		document.EnquiryHome.Appointment_Date.focus();
		return false;
	}

	
if (document.EnquiryHome.Address.value  == "")
{
	alert("Please enter your Address.");
	document.EnquiryHome.Address.focus();
	return false;
}

return true;

}


/*Validation for Quick Appointment Form*/
function onSubmitQuick(){
	if (document.EnquiryQuick.clinic_location.selectedindex==-1){
		alert("Please enter preferred clinic location.");
		document.EnquiryQuick.clinic_location.focus();
		return false;
	}
	if (document.EnquiryQuick.clinic_location.value  == "")
	{
		alert("Please select Clinic Location");
		document.EnquiryQuick.clinic_location.focus();
		return false;
	}
	if (document.EnquiryQuick.contact_person.value  == "")
	{
		alert("Please enter Contact Person Name .");
		document.EnquiryQuick.contact_person.focus()
		return false;
	}
	if (document.EnquiryQuick.from.value  == "")
{
	alert("Please enter Email Address.");
	document.EnquiryQuick.from.focus()
	return false;
}	
	if (document.EnquiryQuick.telNo.value  == "")
	{
		alert("Please enter Telephone No .");
		document.EnquiryQuick.telNo.focus()
		return false;
	}
	
	if (document.EnquiryQuick.Appointment_Date.value  == "")
	{
		alert("Please enter Preferred Date.");
		document.EnquiryQuick.Appointment_Date.focus();
		return false;
	}

	
if (document.EnquiryQuick.Address.value  == "")
{
	alert("Please enter your Address.");
	document.EnquiryQuick.Address.focus();
	return false;
}

return true;

}