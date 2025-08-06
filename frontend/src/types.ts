export interface Song {
  id: number;
  name: string;
  author: string;
  progress: number;
  lastIssuedDate?: string;
  issuedProgress?: number;
}
  
export interface InvoiceRecord {
  date: string;
  author: string;
  songName: string;
  progress: number;
}
  
export interface InvoiceContextType {
  invoiceHistory: InvoiceRecord[];
  addInvoice: (record: InvoiceRecord) => void;
}