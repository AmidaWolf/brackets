module.exports = function check(str, bracketsConfig) {
  var checkSum = 0;
  var cheked = [];

  if (bracketsConfig.length == 1) {
    var open = bracketsConfig[0][0];
    var close = bracketsConfig[0][1];

    for (var i = 0; i < str.length; i++) {
      if (str[i] === open) {
        checkSum += 1;
      } else if (str[i] === close) {
        checkSum -= 1;
      }
      if (checkSum < 0) {
        return false;
      }
    }
    if (checkSum > 0) {
      return false;
    }
    return true;
  } else {

    var bracketsStr = '';
    var stackOpenBrackets = [];
    var dublicate = false;
    // перегоняем скобки в строку
    for (var i = 0; i < bracketsConfig.length; i++) {
      var open = bracketsConfig[i][0];
      var close = bracketsConfig[i][1];
      bracketsStr += open + close;
    }

    for (var i = 0; i < str.length; ++i) {
      var currentSymbol = str[i];
      var find = bracketsStr.indexOf(currentSymbol);

      if (find >= 0) {
        if (find & 1) {
          if (!stackOpenBrackets.length) {
            return false;
          }
          var last_bracketsStr = stackOpenBrackets.pop();
          if (last_bracketsStr != bracketsStr[find - 1]) {
            return false;
          }
        } else {
          stackOpenBrackets.push(currentSymbol);
        }
      }
    }
    return !stackOpenBrackets.length;
  }


}
