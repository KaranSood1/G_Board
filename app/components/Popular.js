var React = require('react');
class Popular extends React.Component {
constructor(props){
  super(props);
  //Initial state
  this.state = {
    selectedLanguage:'All'
  };

  this.updateLanguage = this.updateLanguage.bind(this);
}
//Way To update the initial State
updateLanguage(lang){
  this.setState(function(){
    return {
      selectedLanguage:lang
    }
  });
}
  render(){
    var languages =  ['All','Javascript','Ruby','Java','CSS', 'Python'];
    return (
      <div>
        <ul className='languages'>
          // <p>Selected Language :{this.state.selectedLanguage}</p>
          {languages.map(function(lang){
            return (
              <li
              style={lang === this.state.selectedLanguage ? {color:'#d0021b'} :null }
              onClick = {this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        },this)}
        </ul>



      </div>
    )
  }
}

module.exports = Popular;
