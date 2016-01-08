/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
 var name = "Xinwei Liu";
 var formattedName = HTMLheaderName.replace("%data%", name);
 $("#header").append(formattedName);

 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
  $("#header").append(formattedRole);
*/

var work = {
	"jobs": [
		{
			"employer": "Qualtrics",
			"title": "Software Engineer",
			"location": "Seattle",
			"Dates": "2015",
			"description": "Professional Service"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Top 10 rides in Seattle",
			"dates": "2014",
			"description": "Introduction on top 10 rides in Seattle"
		}
	]
}

var education = {
	"school" = [
		{
			"name": "University of Washington",
			"city": "Seattle",
			"degree": "Master of Science",
			"majors": "MSIM",
			"dates": 2015,
			"url":"uw.edu"
		},
		{
			"name": "Sun Yat-sen University",
			"city": "Guangzhou",
			"degree": "Bachelor of Engineering",
			"majors": "Communication Engineering",
			"dates": 2013,
			"url":"sysu.edu"
		}
	]
}

 var bio = {
 	"name": "Xinwei Liu",
 	"role": "Web Developer",
 	"email": "xinweiliu6@gmail.com",
 	"picURL": "images/fry.jpg",
 	"welcomeMsg": "Hello World!",
 	"skills": "Javascript"
 };

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 $("#header").append(formattedName);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").append(formattedRole);
 var formattedEmail = HTMLemail.replace("%data%", bio.email);
 $("#header").append(formattedEmail);
 var formattedPicURL = HTMLbioPic.replace("%data%", bio.picURL);
 $("#header").append(formattedPicURL);
 var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
 $("#header").append(formattedWelcomeMsg);
 var formattedSkills = HTMLskills.replace("%data%", bio.skills);
 $("#header").append(formattedSkills);






