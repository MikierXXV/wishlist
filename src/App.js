import './App.css';
import WishInput from "./WishInput";
import WishList from "./WishList";
import React, {useState} from "react";


const wishList = [
  {done: false, text: "A new car"},
  {done: false, text: "A new house"},
  {done: true, text: "A new job"},
];
const App = () => {
    const [wishes, setWishes] = useState(wishList);
    return(
        <div className="App">
            <header>
                <h1>My whishlist</h1>
            </header>
            <main>
                <WishInput onNewWish={wish => setWishes([...wishes, wish])}/>
                <WishList wishes={wishes} onWishesChange={setWishes}/>
                <button
                    className={"wish-clear"}
                    type={"button"}
                    onClick={() => setWishes(wishes.filter(wish => !wish.done))}
                >
                    Archive done
                </button>
            </main>
        </div>
    );
}


export default App;
