//HOME
var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
const y=new Date().toLocaleString();


var e;
var f;
var g;
var teacher_text;
var student_text;
var test_text;
 const element3 = document.getElementById('btn');
 if(element3){
    element3.addEventListener("click", () => {
        homeArray=[];

        var e = document.getElementById("teacher");
        var f = document.getElementById("student");
        var g = document.getElementById("test");
        var teacher_text = e.options[e.selectedIndex].text;
        var student_text = f.options[f.selectedIndex].text;
        var test_text = g.options[g.selectedIndex].text;
        homeArray.start_time=y;
        homeArray.teacher=teacher_text;
        homeArray.student=student_text;
        homeArray.test=test_text;
        console.log("array", homeArray);
        console.log(JSON.stringify(homeArray));
//        if (test_text == 'Vowel to Word') {
//            window.location.href ="voweltoword.html";
//        }else if (test_text == 'Word to Phrase') {
//            window.location.href ="https://www.geeksforgeeks.org/";
//        } else {
//            alert("Please select a valid option");
//        }
    });
 }

//V2W

$('#fullimage fullimage:first-child').fadeIn();

var curr = $('#fullimage fullimage:first-child');

$('#next').on('click', function() {
  curr.hide();
  var next = curr.next();
  if (next.length == 0) next = $('#fullimage :first');
  next.fadeIn();
  curr = next;
  return false;
});

$('#prev').on('click', function() {
  curr.hide();
  var prev = curr.prev();
  if (prev.length == 0) prev = $('#fullimage :last');
  prev.fadeIn();
  curr = prev;
  return false;
});
$('#start_test').on('click', function() {
  curr.hide();
  var next = curr.next();
  if (next.length == 0) next = $('#fullimage :first');
  next.fadeIn();
  curr = next;
  return false;
});


var tick_counter=0;
var cross_counter=0;
var dnd_counter=0;
var disengaged_counter=0;

var attempt=[];

$('#tick').each( function(){

  $( this ).click( function(){
    tick_counter++;
    console.log("tick=", tick_counter);
    attempt.push("tick");
  } );
} )

$('#cross').each( function(){

  $( this ).click( function(){
    cross_counter++;
    console.log("cross=", cross_counter);
    attempt.push("cross");
  } );
} )

$('#dnd').each( function(){

  $( this ).click( function(){
    dnd_counter++;
    console.log("dnd=", dnd_counter);
    attempt.push("dnd");
  } );
} )



var date=0;
var clickTimes = [];
$("#next").on('click', function() {
  var clickTime = new Date().getTime();

    var i=0;
    var difference = clickTime - clickTimes[i];
    date=millisToMinutesAndSeconds(difference);
  clickTimes.push(clickTime);
});
$("#start_test").on('click', function() {
  var clickTime = new Date().getTime();

    var i=0;
    var difference = clickTime - clickTimes[i];
    date=millisToMinutesAndSeconds(difference);
  clickTimes.push(clickTime);
});
var diseng=0;
var clickTimes1 = [];
$("#disengaged").on('click', function() {
  var clickTime1 = new Date().getTime();

    var j=0;
    var difference1 = clickTime1 - clickTimes1[j];
    diseng=millisToMinutesAndSeconds(difference1);
  clickTimes1.push(clickTime1);
});

var ele = document.getElementsByClassName('pic');


function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

<!--x=new Date().toLocaleString();-->

const element1 = document.getElementById('prev');
const element2 = document.getElementById('next');
const element4 = document.getElementById('next');

element1.addEventListener("click", () => {
myArray.push({'question end time':myDate});
	tick_counter=0;
	cross_counter=0;
    dnd_counter=0;

});



var count=0;
var ele = document.getElementsByClassName('pic');
element2.addEventListener("click", () => {
myArray=[];


  myArray.push({'start':y});
  myArray.push({'id':ele[count].id});
  myArray.push({'attempts':attempt});
  myArray.push({'tick':tick_counter});
  myArray.push({'cross':cross_counter});
  myArray.push({'dnd':dnd_counter});
  myArray.push({'question time':date});
  myArray.push({'disengaged time':diseng});
//  myArray.id=ele[count].id;
//  myArray.attempts=attempt;
//  myArray.tick=tick_counter;
//  myArray.cross=cross_counter;
//  myArray.dnd=dnd_counter;
//  myArray.question_time=date;
//  myArray.disengaged_time=diseng;


console.log('array', myArray, count);
console.log(jsonify(myArray));
//download(myArray);


});



//download(myArray);

//function exportJson(el) {
//
//    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
//    console.log("hi",obj,data);
//
//    el.setAttribute("href", "data:"+data);
//    el.setAttribute("download", "data.json");
//
//}

element4.addEventListener("click", () => {
    tick_counter=0;
	cross_counter=0;
    dnd_counter=0;
    attempt=[];
//    myArray=[];

    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    prev.onclick = function(){
      count=count-1;
    }

    next.onclick = function(){
      count=count+1;
    }
});

function diseng_change()
{
    var elem1 = document.getElementById("disengaged");
    if (elem1.value=="Engaged") elem1.value = "Disengaged";
    else elem1.value = "Engaged";
}
function disr_change()
{
    var elem2 = document.getElementById("disruptive");
    if (elem2.value=="Focused") elem2.value = "Disruptive";
    else elem2.value = "Focused";
}
var time1;
var time2;
var disengaged_time;
var engaged_time;
var disruptive_time;
var focused_time;

<!--var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");-->
 function end_time(){
    time2=myDate;
    console.log(time2);
 }



function end() {

var dict =  {};
dict['correct']= tick_counter;
dict['wrong']= cross_counter;
dict['dnd']= cross_counter;
dict['end time']=time2;



console.log("json", dict);

}

//function setAttributes(el, attrs) {
////  for(var key in attrs) {
////    el.setAttribute(key, attrs[key]);
////  }
//
//}



//function download(obj){
//
//    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
//    //setAttributes(exportJSON, {"href": "data:"+data, "download": "data.json",});
//    exportJSON.setAttribute("href", "data:"+data);
//    exportJSON.setAttribute("download", "data.json");
//    var nodes=[], values=[];
//    for (var att, i = 0, atts = exportJSON.attributes, n = atts.length; i < n; i++){
//        att = atts[i];
//        nodes.push(att.nodeName);
//        values.push(att.nodeValue);
//    }
//
//}

//CONVO

const submit = document.getElementById('submit');
function getForm(event){
//    e.preventDefault();
    var number= document.getElementById("number").value;
    console.log("number",number);
    for (i=0;i<number;i++){
//        document.querySelector(submit).addEventListener("click", () => {
//        document.querySelector(element2).click();
        element2.click();
        console.log("click");
//    });
    }
}
getForm();

