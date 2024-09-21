import App from "./App";
import ErrorPage from "./ErrorPage";
import Budgets from "./features/Budgets/Budgets";
import { Overview } from "./features/Overview/Overview";
import Pots from "./features/Pots/Pots";
import Transactions from "./features/Transactions/Transactions";
import RecurringBills from "./features/RecurringBills/RecurringBills";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "budgets",
            element: <Budgets />,
          },
          {
            path: "pots",
            element: <Pots />,
          },
          {
            path: "transactions",
            element: <Transactions />,
          },
          {
            path: "bills",
            element: <RecurringBills />,
          },
        ],
      },
    ],
  },
]);
