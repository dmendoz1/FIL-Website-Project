app.factory('quizFactory', function() {
	var frugal = [
		{
			question: "Which of the following words are included in the definition/derivation of the word ‘Frugal?’",
			options: ["Virtuous", "To Enjoy", "Cheap", "Of the Essence", "A, B, & D"],
			answer: "A, B, & D",
		},

		{
			question: "In what year is it estimated that the cumulative GDP of emerging markets (excluding China) will surpass that of the developed world?",
			options: ["2014", "2016", "2022", "2031"],
			answer: "2016",
		},
		{
			question: "Which of the following is the first step of the Design Innovation Process?",
			options: ["Define", "Prototype", "Ideate", "Empathize", "Test"],
			answer: "Empathize",
		},

		{
			question: "What percentage of the world now has access to a mobile phone?",
			options: ["28%", "46%", "59%", "81%", "97%"],
			answer: "81%",
		},

		{
			question: "What is ‘reverse innovation’?",
			options: ["Learning how to design a product by breaking it apart and seeing how it was built.",
			"Engineering for the emerging market consumer before the developed world consumer.",
			"An innovation that is developed in an emerging market and is eventually utilized in a mature market."],
			answer: "An innovation that is developed in an emerging market and is eventually utilized in a mature market.",
		}
	];

	var history = [
		{
			question: "What year was the Frugal Innovation Lab established?",
			options: ["April 2012", "September 2010", "April 2014", "May 2009"],
			answer: "April 2012",
		},

		{
			question: "Who is the director of the Frugal Innovation Lab?",
			options: ["Godfrey Mungal", "Rani Mikkilineni", "Radha R. Basu", "Silvia Figueira"],
			answer: "Radha R. Basu",
		},

		{
			question: "Who sponsors the Frugal Innovation Lab?",
			options: ["Santa Clara University Leavey School of Business",
				"Santa Clara University College of Arts & Science",
				"Santa Clara University Jesuit School of Theology",
				"None of the above"
				],
			answer: "None of the above",

		},

		{
			question: "What does the Frugal Innovation Lab consider as “Need Areas”?",
			options: ["Clean Water", "Global Public Health", "Renewable Energy", "All of the above"],
			answer: "All of the above",
		},

		{
			question: "With whom does the Frugal Innovation lab closely integrate classroom curriculum and hands-on work?",
			options: ["Santa Clara University’s Center for Science, Technology, and Society",
			"Santa Clara University School of Engineering Faculty and Students",
			"Alumni from Santa Clara University’s Global Social Benefit Incubator program",
			"A & D"],
			answer: "A & D",
		}
	]


	var mobile = [

		{
			question: "What does the Mobile for Humanity (M4H) program do?",
			options: ["Designs and implements mobile solutions with social enterprises to improve their operational efficiency and scale their impact.",
			"Designs and implements mobile solutions with social enterprises to specifically target health clinics in India.",
			"Designs and implements mobile solutions with social enterprises to improve the living conditions of developing nations.",
			"Design and implements mobile solutions with social enterprises to benefit the economy of emerging business owners."],
			answer: "Designs and implements mobile solutions with social enterprises to improve their operational efficiency and scale their impact.",
		},

		{
			question: "What problem does Project mFarm seek to solve?",
			options: ["Seeks to solve the issue rural farmers in the Philippines have of not being able to protect their crops from wild animals.", 
			"Seeks to solve the issue rural farmers in Kenya have of not having information about other farmers’ crops and prices.", 
			"Seeks to solve the issue rural farmers in China have of not having the resources to distribute their crops.",
			"Seeks to solve the issue rural farmers in Uganda have of distributing their crops to nearby cities."],
			answer: "Seeks to solve the issue rural farmers in Kenya have of not having information about other farmers’ crops and prices.",
		},

		{
			question: "What problem does the Santa Clara Center for Adult Education seek to solve?",
			options: ["Mentally challenged adults tend to panic when surrounded by large crowds of people in the city.",
			"Mentally challenged adults are treated unfairly when applying for jobs.",
			"Mentally challenged adults tend to get lost when walking around on their own.",
			"none of the above"],
			answer: "Mentally challenged adults tend to get lost when walking around on their own.",
		},

		{
			question: "What demographic does Equal Access target?",
			options: ["children", "adults", "teenagers", "elderly"],
			answer: "teenagers",
		},

		{
			question: "What problem does SalaUno CATRA seek to prevent?",
			options: ["Loss of eye vision", "Loss of hair", "Decaying of teeth", "None of the above"],
			answer: "Loss of eye vision",
		},
	]

	var geography = [

		{
			'question': "Where is the Great Barrier Reef located?",
			options: ["Europe", "Australia", "North America", "Africa"],
			answer: "Australia",
		},

		{
			'question': "What country is separated from Alaska by the Bering Strait?",
			options: ["Russia", "China", "United States", "Ireland"],
			answer: "Russia",
		},

		{
			'question': "What continent was a rainforest million of years ago?",
			options: ["Europe", "Africa", "Antarctica", "North America"],
			answer: "Antarctica",
		},

		{
			'question': "Which mountain range in South America is rising?",
			options: ["Antisana", "Aconcagua", "Andes", "Chimborazo"],
			answer: "Andes",		
		},

		{
			'question': "A new volcanic island, Surtsey, born in 1963 is off the coast of which country?",
			options: ["Ireland", "France", "Alaska", "Peru"],
			answer: "Ireland",		
		},
	]


 
	return {
		getQuestion: function(id, category) {
			if(category == 'frugal') {
				if(id < frugal.length) {
					return frugal[id];
				}	else {
				return false;
				}	
			} else if(category == 'history') {
				if(id < history.length) {
					return history[id];
				} else {
					return false;
				}
			} else if(category == 'mobile') {
				if(id < frugal.length) {
					return mobile[id];
				} else {
					return false;
				}	
			} else if(category == 'geography') {
				if(id < geography.length) {
					return geography[id];
				} else {
					return false;
				}	
			}	
		}
	};

});


