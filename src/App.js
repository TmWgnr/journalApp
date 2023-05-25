import { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

const initialEntries = [
  {
    id: 900,
    date: "May 20, 2023",
    motto: "motto",
    notes: "notes",
  },
  {
    id: 800,
    date: "May 19, 2023",
    motto: "motto",
    notes: "notes",
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  const favoriteEntries = entries.filter((entry) => entry.isFavorite);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection
          entries={filter === "favorites" ? favoriteEntries : entries}
          filter={filter}
          allEntriesCount={entries.length}
          favoriteEntriesCount={favoriteEntries.length}
          onToggleFavorite={handleToggleFavorite}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
