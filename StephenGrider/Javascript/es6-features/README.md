# es6-features
Demos of new ES6 Features


``` sh
git clone https://github.com/jslnriot/es6-features.git
cd es6-features
npm install
```

To run a script, from the root directory do  
```sh
babel-node ./features/default.js --presets es2015
```
Or shorter  
```sh
babel-node ./features/default.js
```

This would run default.js. To run another script just swap out default.js with another script name.  

You can also install nodemon globally and see updates while working with the files. To install nodemon globally  

```sh
npm install -g nodemon
```

Now to run the file just do
```sh
nodemon --exec babel-node ./features/default.js --presets es2015
```

Topics include (see comments in code for further detail/explanations)
  - default arguments in functions
  - string templates
  - const
  - let  
  - debugging (see comments in debugger.js to run)
