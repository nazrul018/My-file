// // console.log('hello');
// // console.log('hlw');

// // document.getElementById('title').innerHTML = 'hello world';
// // let sum = 50+70;
// // console.log(sum);

// // if (sum>100){
// //     console.log('Expensive');
// // }else{
// //     console.log('cheap');
// // }
// // let a=20;
// // let b=30;
// // console.log(a+b);
 
// // var a = 10;
// // var b = 20;
// // a=55;
// // console.log(a);

// // const country= 'bangladesh';
// // console.log(country);

// // let x=10;
// // x=x+1; //1 bare
// // x++ //1 bare as like x=x+1
// // console.log(x);

// // let y=10;
// // y=y-1;
// // y--;
// // console.log(y);

//     //((Operator Precedence))
//  /*website name= mdn web doc
//  amra jani jar value beshi se beshi priority AnimationPlaybackEvent,
//  ()>{}>[]>1
// */

//     //((comperision operator))
// // let p = '5';
// // let q = '7';
// // console.log(p===q);
// // console.log(p !==q);
// // console.log(p>q);
// // console.log(p<q);

// // ((logical operator))
// // && AND operator
// // || OR operator
// // ! NOT operator

// // ((Assignment operator))
// // let j =10;
// // let k =20;
// // j=j+k;
// // j+=k;
// // console.log(j);

// // ((conditional (Ternary) Operator))
// // let a=20;
// // let b=10;
// // let t = a > b ? 'True' : 'False';
// // console.log(t);

// // ((string er modde variable dekhano))
// // let firstName= 'Nazrul'
// // let finalName =`My Name is ${firstName}`;
// // console.log(finalName);

// //((BigInt use))
// // *** 15 digit er beshi digit hole vul result aste pare tai 15 digit er beshi hole bigint use korte hoi
// // *** (.) point er por 17 digit porjonto accurate kaj kore, er beshi hole thik moto kaj nao korte pare
// // *** (.) multiple point jog korle thik number ashena sometims, let a=0.2; let b=0.2; console.log((a*10) +(b*10))/10; 
// // let bigNumber = 9999999999999999999n;
// // console.log(bigNumber);
// // let bigNumber1 = BigInt(888888888888888888);
// // console.log(bigNumber1);
// // let a=30;
// // let b=4;
// // console.log(a/b);
// // let age=10;
// // let bigNumbet= BigInt(age);
// // console.log(bigNumbet);

// // ((Boolean use))
// // let ifadult= true;
// // console.log(typeof ifadult);

// // ((undefined))
// // let someInfo;
// // console.log(someInfo);
// // console.log(typeof someInfo);

// // ((Null=0))
// // let a = null;
// // console.log(a);
// // console.log(typeof a);

// // ((Array data type))
// // let fruits=['Apple', 'Banana', 'Mango', 'Orange'];
// // fruits[3]='Pineapple';
// // fruits[4]= 'Guaba';
// // console.log(fruits);
// // console.log(fruits[3]); //apple-0, banana-1, mango-2, orange-3

// // ((Object datatype))
// // let student = { 
// //     Name : 'Nazrul islam',
// //     age : 24,
// //     dateofbirth : 2002,
// // };
// // console.log(student);

//     // ((code driven invocation))
// // function functionnameanything (paramitet){ console.log('say somethin'+paramiter)};
// // functionnameanything ('argument');
// // function myFunction (fullName){
// //     console.log('Hello'+fullName);
// // }
// // myFunction ('Nazrul');

// // function practice (name,age,dateofbirth){
// //     console.log('I am '+name +', My age is '+age+ ', my date of birth is '+dateofbirth );
// // }
// // practice ('Nazrul', 20, 2002);
// // practice ('corruption');

//     // ((Event Driven Invocation- user can run the function himself))
// // function subscribe(subscribed){
// //     console.log('subscribed');
// // }
// // document.getElementById('btn').addEventListener('click', subscribe);


// // function registration (Registered){
// //     console.log('Registered');
// // }
// // document.getElementById('reg').addEventListener('click', registration);

//     // ((Automatic (self invoked) Invocation function- function will run automatically))
// // jeuhutu auto run hoi , function name no need 
// // (function (message){
// //     console.log('I am self-invoking function',message);
// // })
// // ('how are you');

// // let maths = function (x,y){
// //     return x*y;
// // };
// // console.log(maths(3,4));

