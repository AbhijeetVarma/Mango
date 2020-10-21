function touch(o1,o2){
    if(o1.body.position.x - o2.body.position.x < o2.width/2 + o1.width/2 &&
      o2.body.position.x - o1.body.position.x < o2.width/2 + o1.width/2 &&
       o1.body.position.y - o2.body.position.y < o2.height/2 + o1.height/2 &&
      o2.body.position.y - o1.body.position.y < o2.height/2 + o1.height/2 ){
        
        return true;
  
   } else{
     return false;
   }
}
