import React, { Component } from 'react';
import MainC from './Main';
import Home from './Home';
import About from './About';
import {
  BrowserRouter,
  Route, Link
} from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'EN',
      search: false,
      langButton: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLangSelect = this.handleLangSelect.bind(this);
  }

  handleLangSelect() {
    this.setState(prevState => ({
      langButton: prevState.langButton === '' ? 'selected' : ''
    }))
  }

  handleSearch() {
    this.setState({search: !this.state.search})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <div className="topLogo">
              <a className="leftLogo" href='/' title="Bluebeam, Inc.">
                <img href='' src={require('../logo.svg')} alt="Bluebeam"/>
              </a>
              <div className="rightLogo">
                <a className="cart">
                  <img className='cart' alt="cart" src={require('../cart.svg')}/>
                </a>
                <div className={`lang-button ${this.state.langButton}`} onClick={this.handleLangSelect}>
                  <a className="lang">
                    <img className='flag' alt={this.state.lang} src={require('../flags/us.svg')}/>
                    <i className={`arrow2 ${this.state.langButton}`}/>
                  </a>
                </div>
                { this.state.langButton 
                  ?
                  <ul className={this.state.langButton}>
                    <li className='lang'>
                      <p className='lang-menu'>Dansk</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/dk.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Deutsch (CH)</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/ch.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Deutsch (DE)</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/de.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>English (AU)</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/au.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>English (UK)</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/gb.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>English (US)</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/us.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Español</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/es.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Français</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/fr.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Italiano</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/it.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Nederlands</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/nl.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Norsk</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/no.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Suomi</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/fi.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>Svenska</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/se.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>日本語</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/jp.svg')}/>
                    </li>
                    <li className='lang'>
                      <p className='lang-menu'>한글</p>
                      <img className='menu-flag' alt={this.state.lang} src={require('../flags/kr.svg')}/>
                    </li>


                  </ul>
                  : null
                }
              </div>
            </div>
            {
              this.state.search
                ? <form className='nav-item'>
                    <input className='searching' type='text' name='What are you looking for?'/>

                  </form> 
                : <nav>
                    <a className='nav-item'>
                      <span className='nav-font'>SOLUTIONS</span>
                      <i className='arrow'/>
                    </a>
                    <a className='nav-item'>
                      <span className='nav-font'>TRAINING</span>

                    </a>
                    <a className='nav-item'>
                      <span className='nav-font'>SUPPORT</span>

                    </a>
                    <a className='nav-item'>
                      <span className='nav-font'>COMPANY</span>

                    </a>
                    <a className='nav-item'>
                      <span className='nav-font'>STORE</span>

                    </a>
                    <button className='trial-button'>
                      Download a Trial
                    </button>
                    
                    <a className='search' onClick={this.handleSearch}>
                      <img className='search' alt="search" src={require('../search.svg')}/>
                    </a>
                  </nav>
            }
            
              
            
          </header>

          <main>
            <div className="splash">
              <div className='spash-main'>
                <h1 className='splash-head'>
                  Build Better
                  <br/>
                  with Bluebeam
                </h1>
                <p className='splash-p'>
                  For those who design, engineer, bid and build our world, Bluebeam
                  <sup>®</sup>
                  Revu
                  <sup>®</sup>
                  is how professionals get more done.
                </p>
                <div className='splash-buttons'>
                  <button className='splash-b1'>
                    Explore Revu
                  </button>
                  <button className='splash-b2'>
                    Upgrade to Revu 2018
                  </button>
                </div>
              </div>
            </div>
            
          </main>

         
        </div>
        


      </BrowserRouter>
    );
  }
}

// export default App;
export default App;