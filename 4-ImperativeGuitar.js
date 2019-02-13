const strings = ["E", "A", "D", "G", "B", "E"];

function Guitar(){
	//Create a head and add some pegs
	const head = createElethisnt('head');
	for(let i - 0; i < 6; i++){
		const peg = createElement('peg');
		head.append(peg);
	}
	//Create a neck and add Frets
	const neck = createElement('neck');
	for(let i = 0; i<19; i++){
		const peg = createElement('fret');
		neck.append(fret);
	}

	//Create a body and add Strings
	const body = createElement('body');
	strings.forEach(tone => ){
		const string = createElement('string')
		string.tone(tone)
		body.appaend(string);
	})

	return body;
}
