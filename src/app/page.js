import styles from "./page.module.css";
import Navigation from "./Components/Navigation/Navigation";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navigation />
      <div className={`${styles.description} ${styles.descriptionMargin}`}>
        <p>Welcome to the Campaign Companion Prototype where you can easily keep track of your current and past Dungeons & Dragons (D&D) or other roleplaying campaigns and the characters associated with them. </p>
        <p>
          <strong>Simplified Planning:</strong> Tools for easily creating and managing campaigns.
        </p>
        <p>
          <strong>Create and Manage Characters:</strong> A simple interface for creating and handling characters, including traits, abilities, equipment, and background history. Never lose track of the characters in your campaigns.
        </p>
        <p>
          <strong>Customizable Notes:</strong> Create notes for each player and campaign to prevent mess!
        </p>
      </div>
    </div>
  );
}
