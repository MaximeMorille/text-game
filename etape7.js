var etape7;

$(function() {
	etape7 = {
		story : "",
		help: "Mhmm so you can see invisible ink on walls. Maybe there is an action to do with walls??",
		inventory: "- a bridge's deck of cards<br>- some handkerchiefs",
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
				text: "... Unfortunately the window, even open, is definitely too small to escape."
			},
			"Activate": {
				type: "singleText",
				role: "winner",
				text: "... Door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Palpate": {
				type: "singleText",
				role: "winner",
				text: "... Walls!<br>Good job! Touching the walls with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Probe": {
				type: "singleText",
				role: "winner",
				text: "... Walls!<br>Good job! Touching the walls with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Reveal": {
				type: "singleText",
				role: "winner",
				text: "... Door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Show": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Uncover": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Unveil": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Display": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Trigger": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Action": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Expose": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Disclose": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Unhide": {
				type: "singleText",
				role: "winner",
				text: "... Hidden door! Good job! Touching the wall with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Discover": {
				type: "singleText",
				role: "winner",
				text: "... a Hidden door! Good job! By probing the walls with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Break": {
				type: "singleText",
				role: "const",
				text: "free?  <span>&#175;\\_(&#12484;)_/&#175;</span>",
			},
			"Use": {
				type: "singleText",
				role: "facilit",
				text: "... your magic on walls? Mhm that was a good idea unfortunately it does not seems to work that way. What about inspecting the walls instead?"
			},
			"Touch": {
				type: "singleText",
				role: "winner",
				text: "... Walls!<br>Good job! Touching the walls with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Make": {
				type: "singleText",
				role: "winner",
				text: "... Contact with Walls!<br>Good job! Touching the walls with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Tap": {
				type: "singleText",
				role: "winner",
				text: "... On Walls!<br>Good job! Touching the walls with your hand activated a secret mechanism and a hidden door opens just in front of you."
			},
			"Flee": {
				type: "singleText",
				role: "justText",
				text: "... Unfortunately the window, even open, is definitely too small to escape."
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
				role: "const",
				text: "... Video games. Not possible at the moment sorry (geeek!)",
			},
			"Find": {
				type: "singleText",
				role: "facilit",
				text: "... an hidden door? Yes, that's your mission right now. What about probing the walls?",
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
			"Read": {
				type: "singleText",
				role: "facilit",
				text: "Around you... \"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
			},
			"Light": {
				type: "singleText",
				role: "facilit",
				text: "Around you... \"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
			"Search": {
				type: "multiOptions",
				options: {
					"Room": {
						role: "justText",
						type: "doubleText",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
					},
					"Ground": {
						role: "justText",
						type: "doubleText",
						firstPart: "... Ground.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					}, 
					"Floor": {
						role: "justText",
						type: "doubleText",
						firstPart: "... Floor.",
						secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!"
					},
					"Door": {
						type: "singleText",
						role: "facilit",
						text: "... an hidden door? Yes, that's your mission right now. What about probing the walls?",
					},
					"Walls": {
						type: "singleText",
						role: "facilit",
						text: "... Oh wait you said you are looking for an hidden door? I think just touching the walls can reveal it.",
					},
					"Wall": {
						type: "singleText",
						role: "facilit",
						text: "... Oh wait you said you are looking for an hidden door? I think just touching the walls can reveal it.",
					},
				}
			},
			"Inspect": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Walls": {
						type: "singleText",
						role: "facilit",
						text: "... Oh wait you said you are looking for an hidden door? I think just touching the walls can reveal it.",
					},
					"Wall": {
						type: "singleText",
						role: "facilit",
						text: "... Oh wait you said you are looking for an hidden door? I think just touching the walls can reveal it.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					}
				}
			},
			"Check": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
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
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows?",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- some handkerchiefs",
					},
				}
			},
			"Look": {
				type: "multiOptions",
				options: {
					"Around": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Around",
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
					},
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Sky": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Sky",
						secondPart: "Sooo poetic ;-) ...",
					},
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Walls": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows?",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- some handkerchiefs",
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
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Walls": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Door": {
						type: "singleText",
						role: "facilit",
						text: "... an hidden door? Yes, that's your mission right now. What about probing the walls?",
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
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows?",
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
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. Now opened.",
					},
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Walls": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows?",
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
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
					},
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows?",
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
						secondPart: "Around you some large bare white walls. You can see some inscriptions on the walls written with invisible ink",
					},
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows?",
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
					"Inscription": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Ink": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "A door made of metal",
					},
					"Walls": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "\"Why is the sky blue?\" \"Can I have a puppy?\" \"Gilmore girls for life\". Mhm these messages are very intriguing. But there must be a hidden door somewhere",
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
						secondPart: "An old hurricane lamp full of used oil. On the left side is written 101010. Probably a serial number who knows?",
					}
				}
			},
			"Push": {
				type: "singleText",
				role: "justText",
				text: "... Window. Knock, knock penny?"
			},
			"Hit": {
				type: "singleText",
				role: "facilit",
				text: "... Walls. Houston we have a problem! What about touching them instead?"
			},
			"Kick": {
				type: "singleText",
				role: "facilit",
				text: "... Walls. Houston we have a problem! What about touching them instead?"
			},
			"Destroy": {
				type: "singleText",
				role: "facilit",
				text: "... Walls. Houston we have a problem! What about touching them instead?"
			},
			"Put": {
				type: "singleText",
				role: "winner",
				text: "... your hands on walls. Good job! By touching the walls, your hand activated a secret mechanism and a hidden door opens just in front of you."
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
				text: "... on walls. Waaw that's beautiful but it doesn't help opening the secret door."
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
					}
				}
			},
			"Unlock": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "singleText",
						role: "facilit",
						text: "... an hidden door? Yes, that's your mission right now. What about probing the walls?",
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