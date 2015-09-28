var etape8;

$(function() {
	etape8 = {
		story : "<br>Damn this is still not the end of the adventure. You are now in a room with three pictures on the walls. At the back of the room we distinguish a wooden door with a keyboard on which you can type passwords. Almost there!",
		help: "Did you try looking at aaaall the pictures?",
		inventory: "- a bridge's deck of cards<br>- some handkerchiefs",
		keys : {
			"Picture1": {
				type: "pic+text",
				role: "facilit",
				text: "?",
				picture: "cookies.png"
			},
			"Picture2": {
				type: "pic+text",
				role: "facilit",
				text: "? (in french)",
				picture: "pantoufle.jpg"
			},
			"Picture3": {
				type: "pic+text",
				role: "facilit",
				text: "?...On each picture find the word that best describes the scene. Then, take the last letter of this word. With these three letters compose the passphrase and type it on the keyboard",
				picture: "tea.gif"
			},
			"Picture": {
				type: "multiOptions",
				options: {
					"1": {
						type: "pic+text",
						role: "facilit",
						text: "...",
						picture: "cookies.png"
					},
					"2": {
						type: "pic+text",
						role: "facilit",
						text: "..",
						picture: "pantoufle.jpg"
					},
					"3": {
						type: "pic+text",
						role: "facilit",
						text: "On each picture find the word that best describes the scene. Then, take the last letter of this word. With these three letters compose the passphrase and type it on the keyboard",
						picture: "tea.gif"
					},
				}
			},
			"Type": {
				type: "multiOptions",
				options: {
					"Keyboard": {
						type: "singleText",
						role: "justText",
						text: "Yes that's the keyboard on which you will have to type a password",
					},
					"SEA": {
						type: "singleText",
						role: "winner",
						text: "Yes!",
					},
					"Sea": {
						type: "singleText",
						role: "winner",
						text: "Yes!",
					},
					"101010": {
						type: "singleText",
						role: "justText",
						text: "BIIIIIP... Incorrect",
					},
				}
			},
			"Tap": {
				type: "multiOptions",
				options: {
					"Keyboard": {
						type: "singleText",
						role: "justText",
						text: "Yes that's the keyboard on which you will have to type a password",
					},
					"SEA": {
						type: "singleText",
						role: "winner",
						text: "Yes!",
					},
					"Sea": {
						type: "singleText",
						role: "winner",
						text: "Yes!",
					},
					"101010": {
						type: "singleText",
						role: "justText",
						text: "BIIIIIP... Incorrect",
					},
				}
			},
			"Enter": {
				type: "multiOptions",
				options: {
					"Keyboard": {
						type: "singleText",
						role: "justText",
						text: "Yep, you have to enter a password",
					},
					"SEA": {
						type: "singleText",
						role: "winner",
						text: "Yes!",
					},
					"sea": {
						type: "singleText",
						role: "winner",
						text: "Yes!",
					},
					"101010": {
						type: "singleText",
						role: "justText",
						text: "BIIIIIP... Incorrect",
					},
				}
			},
			"Break": {
				type: "singleText",
				role: "facilit",
				text: "... The keyboard. Congratulations the keyboard is now broken and you are trapped here forever... Just kiding try instead to look at the pictures",
			},
			"Flip": {
				type: "pic+text",
				role: "justText",
				text: "Flip the table!",
				picture: "flipthetable.png"
			},
			"Smell" : {
				type: "singleText",
				role: "const",
				text: "Cookie cookie cookies!!",
			},
			"Say" : {
				type: "pic+text",
				role: "const",
				text: "\"Ohh this game is soo cool!\"",
				picture: "dodgedog.jpg"
			},
			"Free": {
				type: "singleText",
				role: "const",
				text: "... your mind. You are now meditating in the room. Ahhh you are feeling better... But unfortunately you are always trapped."
			},
			"Escape": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately there is still a door to open."
			},
			"Evade": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately there is still a door to open."
			},
			"Flee": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately there is still a door to open."
			},
			"Breathe" : {
				type: "singleText",
				role: "const",
				text: "Cookie cookie cookies!!",
			},
			"Inhale" : {
				type: "singleText",
				role: "const",
				text: "Cookie cookie cookies!!",
			},
			"Sniff": {
				type: "singleText",
				role: "const",
				text: "Cookie cookie cookies!!",
			},
			"Save": {
				type: "singleText",
				role: "const",
				text: "You?  <span>&#175;\\_(&#12484;)_/&#175;</span>",
			},
			"Sing": {
				type: "singleText",
				role: "const",
				text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
			},
			"Go": {
				type: "singleText",
				role: "const",
				text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
			},
			"Walk": {
				type: "singleText",
				role: "const",
				text: "In circles... Very interesting.",
			},
			"Run": {
				type: "singleText",
				role: "const",
				text: "out of time? That's okay you have plenty of time",
			},
			"Sleep": {
				type: "singleText",
				role: "const",
				text: ".... with me? And do **$^p¨¨^and *$$$$$#@ in ¨¨Q¨¨¨? ... Cool!",
			},
			"Cry": {
				type: "singleText",
				role: "const",
				text: ".... oooh boooh boooh! ;-)",
			},
			"Call": {
				type: "singleText",
				role: "const",
				text: "Mother? .... oooh boooh boooh! ;-)",
			},
			"Burn": {
				type: "pic+text",
				role: "const",
				text: "BURN IT WITH FIRE",
				picture: "burnitwithfire.gif"
			},
			"Adrien": {
				type: "pic+text",
				role: "const",
				text: "Welcome",
				picture: "adrien.jpg"
			},
			"Kirsten": {
				type: "pic+text",
				role: "const",
				text: "Meeeoww",
				picture: "kirsten.jpg"
			},
			"Fly": {
				type: "singleText",
				role: "const",
				text: "I believe I can flyyyyyyyy",
			},
			"Hello": {
				type: "singleText",
				role: "const",
				text: "... World? :-)",
			},
			"Shout": {
				type: "singleText",
				role: "const",
				text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
			},
			"Yell": {
				type: "singleText",
				role: "const",
				text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
			},
			"Fuck": {
				type: "singleText",
				role: "const",
				text: "Oh yeah, such a beautiful word ;-)"
			},
			"Suck": {
				type: "singleText",
				role: "const",
				text: "Oh yeah, such a beautiful word ;-)"
			},
			"Smoke": {
				type: "singleText",
				role: "const",
				text: "Pots? Wooooot everything is sooooooo shinyyyyyy now"
			},
			"Knock": {
				type: "singleText",
				role: "const",
				text: "Knock knock knock* Penny?"
			},
			"Shit": {
				type: "singleText",
				role: "const",
				text: "Oh yeah, such a beautiful word ;-)"
			},
			"Dance": {
				type: "singleText",
				role: "const",
				text: "Oh yeah shake shake shake your body ;-)"
			},
			"123": {
				type: "singleText",
				role: "const",
				text: "456?"
			},
			"Cheat": {
				type: "singleText",
				role: "const",
				text: "Ah ah nope nope and nope.",
			},
			"Jump": {
				type: "singleText",
				role: "const",
				text: "Coool you are now jumping!",
			},
			"Play": {
				type: "singleText",
				role: "justText",
				text: "... With the keyboard: cause you are such a geek <3",
			},
			"Find": {
				type: "singleText",
				role: "const",
				text: "... Wally? Mhm apparently he is not here",
			},
			"Stare": {
				type: "singleText",
				role: "const",
				text: "... At walls? Supercooooool! ;-)",
			},
			"Comtemplate": {
				type: "singleText",
				role: "const",
				text: "... Walls? Supercooooool! ;-)",
			},
			"Dream": {
				type: "singleText",
				role: "const",
				text: "Inception incoming!!",
			},
			"Listen": {
				type: "singleText",
				role: "const",
				text: "You can hear the soft sound of the rain falling outside.",
			},
			"Think": {
				type: "pic+text",
				role: "const",
				text: "Waaaw such a cooool game!",
				picture: "dodgedog.jpg"
			},
			"Remember": {
				type: "singleText",
				role: "const",
				text: "Sri Lanka? Yup that's such a cool memory! ;-)"
			},
			"Talk": {
				type: "singleText",
				role: "const",
				text: "... To yourself? Houston we have a problem."
			},
			"Take" : {
				type: "singleText",
				role: "facilit",
				text: "Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Get" : {
				type: "singleText",
				role: "facilit",
				text: "Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Seize" : {
				type: "singleText",
				role: "facilit",
				text: "Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Collect" : {
				type: "singleText",
				role: "facilit",
				text: "Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Grab" : {
				type: "singleText",
				role: "facilit",
				text: "Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Catch" : {
				type: "singleText",
				role: "facilit",
				text: "Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Pick" : {
				type: "singleText",
				role: "facilit",
				text: "... up pictures! Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually",
			},
			"Look": {
				type: "singleText",
				role: "facilit",
				text: "... At pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Inspect": {
				type: "singleText",
				role: "facilit",
				text: "... Pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Check": {
				type: "singleText",
				role: "facilit",
				text: "... Pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"See": {
				type: "singleText",
				role: "facilit",
				text: "... Pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Watch": {
				type: "singleText",
				role: "facilit",
				text: "... Pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Examine": {
				type: "singleText",
				role: "facilit",
				text: "... Pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Observe": {
				type: "singleText",
				role: "facilit",
				text: "... Pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Touch": {
				type: "singleText",
				role: "facilit",
				text: "... Pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"View": {
				type: "singleText",
				role: "facilit",
				text: "... Pictures? Type: \"Picture1\", \"Picture2\", \"Picture3\" to see each picture individually"
			},
			"Push": {
				type: "singleText",
				role: "justText",
				text: "... Window. Knock, knock penny?"
			},
			"Force": {
				type: "singleText",
				role: "facilit",
				text: "... the keyboard. Congratulations the keyboard is now broken and you are trapped here forever... Just kiding try instead to look at the pictures"
			},
			"Hack": {
				type: "singleText",
				role: "facilit",
				text: "... the keyboard. Congratulations the keyboard is now broken and you are trapped here forever... Just kiding try instead to look at the pictures"
			},
			"Crack": {
				type: "singleText",
				role: "facilit",
				text: "... the keyboard. Congratulations the keyboard is now broken and you are trapped here forever... Just kiding try instead to look at the pictures"
			},
			"Destroy": {
				type: "singleText",
				role: "facilit",
				text: "... the keyboard. Congratulations the keyboard is now broken and you are trapped here forever... Just kiding try instead to look at the pictures"
			},
			"Collapse": {
				type: "singleText",
				role: "facilit",
				text: "... the keyboard. Congratulations the keyboard is now broken and you are trapped here forever... Just kiding try instead to look at the pictures"
			},
			"Vandalize": {
				type: "singleText",
				role: "facilit",
				text: "... the keyboard. Congratulations the keyboard is now broken and you are trapped here forever... Just kiding try instead to look at the pictures"
			},
			"Explore": {
				type: "singleText",
				role: "facilit",
				text: "... the room. Seriously it's the final step of the game and you still want to explore the room?! Ok well so here we go again. You are currently in a room with black walls. The only things you can see are some pictures and a door with a keyboard."
			},
			"Investigate": {
				type: "singleText",
				role: "facilit",
				text: "... the room. Seriously it's the final step of the game and you still want to explore the room?! Ok well so here we go again. You are currently in a room with black walls. The only things you can see are some pictures and a door with a keyboard."
			},
			"Scan": {
				type: "singleText",
				role: "facilit",
				text: "... the room. Seriously it's the final step of the game and you still want to explore the room?! Ok well so here we go again. You are currently in a room with black walls. The only things you can see are some pictures and a door with a keyboard."
			},
			"Kick": {
				type: "singleText",
				role: "justText",
				text: "... Walls. Houston we have a problem!"
			},
			"Put": {
				type: "singleText",
				role: "justText",
				text: "... your hands in the air. Funny but a bit useless in this situation ;-)"
			},
			"Move": {
				type: "singleText",
				role: "justText",
				text: "... I like to move it, move it!"
			},
			"Do": {
				type: "singleText",
				role: "justText",
				text: "... the monkey dance. Houston we have a problem!"
			},
			"Draw": {
				type: "singleText",
				role: "justText",
				text: "... on walls. Waaw that's beautiful but it doesn't help."
			},
			"Open": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "Almost there. But this last door is still locked and you have to type the password on the keyboard",
					}
				}
			},
			"Unlock": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "Almost there. But this last door is still locked and you have to type the password on the keyboard",
					}
				}
			},
		}
	};
});