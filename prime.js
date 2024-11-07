
const express = require('express');
const app = express();
const port = 8080; 


function isPrime(number) {

  if (number <= 1) return false;  
  if (number === 2) return true;  
  if (number % 2 === 0) return false; 

  
  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      return false; 
    }
  }

  return true; 
}


app.get('/assignments/prime/:number', (req, res) => {
  const number = parseInt(req.params.number); 


  if (isNaN(number)) {
    return res.status(400).json({ error: 'Please provide a valid number.' });
  }

  const result = isPrime(number); 
  return res.json({ isPrime: result }); 
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
