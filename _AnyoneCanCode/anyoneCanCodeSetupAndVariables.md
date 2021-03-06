---
layout: blogpost
title: "Anyone Can Code Learn the Basics: Setup and Variables"
url: /articles/AnyoneCanCode/
imageurl: chris-ried-ieic5Tq8YMk-unsplash-min.jpg
imageAuthorLink: https://unsplash.com/@cdr6934
imageAuthorName: Chris Ried
imageWebsiteLink: https://unsplash.com/photos/ieic5Tq8YMk
imageWebsiteName: Unsplash
mainTitle: Anyone can code
subTitle: "LEARN THE BASICS: SETUP AND VARIABLES"
authorID: mL1
date: "2020-07-29T16:32:00"
tags: [Python, Programming, Code, Easy]
desc: Jump into programming with this easy introduction
---

Programming is a skill integral to the modern world, pretty much everything we use today has some form of computer chip in it. From microwave ovens to data centers, software is key to making these things run smoothly. This series is meant to be an introduction to programming for those who have no prior experience - veterans you should probably go elsewhere.

Before we begin I better give you a brief introduction into what a computer actually is. A computer is made up of a few parts but the most important are its memory (RAM) and its CPU (Central Processing Unit). The memory is where both the program and all the data within said program is stored, and the CPU is where all the program instructions are executed. Imagine your program to be a cook-book recipe, the computer will read each instruction, one at a time, and slowly complete the recipe. This computer is a bit of an idiot however so can only read one instruction at a time and then do it - i.e. it can't do more than one thing at once. This may not make much sense now but hopefully it will become clearer later.

<h5>Programming Time!</h5>

Ok now we've got that out of the way we can start writing some code! Head to <a href="https://www.pythonanywhere.com/try-ipython/" target="_blank">IPython</a>. This will give you a browser interpreter (a live environment to run code in) to run some basic Python in, it should look like this:

<br>
<div class="graphImg">
            <img src="../../../assets/IPythonPage-min.PNG" class="img-fluid" alt="Responsive image">
</div>
<br>

The black window on the right side of the page is the interpreter, this is where we will write some demo code to get a feel for programming but without the need to write an entire program.

The language we will be programming in is Python (specifically Python 3). My rationale behind this is that it is easy to learn (as programming languages go), it does a lot of work for you (that you will appreciate greatly if you go on to learn more languages), and it has a very strong and active community, so it's easy to find help.

<br>
<h5>Variables</h5>

Variables are key to programming, they allow us to store and read data. Put simply they're very similar to a bucket with a label, you can put whatever you like in that bucket - whether that be a word, a sentence, a number or a shopping list. The label is the name you give to that collection of data stored in your bucket, this allows you to differentiate between different data items and manipulate them. For example, if you have two variables that are numbers you can add them together to get another number (this however wouldn't work if one of those variables were a word... adding numbers and words together doesn't make a lot of sense).

In order to create a variable in Python, you must first come up with a name for it, in my example below I use <var>a</var>, <var>b</var>, and <var>c</var> as my variable names. You must then follow that name with a single equals sign and then follow that equals sign with the value you want to give that variable. This value can be absolutely anything. One thing to note about variable names is that they cannot begin with a number - this will result in a syntax error (syntax is essentially word order, spelling, and grammar - in programming it can also refer to things that aren't allowed such as this).

<div class="codeBlock">
<pre><code>
<var>a</var> = 1
<var>b</var> = 2
<var>c</var> = <var>a</var> + <var>b</var>
<samp>In this case c would equal 3 because 1 + 2 = 3</samp>
</code></pre><br>
</div>

Try typing each line of this into IPython one by one (press <kbd>Enter</kbd> after each line). To find the value of any variable, type its name and hit <kbd>Enter</kbd> - its value should then show up underneath with a red <span style="color: red;">Out</span> to its left. Hopefully, if you've been following well enough you should get the same result as me.

You may have noticed that this is very similar to GCSE algebra, where a variable is simply a label put on a number - only difference in programming is that variables can represent words, lists and a whole host of other things too. The "type" of data is quite significant, as you can imagine confusing a word with a number would be problematic. Luckliy Python handles most of this for you (one of the reasons I chose this as a good introductory language), this means that the only times you'll really run into problems with types is when your program throws you an error - such as:

<div class="codeBlock">
<samp>TypeError: can only concatenate str (not "int") to str</samp>
</div>
<br>
(str is short for string and int is short for integer - string being a word/sentence and integer being a whole number)

This simply means that you can't combine a word and an integer in a meaningful way - in order to get around this they need to be of the same type, whether that be them both being ints or both being strings (a string is fancy programmer talk for a word/sentence). It is possible to convert between types and it is possible to have an integer or decimal number represented as a string variable but this would take a while to go through and this guide only intends to go through the basics to enable you to learn more.

Variables are inherantly designed to be manipulated and changed, they dont have the name VARiables for no reason. As such you should only use variables if you intend on reusing data or if you want to collect data from a function or other such data producer (functions will be covered in a later blog post don't worry). An example of such a use case would be adding a list of values together, maybe you don't have all the numbers at your disposal right away and as such you'll want to store a running total in a variable so that you can keep track of it.

I hope you haven't found this too challenging or too convoluted, I wanted to give enough of an explanation in order for this to actually mean something to you without going overboard. If you feel I haven't struck the balance right or would like some more help understanding send me an email (check the footer) and I'll hopefully be able to help you. I aim to get the next blog post in this series out in less than a week's time so stay tuned!