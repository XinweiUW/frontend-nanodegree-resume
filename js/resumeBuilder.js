/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Xinwei Liu";
 var formattedName = HTMLheaderName.replace("%data%", name);
 $("#header").append(formattedName);

 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
  $("#header").append(formattedRole);
