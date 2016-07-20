

angular.module('mm.addons.srlearn', [])
.constant('srlAboutPriority', 1000)
.constant('srlImgPath', 'addons/srlearn/img/')

.config(function($stateProvider,  $mmSideMenuDelegateProvider, srlAboutPriority){
	console.log("Configuring SRLearn Module");
	//configure routes
	$stateProvider
		.state("site.srlabout",{
			'url':'/srl_about',
			'views':{
				'site': {
					'controller': 'srlAboutCtrl',
					'templateUrl':'addons/srlearn/templates/about.html'
				}
			}
		})
		.state("site.srlhelp",{
			'url':'/srl_help',
			'views':{
				'site':{
					'templateUrl':'addons/srlearn/templates/help.html',
					'controller': 'srlHelpCtrl'
				}
			}
		});

	// $mmSideMenuDelegateProvider.registerNavHandler('mmaCalendar', '$mmaCalendarHandlers.sideMenuNav', mmaCalendarPriority);
})