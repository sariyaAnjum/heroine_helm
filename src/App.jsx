import {Routes,Link,Route} from "react-router-dom";

const heroineList = [{
  id: 1,
  name: "Wonder Woman",
  superpower: "Super strength, agility, and combat skills"
},
{
  id: 2,
  name: "Captain Marvel",
  superpower: "Super strength, flight, and energy projection"
},
{
  id: 3,
  name: "Black Widow",
  superpower: "Expert martial artist and spy"
}]

function Home() {
  return (
    <div>
      <h1>HeroineHelm</h1>
      <p>Explore the amazing heroines and their superpowers!</p>
      <Link to="/heroines">View Heroines</Link>
    </div>
  )
}

function Heroines() {
  return (
    <div>
      <h1>World's finest !</h1>
      {
        heroineList.map(heroine => (
          <p key={heroine.id}>
            <h3>Here come {heroine.name} The master of {heroine.superpower}!!</h3>
          </p>
        ))
      }
    </div>
  )
}

export default function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/heroines">Heroines</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/heroines" element={<Heroines />} />
    </Routes>
    </>
  )
}