// To run this from command line
// node debug ./features/debugger.js

// Debugger commands (use at debug prompt)
// c - continue
// repl - execute statements such as typing a var at this point to see the current value
// control + c - return to normal debugger when in repl
// list(x) where x is a number. Lists the x number of lines before and after debugger
// restart - restarts debugger and places you at beginning
// quit to quit
var name = "James";
var a = 12;
var b = 22;

debugger;


// node-inspector
// To install node inspector globally
// npm install -g node-inspector
// to run with node inspector
// node-debug ./features/debugger.js
