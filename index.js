import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
const supabase = createClient('https://brwfoxrvojhwtfnfmuvb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyd2ZveHJ2b2pod3RmbmZtdXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3ODEwMTMsImV4cCI6MjA2MDM1NzAxM30.lsw3ZE30vlgUFfQu3mg4dIo-k4ChMZxcVva_HKSFF_Y')

const express = require('express')
const app = express()
const port = 3000

app.get('/students', async(req, res) => {
  const { data, error } = await supabase
  .from('characters')
  .select()
  res.json (data)
})
app.post('/students', (req, res) => {
  res.send('добавить студента')
})
app.put('/students', (req, res) => {
  res.send('изменить студента')
})
app.delete('/students/:id', async(req, res) => {
  const response = await supabase
  .from('students')
  .delete()
  .eq('id', 1,req.params.id)
  res.json('Студень с id = ' + req.params.id + 'удален')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})