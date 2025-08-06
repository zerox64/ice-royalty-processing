
import type { Song } from '../types';

const SongsTable: React.FC<{ songs: Song[], onIssue: (song: Song) => void }> = ({ songs, onIssue }) => {
  return (
    <div>
      <h2>Songs List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Song Name</th>
            <th>Author</th>
            <th>Progress</th>
            <th>Invoice</th>
            <th>Last Issued</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
          <tr key={song.id}>
            <td>{song.id}</td>
            <td>{song.name}</td>
            <td>{song.author}</td>
            <td>{(song.progress * 100).toFixed(0)}%</td>
            <td>
              <button onClick={() => onIssue(song)}>Issue Invoice</button>
            </td>
            <td>
              {song.lastIssuedDate && (
                <div>
                  <small>Date: {song.lastIssuedDate}</small><br />
                  <small>Progress: {(song.issuedProgress! * 100).toFixed(0)}%</small>
                </div>
              )}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
  
export default SongsTable;