'use strict'

const maxCashLength = 10;
const casheArr = [];

function casheWrapper(sumFunction, maxCashLength){
    return function(... args){
        let key = args.join(',');

        for(let value of casheArr){
            if(value.key === key){
                return value.result;
            }
        }
        
        if(casheArr.length >= maxCashLength){
            casheArr.shift()
        }

        const result = sumFunction(...args);
        casheArr.push({key, result});
        return result;
    }
}

const sumFunction = (a,b)=>{
    return a + b;
}

const cachedFunction = casheWrapper(sumFunction, maxCashLength)
cachedFunction(3,2)
cachedFunction(2,6)
cachedFunction(1,6)
cachedFunction(2,2)
cachedFunction(5,4)
cachedFunction(9,8)
cachedFunction(4,7)
cachedFunction(3,8)
cachedFunction(5,6)
cachedFunction(6,9)
console.log(casheArr)