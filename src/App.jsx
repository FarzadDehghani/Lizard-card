import Card from './Components/Card'
import './Styles/Card.css'

function App() {

  return (
  
    <div className="App">
    <Card image={"../../public/images/car.jpg"} title="Lizard" description="Chevrolet is an iconic American car brand known for its reliable, dependate, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world." button={["SHARE","LEARN MORE"]}/>
    </div>
  
  )
}

export default App
