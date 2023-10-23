import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
      const url = new URL(req.url)

      if (url.pathname === '/'){
        const body = figlet.textSync("I am learning Bun!")
      return new Response(body)
    }
    if (url.pathname === '/about'){
      return new Response("About me!")
    }
    
    if (url.pathname === '/contact'){
      return new Response('Contact Us!')
    }

    // Handle error
    if (url.pathname === "/feed"){
      throw new Error('Could not fetch feed!')
    }

    return new Response('404!')

    },
    error(error){
      return new Response(`<pre> ${error} \n ${error.stack} </pre>`,{
        headers: {
          'Content-Type': 'text/html'
        }
      })
    }

  })
  
  console.log(`Listening on localhost: ${server.port}`);
  
/*
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () =>{
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/ONJoseph'>ONJoseph</a>
    </div>
  )
}
export default App

*/
