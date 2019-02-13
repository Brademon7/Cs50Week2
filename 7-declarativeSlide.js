const SLIDE = {
	title: 'React is Declarative',
	bullets: [
		'Imperative vs Declarative',
		"The rowser API's aren't fun to work with",
		'React allows us to write what we want. The libraries will take care of the DOM manipulation',
	],
}

function createSlite(slide){
	return(
		<Slide>
			<h1> {SLIDE.title} </h1>
			<ul>
				{SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
			</ul>
		</Slide>
	)
}
