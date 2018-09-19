import React from 'react';
import {
  Link, Route
} from 'react-router-dom';

function One() {
  return (
    <div>
      <h4>
        ONNEEEE
      </h4>
    </div>
  )
}

function Two() {
  return (
    <div>
      <h4>
        TWOOOOO
      </h4>
    </div>
  )
}

function Tre() {
  return (
    <div>
      <h4>
        TREEEEE 
      </h4>
    </div>
  )
}

function Topics({ match }) {
  // console.log(arguments);
  return (
    <div>
      {match.params.topicId}
    </div>
  )
}

export default function Main({match, names, changeName}) {
  console.log(arguments);
  return (
    <div>
      <h2>Main</h2>
      <ul> 
        <li>
          <Link to={`${match.url}/one`}>Rendering 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/two`}>Rendering 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/tre`}>Rendering 3</Link>
        </li>
      </ul>

      <hr />

      {/* <Route path='/main/one' component={One}></Route>
      <Route path='/main/two' component={Two}></Route>
      <Route path='/main/tre' component={Tre}></Route> */}
      
      <Route exact path={match.path} render={
        () => (
          <div>
            <h3>
              Hi there. I'm {names}
            </h3>
            <button onClick={changeName}>Change me</button>
          </div>
        )
      }></Route>
      <Route path={`${match.path}/:topicId`} component={Topics}></Route>

      <hr/>
      
    </div>
  )
}