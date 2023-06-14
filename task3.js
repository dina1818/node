const fs = require('fs');

// Create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt file created successfully!');
});

// Read and console.log data from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data from hello.txt:');
  console.log(data);
});
