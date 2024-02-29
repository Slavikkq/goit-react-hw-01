import Profile from "./Profile";
import FriendList from "./FriendList";
import friends from "./friends.json";
import TransactionHistory from "./Transaction";
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
