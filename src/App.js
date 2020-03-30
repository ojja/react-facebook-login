import React from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log("responseFacebook",response);
}
function App() {
  return (
    <div className="App">
        <FacebookLogin
          appId="253582405221839"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook} />
    
    </div>
  );
}

export default App;
