import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/Transaction";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
