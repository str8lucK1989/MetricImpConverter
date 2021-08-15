let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    result = input.match(inputRegex)[0]

    let numRegex = /\d/

    if(numRegex.test(result) === false) {
      result = 1;
    }
    
    if(result.toString().includes("/")) {
      let values = result.toString().split("/")
      if(values.length != 2) {
        return "invalid number"
      }
      values[0] = parseFloat(values[0]);
      values[1] = parseFloat(values[1]);
      result = parseFloat((values[0]/values[1]).toFixed(5));
    }

    if(isNaN(result)) {
      return "invalid number"
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    result = input.match(inputRegex)[1];
   
    if (result) {
      
      switch (result) {
      case "gal":
      case "GAL":
        result = "gal";
        break;
      case "l":
      case "L":
        result = "L";
        break;
      case "lbs":
      case "LBS":
        result = "lbs";
        break;
      case "kg":
      case "KG":
        result = "kg";
        break;
      case "mi":
      case "MI":
        result = "mi";
        break;
      case "km":
      case "KM":
        result = "km";
        break;
      }};
     
      if(!result) {
        result = input.match(inputRegex)[0];
        switch (result) {
          case "gal":
          case "GAL":
            result = "gal";
            break;
          case "l":
          case "L":
            result = "L";
            break;
          case "lbs":
          case "LBS":
            result = "lbs";
            break;
          case "kg":
          case "KG":
            result = "kg";
            break;
          case "mi":
          case "MI":
            result = "mi";
            break;
          case "km":
          case "KM":
            result = "km";
            break;
        
          };
      }


    // result = input.match(inputRegex)[1]?.toLowerCase(); // "?" is needed to pass test 10
    // // Below is needed to pass test 6. 
    // if (result === "l") {
    //   result = "L";
    // }
    
    // if(!result) {
    //   result = input.match(inputRegex)[0].toLowerCase();
    //   if (result === "l") {
    //     result = "L";
    //   }
    // }
    var validUnits = ["gal", "l", "mi", "km", "lbs", "kg", "GAL", "L", "MI", "KM", "LBS", "KG"];
    

    if(!validUnits.includes(result)) {
      return "invalid unit"
    }
 
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit === "gal" || initUnit === "GAL") {    
      result = "L"
    } else if (initUnit === "l" || initUnit === "L") {
      result = "gal"
    }
    if(initUnit === "lbs" || initUnit === "LBS") {   
      result = "kg"
    } else if(initUnit === "kg" || initUnit === "KG") {  
      result = "lbs"
    }
    if(initUnit === "mi" || initUnit === "MI") {  
      result = "km"
    } else if(initUnit === "km" || initUnit === "KM") { 
      result = "mi"
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    switch (unit) {
        case "gal":
        case "GAL":
          result = "gallons";
          break;
        case "l":
        case "L":
          result = "liters";
          break;
        case "lbs":
        case "LBS":
          result = "pounds";
          break;
        case "kg":
        case "KG":
          result = "kilograms";
          break;
        case "mi":
        case "MI":
          result = "miles";
          break;
        case "km":
        case "KM":
          result = "kilometers";
          break;
      
        };
        return result;

  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if(initUnit === "gal" || initUnit === "GAL") {
      
      result = (initNum * galToL).toFixed(5)
    } else if(initUnit === "l" || initUnit === "L") {
   
      result = (initNum / galToL).toFixed(5)
    }
    if(initUnit === "lbs" || initUnit === "LBS") {
      
      result = (initNum * lbsToKg).toFixed(5)
    } else if(initUnit === "kg" || initUnit === "KG") {
      
      result = (initNum / lbsToKg).toFixed(5)
    }
    if(initUnit === "mi" || initUnit === "MI") {
      
      result = (initNum * miToKm).toFixed(5)
    } else if(initUnit === "km" || initUnit === "KM") {
      
      result = (initNum / miToKm).toFixed(5)
    }
    
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    let initUnitString = this.spellOutUnit(initUnit);
    let returnUnitString = this.spellOutUnit(returnUnit);

    result = `${initNum} ${initUnitString} converts to ${returnNum.toFixed(5)} ${returnUnitString}`;

    return result;
  };
  
}

module.exports = ConvertHandler;
