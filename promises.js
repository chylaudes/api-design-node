var fs  = require('fs');

var readFile = function(){
  return new Promise(function(res, rej){
    fs.readFile('./package.json', function(err, file){
      console.log(file.toString());
    });
  });
};

readFile()
  .then(function(file){
    return word; // you can also return a new Promise
  })
  .then(function (word){// you can chain promises too
    console.log(word);
  })
  .catch(function(err){

  })
  .finally(); // guaranteed to run if there is a error or not

//BLUEBIRD -- performances is better than q

//You'll also see this a lot:

readFile()//common pattern that you will see
  .then(logFile, function(err){
    //error callback
  })
  .then(sendEmail)
  .then(callHome)
  .catch(function(){// if any of these Promises errors it will just go into catch

  });

//Promise. all
//resolves an array of Promises, and then resolves after all the promises are executed

var readAllFiles = function(){
  var promises = [readFile(), readFile(), readFile()]
  return Promise.all(promises)
}

readAllFiles()
  .then(function(files){
    console.log(files.length)
  });

  // all those promises comes back


// var action = function(){
//    return new Promise(function(resolve, reject){
//      setTimeout(function(){
//        resolve('hey');
//      }, 5000);
//    });
// };
// //Promise is something that was invented for JS
// action()//this function is returning a Promise
//   .then(function(word){ // resolve connects with then
//     console.log(word)
//   });
//
//
//   var action = function(){
//      return new Promise(function(resolve, reject){
//        setTimeout(function(){
//          reject(new Error('nnooooooo'));
//        }, 5000);
//      });
//   };
//
//   action()//this function is returning a Promise
//     .then(function(word){ // resolve connects with then
//       console.log(word)
//     })
//     .catch(function(err){
//       console.log(err);
//     });


//great thing to do is to build your own Promise libraries
