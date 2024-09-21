const images = {
  logoLarge: new URL("./images/logo-large.svg", import.meta.url).href,

  iconOverview: new URL("./images/icon-nav-overview.svg", import.meta.url).href,
  iconBudgets: new URL("./images/icon-nav-budgets.svg", import.meta.url).href,
  iconPots: new URL("./images/icon-nav-pots.svg", import.meta.url).href,
  iconBills: new URL("./images/icon-nav-recurring-bills.svg", import.meta.url)
    .href,
  iconTransactions: new URL(
    "./images/icon-nav-transactions.svg",
    import.meta.url
  ).href,
  iconMinimizeSidebar: new URL(
    "./images/icon-minimize-menu.svg",
    import.meta.url
  ).href,
};

export default images;