// // ((squre value use))

// // let numbers=[2, 3, 4, 5];
// // let sqNumbers = numbers.map(function (number){
// //     return number * number;
// // });
// // console.log(sqNumbers);

//     // ((Regular vs Arrow function))
// // Regular
// // let add=function (x,y){
// //     return x+y;
// // };
// // console.log(add(4,5));

//     // Arrow Function 
// // let add=(x,y)=>x+y;
// // console.log(add(3,5)); 

//     // ((nested function= ekta function er modde arekta function lekha jai)) 
// // function greet (firstName){
// //     function sayHello(){
// //         alert ('Hello'+firstName);
// //     }
// //     return sayHello();
// // };
// // greet ('Nazrul');

//     // ((Object literal datatype, commonly const variable use in object data))
// // const student={
// //     Name: 'Nazrul',
// //     Age: 24,
// //     Gender:"Male",
// //     Country: 'bangladesh',
// //     educational_qualification: ['ssc', 'hsc', 'diploma'],
// // }; 
// // console.log(student); 
// // console.log(student.Age)
// // console.log(student['educational_qualification']);
// //(kono specific key ache kina jachai korte- hasOwnProperty('') use hoi)
// // console.log(student.hasOwnProperty('Gender'))
// //(object er key/value Array type dekhte)
// // console.log(Object.keys(student));
// // console.log(Object.values(student));

//     // ((Constructive object datatype))
// // in constructive object name first latter will be capital. eg: function Myname(){}
// // function Person(){
// //     this.firstName = 'Nazrul'
// //     this.lastName = 'Islam'
// // };
// // const person1 = new Person();
// // person1.age=24;
// // person1.dateofbirth=('06, june,2002')
// // console.log(person1);

// // function Person(first, last, sure){
// //     (this.firstName=first), (this.lastName=last), (this.surename=sure);
// // }
// // const person1 = new Person ('Nazrul', 'Islam', 'Robin');
// // const person2 =new Person ('Yousuf', 'Hossain', 'Johir');
// // console.log(person1);
// // console.log(person2);

//     // Array data can be taken 2 way-
// // const language = ['html', 'css', 'php', 'laravel'];
// //***add new data in array */
// // language[4]='React.js';
// // *** new method for take new data 
// // language.at (7)= 'pythone';
// // language.push('kakacola');
// // console.log(language); 
// // const language=new Array('html', 'css', 'php', 'laravel');
// //in new Array method, if you want to show only 1 item use Array.of();
// // ***Array data result shown in string format 
// // console.log(language.toString()); 
// //***total number of Array data shown by 
// // console.log(language.length);
// //**almost last value can be shown, if added new last than show the new last value */
// // console.log(language[language.length -1]); 
// // *** Item serial can't be broken, as like after [5] can't be [8] 
// //***new value add korar new way - language [7]-(language.at (7)) */
// //** array er result ke string dekhate (,) coma chara onno kicu use korte console.log(language.join('*')/('$')/('"')/('#')) */
// // console.log(language.join('  $')); 
// //**almost last item delete korte language.pop(); */
// //**last item add korte language.push('laraval'); use before console */
// //***first item delete korte language.shift() */
// //***first item add korte language.unshift('helllo'); */
// //**/*8onk gula array thakle ektar modde group kora jai-
// //  const x=[1,2,3]     const y=[4,5,3]     const z=[3,2,1] const p=x.concat(y,z); console.log(p);*/
// //**ekta variable er modde onk gula array nea jai- const a=[[1,2,3],[2,3,4],[4,2,4]]; console.log(a);
// //** shob gula array k eksathe dekhate- console.log(a.flat());
// // *** Array er maj theke delete korte- language.splice(1,5); 1,2,3,4 no delte hoye jabe, mane 1-5 porjonto without 5/
// // ***Array er maje value add korte - language.splice (2,0, 'info 1', 'info 2'); ekhane 2no er por info 1, info 2 ei 2ta value add hobe
// /// ** DOM=Document Object Model holo javaScript er ekta type


