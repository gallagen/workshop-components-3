import React, {Component} from "react";

// function App() {
//   return (
//     <div>
//       <Header />
//         <Greeting />
//           </div>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Galina" />
        <Greeting />
      </div>
    );
  }
}

// function Header(props) {
//   return (
//     <header>
//       <p>Welcom, {props.username}!</p>
//     </header>
//   );
// }

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcom, {this.props.username}</p>
      </header>
    );
  }
}

// function Greeting() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = "morning";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternon";
//   } else {
//     timeOfDay = "night";
//   }
//   return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
// }

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternon";
    } else {
      timeOfDay = "night";
    }

    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
}

export default App;
