
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
  i.getElementById:নির্দিষ্ট id কেবল একটি এলিমেন্ট রিটার্ন কর document.
  ii.getElementsByClassName("class") → একই ক্লাসের সব এলিমেন্টকে HTMLCollection (array-like object) আকারে রিটার্ন করে।
  iii.querySelector("selector")  কেবল প্রথম ম্যাচ করা এলিমেন্টকে রিটার্ন করে
  iv.querySelectorAll("selector")  সব ম্যাচ করা এলিমেন্টকে NodeList আকারে রিটার্ন করে।
2.How do you create and insert a new element into the DOM? 
 i.Create an element with document.createElement().
ii.Add text, attributes, content
iii.Insert it into the DOM using appendChild, append, prepend, before, after, etc.
3.What is Event Bubbling and how does it work? 
যখন কোনো ইভেন্ট  ঘটে, সেটা প্রথমে ভিতরের এলিমেন্টে  ট্রিগার হয়।
তারপর ধাপে ধাপে বাইরের parent , আরও বাইরের parent , সবশেষে document চলে যায়।
 div এর ভেতরে থাকলে, বাটনে ক্লিক করলে প্রথমে বাটনের event, তারপর div-এর event, তারপর body, এভাবে ওপরে ওপরে যাবে।
4.What is Event Delegation in JavaScript? Why is it useful? 
Event Delegation হলো parent element-এ event listener বসানো, যাতে child element-এ ঘটে যাওয়া ইভেন্ট parent-এর মাধ্যমে ধরা যায়
usefull for:

পারফরম্যান্স ভালো হয়

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault():
 কোনো এলিমেন্টের default কাজ বন্ধ করে।
stopPropagation():
Event Bubbling থামিয়ে দেয়। মানে ইভেন্ট parent element পর্যন্ত যাবে না।