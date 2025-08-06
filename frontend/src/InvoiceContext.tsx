import { createContext } from "react";
import type { InvoiceContextType } from "./types";

const InvoiceContext = createContext<InvoiceContextType | null>(null);

export default InvoiceContext;