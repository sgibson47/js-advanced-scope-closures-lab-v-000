function produceDrivingRange(blocks){
  return function(start, end){
    const startNum = parseInt(start.split("th"));
    const endNum = parseInt(end.split("th"));
    if ((endNum - startNum) > blocks){
      return `${(endNum - startNum) - blocks} blocks out of range`
    } else {
      return `within range by ${blocks - (endNum - startNum)}`
    };
  };

  //OR 
  // return function(startingBlock, endingBlock){

  //   let start = parseInt(startingBlock);
  //   let end = parseInt(endingBlock);
  //   let distanceToTravel = Math.abs(end - start);
  //   let difference = blockRange - distanceToTravel;

  //   if( difference > 0){
  //     return `within range by ${difference}`
  //   } else {
  //     return `${Math.abs(difference)} blocks out of range`
  //   }
  // }
}

function produceTipCalculator(tip){
  return function(fare){
    return tip * fare;
  }
}

function createDriver(){
  let DriverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}