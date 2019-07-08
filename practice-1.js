'use strict';

function collectSameElements(collectionA, collectionB) {
  var re=[]
  for(var i=0;i<collectionA.length;i++){
      for(var j=0;j<collectionB.length;j++){
         if(collectionA[i]==collectionB[j]){
            re.push(collectionA[i])
         }
      }
    }
  return re;
}
