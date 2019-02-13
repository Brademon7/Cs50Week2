const strnigs = ['E', 'A', 'D', 'G', 'B', 'E'];

function Guiatr(){
	return(
		<Guitar>
			{strings.map(note => <String note = {note}/>}
		</Guitar>
	)
}
