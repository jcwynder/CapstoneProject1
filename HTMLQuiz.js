var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;

var questions = [
  {
    question:
      "How many sections or elements does the basic structure of any HTML document consist of?",
    a: "1",
    b: "4",
    c: "2",
    d: "3",
    answer: "B",
  },
  {
    question: "What is the HTML id attribute used for?",
    a: "To the name of an element",
    b: "To specify a class for an HTML element",
    c: "To define a variable",
    d: "To specify a unique id for an HTML element",
    answer: "D",
  },
  {
    question: "What is the syntax for a numbered list?",
    a: "&#60ol&#62",
    b: "&#60ul&#62",
    c: "&#60li&#62",
    d: "&#60dl&#62",
    answer: "A",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hyper Tool Text Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Home Tool Markup Language",
    answer: "C",
  },
  {
    question: "Who is making the Web standards?",
    a: "Apple",
    b: "The World Wide Web Consortium",
    c: "Google",
    d: "Microsoft",
    answer: "B",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    a: "&#60head&#62",
    b: "&#60h1&#62",
    c: "&#60h6&#62",
    d: "&#60heading&#62",
    answer: "B",
  },
  {
    question: "How many header elements are there?",
    a: "6",
    b: "1",
    c: "7",
    d: "4",
    answer: "A",
  },
  {
    question: "Which character is used to indicate an end tag?",
    a: "/",
    b: ">",
    c: "*",
    d: ".",
    answer: "A",
  },
  {
    question: "Which tag defines a hyperlink?",
    a: "&#60link&#62",
    b: "&#60hyperlink&#62",
    c: "&#60href&#62",
    d: "&#60a&#62",
    answer: "D",
  },
  {
    question: "Which of these is the syntax for class?",
    a: "name.class",
    b: "classname.",
    c: ".classname",
    d: "class.name",
    answer: "C",
  },
  {
    question: "What is the syntax for a bulleted list?",
    a: "&#60lo&#62",
    b: "&#60lu&#62",
    c: "&#60ul&#62",
    d: "&#60ol&#62",
    answer: "C",
  },
  {
    question: "Which of these is the tag for a table?",
    a: "&#60table&#62",
    b: "&#60tr&#62",
    c: "&#60th&#62",
    d: "&#60td&#62",
    answer: "A",
  },
  {
    question: "Which HTML element defines the title of a document?",
    a: "&#60title&#62",
    b: "&#60meta&#62",
    c: "&#60head&#62",
    d: "&#60header&#62",
    answer: "A",
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    a: "&#60check&#62",
    b: '&#60input type="check"&#62',
    c: "&#60checkbox&#62",
    d: '&#60input type="checkbox"&#62',
    answer: "D",
  },
  {
    question: "What is the correct HTML for adding a background color of blue?",
    a: '&#60body bg="blue"&#62',
    b: '&#60body style="background-color:blue;"&#62',
    c: "&#60background&#62blue&#60/background&#62",
    d: "&#60style background-color&#62blue&#60/style&#62",
    answer: "B",
  },
  {
    question: "Which tag defines a paragraph?",
    a: "&#60label&#62",
    b: "&#60section&#62",
    c: "&#60paragraph&#62",
    d: "&#60p&#62",
    answer: "D",
  },
  {
    question: "What does a &#60footer&#62 tag typically contain?",
    a: "Copyright and authorship information",
    b: "Contact information",
    c: "Sitemap and back to top links",
    d: "All of the above",
    answer: "D",
  },
  {
    question: "What is the &#60div&#62 tag used for in HTML?",
    a: "As a link to a URL",
    b: "As a container for HTML elements",
    c: "As a header",
    d: "As a paragraph",
    answer: "B",
  },
  {
    question: "What tag is used to embed an image to an HTML page?",
    a: "&#60src&#62",
    b: "&#60image&#62",
    c: "&#60img&#62",
    d: "&#60link&#62",
    answer: "C",
  },
  {
    question: "What header is used to define details of a topic?",
    a: "&#60h3&#62",
    b: "&#60h1&#62",
    c: "&#60h2&#62",
    d: "&#60h5&#62",
    answer: "A",
  },
  {
    question: "What is the correct HTML for making a drop-down list?",
    a: "&#60list&#62",
    b: "&#60select&#62",
    c: '&#60input type="list"&#62',
    d: '&#60input type="dropdown"&#62',
    answer: "B",
  },
  {
    question: "What is the correct HTML for inserting a background image?",
    a: '&#60body style="background-image:url(background.gif)"&#62',
    b: '&#60body bg="background.gif"&#62',
    c: '&#60body background="background.gif"&#62',
    d: '&#60background img="background.gif"&#62',
    answer: "D",
  },
  {
    question: "What does an HTML comment start and end with?",
    a: "&#60! and &#62",
    b: "// and .",
    c: "// and &#62",
    d: "&#60 and &#62",
    answer: "A",
  },
  {
    question: "Which of these elements are all &#60table&#62 elements?",
    a: "&#60table&#62 &#60tr&#62 &#60tt&#62",
    b: "&#60table&#62 &#60tr&#62 &#60td&#62",
    c: "&#60head&#62 &#60body&#62 &#60td&#62",
    d: "&#60table&#62 &#60head&#62 &#60tfoot&#62",
    answer: "B",
  },
  {
    question: "Which HTML element defines important text?",
    a: "&#60strong&#62",
    b: "&#60i&#62",
    c: "&#60important&#62",
    d: "&#60b&#62",
    answer: "A",
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