//     //((Function practice))
//     //***onclick event er jonno html a onclick add korte hobe */
//     // *** ondblclick use korle double click korar por kaj korbe
//     // ** mouse er right click use kore click korar jonno- oncontextmenu= use kora jai
//     // ***mouse hover korle kaj korar jonno- onmouseenter='sucbscribe()' use hoi
//     // ** mouse hover kore back anle kaj korar jonno- onmouseout="subscribe()" use hoi
//     // *** kono kicu type korle kicu lekha dekhate- onkeyPress="" use kora hoi
//     // *** type seshe kono kicu dekhate - onkeyup="" use hoi (keypress/keyup only for form and body, otherwise it dosen't work)
//     // *** onload="" use for loading website etc, its use in only body
//     // ** onresize="" can use in only body, for changing font size, color etc when it will be resize
//     // ** onscroll=" " can use for changing anything when it will scroll
//     //onclick event-
//     // function registration (){
//     //     document.getElementById('text').innerHTML= 
//     //     'registered';
//     //     document.getElementById('sub').innerHTML= 
//     //     'registered';
//     //     document.getElementById('sub').style.backgroundColor= '#262626'; };
//     // function loading (){
//     //     // alert('testing purpose'); 
//     //     document.getElementById('text').innerHTML='Website loaded properly, you can scroll now'
//     // }

//     /// ***new and update practice for function running
//     // document.getElementById('sub').onclick= function(){
//     //     document.getElementById('sub').innerHTML= 'Subscribed';
//     //     document.getElementById('sub').style.color = '#000000';
//     // };
//     // *** modern practice for using function
//     // document.getElementById('sub').addEventListener('click', function(){
//     //     document.getElementById('sub').innerHTML= 'Subscribed';
//     // });

//     /// **** Event bubling and capthering--
//     //** event bubling (false) holo nich theke uporer dike read korbe */
//     /// *** event capthering (true)holo normally upor theke niche read kora k bujai-
//     // document.getElementById('ul').addEventListener(
//     //     'click',
//     //     function(e) {
//     //         console.log('UL Clicked');
//     //     },
//     //     false
//     // );
//     // document.getElementById('li').addEventListener(
//     //     'click',
//     //     function(e) {
//     //         console.log('li Clicked');
//     //     },
//     //     false
//     // );


// ///**JavaSrcipt Math */
//     // let num = 30.987665;
//     //*** if need Round number(30.98=31/30.33=30) */
//     // console.log(Math.round(num));
//     //*** ceil= jodi 0.1 bare mane samanno barleo 1 beshi dekhabe-purno sonkha dekhabe (30.11=31/30.00=31) */
//     // console.log(Math.ceil(num));
//     //*** floor use korle 000. (.) point er por jotoi thake count hobena(30.88=30/30.22=30) */
//     // console.log(Math.floor(num));
//     //*** Squre value , 3^4 use koarar jonno pow(3,4) */
//     // console.log(Math.pow(3,4));
//     //*** Root value ,sqrt() */
//     // console.log(Math.sqrt(9));
//     //**Always possitive value er jonno -Math.abs()*/
//     // console.log(Math.abs(-5));
//     // *** Minimum number dekhte chaile-
//     // console.log(Math.min(1,2,3,4,5,6));
//     // *** Maximum number dekhte chaile_
//     // console.log(Math.max(4,5,4,3,7,8,5));
//     // *** Pai er value pete_
//     // console.log(Math.PI);
//     // ***Sin,cos er man ber kora, sin 90degree er man ber kora-
//     // console.log(Math.sin((90*Math.PI/180)));
//     // *** Random number creation-
//     // console.log(Math.random());
//     // *** Random number a (.) er por koita number dekhabe ta fixed korte-
//     // console.log(Math.random().toFixed(2));
//     // *** koto number modde random no. ta dekhabe ta fix korte-
//     // console.log(Math.random().toFixed(2)*20);
//     // ****uporer method use korle 20 er ag porjonto dekhabe, 20 soho dekhate chaile +1 korte hobe-
//     // console.log(Math.random().toFixed(2)*20+1);
//     /// *** sudhu matro purno songkha dekhate cahile-
//     // console.log(Math.floor((Math.random().toFixed(2)*20+1))); (eta use kore ludu game banano jabe)
//     // (practice)
//     // let upperValue = 6;
//     // let lowerValue =1;
//     // let resultValue = Math.ceil(Math.random() * upperValue);
//     // console.log(resultValue);
//     //ludu practice at 5:40m
//     // function rollDice(){
//     //     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     //     let imgSource = randomNumber;
//     //     document.getElementById('ludo').src = imgSource;
//     // };


