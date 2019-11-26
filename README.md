# Write Your Own Tests

Until now we have been using pre-written tests. That's not really the TDD approach. Writing tests has a looooot of extra benefits, especially when you write them yourself. One argument against writing tests people sometimes use is that it supposedly costs too much time. A very common counter argument is that it maybe costs some additional time now, but that in the long run it pays of for the project. Although that's certainly true, it  doesn't stop there. Writing tests saves you time right away, because you automate a part of your own development process as well! In addition to that, it forces you to divide up the program at hand into nice bitsize chunks. So on top of a stable product in the long run, you also write better structured code quicker. So how does it work?

Lets compare it to a normal workflow without tests. You code a little and you execute the code. Then you check if it works in the console or by using the debugger. If it doesn't work, you go back and you try to fix it. Then you go back to the console or debugger. In case it works, you move on to then next bit of code. Gradually you build up your programm like this. In case you're one of those people that write the whole program at once and than execute it at the end with their eyes closed, I envy and pitty you. I envy you, because if it works that's sort of impressive. I pitty you, because it probably doesn't work and you have look for a needle in a haystack. Good luck with that! 

The TDD approach follows this gradual workflow. Except you automate the manual testing you normally do in the console or debugger. This has a couple of huge advantages:

- **You always test your code in the same way** Goodbye self-doubt like: "Did I call it the same way? Is it different because the situation ord did the behaviour of my code changed unexpectedly?" 
- **With every new bit of code you're testing all of your previous code again. Automatically!** So looong with situations like "Hmm that used to work before, where did it break?" With TDD you KNOW where it broke. You don't have to go through the whole code base again to find the needle.
- **Some manual testing takes a lot of steps and therefore time.** Let's say you are making the viking assignment without tests. If you want to test the War class, you first have to create vikings, than saxons, than add them to the War instance and make them fight. Just automate all of this with tests! You have to do the manual testsing anyways.

You can get started with testing by using the stand-alone jasmine boilerplate, which you can download from <a href="https://github.com/jasmine/jasmine/releases">here</a>.

We're going to apply TDD to the palindrome assingment from the <a href="https://github.com/ironhack-labs/lab-javascript-basic-algorithms">javascript-basic-algorithms lab</a>.

## Exercise:
 Write a function that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"

"Amor, Roma"

"race car"

"stack cats"

"step on no pets"

"taco cat"

"put it up"

"Was it a car or a cat I saw?" 

"No 'x' in Nixon".

## TDD Approach
This exercise can be divided up in several smaller sections. First we want to check for the edge cases. The function should not accept any other input than strings. Second we want to sanitize the input. We don't want to consider reading signs or spaces. Thirdly we have to write a function to reverse the string and lastly we have to compare the reversed string with the orignal sanitize string to find out if it's a palindrome.

### Iteration 1: Edge Cases
```
// where not using these yet
var palindromes = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?" and "No 'x' in Nixon"
]

describe("isPalindrome", function(){
    it("should not accept anything else than a string, function() {
        expect(isPalindrome(1231231)).toThrow(new Error("Input is not a string"))
    })
})  
```
Write the code that makes the test pass.

### Iteration 2: Input Sanitation
After we want to sanitize the input string. Reading signs and spaces should not be considered. Write a test for it.
```
...
describe("sanitizeInput", function(){
    it("should remove every non alphabetic character, function() {
        expect(sanitizeInput("asdf!!?sdf sdf)).toEqual("asdfsdfsdf"));
        sanitizeInput("#$%^asdf adf he!+").toEqual("#$%^asdf adf he!+"));
    })

    it("should always return a lowercase string", function() {
        expect(sanitizeInput("AAAA")).toEqual("aaaa"));
        expect(sanitizeInput("HeLLooO")).toEqual("hellooo"));
        expect(sanitizeInput("HeL  Loo @#O")).toEqual("hellooo"));
    })
}) 
```

Write the code that makes the test pass.

### Iteration 3: Reversing The String