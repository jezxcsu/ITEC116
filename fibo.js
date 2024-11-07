
const express = require('express');
const app = express();
const port = 9090;


function generateFibonacci(n) {
  let sequence = [];
  
  if (n >= 1) sequence.push(0);  
  if (n >= 2) sequence.push(1); 
  
  for (let i = 2; i < n; i++) {
    let nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }
  
  return sequence;
}


app.get('/assignments/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n); 
  

  if (isNaN(n) || n <= 0) {
    return res.status(400).json({ error: 'Please provide a positive integer for n.' });
  }
  
  const sequence = generateFibonacci(n);
  return res.json({ sequence }); 
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
