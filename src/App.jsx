import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/Transaction";
import transactions from "./transactions.json";
import userData from "./userData.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
