const { Console } = require('console');
const fs = require('fs');

var json1 = require('./json1.json');
var json2 = require('./json2.json');
var json3 = require('./json3.json');
var json4 = require('./json4.json');



// init
fs.writeFile('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',"BPM 60"+ "\n" + "NOTE C2 1 ", 
function (err) {
    if (err) throw err;
  });







  objectLength = Object.keys(json1).length;
  console.log(objectLength);


  for (let i = 1 ; i < objectLength; i++)        {
    var fo = json1[i];
    var foo = fo.split(" ");
    var ba = json2[i];
    var bar = ba.split(" ");
    var no = json3[i];
    var noo = no.split(" ");
    var ga = json4[i];
    var gar = ga.split(" ");







//  function definition 
function EncodeMeasure(foo, bar, noo, gar) {


  measureinfo = json1[0];




    
  // first
        fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
        "NOTE C2 1 _"+i+"_1  ; mes"+ i + "\n" +
         "group @tight "+"\n" +
         "{"+"\n", 
        function (err) {
            if (err) throw err;
          });
        
      
      
      // if silence then 1/ delay and 2/ start loop from 1
      if (foo[0] == "none"){
      
            // 1/ delay 
      // fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',"", 
      // function (err) {
      //     if (err) throw err;
      //   });
            // 2/ start loop from 0
         for (let i = 1 ; i < foo.length/2; i++)        {
          fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
          foo[i*2-1] +" sop "+ foo[i*2]+ "\n" 
          , function (err) {if (err) throw err });   }
                           }
      // else if no silence start loop from 1 and make the beginning manually
          else {
      // console.log("else");
      
          fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
          "sop "+ foo[0]+ "\n"
          , function (err) {if (err) throw err });
      
            for (let i = 1 ; i < foo.length/2; i++)        {
        fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
        foo[i*2-1] +" sop "+ foo[i*2]+ "\n" 
        , function (err) {if (err) throw err });   }
               };
      // close groupe1 parenthesis
      fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
                "}"+"\n" +"\n", 
               function (err) {
                   if (err) throw err;
                 });
      
      //  groupe2 
      
      
  
  
  
      
      
  // second
      fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
         "group @tight "+"\n" +
         "{"+"\n", 
        function (err) {
            if (err) throw err;
          });
        
      
      
      // if silence then 1/ delay and 2/ start loop from 1
      if (bar[0] == "none"){
      
            // 1/ delay 
      // fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',"", 
      // function (err) {
      //     if (err) throw err;
      //   });
            // 2/ start loop from 0
         for (let i = 1 ; i < bar.length/2; i++)        {
          fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
          bar[i*2-1] +" alt "+ bar[i*2]+ "\n" 
          , function (err) {if (err) throw err });   }
                           }
      // else if no silence start loop from 1 and make the beginning manually
          else {
      // console.log("else");
      
          fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
          "alt "+ bar[0]+ "\n"
          , function (err) {if (err) throw err });
      
            for (let i = 1 ; i < bar.length/2; i++)        {
        fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
        bar[i*2-1] +" alt "+ bar[i*2]+ "\n" 
        , function (err) {if (err) throw err });   }
               };
      // close groupe1 parenthesis
      fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
                "}"+"\n" +"\n", 
               function (err) {
                   if (err) throw err;
                 });
      
      
  
  
  // third
  fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
  
   "group @tight "+"\n" +
   "{"+"\n", 
  function (err) {
      if (err) throw err;
    });
  
  
  
  // if silence then 1/ delay and 2/ start loop from 1
  if (noo[0] == "none"){
  
      // 1/ delay 
  // fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',"", 
  // function (err) {
  //     if (err) throw err;
  //   });
      // 2/ start loop from 0
   for (let i = 1 ; i < noo.length/2; i++)        {
    fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
    noo[i*2-1] +" ten "+ noo[i*2]+ "\n" 
    , function (err) {if (err) throw err });   }
                     }
  // else if no silence start loop from 1 and make the beginning manually
    else {
  // console.log("else");
  
    fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
    "ten "+ noo[0]+ "\n"
    , function (err) {if (err) throw err });
  
      for (let i = 1 ; i < noo.length/2; i++)        {
  fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
  noo[i*2-1] +" ten "+ noo[i*2]+ "\n" 
  , function (err) {if (err) throw err });   }
         };
  // close groupe1 parenthesis
  fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
          "}"+"\n" +"\n", 
         function (err) {
             if (err) throw err;
           });
  
  //  groupe2 
  
  
  
  
  
  
  
  // fourth
  fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
   "group @tight "+"\n" +
   "{"+"\n", 
  function (err) {
      if (err) throw err;
    });
  
  // if silence then 1/ delay and 2/ start loop from 1
  if (gar[0] == "none"){
  
      // 1/ delay 
  // fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',"", 
  // function (err) {
  //     if (err) throw err;
  //   });
      // 2/ start loop from 0
   for (let i = 1 ; i < gar.length/2; i++)        {
    fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
    gar[i*2-1] +" bas "+ gar[i*2]+ "\n" 
    , function (err) {if (err) throw err });   }
                     }
  // else if no silence start loop from 1 and make the beginning manually
    else {
  // console.log("else");
  
    fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
    "bas "+ gar[0]+ "\n"
    , function (err) {if (err) throw err });
  
      for (let i = 1 ; i < gar.length/2; i++)        {
  fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt', 
  gar[i*2-1] +" bas "+ gar[i*2]+ "\n" 
  , function (err) {if (err) throw err });   }
         };
  // close groupe1 parenthesis
  fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
          "}"+"\n" +"\n", 
         function (err) {
             if (err) throw err;
           });
  



  
  
           switch(measureinfo[i*2 -2]+ " "+measureinfo[i*2 -1]) {
            case "2 4":
              fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
              "NOTE D#2 1 "+i+"_4" +"\n"+"\n"+"\n", function (err) {if (err) throw err;});
              break;
  
  
  
            case "3 4":
              fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
              "NOTE D2 1 "+i+"_3" +"\n"+
              "NOTE D#2 1 "+i+"_4" +"\n"+"\n"+"\n", function (err) {if (err) throw err;});
                break;
  
  
  
            case "4 4":
              fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
              "NOTE C#2 1 "+i+"_3" +"\n"+
              "NOTE D2 1 "+i+"_3" +"\n"+
              "NOTE D#2 1 "+i+"_4" +"\n"+"\n"+"\n", function (err) {if (err) throw err;});
              break;
  
            case "1 8":
                fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
                "\n"+"\n"+"\n", function (err) {if (err) throw err;});
                break;

            case "2 8":
                fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
                "\n"+"\n"+"\n", function (err) {if (err) throw err;});
                break;
            
            case "3 8":
                  fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
                  "NOTE D2 0.5 "+i+"_3" +"\n"+
                  "NOTE D#2 0.5 "+i+"_4" +"\n"+"\n"+"\n", function (err) {if (err) throw err;});
                    break;
  
            case "5 8":
              fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
              "NOTE C#2 0.5 "+i+"_3" +"\n"+
              "NOTE D2 0.5 "+i+"_3" +"\n"+
              "NOTE D#2 0.5 "+i+"_4" +"\n"+"\n"+"\n", function (err) {if (err) throw err;});
              break;
  
            case "6 8":
                fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/chef20/antescofo/score-to-antescofo.asco.txt',
                "NOTE C#2 0.5 "+i+"_3" +"\n"+
                "NOTE D2 0.5 "+i+"_3" +"\n"+
                "NOTE D2 0.5 "+i+"_3" +"\n"+
                "NOTE D#2 0.5 "+i+"_4" +"\n"+"\n"+"\n", function (err) {if (err) throw err;});
                break;
  
            default:
              // code block
          }
    }
  

// use it
    EncodeMeasure(foo, bar, noo, gar)  
  }



