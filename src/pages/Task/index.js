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
			
			<br></br>
			<br></br>
			<br></br>

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
					<select value={this.state.value} onChange={this.handleChange}>
          				<option value="0">Fach</option>
          				<option value="1">Mathe</option>
          				<option value="2">Deutsch</option>
          				<option value="3">Englisch</option>
          			</select>  
				</div>

				<div>
					<textarea placeholder="Beschreibung der Aufgabe"></textarea>
				</div>
			</form>
		);
	}
}

export default Template;