app.factory('projectsFactory', function() {
	var projects = [
		{
			name: "LAB-ON-A-CHIP - ARSENIC DETECTION IN WATER",
			members: "Sonny Gandhi, Zuhayr Elahi, John Seubert, Ben Demaree, Jessica Vander Giessen",
			advisors: "Shoba Krishnan, Associate Professor of Electrical Engineering.  Silvia Figueira, Associate Professor of Computer Engineering. Unyoung (Ashley) Kim, Assistant Professor of Bioengineering",
			description: "Comprising of three engineering disciplines, Lab-On-A-Chip is a probe that can detect levels of arsenic in water. The probe works with an Android device to analyze the results."
		},

		{
			name: "ELECTROCHEMICAL DETECTION OF ARSENIC USING A MICROFLUIDIC SENSING PLATFORM",
			members: "Ben Demaree, Jessica VanderGiessen",
			advisors: "Unyoung (Ashley) Kim, Assistant Professor of Bioengineering",
			description: "Arsenic contamination of water sources is a global health concern affecting up to 200 million people. This proposed device, consisting of a three-electrode system and disposable substrate, allows for point-of-use detection of arsenic when integrated with an electrochemical analyzer and mobile application."
		},
		{
			name: "PAPER-BASED WATER ANALYZER",
			members: "Jesus Gonzalez, Jonathan Sotelo (St. Edward's University, Texas), Sarek Sotelo",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "Smartphone-based tool to take a picture of the wet paper and determine the level of concentration of substances in water."
		},

		{
			name: "DESIGN AND EVALUATION OF A HOME-SCALE ARSENIC REMOVAL SYSTEM",
			members: "Megan Alferness, Alex Casares",
			advisors: "Steven Chiesa, Associate Professor of Civil Engineering",
			description: "Arsenic contamination in groundwater is a global health concern. Our goal was to develop an affordable household arsenic filter using electrocoagulation technology that reduces arsenic concentrations to safe levels. This may lead to manufacturing the filter in Southeast Asia and other regions, including the United States."
		},

		{
			name: "ARSENIC DETECTION PROJECT: ELECTRONICS",
			members: "John Barth, Athony Clemetson",
			advisors: "Shoba Krishnan, Associate Professor of Electrical Engineering. Silvia Figueira, Associate Professor of Computer Engineering",
			description: "In order to address clean water concerns in the developing world, this project designed a portable electronic interface to go with a sensor that will detect arsenic in groundwater. The electronics will power the test and present the results to the user via a cell-phone application."
		}, 

		{
			name: "MOBILE FORUM FOR EDUCATION",
			members: "Suzanne Lien, Alexandria Shearer",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "A mobile application for youth in emerging markets that allows a central party to distribute educational information."
		},

		{
			name: "SALAUNO CATRA - REMOTE CATARACT DIAGNOSTIC SYSTEM’",
			members: "Anthea Buchin, Ruth Borrud, Timothy Cheng, Jasmin Gonzalez, Alec Nicholas, Layne Orr, Sean Screws",
			advisors: "Radha R. Basu, Regis and Dianne McKenna, Executive Professor of Engineering.  In Collaboration with MIT Media Labs and salaUno (Social Enterprise).",
			description: "Utilizes forward scattering technique to measure light scattering of the eye to reduce the number of blindness in Mexico."
		},
		{
			name: "FACE: FAIR TRADE AID CALCULATOR FOR EVERYONE",
			members: "Ryan Davidson, Eva Jensen, Rosalie Tolentino",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering.  Rani Mikkilineni, Associate Professor of Computer Engineering.  Radha R. Basu, Regis and Dianne McKenna Executive Professor of Engineering",
			description: "FACE is a senior project designed to help The World of Good Organization, winner of the Katherine Swanson Equality Tech Award, promote fair trade around the world. FACE incorporates a Fair Wage Survey application on five mobile platforms and web-based visualizations which creatively illustrate the Organization’s fair wage data."
		},

		{
			name: "GET ME THERE",
			members: "Joe Schneider, Ken Wigginton, Monica Camorongan",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering.  Shoba Krishnan, Associate Professor of Electrical Engineering",
			description: "An iPhone application that will allow individuals with learning disabilities to travel through their communities independently. Our primary user group currently consists of the students at the Santa Clara Adult Education Center."
		},

		{
			name: "SEED BANK TRACKING IN NICARAGUA",
			members: "Ian Dougherty, Ryan Davidson",
			advisors: "Chris Bacon, Assistant Professor of Environmental Studies.  Silvia Figueira, Associate Professor of Computer Engineering",
			description: "Frugal Innovation’s Mobile Health Lab helped Assistant Professor Chris Bacon and his student Ian Dougherty from the Department of Environmental Studies to test a mobile tracking solution for seed banks in Nicaragua. The project aims to help seed banks collect, store, and analyze data from seed deposits and withdrawals to help combat seasonal hunger. Mobile Lab TA Ryan Davidson worked with Ian to install an OpenXData server in Nicaragua and create the electronic data collection forms to be filled in via mobile phone. This initial implementation increased the efficiency of seed banks in the area by allowing them to share pricing and quantity data. Eventually the data collected at each seed bank will be analyzed for trends, which can then be used to prevent seasonal hunger due to shortages of seed. This is an example of how the tools hosted by the Mobile Health Lab can be utilized by organizations to test, develop, and distribute functional mobile software applications."
		}, 

		{
			name: "NETHOPE AND SCU MOBILE HEALTH INTEROPERABILITY RESEARCH",
			members: "Arturo Posadas, John Seubert, Jesus Gonzalez, Ryan Davidson",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "FIL is working with NetHope to discover how to further utilize existing technology primarily in health related fields. NetHope is an organization that is dedicated to bringing together humanitarian organizations in order to share information and practices to serve people in the developing world. This particular project explores how to analyze and develop solutions for mHealth. Demonstration & Interoperability Lab with openXdata, DHIS 2, and OpenMRS. Pilot with Kenya MOH."
		},

		{
			name: "eRESCUE",
			members: "Rosemary Pham, Casey Larson, Kristen Muramoto, Timothy So",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "A consumer-facing android based mobile application was developed to locate CPR-certified users within a specified region whenever they are necessary."
		},
		{
			name: "STREETCONNECT",
			members: "COEN 129 Students, Spring 2013 (Continued in 'Street Connect II' by Nicholas Fong)",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "This project began as an idea at Community Technology Alliance (CTA), a local organization which combines technical expertise, government regulation, and a non-profit understanding to build systems collaboratively with communities and service agencies to support the homeless. CTA came to SCU wanting a group of students to implement a mobile app that would help improve their lives by utilizing a fact that many homeless people have phones. Our project is a system which provides text announcements about services such as food, shelter, jobs, and health. People can register their phone numbers online and choose which services they wish to receive text updates for, and whether they should be location-specific. Then, organizations post their announcements or event information to a web portal, and these are sent to all of the registered phone numbers in the database signed up for those services. All of the registered people’s information is stored in a database and easily changed online with the use of a one-time password. This app is clean and simple, and provides a unique service for the homeless community which has never been done before."
		},

		{
			name: "IhaveIneed MECHANISM",
			members: "Aaraadhya Narra",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "Phone application to enable individuals in under-served communitites to sell and buy goods within their own community."
		},

		{
			name: "EDUCATING ABOUT HOMELESSNESS",
			members: "Rohit Kalindini, Anusha Kasum, Urja Patel, Jay Sheth",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "Tools to educate people about the impact of cellular phones on homelessness."
		}, 

		{
			name: "ENERGY PROFILE FOR MOBILE USAGE",
			members: "Udaya Yalamanchi",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "Identifying power drains in mobile devices."
		},

		{
			name: "MOBILE HEALTH SOLUTIONS FOR UNDER-SERVED YOUNG WOMEN",
			members: "Kaitlin Kirasich, Katie Le, Kelsey Dedoshka",
			advisors: "Silvia Figueira, Associate Professor of Computer Engineering",
			description: "System for the medical triage and follow-up of homeless young women, in collaboration with YTH and CTA."
		},

	]
 
	return {
		getProjects: function() {
			var allProjects = [];
			for(i=0; i<projects.length; i++) {
				allProjects.push(projects[i]); 
			}
			return allProjects;
		}

	};

});