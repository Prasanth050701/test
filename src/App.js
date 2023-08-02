import React, { Component } from 'react';
import Pras from './components/func';
import Prash from './components/Classs';
import State from './components/State';
import SetState from './components/setState';
import TableFrag from './components/TableFrag';
import Forms from './components/Forms';
import UncontrolledForms from './components/UncontrolledForms';
import ControlledForm from './components/ControlledForm';


class App extends Component {
    render(){
        return(
            <div className='App'>
               {/* <SetState /> */}
                 <State /> 
              {/* <Pras Name="Hey"><p>This is Children Props</p></Pras> */}
              {/*  <Pras Name="Hello" />
               <Pras Name="Hii" />
               <Prash Name="Props is working"/>  */}
              {/*  <TableFrag /> */}
              {/* <Forms /> */}
             {/*  <UncontrolledForms /> */}
             {/* < ControlledForm /> */}
            </div>
        );
    }
}


export default App;