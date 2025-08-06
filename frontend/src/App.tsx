import { useEffect, useState } from 'react'
import InvoiceContext from './InvoiceContext';
import SongsTable from './components/SongTable';
import InvoiceHistory from './components/InvoiceHistory';
import type { Song, InvoiceRecord } from './types';
import './App.css'

function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [invoiceHistory, setInvoiceHistory] = useState<InvoiceRecord[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/songs');
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const songData: Song[] = await res.json();
        setSongs(songData);
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const addInvoice = (record: InvoiceRecord) => {
    setInvoiceHistory(prev => [...prev, record]);
  };

  const handleIssueInvoice = (song: Song) => {
    const date = new Date().toLocaleString();
    setSongs(prevSongs =>
      prevSongs.map(s =>
        s.id === song.id
          ? { ...s, lastIssuedDate: date, issuedProgress: s.progress }
          : s
      )
    );
    addInvoice({ date, author: song.author, songName: song.name, progress: song.progress });
  };

  return (
    <InvoiceContext.Provider value={{ invoiceHistory, addInvoice }}>
      <SongsTable songs={songs} onIssue={handleIssueInvoice} />
      <InvoiceHistory />
    </InvoiceContext.Provider>
  );
}

export default App
