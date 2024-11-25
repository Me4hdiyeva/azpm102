import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card title="Summer House" imageUrl="https://www.w3schools.com/w3images/house5.jpg"/>
        <Card title="Brick House" imageUrl="https://www.w3schools.com/w3images/house2.jpg"/>
        <Card title="Renovated" imageUrl="https://www.w3schools.com/w3images/house3.jpg"/>
        <Card title="Barn House" imageUrl="https://www.w3schools.com/w3images/house4.jpg"/>
        <Card title="Summer House" imageUrl="https://www.w3schools.com/w3images/house2.jpg"/>
        <Card title="Brick House" imageUrl="https://www.w3schools.com/w3images/house5.jpg"/>
        <Card title="Renovated" imageUrl="https://www.w3schools.com/w3images/house4.jpg"/>
        <Card title="Barn House" imageUrl="https://www.w3schools.com/w3images/house3.jpg"/>


      </div>
    </div>
  );
}

export default App;
