'use strict';

module.exports = {
    delay: (ms)=>{
        return new Promise(function(resolve){
            setTimeout(resolve,ms|| ~~(Math.random()*100+1))
        })
    }
}
