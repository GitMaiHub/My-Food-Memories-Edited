import "./styles.css";
import Items from "./Items";
export default function App() {
  let items = [
    {
      food: "Phò at SAIGON",
      place: "Honolulu, HI",
      friend: "Kathleen from 🇹🇼Taiwan"
    },
    {
      food: "Dim Sum at Taipan",
      place: "Honolulu, HI",
      friend: "Thomas from 🇭🇰Hong Kong"
    },
    {
      food: "Grilled Shao Long Bao",
      place: "Taipei, Taiwan",
      friend: "Teddy from 🇹🇼Taiwan"
    },
    {
      food: "Bak Kut Teh and Dosa",
      place: "Penang, Malaysia",
      friend: "Benny from 🇲🇾Malaysia"
    },
    {
      food: "Korean Chicken at Whale Chicken",
      place: "Okinawa, Japan",
      friend: "Andie from 🇺🇸California"
    }
  ];
  return (
    <div className="App">
      <h3>⚛️React Loops Practice</h3>
      <br />
      <h1>My Food Memories</h1>
      <br />
      <Items items={items} />
    </div>
  );
}
