import React, { Component } from 'react';
import './App.css';
import {Grid, Row} from "react-bootstrap";
import "react-bootstrap/dist/react-bootstrap.min.js";


const styles = ({
  box: {
    width : '300px',
    height :'200px',
    justifyContent: 'center',
    backgroundColor: '#F3D1B0',

  },
  
  grid:{
    marginLeft:'100px',
    marginTop:'100px',
    backgroundColor:'lightblue',
    height:'200px',
    width:'300px',
    boxShadow:'1px 3px 1px 1px #9E9E9E',
  },
  
  title_background:{
    backgroundColor: 'skyblue',
    height: '45px',
  },

  title_date: {
    fontSize: '25px',
    color: 'white',
    marginLeft: '55px',
    marginRight: '55px',
    marginTop:'200px',
  },
  
  text:{
    marginLeft: '50px',
    marginRight: '50px',
    marginTop: '60px',
    color: 'white',
    height: '50px',
    fontSize: '40px', 
  
  },

  text_background:{
    backgroundColor: 'skyblue',
  },

  head2:{
    marginLeft:'200px',
  },
});


class clock extends React.Component {
  constructor(props){
    super(props);
    this.state = { time: new Date() };

  }

  componentDidMount(){
    this.updateTime();
  } 

  updateTime(){
    setInterval(() => {
      this.setState({time:new Date()});
    },1000);
  }


  render() {
    return (
      <div>
        <Grid fluid style={styles.grid}>
          <Row style={styles.title_background}>
              <p style={styles.title_date}>{this.state.time.toDateString()}</p>    
          </Row>
          <Row style={styles.text}>
            <p>
            <span style={styles.text_background}>{this.state.time.getHours()}</span> : <span style={styles.text_background}>{this.state.time.getMinutes()}</span> : <span style={styles.text_background}>{this.state.time.getSeconds()}</span>
            </p>  
          </Row>
        </Grid>
        <h2 style={styles.head2} >Sydney</h2>  
      </div>
    );
  }
}

export default clock