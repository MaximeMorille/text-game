var etape6;

$(function() {
	etape6 = {
		story : "",
		help: "Oh I see that you found a hurricane lamp; Are you going to camp somewhere? ;-). More seriously, I am sure that you can use something to light it ;-).",
		inventory: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs<br>-a hurricane lamp",
		keys : {
			"Smell" : {
				type: "singleText",
				role: "const",
				text: "A wonderful smell of rainy ground emanates from the outside.",
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
				type: "pic+text",
				role: "const",
				text: "No time to explain!",
				picture: "notimeTo.jpg"
			},
			"Evade": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately this window, even open, is definitely too small to escape."
			},
			"Take": {
				type: "singleText",
				role: "winner",
				text: "... matches! Elementary, my dear Watson! The matches in your pocket allows you to turn on the lamp! The only thing missing would be a tent and here we go to enjoy indoor camping! <br> But wait ... <br><br> Suddenly you noticed something: In contact with this new source of light something appeared on the wall. Yep, that's invisible ink!"
			},
			"Catch": {
				type: "singleText",
				role: "winner",
				text: "... matches! Elementary, my dear Watson! The matches in your pocket allows you to turn on the lamp! The only thing missing would be a tent and here we go to enjoy indoor camping! <br> But wait ... <br><br> Suddenly you noticed something: In contact with this new source of light something appeared on the wall. Yep, that's invisible ink!"
			},
			"Employ": {
				type: "singleText",
				role: "winner",
				text: "... matches! Elementary, my dear Watson! The matches in your pocket allows you to turn on the lamp! The only thing missing would be a tent and here we go to enjoy indoor camping! <br> But wait ... <br><br> Suddenly you noticed something: In contact with this new source of light something appeared on the wall. Yep, that's invisible ink!"
			},
			"Flee": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately this window, even open, is definitely too small to escape."
			},
			"Breathe" : {
				type: "singleText",
				role: "const",
				text: "A wonderful smell of rainy ground emanates from the outside.",
			},
			"Inhale" : {
				type: "singleText",
				role: "const",
				text: "A wonderful smell of rainy ground emanates from the outside.",
			},
			"Sniff": {
				type: "singleText",
				role: "const",
				text: "A wonderful smell of rainy ground emanates from the outside.",
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
				type: "multiOptions",
				options: {
					"Room": {
						type: "pic+text",
						role: "const",
						text: "BURN IT WITH FIRE",
						picture: "burnitwithfire.gif"
					},
					"Match": {
						type: "singleText",
						role: "winner",
						text: "Elementary, my dear Watson! The matches in your pocket allows you to turn on the lamp! The only thing missing would be a tent and here we go to enjoy indoor camping! <br> But wait ... <br><br> Suddenly you noticed something: In contact with this new source of light something appeared on the wall. Yep, that's invisible ink!"
					},
				}
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
				text: "... Walls? Supercooooool! ;-)",
			},
			"Turn": {
				type: "singleText",
				role: "facilit",
				text: "... on the lamp? Yep! that's next step. How do you do it, that's the question ;-)",
			},
			"Switch": {
				type: "singleText",
				role: "facilit",
				text: "... on the lamp? Yep! that's next step. How do you do it, that's the question ;-)",
			},
			"Light": {
				type: "singleText",
				role: "facilit",
				text: "... on the lamp? Yep! that's next step. How do you do it, that's the question ;-)",
			},
			"Fire": {
				type: "singleText",
				role: "facilit",
				text: "... the lamp? Yep! that's next step. How do you do it, that's the question ;-)",
			},
			"Get": {
				type: "singleText",
				role: "facilit",
				text: "... Something in your inventory? Yep, just write down use + the object",
			},
			"Illumine": {
				type: "singleText",
				role: "facilit",
				text: "... Room? Yep! that's next step. How do you do it, that's the question ;-)",
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
			"Inspect": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
					}
				}
			},
			"Search": {
				type: "multiOptions",
				options: {
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs<br>-a hurricane lamp",
					},
					"Pocket": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "Just type 'Inventory' to see what's inside your pockets",
					},
					"Pockets": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "Just type 'Inventory' to see what's inside your pockets",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to touch big white walls. Unfortunately there are no apparent gaps.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to touch big white walls. Unfortunately there are no apparent gaps.",
					},
				}
			},
			"Check": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs<br>-a hurricane lamp",
					}
				}
			},
			"Look": {
				type: "multiOptions",
				options: {
					"Around": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Around",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Sky": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Sky",
						secondPart: "Sooo poetic ;-) ...",
					},
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Walls": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... At the door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					}, 
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... At the lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs<br>-a hurricane lamp",
					},
				}
			},
			"See": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
					}
				}
			},
			"Watch": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
					}
				}
			},
			"Examine": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
					}
				}
			},
			"Observe": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
					}
				}
			},
			"Touch": {
				type: "multiOptions",
				options: {
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "A door made of metal",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
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
						firstPart: "... Door.",
						secondPart: "A door made of metal",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows? Too bad you do not have something to light it. Maybe in your pocket?",
					}
				}
			},
			"Use": {
				type: "multiOptions",
				options: {
					"Match": {
						type: "singleText",
						role: "winner",
						text: "Elementary, my dear Watson! The matches in your pocket allows you to turn on the lamp! The only thing missing would be a tent and here we go to enjoy indoor camping! <br> But wait ... <br><br> Suddenly you noticed something: In contact with this new source of light something appeared on the wall. Yep, that's invisible ink!"
					},
					"Matches": {
						type: "singleText",
						role: "winner",
						text: "Elementary, my dear Watson! The matches in your pocket allows you to turn on the lamp! The only thing missing would be a tent and here we go to enjoy indoor camping! <br> But wait ... <br><br> Suddenly you noticed something: In contact with this new source of light something appeared on the wall. Yep, that's invisible ink!"
					},
					"Lamp": {
						type: "singleText",
						role: "facilit",
						text:"... Mhm you will need to make fire for that. But wait, maybe you have something that could help in your pockets?"
					},
					"Matchbox": {
						type: "singleText",
						role: "winner",
						text: "Elementary, my dear Watson! The matches in your pocket allows you to turn on the lamp! The only thing missing would be a tent and here we go to enjoy indoor camping! <br> But wait ... <br><br> Suddenly you noticed something: In contact with this new source of light something appeared on the wall. Yep, that's invisible ink!"
					},
				}
			},
			"Push": {
				type: "singleText",
				role: "justText",
				text: "... Window. Knock, knock penny?"
			},
			"Force": {
				type: "singleText",
				role: "facilit",
				text: "... the window. Ok ok, calm down it's open now ;-). But maybe there is something to do to light the lamp?"
			},
			"Crack": {
				type: "singleText",
				role: "winner",
				text: "... matches! Elementary, my dear Watson! The matches in your pocket allows you to turn on the lamp! The only thing missing would be a tent and here we go to enjoy indoor camping! <br> But wait ... <br><br> Suddenly you noticed something: In contact with this new source of light something appeared on the wall. Yep, that's invisible ink!"
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
			"Action": {
				type: "doubleText",
				role: "facilit",
				firstPart: "... The lamp.",
				secondPart: "... Mhm you will need to make fire for that. But wait, maybe you have something that could help in your pockets?",
			},
			"Trigger": {
				type: "doubleText",
				role: "facilit",
				firstPart: "... The lamp.",
				secondPart: "... Mhm you will need to make fire for that. But wait, maybe you have something that could help in your pockets?",
			},
			"Break": {
				type: "doubleText",
				role: "facilit",
				firstPart: "... The lamp.",
				secondPart: "Congratulations the lamp is now broken, still off and you are bleeding so why not taking a look in your inventory I remember that you have some stuf that could help in this situation (and for the lamp too)?",
			},
			"Destroy": {
				type: "doubleText",
				role: "facilit",
				firstPart: "... The lamp.",
				secondPart: "Congratulations the lamp is now broken, still off and you are bleeding so why not taking a look in your inventory I remember that you have some stuf that could help in this situation (and for the lamp too)?",
			},
			"Throw": {
				type: "doubleText",
				role: "facilit",
				firstPart: "... The lamp.",
				secondPart: "Congratulations the lamp is now broken, still off and you are bleeding so why not taking a look in your inventory I remember that you have some stuf that could help in this situation (and for the lamp too)?",
			},
			"Eat": {
				type: "singleText",
				role: "justText",
				secondPart: "Lamp? Suuuuuuure",
			},
			"Open": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ....",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Window.",
						secondPart: "It's already open. But maybe there is something to do to light the lamp?",
					},
					"Lamp": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Lamp.",
						secondPart: "Ok the lamp is now opened what do you want to use to turn it on?",
					},
					"Matchbox": {
						type: "singleText",
						role: "facilit",
						text: "The matchbox is now opened and you are holding matches."
					},
				}
			},
			"Unlock": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ....",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Window.",
						secondPart: "It's already open. But maybe there is something to do to light the lamp?",
					}
				}
			},
		}
	};
});