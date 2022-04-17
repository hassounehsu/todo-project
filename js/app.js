 var nameUser = prompt(" Enter Your Name");
 var  genderUser= prompt(" Enter Your Gender");
 var age = prompt(" Enter your Age");
 if (age <=0) {
     alert("Please enter a real age");
     prompt(" Enter your Age") ;
 }

  var welcomRusult = confirm("Do you want to skip welcoming message ?");

  if (welcomRusult == false)
      if (genderUser.toLowerCase() == 'male') 
         alert("Welcom Mr "  + nameUser ) ; 
      else if (genderUser.toLowerCase() =='female')  
             alert("Welcom Ms "  + nameUser );  
             else { alert(" welcome " + nameUser);} 
            
        
       
             
    

             
         
         
         
    