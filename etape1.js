var etape1;

$(function(){
	etape1 = {
		story : "",
		help: "If I were you I would start to explore the room. For example did you check the walls, door, window ect?",
		inventory: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs",
		keys : {
			"Smell" : {
				type: "singleText",
				role: "const",
				text: "A delicious cookie smell floats in the air",
			},
			"Climb" : {
				type: "singleText",
				role: "const",
				text: "... Walls? Nope that's not possible",
			},
			"Dig" : {
				type: "singleText",
				role: "facilit",
				text: "... In the ground? Nope it's too hard. However what about looking at it closely?",
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
			"Take" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Use" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Discover" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Get" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Seize" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Collect" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Grab" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Pick" : {
				type: "doubleText",
				role: "facilit",
				firstPart: "... up something",
				secondPart: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Breathe" : {
				type: "singleText",
				role: "const",
				text: "A delicious cookie smell floats in the air",
			},
			"Inhale" : {
				type: "singleText",
				role: "const",
				text: "A delicious cookie smell floats in the air",
			},
			"Sniff": {
				type: "singleText",
				role: "const",
				text: "A delicious cookie smell floats in the air",
			},
			"Save": {
				type: "singleText",
				role: "const",
				text: "You?  <span>&#175;\\_(&#12484;)_/&#175;</span>",
			},
			"Break": {
				type: "singleText",
				role: "const",
				text: "free?  <span>&#175;\\_(&#12484;)_/&#175;</span>",
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
			"Escape": {
				type: "pic+text",
				role: "const",
				text: "No time to explain!",
				picture: "notimeTo.jpg"
			},
			"Hello": {
				type: "singleText",
				role: "const",
				text: "... World? :-)",
			},
			"Hi": {
				type: "singleText",
				role: "const",
				text: "... What's up? :-)",
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
				role: "const",
				text: "... Video games. Not possible at the moment sorry (geeek!)",
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
				text: "... walls? Supercooooool! ;-)",
			},
			"Dream": {
				type: "singleText",
				role: "const",
				text: "Inception incoming!!",
			},
			"Listen": {
				type: "singleText",
				role: "const",
				text: "Everything is silent",
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
			"Explore": {
				type: "singleText",
				role: "winner",
				text: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
			},
			"Investigate": {
				type: "singleText",
				role: "winner",
				text: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
			},
			"Scan": {
				type: "multiOptions",
				options: {
					"Room": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}
				}
			},
			"Search": {
				type: "multiOptions",
				options: {
					"Room": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}
				}
			},
			"Seek": {
				type: "multiOptions",
				options: {
					"Room": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						role: "winner",
						type: "doubleText",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}
				}
			},
			"Inspect": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					}
				}
			},
			"Check": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					}
				}
			},
			"Look": {
				type: "multiOptions",
				options: {
					"Around": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Around",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Room": {
						type: "doubleText",
						role: "winner",
						firstPart: "... at the room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Down": {
						type: "doubleText",
						role: "winner",
						firstPart: "... at the floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Ground": {
						type: "doubleText",
						role: "winner",
						firstPart: "... at the ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						type: "doubleText",
						role: "winner",
						firstPart: "... at the floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Sky": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Sky",
						secondPart: "Sooo poetic ;-) ...",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Out": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					}
				}
			},
			"See": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "winner",
						firstPart: "... at the room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						type: "doubleText",
						role: "winner",
						firstPart: "... at the ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						type: "doubleText",
						role: "winner",
						firstPart: "... at the floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Out": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					}
				}
			},
			"Watch": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Out": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					}
				}
			},
			"Examine": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					}
				}
			},
			"Observe": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
					},
					"Ground": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to look at the walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to look at the walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
				}
			},
			"Touch": {
				type: "multiOptions",
				options: {
					"Ground": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
					},
					"Floor": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
					}, 
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "A door made of metal",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "This window is made of glass and does not seem breakable.",
					}
				}
			},
			"View": {
				type: "multiOptions",
				options: {
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "A door made of metal",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "This window is made of glass and does not seem breakable.",
					}
				}
			},
			"Push": {
				type: "singleText",
				role: "justText",
				text: "... Window. Knock, knock penny?"
			},
			"Pull": {
				type: "singleText",
				role: "justText",
				text: "... Window. Locked unfortunately"
			},
			"Force": {
				type: "singleText",
				role: "justText",
				text: "... Window. I would not do that if I were you."
			},
			"Crack": {
				type: "singleText",
				role: "justText",
				text: "... the door. It's locked unfortunately. But there must be another way out somewhere."
			},
			"Kick": {
				type: "singleText",
				role: "justText",
				text: "... Walls. Houston we have a problem!"
			},
			"Destroy": {
				type: "singleText",
				role: "justText",
				text: "... Walls. Houston we have a problem!"
			},
			"Hit": {
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
						firstPart: "... door.",
						secondPart: "Locked. There must be another way out somewhere.",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "Locked, as the door...",
					},
				}
			}
		}
	}
});