'use strict';

function collectSameElements(collectionA, objectB) {
  var re=[]

        for(var i=0;i<collectionA.length;i++){
            for(var j=0;j<objectB.value.length;j++){
               if(collectionA[i].key==objectB.value[j]){
                  re.push(collectionA[i].key)
               }
            }
          }
        return re;
}