import React, { Component } from 'react';
import MainC from './Main';
import Home from './Home';
import About from './About';
import {
  BrowserRouter,
  Route, Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/App.css';


const mapStateToProps = (state) => {
  return {
    user: state.reducer1,
    math: state.math

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      })
    }

  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      signup: false,
      signin: false,
      isLoggedIn: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({search: e.target.value})
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="body1">
            <header>
            <div classname="topLogo">
              <a className="Logo" href='/' title="Bluebeam, Inc.">
                <img href='' src='../logo.svg' alt="Bluebeam"/>
              </a>
              <div className="searchIcon">
                
              </div>
            </div>
              
            <nav role="navigation" className="hamburger-menu header-mobile-visible">
              <div id="menuToggle">
                <input type="checkbox" className="ham-button"/>
                
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                  <a href="" className="ham-items"><li>Sub1</li></a>
                  <a href="" className="ham-items"><li>Subpage2</li></a>
                  <a href="" className="ham-items"><li>Subthing3</li></a>
                  <a href="" className="ham-items"><li>sub4</li></a>
                  <a href="" className="ham-items"><li>nothersub5</li></a>
                </ul>
              </div>
            </nav>


              {/* <div className="hamburger-menu header-mobile-visible">MENU</div> */}

              <div className="header-section header-section-main">
                {/* <a href="" className="header-title">TITLEPAGE</a> */}
                <Link to="/"><div className="header-title">TITLEPAGE</div></Link>
                {/* <a href="" className="header-mobile-invisible">Sub1</a> */}
                <Link to='/main'><div className="header-movile-invisible">Main</div></Link>
                {/* <a href="" className="header-mobile-invisible">Subpage2</a> */}
                <Link to='/about'><div className="header-mobile-invisible">About</div></Link>
                <a href="" className="header-mobile-invisible">Subthing3</a>
                <a href="" className="header-mobile-invisible">Sub4</a>
                <a href="" className="header-mobile-invisible">Sub5</a>
              </div>

              {
                this.state.isLoggedIn 
                  ? <div> Hi User </div>
                  : <div className="header-section header-section-right">
                      <a href="" className="minimal">SIGN IN</a>
                      <a href="" className="minimal header-mobile-invisible">SIGN UP</a>

                    </div>
              }

              <div className="searchIcon">
                <i>
                  search
                </i>
              </div>
            </header>

            {this.state.signup || this.state.signin ? 
              <div className="sign">

              </div>
              : null
            }

            <main>
            <div className="route-page">
                {/* <Route path exact='/' component={Home}/> */}
                <Route path exact='/' render={()=>{
                  return <Home/>
                }}/>
                {/* <Route path='/main' component={MainC}/> */}
                <Route path='/main' render={(props)=>(
                  <MainC 
                    {...props} 
                    names={this.props.user.name}
                    changeName={()=>this.props.setName(this.state.search)}
                  />
                )}/>
                <Route path='/about' component={About}/>
              </div>

              <hr />

              <div className="shot-grid">
                <div className="shot">
                  <Link to="/main"><div className="mock-img"></div></Link>
                  <div className="shot-name">Shot Name1</div>
                </div>
                <div className="shot">
                  <Link to="/about"><div className="mock-img"></div></Link>
                  <div className="shot-name">Shot Name2</div>
                </div>
                <div className="shot">
                  <div className="mock-img"></div>
                  <div className="shot-name">Shot Name3</div>
                </div>
                <div className="shot">
                  <div className="mock-img"></div>
                  <div className="shot-name">Shot Name4</div>
                </div>
                <div className="shot">
                  <div className="mock-img"></div>
                  <div className="shot-name">Shot Name5</div>
                </div>
                <div className="shot">
                  <div className="mock-img"></div>
                  <div className="shot-name">Shot Name6</div>
                </div>
                <div className="shot">
                  <div className="mock-img"></div>
                  <div className="shot-name">Shot Name7</div>
                </div>
              </div>
            </main>
          </div>

          <hr />
         
        </div>
        


      </BrowserRouter>
    );
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);