import "./App.css";
import Grid from "./components/Grid";

function App() {
  const clicked = (prop) => {
    return alert(prop);
  };

  const me = {
    title: "About me",
    name: "Steven",
    movie: "Favorite movie: The Pianist",
    music: "Favorite music: Metal",
  };

  const hobbies = {
    title: "My Hobbies",
    hobbie1: "Coding",
    hobbie2: "Walk",
    hobbie3: "Photography",
  };

  const freeTime = {
    title: "In my free time",
    li1: "Play with my cat",
    li2: "Play video games",
    li3: "Go to walk",
  };

  const food = {
    title: "My favorite food",
    food1: "Lasagna",
    food2: "Pizza",
    food3: "Chocolate",
  };

  const stack = {
    title: "My Stack",
    stack1: "Javascript",
    stack2: "Git",
    stack3: "Bash",
  };

  return (
    <div className="flex">
      <div /*onClick={clicked(me.title)}*/ className="App me">
        <Grid title={me.title} li1={me.name} li2={me.movie} li3={me.music} />
      </div>
      <div className="App hobbies">
        <Grid
          title={hobbies.title}
          li1={hobbies.hobbie1}
          li2={hobbies.hobbie2}
          li3={hobbies.hobbie3}
        />
      </div>
      <div className="App freeTime">
        <Grid
          title={freeTime.title}
          li1={freeTime.li1}
          li2={freeTime.li2}
          li3={freeTime.li3}
        />
      </div>
      <div className="App food">
        <Grid
          title={food.title}
          li1={food.food1}
          li2={food.food2}
          li3={food.food3}
        />
      </div>
      <div className="App stack">
        <Grid
          title={stack.title}
          li1={stack.stack1}
          li2={stack.stack2}
          li3={stack.stack3}
        />
      </div>

      {/* <div
        className="App"
        style={{ cursor: "pointer" }}
      >
        <h1 className="title">About me</h1>
        <ul>
          <li>{me.name}</li>
          <li>{me.movie}</li>
          <li>{me.music}</li>
        </ul>
      </div>
       */}
    </div>
  );
}

export default App;
