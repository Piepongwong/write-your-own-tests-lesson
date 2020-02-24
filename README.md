# Write Your Own Tests

Until now we have been using pre-written tests. That's not really the TDD approach. Writing tests has a looooot of extra benefits, especially when you write them yourself. One argument against writing tests people sometimes use, is that it supposedly costs too much time. A very common counter argument is, that it maybe costs some additional time now, but that in the long run it pays of for the project. Although that's certainly true, it doesn't stop there. Writing tests saves you time right away, because you automate a part of your own development process as well! In addition to that, it forces you to divide up the program at hand into nice bitsize chunks. So on top of a stable product in the long run, you also write better **structured** code **quicker**. So how does it work?

Lets compare it to a normal workflow without tests. You code a little and you execute the code. Then you check if it works in the console or by using the debugger. If it doesn't work, you go back and you try to fix it. Then you go back to the console or debugger. In case it works, you move on to then next bit of code. Gradually you build up your programm like this. In case you're one of those people that write the whole program at once and than execute it at the end with their eyes closed, I envy and pitty you. I envy you, because if it works that's sort of impressive. I pitty you, because it probably doesn't work and you have look for a needle in a haystack. Good luck with that! 

The TDD approach follows this gradual workflow. Except, you automate the manual testing you normally do in the console or debugger. This has a couple of huge advantages:

- **You always test your code in the same way** Goodbye self-doubt like: "Did I call it the same way? Is it different because the situation is different or did the behaviour of my code change unexpectedly?" 
- **With every new bit of code you're testing all of your previous code again. Automatically!** So looong with situations like "Hmm that used to work before, where did it break?" With TDD you KNOW where it broke. You don't have to go through the whole code base again to find the needle.
- **Some manual testing takes a lot of steps and therefore time.** Let's say you are making the viking assignment without tests. If you want to test the War class, you first have to create vikings, than saxons, than add them to the War instance and make them fight. Just automate all of this with tests! You have to do the manual testing anyways.

You can get started with testing by using the stand-alone jasmine boilerplate, which you can download from <a href="https://github.com/jasmine/jasmine/releases">here</a>.

We're going to apply TDD to the palindrome assingment from the <a href="https://github.com/ironhack-labs/lab-javascript-basic-algorithms">javascript-basic-algorithms lab</a>.

The complete code example is <a href="https://github.com/Piepongwong/write-your-own-tests-lesson">here</a>.

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
This exercise can be divided up in several smaller functions. First, we want to check for the edge cases. The main function should not accept any other input than strings. Second, we want to sanitize the input. We don't want to consider reading signs or spaces. We'll do this with a separate function called sanitizeInput. Thirdly, we have to write a function to reverse the string and lastly, we have to compare the reversed string with the orignal sanitize string to find out if it's a palindrome. We're going to call that function reverseString.

You start a suite of smaller tests with `describe`. Describe is a function that takes 2 arguments. The first is the name of the test suite and the second argument is a callback function. Within this callback function you write the individual tests that make up the test suite. You do this by using `it`. It is again a function that takes in 2 arguments. The first is the name of the smaller test, and the second argument is again a callback function. In the cb of `it` you'll see `expect`. Expect is a special function that's called an assertion. 
``` javascript
    expect(true).to.be(false)
```
this assertion would not pass, because true is not equal to false. Under the hood it works very similar to: 
```
    if(true !=== false) {
        console.log("Test fails!);
    }
```
The difference with `expect` is that within the testing framework (Jasmine) it does this kind of checking in a more structured way. For example, it turns the dots red on the `SpecRunner.html` page. ;)

### Iteration 1: Edge Cases
```
// we're not using these yet
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
// check for an edge case
describe("isPalindrome", function(){
    it("should not accept anything else than a string, function() {
        expect(isPalindrome(1231231)).toThrow(new Error("Input is not a string"))
    })
})  
```
Write the code that makes the test pass. Normally, you would have to call the function yourself a couple of times with faulty input to check if it throws the desired error. Now we've automated that part of the development process!

### Iteration 2: Input Sanitation
Now we want to sanitize the input string. Reading signs and spaces should not be considered. Write a test for it.
```
...
describe("sanitizeInput", function(){
    it("should remove every non alphabetic character, function() {
        expect(sanitizeInput("asdf!!?sdf sdf)).toEqual("asdfsdfsdf"));
        expect(sanitizeInput("#$%^asdf adf he!+")).toEqual("asdfadfhe"));
    })

    it("should always return a lowercase string", function() {
        expect(sanitizeInput("AAAA")).toEqual("aaaa"));
        expect(sanitizeInput("HeLLooO")).toEqual("hellooo"));
        expect(sanitizeInput("HeL  Loo @#O")).toEqual("hellooo"));
    })
}) 
```

Write the code that makes the test pass. Same here. Normally you would to have go to your console and call `sanitizeInput` a couple of time to check if it has the desired output. Now we have automated that bit!

### Iteration 3: Reversing The String
```
    describe("reverseString", function(){
        it("should reverse the string that was passed to it, function() {
            expect(reverseString("car")).toEqual("rac"));
            expect(reverseString("seemewalking")).toEqual("gniklawemees"));
        })
    })
```
No write the code that passes it.

### Iteration 4: Combining all the Functions
We have subdivided the exercise in the smaller bitsize functions: 

* isPalindrome
* sanitizeInput
* reverseString

This is good! It increase the readability of the code. Now it's time to go back to `isPalindrome` an combine them all.

```
describe("isPalindrome", function(){
    it("should not accept anything else than a string, function() {
        expect(isPalindrome(1231231)).toThrow(new Error("Input is not a string"))
    })

    it("should return true if the function is a palindrome, function() {
        for(let i = 0 ; i < palindromes.lengthl; i++){
            expect(isPalindrome(palindromes[i])).to.be(true);
        }
    })
})  
```
write the code that passes it.
```
describe("isPalindrome", function(){
    it("should not accept anything else than a string, function() {
        expect(isPalindrome(1231231)).toThrow(new Error("Input is not a string"))
    })

    it("should return false if the function isn't a palindrome"s, function() {
        expect(isPalindrome("asdfasfasf asdf").to.be(false);
        expect(isPalindrome("asdfasfasf asdf").to.be(false);
        expect(isPalindrome("lala adsf dsf asdf").to.be(false);
        expect(isPalindrome("I Like TDD").to.be(false);
    })

})  
```

Write the code that passes it. Aaaand you're done! Tell me, how much surer are you now that your code really works?