//     // **console.log(c.toString(12))
//     /// *** new Number(455) a new use korar karone eta number na hoye object dekhabe
//     /// ** (number.toPrecisio(3)) use korle koto digit er number(2=2.00) dekhabe ta fix kore dea jai. ekhane 3 use korate 3digit dekhabe. tobe eta boro digit a jamela kore. tai tofixed use kora valo
//     /// *** (.toFixed(2)) use korle (.) er por koto digit dekhabe ta fix kora jai
//     /// ** let newNum = Number.EPSilon; use korle (.) er minimum number theke 1 porjonto j biyogfol hoi ta dekhabe
//     /// *** newNum=Number.MAX_VALUE; javaScript er max value dekhabe
//     /// *** newNum=Number.MIN_VALUE; minimum value of javascript
//     /// *** newNum=Number.POSITIVE_INFINITY;
//     /// *** newNum=Number.NEGATIVE_INFINITY;
//     /// *** newNum=Number.NaN; not a number value.


     /// *** Date use in javascript-
    // const myData = new Date();
    // console.log(myDate);
    // console.log(myData.toString()); 
    // console.log(myData.toDateString()); 
    // console.log(myData.toLocalString()); 
    // console.log(myData.toLocaString('default',{weekday: 'long',})); 
    // console.log(myData.toLocaString('default',{weekday: 'short',})); 
    // console.log(myDate.getDate/Day/month/fullyear);
    // let updateDate = new Date (2024, 2, 5, 11, 34, 32);
    // updateDate = new Date ('01-15-2002');//
    // console.log(updateDate);
    // let myTime = Date.now(); // eta diye milisecond a time dekhabe, eta use hoi koto somoy lage web ta run hote
    // console.log(myTime);

    /// ** call stack vs heep data type-
    // call stack data is a premitive data type- string, number, boolean, undefined, null etc. era ektar upor arekta store hoi, tai eder value change korleo parent value change hoina
    // heep is a non-premitive data type- object, array etc. era ekekta akek jaigai save hoi, tai eder k change korle parent value o change hoi


    /// ***conditional stateoment in javascript-if, else, elseif
    /// *** if er por onkgula elseif use kora jai, tobe tkhn web slow hoye jabe, tai switch use kora vlo
    // let age = 11;
    // if (age>40){
    //     console.log('yor are old');
    // }else if(age > 18){
    //     console.log('You are ready to open a Google Account');
    // } else {
    //     console.log('You are not ready');
    // }
    //** switch use */
    /// ** switch er modde multiple case niye break dite hobe, last case a case na likhe default dite hobe
    // let category = 'car';
    // let carType;
    // switch (category){
    //     case 'car':
    //     carType = 'This is a car';
    //     break;
    //     case 'motor bike':
    //     carType = 'this is a motor bike';
    //     break;
    //     default:
    //         carType = 'Unknown vehicle category';
    // };
    // console.log(carType);

    // ** loop in javascript_
    /// for loop_ (can use in showing array data result)
    // let car = ['mbd', 'daha', 'hgj', 'iikd'];
    // for (let i=0; i<5; i++){
    //     console.log(car[i]);
    // };

    // // for in loop_(object er result show koranor jonno use kora jai)
    // let person = {
    //     name= 'nazrul',
    //     age = 26,
    //     country = 'bangladesh',
    // };
    // for (let i in person){
    //     let capLetter = i.charAt(0).toUpperCase()+i.slice(1); ///first letter capital dekhanor jonno
    //     console.log(i + ': '+ person[i]); // jodi capLetter na niye thaki
    //     console.log(capLetter + ': '+ person[i]); 
    // };

    // // forEach method_ (array k for loop use na kore forEach use kora jai)
    // car.forEach(function(i) {
    //     console.log(i);
    // });

    //for of loop_(for in er poriborte forOf loop use kora jai)
    // for (let i of car){
    //     console.log(i);
    // };

    //while loop_
    // let num = 0;
    // while(num < 10){
    //     console.log(num);
    //     num++;        //amra condition diyechi num < 10, tai num++ diye dite hobe, tate 0,1,2,...9 porjonto true dekhabe, er beshi hole false dekhabe
    // };

    //Scope in javascript_
    //{}er modde jei data likhi segula local scop . r er bahire jegula likhi segula k global scop bola hoi ,
     // global scop er access shobai pabe, local scop er access function and block scop a pabe, kintu block scop er access kew pabena


    let myName= 'Nazrul'
    console.log(myName);




