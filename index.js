// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [4]
  for (var i = 0; i < 4; i++)
  newArray[i] = musicians[i].concat(" plays " + instruments[i]);
  return newArray
};


function johnLennonFacts(facts) {
  var i = 0;
  while (i < 3) {
    return facts[i] = facts[i].concat("!!!");
    i++;
  }
};
