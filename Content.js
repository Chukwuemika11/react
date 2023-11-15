import { useState } from "react";

const Content = () => {
     const [name, setName] = useState('law');
     const[count, setCount] = useState(0);

    const handleNameChange = () =>{
        const names = ["Bob", "Kevin","Lawrence"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
       }
  
       const handleClick = () =>{
          setCount(count + 1)
          setCount(count + 1)
          console.log(count)
       }

       const handleClick2 = (name) =>{
          console.log(count)
       }

      

  return (
   <main>
        <p>
        hello {name}!  
        </p>  

        <button onClick={handleNameChange}>Change name</button>
        <button onClick={handleClick}>Click it</button>
        <button onClick={handleClick2}>Click me</button>

   </main>
  )
}

export default Content