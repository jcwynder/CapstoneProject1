var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;

var questions = [
  {
    question: "Which tag is used to define an internal style sheet?",
    a: "&#60sheet&#62",
    b: "&#60script&#62",
    c: "&#60css&#62",
    d: "&#60style&#62",
    answer: "D",
  },
  {
    question: "Which property is used to change the text color?",
    a: "txt-color",
    b: "text-color",
    c: "background-color",
    d: "color",
    answer: "D",
  },
  {
    question: "Which .file is used to import a CSS file?",
    a: ".html",
    b: ".css",
    c: ".js",
    d: ".java",
    answer: "B",
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Creative Style Sheets",
    c: "Colorful Style Sheets",
    d: "Computer Style Sheets",
    answer: "A",
  },
  {
    question: "Which CSS property controls text size?",
    a: "text-size",
    b: "font-style",
    c: "font-size",
    d: "text-style",
    answer: "C",
  },
  {
    question:
      "What is the correct CSS syntax for making all the &#60p&#62 elements red?",
    a: "p{color:red;}",
    b: '&#60p style="color:red;"&#62',
    c: '&#60p "style=color:red;"&#62',
    d: "p{color-text:red;}",
    answer: "B",
  },
  {
    question: "Which property is used to change the font of an element?",
    a: "font-family",
    b: "font-text",
    c: "font-style",
    d: "font-weight",
    answer: "A",
  },
  {
    question: "What does a CSS comment start and end with?",
    a: "*/ and /*",
    b: "/ and */",
    c: "/ and /",
    d: "/* and */",
    answer: "D",
  },
  {
    question: "Which property is used to change the left margin of an element?",
    a: "left-margin",
    b: "margin-left",
    c: "padding-left",
    d: "indent",
    answer: "B",
  },
  {
    question: "How do you select an element with id 'test'?",
    a: "#test",
    b: "*test",
    c: ".test",
    d: "test",
    answer: "A",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    a: "In the &#60body&#62 section",
    b: "In the &#60head&#62 section",
    c: "In the &#60style&#62 section",
    d: "At the end of the document",
    answer: "B",
  },
  {
    question: "How do you select elements with class name 'demo'?",
    a: "demo",
    b: "*demo",
    c: ".demo",
    d: "#demo",
    answer: "C",
  },
  {
    question: "How do you select all p elements inside a div element?",
    a: "p-div",
    b: "p.div",
    c: "div p",
    d: "div.p",
    answer: "C",
  },
  {
    question:
      "Which of the following property is used to control the flow and formatting of text?",
    a: "text-decoration",
    b: "text-transform",
    c: "text-shadow",
    d: "white-space",
    answer: "D",
  },
  {
    question:
      "Which property is used to set the spacing in-between lines of text?",
    a: "spacing",
    b: "line-height",
    c: "line-spacing",
    d: "line-space",
    answer: "B",
  },
  {
    question:
      "Which property is used to create space between the element's border and inner content?",
    a: "padding",
    b: "margin",
    c: "border",
    d: "spacing",
    answer: "A",
  },
  {
    question: "How can you add CSS?",
    a: "By using internal style sheet",
    b: "By using external style sheet",
    c: "By using inline styling",
    d: "All of the above",
    answer: "D",
  },
  {
    question:
      "Which is the correct syntax to make all &#60p&#62 elements bold?",
    a: "p{text-size:bold;}",
    b: "p{font-weight:bold;}",
    c: '&#60p style="font-weight:bold;"&#62',
    d: 'p style="text-size:bold;"',
    answer: "B",
  },
  {
    question: "Which property do you need to change the background color?",
    a: "bgcolor",
    b: "color",
    c: "background-color",
    d: "colorbg",
    answer: "C",
  },
  {
    question: "How can you create a list displaying its items with squares?",
    a: "style-list: square",
    b: "list-type: square",
    c: "type: square",
    d: "list-style-type: square",
    answer: "D",
  },
  {
    question:
      "How do you make each word of the text start with a capital letter?",
    a: "text-transform:capitalize",
    b: "text-transform:uppercase",
    c: "text-transform:lowercase",
    d: "text-transform:inherit",
    answer: "A",
  },
  {
    question: "How do you group selectors?",
    a: "Separate each selector with a period",
    b: "Separate each selector with a space",
    c: "Separate each selector with a comma",
    d: "Separate each selector with a plus sign",
    answer: "C",
  },
  {
    question: "How can you change the bottom margin of an element?",
    a: "bottom-margin",
    b: "margin-bottom",
    c: "marginbottom",
    d: "bottommargin",
    answer: "B",
  },
  {
    question: "What is a navigation bar?",
    a: "Open tags for a site",
    b: "A button",
    c: "Website page sourcing",
    d: "List of links",
    answer: "D",
  },
  {
    question: "What is a selector?",
    a: "An attribute that allows the selection of every element within the HTML document",
    b: "Elements that connect HTML and CSS",
    c: "An attribute that allows you to select an HTML element for styling within CSS",
    d: "A class or id",
    answer: "C",
  },
];

function get(x) {
  return document.getElementById(x);
}

function renderQuestion() {
  test = get("test");
  if (pos >= questions.length) {
    test.innerHTML =
      "<h2>You got " +
      correct +
      " of " +
      questions.length +
      " questions correct.</h2>";
    get("test_status").innerHTML = "Test completed!";
    const quizLink = document.getElementById("after-quiz-link");
    quizLink.style.display = "inline-block";
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML =
    "Question " + (pos + 1) + " of " + questions.length + ":";

  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  test.innerHTML = "<h3>" + question + "</h3>";

  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='A'> " +
    chA +
    "</label><br>";
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='B'> " +
    chB +
    "</label><br>";
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='C'> " +
    chC +
    "</label><br>";
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='D'> " +
    chD +
    "</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == questions[pos].answer) {
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion);
