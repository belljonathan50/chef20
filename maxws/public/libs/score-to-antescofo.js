const { Console } = require('console');
const fs = require('fs');

var json1 = require('./json1.json');
var json2 = require('./json2.json');

var measureinfo = json1[0];

// init
fs.writeFile('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt',"BPM 60"+ "\n" + "NOTE C2 1 _1_1", 
function (err) {
    if (err) throw err;
  });

//  function definition 
  function EncodeMeasure(foo, bar) {

    
    
      fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt',
      "NOTE C2 1 _1_1  ; mes1..." + "\n" +
       "group group1 "+"\n" +
       "{"+"\n", 
      function (err) {
          if (err) throw err;
        });
      
    
    
    // if silence then 1/ delay and 2/ start loop from 1
    if (foo[0] == "none"){
    
          // 1/ delay 
    // fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt',"", 
    // function (err) {
    //     if (err) throw err;
    //   });
          // 2/ start loop from 0
       for (let i = 1 ; i < foo.length/2; i++)        {
        fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt', 
        foo[i*2-1] +" sop "+ foo[i*2]+ "\n" 
        , function (err) {if (err) throw err });   }
                         }
    // else if no silence start loop from 1 and make the beginning manually
        else {
    // console.log("else");
    
        fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt', 
        "sop "+ foo[0]+ "\n"
        , function (err) {if (err) throw err });
    
          for (let i = 1 ; i < foo.length/2; i++)        {
      fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt', 
      foo[i*2-1] +" sop "+ foo[i*2]+ "\n" 
      , function (err) {if (err) throw err });   }
             };
    // close groupe1 parenthesis
    fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt',
              "}"+"\n" +"\n", 
             function (err) {
                 if (err) throw err;
               });
    
    //  groupe2 
    
    
    
    
    
    fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt',
       "group group2 "+"\n" +
       "{"+"\n", 
      function (err) {
          if (err) throw err;
        });
      
    
    
    // if silence then 1/ delay and 2/ start loop from 1
    if (bar[0] == "none"){
    
          // 1/ delay 
    // fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt',"", 
    // function (err) {
    //     if (err) throw err;
    //   });
          // 2/ start loop from 0
       for (let i = 1 ; i < bar.length/2; i++)        {
        fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt', 
        bar[i*2-1] +" alt "+ bar[i*2]+ "\n" 
        , function (err) {if (err) throw err });   }
                         }
    // else if no silence start loop from 1 and make the beginning manually
        else {
    // console.log("else");
    
        fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt', 
        "alt "+ bar[0]+ "\n"
        , function (err) {if (err) throw err });
    
          for (let i = 1 ; i < bar.length/2; i++)        {
      fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt', 
      bar[i*2-1] +" alt "+ bar[i*2]+ "\n" 
      , function (err) {if (err) throw err });   }
             };
    // close groupe1 parenthesis
    fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt',
              "}"+"\n" +"\n", 
             function (err) {
                 if (err) throw err;
               });
    
    

    //   assume for now that we are in 4/4
    if (measureinfo[0]+ " "+measureinfo[1] == "4 4"){
      fs.appendFileSync('/Users/jonathanbell/dev/player-local/public/libs/score-to-antescofo.txt',
      "NOTE C#2 1 _1_2" +"\n"+
      "NOTE D2 1 _1_3" +"\n"+
      "NOTE D#2 1 _1_4" +"\n"+"\n"+"\n"
      , 
             function (err) {
                 if (err) throw err;
               });
    }
  }

// use it:


  objectLength = Object.keys(json1).length;


  for (let i = 1 ; i < objectLength; i++)        {
    var fo = json1[i];
    var foo = fo.split(" ");
    var ba = json2[i];
    var bar = ba.split(" ");
    EncodeMeasure(foo, bar)  
  
  
  }



