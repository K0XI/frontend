import React, { Component } from 'react';
import './index.css';
import {ReactComponent as User} from '../../Assets/icons/user.svg';
import {ReactComponent as Users} from '../../Assets/icons/users.svg';
import {ReactComponent as Award} from '../../Assets/icons/award.svg';
import {ReactComponent as Search} from '../../Assets/icons/search.svg';
import {ReactComponent as Circle} from '../../Assets/icons/circle.svg';
import SideBar from"../../components/Sidebar";
import Header from "../../components/Header";


class ChooseTaskPackage extends Component{
    constructor(props){
        super(props);
        this.state = {};
        this.taskClicked = this.taskClicked.bind()
    }
    state = {};
   
    componentDidMount(){
        this.ticker = setInterval(() => this.ticker,5000);
    }
    componentWillUnmount(){
        clearInterval(this.ticker);
    }
    tick(){
        this.setState({});
    }
    taskClicked(){
       window.open('/task',"_self");
    }
    render(){
        return(
        <div>  
            <Header className="Header" side="Dashboard"></Header>
            <SideBar id='SideBar' side="SideBar"></SideBar>  
               <header>  
                 <text className='module'>Fach</text>
                 <div id='PointsDiv'>
                  <User className="SingleUserPoints"></User>
                  <text className="SingleUserPointsTV">number of single points</text>
                  <Users className="GroupUserPoints"></Users>
                  <text className='GroupPointsTV'>number of group points</text>
                  </div>
                  <div >
                  <Search id='SearchBoxIcon'>Search</Search>
                  <form onSubmit={this.handleSubmit}>
                      <div>
                     <label className="SearchText">
                     <Search id='SearchBoxIcon'></Search>
                               <input type="text" value={this.state.value} onChange={this.handleChange} /> 
                      </label>
                      </div>
                   <input type="submit" value="Submit" />
                  </form>
                  </div>
                  </header>
                    <div9 >
                    <text className='teacher'>Lehrer</text>
                    <Circle className='ProfileImage'></Circle>
                    </div9>
                    <div3 className='Task1'>
                        <line>
                        <text className='Task1Head' onClick={this.taskClicked}>Aufgabenpacket 1</text>
                        <text className='Questions1'>Fragen</text>
                        <Award id='Award1'>Award</Award>
                        <text className='Correct1'>Richtig</text>
            
                        <text className='easyInfo'>leicht</text>
                        </line>
                        <div6 >
                            <line>
                            <text className='Task1Text' onClick={this.taskClicked}>Kurzer Beschreibungstext eine Aufgabe, 
                            die für Grundschüler gedacht ist. Das ergibt keinen Sinn, da die den
                             text eh nicht lesen werden. Naja mir egal… Ältere Schüler*innen schon.</text>
                             </line>
                        </div6>
                        </div3>
                    <div4 className='Task2'>
                        <text className='Task2Head' onClick={this.taskClicked}>Aufgabenpacket 2</text>
                        <text className='Questions2'>Fragen</text>
                        <Award id='Award2'>Award</Award>
                        <text className='Correct2'>Richtig</text>
                    
                        <text className='middleInfo'>mittel</text>
                        <div7>
                        <text className='Task2Text' onClick={this.taskClicked}>Kurzer Beschreibungstext eine Aufgabe, 
                        die für Grundschüler gedacht ist. Das ergibt keinen Sinn, da die den text eh nicht lesen werden.
                         Naja mir egal… Ältere Schüler*innen schon.</text>
                        </div7>
                        </div4>
                    <div5 className='Task3'>
                        <text className='Task3Head' onClick={this.taskClicked}>Aufgabenpacket 3</text>
                        <text className='Questions3'>Fragen</text>
                        <Award id='Award3'>Award</Award>
                        <text className='Correct3'>Richtig</text>
                        
                        <text className='hardInfo'>schwer</text>
                        <div8>
                             <text className='Task3Text'>Kurzer Beschreibungstext eine Aufgabe,
                              die für Grundschüler gedacht ist. Das ergibt keinen Sinn, da die den text eh nicht lesen werden. 
                              Naja mir egal… Ältere Schüler*innen schon.</text>
                        </div8>
                        </div5>
                        </div>
            );
        }
}

export default ChooseTaskPackage;