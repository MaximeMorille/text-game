function processObject(o) {
	var stringifiedCandidate = JSON.stringify(o);
	var hash = CreateMD5(stringifiedCandidate);
	var list = [], found = false;
	// is it in the hashmap?
	if (!myHashMap[hash]) {
		// not in the hash table, so it's a unique object
		myObjects.push(o);
		list.push(myObjects.length - 1);    // put a reference to the object with this hash value in the list
		myHashMap[hash] = list;             // store the list in the hash table for future comparisons
	} else {
		// the hash does exist in the hash table, check for an exact object match to see if it's really a duplicate
		list = myHashMap[hash];             // get the list of other object indexes with this hash value
		// loop through the list
		for (var i = 0; i < list.length; i++) {
			if (stringifiedCandidate === JSON.stringify(myObjects[list[i]])) {
				found = true;       // found an exact object match
				break;
			}
		}
		// if not found, it's not an exact duplicate, even though there was a hash match
		if (!found) {
			myObjects.push(o);
			myHashMap[hash].push(myObjects.length - 1);
		}
	}
}

var etape1 = {
	story : "Crack!<br><br>You wake up suddenly.<br><br>On your right a gigantic door... Closed unfortunately.<br><br>You get up and start looking around. The room must be about five square meters. On the ground, a plain dark wood flooring.<br>After some time you also notice a small window at the back of the room. Closed as well.<br><br>Outside the night is falling and it's getting very dark here.<br><br>What do you decide to do?<br><br>* To progress in the game type an * action verb *. For example \"watch\".<br>Note that sometimes the game will ask you to be a bit more accurate if multiples possibilities are available.<br>* Type \"inventory\" to view your supply<br>* Type Help to get help",
	inventory: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs",
	keys : {
		"smell" : {
			type: "singleText",
			role: "const",
			text: "A delicious cookie smell floats in the air",
		},
		"free": {
			type: "singleText",
			role: "const",
			text: "... your mind. You are now meditating in the room. Ahhh you feel better. Relaxed. But unfortunately you are always trapped."
		},
		"take" : {
			type: "singleText",
			role: "facilit",
			text: "Accio, ACCIO!! Damn harry potter's books were lying you didn't get anything. But what about looking at the ground?",
		},
		"Discover" : {
			type: "singleText",
			role: "facilit",
			text: "Accio, ACCIO!! Damn harry potter's books were lying you didn't get anything. But what about looking at the ground?",
		},
		"Get" : {
			type: "singleText",
			role: "facilit",
			text: "Accio, ACCIO!! Damn harry potter's books were lying you didn't get anything. But what about looking at the ground?",
		},
		"Seize" : {
			type: "singleText",
			role: "facilit",
			text: "Accio, ACCIO!! Damn harry potter's books were lying you didn't get anything. But what about looking at the ground?",
		},
		"Collect" : {
			type: "singleText",
			role: "facilit",
			text: "Accio, ACCIO!! Damn harry potter's books were lying you didn't get anything. But what about looking at the ground?",
		},
		"Grab" : {
			type: "singleText",
			role: "facilit",
			text: "Accio, ACCIO!! Damn harry potter's books were lying you didn't get anything. But what about looking at the ground?",
		},
		"Pick" : {
			type: "doubleText",
			role: "facilit",
			firstPart: "... up something",
			secondPart: "Accio, ACCIO!! Damn harry potter's books were lying you didn't get anything. But what about looking at the ground?",
		},
		"breathe" : {
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
		"sing": {
			type: "singleText",
			role: "const",
			text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
		},
		"shout": {
			type: "singleText",
			role: "const",
			text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
		},
		"yell": {
			type: "singleText",
			role: "const",
			text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
		},
		"fuck": {
			type: "singleText",
			role: "const",
			text: "Oh yeah, such a beautiful word ;-)"
		},
		"suck": {
			type: "singleText",
			role: "const",
			text: "Oh yeah, such a beautiful word ;-)"
		},
		"shit": {
			type: "singleText",
			role: "const",
			text: "Oh yeah, such a beautiful word ;-)"
		},
		"cheat": {
			type: "singleText",
			role: "const",
			text: "Ah ah nope nope and nope.",
		},
		"jump": {
			type: "singleText",
			role: "const",
			text: "Coool you are now jumping!",
		},
		"play": {
			type: "singleText",
			role: "const",
			text: "... Videogames. Not possible at the moment sorry (geeek!)",
		},
		"find": {
			type: "singleText",
			role: "const",
			text: "... Wally? Mhm apparently he is not here",
		},
		"stare": {
			type: "singleText",
			role: "const",
			text: "... At walls? Supercooooool! ;-)",
		},
		"Comtemplate": {
			type: "singleText",
			role: "const",
			text: "... walls? Supercooooool! ;-)",
		},
		"dream": {
			type: "singleText",
			role: "const",
			text: "Inception incoming!!",
		},
		"listen": {
			type: "singleText",
			role: "const",
			text: "Everything is silent",
		},
		"think": {
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
		"talk": {
			type: "doubleText",
			role: "const",
			firstPart: "... To yourself.",
			secondPart: "Houston we have a problem."
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
			type: "doubleText",
			role: "winner",
			firstPart: "... Room.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Inspect": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Room.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Look": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Room.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Examine": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Room.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Observe": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Room.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Scan": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Ground.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Inspect": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Ground.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Look": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Ground.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Examine": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Ground.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Touch": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Ground.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Observe": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Ground.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Inspect": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Ground.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Scan": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Floor.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Inspect": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Floor.",
			secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. You walk up and down in the room when suddenly you notice something on the ground... Oh wait, there is a little bottle in a corner!",
		},
		"Look": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Floor.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Examine": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Floor.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Touch": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Floor.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Observe": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Floor.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Inspect": {
			type: "doubleText",
			role: "winner",
			firstPart: "... Floor.",
			secondPart: "Wait, is that a bottle in the corner of the room?! Damn it's so dark in here you didn't see it at first glance!",
		},
		"Observe": {
			type: "doubleText",
			role: "justText",
			firstPart: "... window.",
			secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
		},
		"Look": {
			type: "doubleText",
			role: "justText",
			firstPart: "... window.",
			secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
		},
		"Watch": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at window.",
			secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
		},
		"Inspect": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at window.",
			secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
		},
		"Examine": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at window.",
			secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked. But keep going and continue to explore the room.",
		},
		"Observe": {
			type: "doubleText",
			role: "justText",
			firstPart: "... walls.",
			secondPart: "I know it's really exciting to observe big white walls. Unfortunately these are no apparent gaps. So keep going and continue to explore the room.",
		},
		"Look": {
			type: "doubleText",
			role: "justText",
			firstPart: "... walls.",
			secondPart: "I know it's really exciting to observe big white walls. Unfortunately these are no apparent gaps. So keep going and continue to explore the room.",
		},
		"Watch": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at walls.",
			secondPart: "I know it's really exciting to observe big white walls. Unfortunately these are no apparent gaps. So keep going and continue to explore the room.",
		},
		"Inspect": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at walls.",
			secondPart: "I know it's really exciting to observe big white walls. Unfortunately these are no apparent gaps. So keep going and continue to explore the room.",
		},
		"Examine": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at walls.",
			secondPart: "I know it's really exciting to observe big white walls. Unfortunately these are no apparent gaps. So keep going and continue to explore the room.",
		},
		"Observe": {
			type: "doubleText",
			role: "justText",
			firstPart: "... door.",
			secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
		},
		"Look": {
			type: "doubleText",
			role: "justText",
			firstPart: "... door.",
			secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
		},
		"Watch": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at door.",
			secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
		},
		"Inspect": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at door.",
			secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
		},
		"Examine": {
			type: "doubleText",
			role: "justText",
			firstPart: "... at door.",
			secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
		},
		"Look": {
			type: "doubleText",
			role: "justText",
			firstPart: "... Outside.",
			secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
		},
		"View": {
			type: "doubleText",
			role: "justText",
			firstPart: "... Outside.",
			secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
		},
		"Watch": {
			type: "doubleText",
			role: "justText",
			firstPart: "... Outside.",
			secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
		},
		"Touch": {
			type: "doubleText",
			role: "justText",
			firstPart: "... Walls.",
			secondPart: "Some hard white walls.",
		},
		"Touch": {
			type: "doubleText",
			role: "justText",
			firstPart: "... door.",
			secondPart: "An armored door made of metal",
		},
		"Touch": {
			type: "doubleText",
			role: "justText",
			firstPart: "... window.",
			secondPart: "This window is made of glass and does not seem breakable.",
		},
		"Push": {
			type: "singleText",
			role: "justText",
			text: "... Window. Knock, knock penny?"
		},
		"Force": {
			type: "singleText",
			role: "justText",
			text: "... Window. I would not do that if I were you."
		},
		"Crack": {
			type: "singleText",
			role: "justText",
			text: "... Door. It's locked unfortunately. But there must be another way out somewhere."
		},
		"Kick": {
			type: "singleText",
			role: "justText",
			text: "... Walls. Houston we have a problem!"
		},
		"Put": {
			type: "singleText",
			role: "justText",
			text: "... your hand in the air. Funny but a bit useless in this situation..."
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
			type: "doubleText",
			role: "justText",
			firstPart: "... door.",
			secondPart: "Locked. There must be another way out somewhere.",
		},
		"Open": {
			type: "doubleText",
			role: "justText",
			firstPart: "... window.",
			secondPart: "Locked, as the door...",
		}
	}
}