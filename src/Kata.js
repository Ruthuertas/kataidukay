import React, { Component } from 'react';
import './Kata.css';

class Kata extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  componentWillMount(){
    this.generateArray(3,5);
  }
  generateArray(rowNumber, columnsNumber) {
    /* console.log("rowNumber:" + rowNumber)
    console.log("columnsNumber:" + columnsNumber) */
  /*   let printerArray=[];
    let count=1;
    
    
    for (let row=0; row < rowNumber; row++) {
      const initRow = [];
      for (let col=0; col < columnsNumber; col++) {
        initRow.push(count);
          count++;
      }
      printerArray.push(initRow)
    }
    this.setState({printerArray:printerArray}); */

    let count=1;
    let printerArray=[];
    for(let row=0;row<rowNumber;row++){
      const initRow=Array.from({length:columnsNumber},()=>count++);
      printerArray.push(initRow)
    }
    this.setState({printerArray:printerArray});
}


loopArrayInSnail(){
  // console.log('Array',this.state.printerArray)
  const loopArray=this.state.printerArray;
  const result=[]

  const columNumber=loopArray[0].length-1;
  const rowNumber=loopArray.length-1;


console.log('ColNumber',columNumber)
console.log('rowNumber',rowNumber)

  for(let item=0;item<=columNumber;item++){
    
    result.push(loopArray[0][item]);
  
  }

  for(let row=1;row<=rowNumber;row++){
    result.push(loopArray[row][columNumber]);
  }

  for(let row=columNumber-1;row>=0;row--){
    result.push(loopArray[rowNumber][row]);
  
  }

  for(let up=0;up<=columNumber-1;up++){
    result.push(loopArray[rowNumber-1][up]);
  
  }

console.log('Array',result)
this.setState({resultArray:result})
}
//loopArray[fila][columna]

  render() {
    return (
      <div className="Kata">
     {this.state.printerArray.map((row)=>{
       return row.map((col)=>{
         return <span>{col}</span>
       });
       
     })}
      </div>  
    );
  }
}

export default Kata;
