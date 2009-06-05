//
// This test can be used to verify the environment
// is setup correctly.
//   The result should be:
//     RUNS: 4
//     ERRORS: 1
//     FAILURES: 2 (testStringFailure, testBooleanFailure)

//
// *** Show All ***
// Tests with problems (3 total) - JsUnit
//
// Running on Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.5; en-US; rv:1.9.1b4) Gecko/20090423 Firefox/3.5b4
//
// 1. http://localhost:3000/test/unit/setupTest.html:testStringFailure failed
//
// Expected <the same> (String) but was <is not the same> (String)
//
// Stack trace follows:
// > anonymous
// > anonymous
// > anonymous
// > assertEquals
// > testStringFailure

// 2. http://localhost:3000/test/unit/setupTest.html:testBooleanFailure failed
//
// Expected <true> (Boolean) but was <false> (Boolean)
//
// Stack trace follows:
// > anonymous
// > anonymous
// > anonymous
// > assertEquals
// > testBooleanFailure

// 3. http://localhost:3000/test/unit/setupTest.html:testError had an error
//
// Error message is:
// "SyntaxError: missing ; before statement"
//
// Stack trace follows:
// eval("some thing missing;")@:0
// testError()@http://localhost:3000/test/unit/t_setup.js:30
// ([object Object])@http://localhost:3000/test/javascripts/jsunit/app/jsUnitTestManager.js:601
// ()@http://localhost:3000/test/javascripts/jsunit/app/jsUnitTestManager.js:335
// @http://localhost:3000/test/javascripts/jsunit/app/jsUnitTestManager.js:339


//
// Application code under test in js-test-kit/public/javascripts/app.js
//

//
// Tests
var setUpCalled = false;
function setUp() {
  // if this is called it is most likely
  // that tearDown() will also be called.
  setUpCalled = true;
}

// This should pass if JsUnit is correctly
// installed as it should have called setup.
function testSetupCalled() {
  assertEquals(true, setUpCalled);
}

// Should fail
function testError(){
  eval("some thing missing;");
}

// Should fail
function testBooleanFailure() {
  assertEquals(true, false);
}

// Should fail
function testStringFailure() {
  assertEquals("the same", "is not the same");
}

// Should pass if JsMock is working
function testJsMockVerify() {
  var mockControl = new MockControl();
  var buttonMock = mockControl.createMock(
		     {
		       submit : function() {
			 this.value = "Clicked";
		       }
		     });

  buttonMock.expects().submit();

  // Normally the buttonMock would be a real
  // button element.
  userSubmits("Some user message", buttonMock);

  mockControl.verify();
}
