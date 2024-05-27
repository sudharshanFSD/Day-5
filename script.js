let myResume={
    "basics": {
      "name": "SUDHARSHAN V",
      "email": "tsrssudharshan@gamil.com",
      "phone": 9344988810,
      "degree": "B.E",
      "location": {
        "address": "11/4,kmk street",
        "postalCode": 636455,
        "city": "salem",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "www.linkedin.com/in/sudharshan-v-23b078281",
        }
      ]
    },
    "education": [
      {
        "institution": "HICAS",
        "department": "Bcom Computer Applications",
        "studyType": "fulltime",
        "batch start year": 2021,
        "batch end year": 2024,
        "gpa": 7.5,
      }
    ],
    "skills": [
      {
        "name": "HTML,CSS,JavaScript",
        "level": "beginer",
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "script writter,youtuber,",
      }
    ]
  }
  console.log(myResume);


  var json = [{
    "id" : "jack", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "jack@gmail.com"
},
{
    "id" : "bruce", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "bruce@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);



  