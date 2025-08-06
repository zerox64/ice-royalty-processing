import { useContext } from "react";
import InvoiceContext from "../InvoiceContext";

const InvoiceHistory: React.FC = () => {
  const context = useContext(InvoiceContext);
  if (!context) return null;

  return (
    <div>
      <h2>Invoice History</h2>
      {context.invoiceHistory.length === 0 ? (
        <p>No invoice history.</p>
      ) : (
        <ul>
          {context.invoiceHistory.map((record, i) => (
            <li key={`invoice-history-${i}`}>
              {record.date} - {record.author} - {record.songName} - {(record.progress * 100).toFixed(0)}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InvoiceHistory;