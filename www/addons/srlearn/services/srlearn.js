angular.module('mm.addons.srlearn')
.service("srlLearnData", function(){
    return {
    	'help_list' : [
    		{
    			'topic' : 'login',
    			'name'	: 'Login',
    			'images': ["01.png"],
    			'text'	: ["When you launch the application for the first time, the system will request that you login. To log in to the application, use the same username/email and password that you have used to log in to the main web site of the e-learning platform. If you do not have a password or an account, select the yellow 'Sign Up' button on the screen, which direct you to creating an account."]
    		},
    		{
    			'topic' : 'register',
    			'name'	: 'Register',
    			'images': ['01.png', '02.png', '03.png'],
    			'text'	: [
    				"When you launch the application for the first time you are presented with the ability to log into the system with the same credentials used to log into the website of the E-Learning platform. If you do not have an account, you can create an account by selecting the yellow button labelled ‘Sign Up’.",
    				"Registration can only be completed on the website of the E-Learning platform. Therefore, when you select the ‘Sign Up’ button, the system will redirect you from the mobile application to a website using the phone’s browser.",
    				"When presented with the website of the E-Learning platform, the log-in page is displayed as illustrated in the image. The user will simply add a new email and a new password and the system will begin the process of creating a new account."
    			]
    		},
    		{
    			'topic' : 'addCourse',
    			'name'	: 'Add New Course',
    			'images': ['04.png','05.png','06.png','07.png','08.png','09.png','10.png'],
    			'text'	: [
    				"After the user is successfully logged in, the app will direct the user to a listing of all of the courses that the user has selected. “Note that this is not the full list of all courses that the system provides.” Therefore, a user must be ‘enrolled’ in the course before it can be in the list displayed in the mobile application.",
    				"To the bottom of the listing, there is a green button labelled “Add New Course” which will direct the user to the full course listing page of the E-Learning platform. ",
    				"This full list of courses is located only on the website. Therefore, the system will provide a confirmation before leaving the application to launch the device’s browser. Please note that you will be required to log into the website to add a new course (enroll).",
    				"The website will present the course listings based on the categories available in the system. Note the system will show how much courses are available within the category. This number is shown on the top right corner of the image used to represent the category.",
    				"After selecting a category, a list of the courses within that category is displayed.",
    				"When you select the course you will like to add, the system will ask you to log in, if you have not previously logged in to the website.",
    				"After the user logs in, the course will have a blue button labelled ‘Enrol me’ which will add the course to the list of courses for the user. After adding the course, the user can relaunch the app and they will see the course recently added."
    			]
    		}
    	]
    }
})