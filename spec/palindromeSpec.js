var palindromes = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car @#$%^&*(or a cat I saw?",
    "No 'x' in Nixon",
    ""
]

var noPalindromes = [
    "whuuut",
    "vini vidi vici",
    "TDD All the way",
    "This is a story all about my life flipped turned upside down",
    "Lorem  ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic laboriosam commodi et? Laboriosam, deleniti obcaecati eligendi culpa, ab illum natus accusantium fuga, aperiam asperiores ratione? Tempore aliquid inventore maxime?"
]

describe("isPalindrome", function(){
    it("should be a function", function() {
        expect(typeof isPalindrome).toEqual("function");
    })
    it("should throw an error on incorrect input", function() {
        // function calls that throw an error should be wrapped in an anonymous function
        expect(function(){isPalindrome(123123)}).toThrow(new Error("Input should be a string"));
    })

    it("should return true if it's a palindrome", function(){
        for(let i = 0 ; i < palindromes.lengthl; i++){
            expect(isPalindrome(palindromes[i])).to.be(true);
        }
    })
    it("should return false if it isnt a palindrome", function(){
        for(let i = 0 ; i < noPalindromes.lengthl; i++){
            expect(isPalindrome(noPalindromes[i])).to.be(false);
        }
    })
})

describe("sanitize", function() {
    it("should be a function", function() {
        expect(typeof sanitize).toEqual("function");
    })

    it("should return a string", function() {
        expect(typeof sanitize("l;kasdflkadsf ")).toEqual("string");
    })

    it("should return a string", function() {
        var someRandomString = ";kldsaf;lkxcvs asdf asdf asdf;lsdf"
        expect(typeof sanitize("l;kasdflkadsf ")).toEqual("string");
        expect(sanitize(someRandomString).length).toBeLessThanOrEqual(someRandomString.length);
    })

    it("should sanitize the input from spaces and reading signs", function() {
        expect(sanitize("hell o o o")).toEqual("hellooo");
        expect(sanitize("@!hell o o o")).toEqual("hellooo");
        expect(sanitize("@!hell $%^&o o (&%o")).toEqual("hellooo");
        expect(sanitize("@!hell $%!!^&o o (&%o")).toEqual("hellooo");
        expect(sanitize("@!hell $%^&o....'',,,;;;;_)(*&^%$#@!#$%^&*(±!@#$%^&)) o (&%o")).toEqual("hellooo");
    })

    it("should always return lowercase strings", function() {
        expect(sanitize("@!heLL $%!!^&o o (&%o")).toEqual("hellooo");
        expect(sanitize("AAAAA")).toEqual("aaaaa");
        expect(sanitize("WHATarEYouLookingATT?")).toEqual("whatareyoulookingatt");
    })
})

describe("reverse", function() {
    it("should be a function", function() {
        expect(typeof reverse).toEqual("function");
        expect(reverse("hello").length).toEqual(5);
    })

    it("should return the argument reversed", function() {
        expect(reverse("hello")).toEqual("olleh");
        expect(reverse("whuuuuut")).toEqual("tuuuuuhw");
        expect(reverse("a")).toEqual("a");
        expect(reverse("")).toEqual("");
        expect(reverse("ahahahaha lalala")).toEqual("alalal ahahahaha");
    })
})