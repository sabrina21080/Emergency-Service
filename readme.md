
**1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -**
  - i. getElementById:  শুধু একটি নির্দিষ্ট id  অনুযায়ী একটি element ফেরত দেয় 
  - ii.getElementsByClassName("class") একটি ক্লাস name অনুযায়ী একাধিক element  ফেরত দেয় 
  - iii.querySelector("selector")  কেবল প্রথম ম্যাচ করা এলিমেন্টকে রিটার্ন করে
  - iv.querySelectorAll("selector")  সব ম্যাচ করা এলিমেন্টকে NodeList আকারে রিটার্ন করে।
 
 **2.How do you create and insert a new element into the DOM? -**
- i. Create an element with document.createElement().
- ii.Add text, attributes, content
- iii.Insert it into the DOM using appendChild, append, prepend, before, after, etc.

 **3.What is Event Bubbling and how does it work? -**
ইভেন্ট বাবলিং হল DOM  এর একটি মেকানিজম, যেখানে একটি এলিমেন্টে ইভেন্ট ট্রিগার হলে সেই ইভেন্ট DOM ট্রি এর মাধ্যমে উপরের দিকে বাবল করে । অর্থাৎ, যদি একটি চাইল্ড এলিমেন্টে ক্লিক করা হয়, তাহলে সেই ইভেন্টটি তার প্যারেন্ট এলিমেন্টেও ট্রিগার হবে।
যখন কোনো ইভেন্ট  ঘটে, সেটা প্রথমে ভিতরের এলিমেন্টে  ট্রিগার হয়।

 **4.What is Event Delegation in JavaScript? Why is it useful? -**
- **Event Delegation-**  parent element-এ event listener বসানো, যাতে child element-এ ঘটে যাওয়া ইভেন্ট parent-এর মাধ্যমে ধরা যায়
- **usefull for-**
-পারফরম্যান্স ভালো হয়
-ডাইনামিক এলিমেন্ট হ্যান্ডেল করা যায়
-কোড সহজ ও ছোট হয়


**5.What is the difference between preventDefault() and stopPropagation() methods?-**
- **preventDefault():-**
 কোনো এলিমেন্টের default কাজ বন্ধ করে।
- **stopPropagation():-**
Event Bubbling থামিয়ে দেয়। মানে ইভেন্ট parent element পর্যন্ত যাবে না।

