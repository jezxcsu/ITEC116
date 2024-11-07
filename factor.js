
const express = require('express');
const app = express();
const port = 7070; 


function factorial(number) {

  if (number < 0) return -1; 
  
  let result = 1;
  

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  
  return result;
}


app.get('/assignments/factorial/:number', (req, res) => {
  const number = parseInt(req.params.number); 
  

  if (isNaN(number) || number < 0) {
    return res.status(400).json({ error: 'Please provide a valid non-negative integer.' });
  }

  const result = factorial(number); 
  return res.json({ factorial: result }); 
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
