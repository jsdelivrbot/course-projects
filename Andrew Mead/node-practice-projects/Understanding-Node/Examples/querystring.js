const weirdoString = `name:Sophie;shape:fox;condition:new`;
const result = querystring.parse(weirdoString, `;`, `:`);


console.log(result);
