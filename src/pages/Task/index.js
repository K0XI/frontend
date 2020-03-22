import React, { Component } from 'react';
import './index.scss';

class Template extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<form>
				
				<div id="top">
					<h1>Neue Aufgabe Erstellen</h1>
					<button id="btn-release">VERÖFFENTLICHEN</button>
				</div>
			
			<br></br><br></br><br></br>

				<div className="title">
					<input type="text" id="input-field" placeholder="Aufgaben Pack Titel" /> 
					<br></br>
					<br></br>
					<ul className="difficulty">
						<li id="green">Einfach</li>
						<li id="orange">Mittel</li>
						<li id="red">Schwer</li>
					</ul>
				</div>
				
				<div className="select">
					<select value={this.state.value} onChange={this.handleChange}>
          				<option value="0">Fach</option>
          				<option value="1">Mathe</option>
          				<option value="2">Deutsch</option>
          				<option value="3">Englisch</option>
          			</select>
					  <br></br>
					<select value={this.state.value} onChange={this.handleChange}>
          				<option value="0">Fach</option>
          				<option value="1">Mathe</option>
          				<option value="2">Deutsch</option>
          				<option value="3">Englisch</option>
          			</select>  
				</div>
					
				<div>
					<textarea className="task-description" placeholder="Beschreibung der Aufgabe"></textarea>
				</div>
				<br></br>
				<div className="questions">
					<p>Frage 1</p>
					<input type="text" id="input-field" placeholder="Aufgaben Pack Titel" /> 
					<textarea className="task-description" placeholder="Beschreibung der Aufgabe"></textarea>
				
					<div className="radio-btn">	
				  	<ul>
				  		<li><div>
				  			<input type="radio" id="feste" className="radio-input" name="Antwortmoeglichkeiten" value="Feste" />
    						<label for="feste">Feste Antwort</label> 
						</div></li>
						<li><div>
							<input type="radio" id="text" className="radio-input" name="Antwortmoeglichkeiten" value="Text" />
    						<label for="text"> Text Eingabe</label>
						</div></li>
						<li><div>
							<input type="radio" id="mathe" className="radio-input" name="Antwortmoeglichkeiten" value="Mathe" />
    						<label for="mathe">Mathe Eingabe</label> 
						</div></li>
						<li><div>
							<input type="radio" id="multiple" className="radio-input" name="Antwortmoeglichkeiten" value="Multiple" />
    						<label for="multiple"> Multiple Choice</label> 
						</div></li>
						<li><div>
							<input type="radio" id="code" className="radio-input" name="Antwortmoeglichkeiten" value="Code" />
    						<label for="code">Code</label>
						</div></li>
						<li><div>
							<input type="radio" id="zeichnen" className="radio-input" name="Antwortmoeglichkeiten" value="Zeichnen" />
    						<label for="zeichnen">Zeichenfläche</label> 
						</div></li>
					</ul>
				</div>
					<textarea className="task-answer" placeholder="Antwort"></textarea>
				</div>
				<br></br>
				<div className="questions">
					<p>Frage 2</p>
					<input type="text" id="input-field" placeholder="Aufgaben Pack Titel" /> 
					<textarea className="task-description" placeholder="Beschreibung der Aufgabe"></textarea>
				
					<div className="radio-btn">	
				  	<ul>
				  		<li><div>
				  			<input type="radio" id="feste" className="radio-input" name="Antwortmoeglichkeiten" value="Feste" />
    						<label for="feste">Feste Antwort</label> 
						</div></li>
						<li><div>
							<input type="radio" id="text" className="radio-input" name="Antwortmoeglichkeiten" value="Text" />
    						<label for="text"> Text Eingabe</label>
						</div></li>
						<li><div>
							<input type="radio" id="mathe" className="radio-input" name="Antwortmoeglichkeiten" value="Mathe" />
    						<label for="mathe">Mathe Eingabe</label> 
						</div></li>
						<li><div>
							<input type="radio" id="multiple" className="radio-input" name="Antwortmoeglichkeiten" value="Multiple" />
    						<label for="multiple"> Multiple Choice</label> 
						</div></li>
						<li><div>
							<input type="radio" id="code" className="radio-input" name="Antwortmoeglichkeiten" value="Code" />
    						<label for="code">Code</label>
						</div></li>
						<li><div>
							<input type="radio" id="zeichnen" className="radio-input" name="Antwortmoeglichkeiten" value="Zeichnen" />
    						<label for="zeichnen">Zeichenfläche</label> 
						</div></li>
					</ul>
					</div>

				<ul>
					<li><div><input type="checkbox" /> <input type="text" id="input-field-a" placeholder="Antwort 1" /></div></li>
					<li><div><input type="checkbox" /> <input type="text" id="input-field-a" placeholder="Antwort 1" /></div></li>
					<li><div><input type="checkbox" /> <input type="text" id="input-field-a" placeholder="Antwort 1" /></div></li>
					<li><div><input type="checkbox" /> <input type="text" id="input-field-a" placeholder="Antwort 1" /></div></li>
				</ul>
				</div>

			</form>
		);
	}
}

export default Template;
