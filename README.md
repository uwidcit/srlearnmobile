SRLearn Mobile App
=================
Attempting to use the Moodle Mobile app as the basis of a customization for the Official App of the E-Learning platform of the Caribbean Small Ruminant  Project

Customizations
The following section highlights the customizations made to the app thus far.
* Customized the login credentials to include a button specifically for directing the user to the registration page.
* Customized the courses list controller and template in /www/core/components/courses for the button to direct to new course and branding

This work is based on the official Moodle documentation for customizing the Mobile application:
 * [Creating a custom Moodle Mobile 2 app](https://docs.google.com/presentation/d/1HX5h7zwtay4amaY3qyLuCLfI7kQCiD9IoWuDH-lSa_0/edit#slide=id.p)
 * [Environment Configuration](https://docs.moodle.org/dev/Setting_up_your_development_environment_for_Moodle_Mobile_2)
 * [Moodle App Suite](https://moodle.org/plugins/browse.php?list=set&id=62)
Prerequisits

Steps:
 * sudo npm install -g gulp
 * npm install 
 * gem install sass (ruby)
 * bower install
 * ionic state restore
 * gulp
 * ionic serve --browser chromium

Moodle Mobile 2.x
=================

This is the primary repository of source code for the official Moodle Mobile app version 2.x.

* [User documentation](http://docs.moodle.org/en/Moodle_Mobile)
* [Developer documentation](http://docs.moodle.org/dev/Moodle_Mobile)
* [Bug Tracker](https://tracker.moodle.org/browse/MOBILE)
* [Release Notes](http://docs.moodle.org/dev/Moodle_Mobile_Release_Notes)

License
-------

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)