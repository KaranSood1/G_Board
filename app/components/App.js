var React = require('react');
var Popular = require('./Popular');
// class App extends React.Component{
//
//     constructor(props){
//         super(props);
//     }
//
//      render(){
//         let name = this.props.name;
//         return(
//             <div>
//                 Hello {name}
//             </div>
//
//         );
//     }
// }

class App extends React.Component{
  render(){
    return(
      <div className='container'>
        <Popular/>

      </div>
    )
  }
}


module.exports = App;
