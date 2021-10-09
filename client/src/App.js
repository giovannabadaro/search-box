import React, { useState } from 'react'

const App = () => {
  const [teste, setTeste] = useState('a');
  setTimeout(() => setTeste('oola'), 3000)
  return (
    <h1>
     hello, this  my ininitial project ☘️
     <p>
       {teste}
     </p>
    </h1>
  )
}

export default App;