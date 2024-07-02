import Card from './Components/Card'
import './App.css'
import Plans from './Components/Plans';

const App = () => {
  return (
      <div className="App">
          <div className="card-container">
              {Plans.map((plan, index) => (
                  <Card
                      key={index}
                      title={plan.title}
                      price={plan.price}
                      features={plan.features}
                  />
              ))}
          </div>
      </div>
  );
};

export default App
