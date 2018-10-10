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