import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import sidebarBtnStyles from "./SidebarButton.module.scss";
import SidebarButton from "./SidebarButton";
import LogoSmall from "/src/assets/images/logo-small.svg?react";
import LogoLarge from "/src/assets/images/logo-large.svg?react";
import NavOverviewIcon from "/src/assets/images/icon-nav-overview.svg?react";
import NavBudgetsIcon from "/src/assets/images/icon-nav-budgets.svg?react";
import NavPotsIcon from "/src/assets/images/icon-nav-pots.svg?react";
import NavBillsIcon from "/src/assets/images/icon-nav-recurring-bills.svg?react";
import NavTransactionsIcon from "/src/assets/images/icon-nav-transactions.svg?react";
import NavMinimizeIcon from "/src/assets/images/icon-minimize-menu.svg?react";
import { useNavigationStore } from "../../stores/NavigationStore";

const Navigation = () => {
  const sidebarExpanded = useNavigationStore((state) => state.sidebarExpanded);
  return (
    <div id={styles.sidebar} className={sidebarExpanded ? styles.expanded : ""}>
      <div className={styles.sidebarContentContainer}>
        <div className={styles.sidebarLogo}>
          {sidebarExpanded ? <LogoLarge /> : <LogoSmall />}
        </div>
        <nav>
          <NavLink to={"overview"}>
            {({ isActive }) => (
              <SidebarButton
                label="Overview"
                icon={<NavOverviewIcon />}
                active={isActive}
                expanded={sidebarExpanded}
              />
            )}
          </NavLink>
          <NavLink to={"budgets"}>
            {({ isActive }) => (
              <SidebarButton
                label="Budgets"
                icon={<NavBudgetsIcon />}
                active={isActive}
                expanded={sidebarExpanded}
              />
            )}
          </NavLink>
          <NavLink to={"pots"}>
            {({ isActive }) => (
              <SidebarButton
                label="Pots"
                icon={<NavPotsIcon />}
                active={isActive}
                expanded={sidebarExpanded}
              />
            )}
          </NavLink>
          <NavLink to={"bills"}>
            {({ isActive }) => (
              <SidebarButton
                label="Bills"
                icon={<NavBillsIcon />}
                active={isActive}
                expanded={sidebarExpanded}
              />
            )}
          </NavLink>
          <NavLink to={"transactions"}>
            {({ isActive }) => (
              <SidebarButton
                label="Transactions"
                icon={<NavTransactionsIcon />}
                active={isActive}
                expanded={sidebarExpanded}
              />
            )}
          </NavLink>
        </nav>
      </div>

      <SidebarMinimizeButton />
    </div>
  );
};

const SidebarMinimizeButton = () => {
  const sidebarExpanded = useNavigationStore((state) => state.sidebarExpanded);
  const updateSidebarExpanded = useNavigationStore(
    (state) => state.updateSidebarExpanded
  );
  const expandedClass = sidebarExpanded ? sidebarBtnStyles.expanded : "";
  return (
    <div
      className={`${sidebarBtnStyles.sidebarBtn} ${sidebarBtnStyles.sidebarMinimizeBtn}`}
      onClick={() => updateSidebarExpanded(!sidebarExpanded)}
    >
      <div className={`${sidebarBtnStyles.sidebarBtnIcon} ${expandedClass}`}>
        <NavMinimizeIcon />
      </div>
      <p className={`${expandedClass}`}>Minimize Menu</p>
    </div>
  );
};

export default Navigation;
