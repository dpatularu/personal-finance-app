import styles from "./SidebarButton.module.scss";

type Props = {
  icon: any;
  label: string;
  active?: boolean;
};

const SidebarButton = ({ icon, label, active = false }: Props) => {
  return (
    <div className={styles.sidebarBtn}>
      <div className={styles.sidebarBtnIcon}>{icon}</div>
      <p> {label}</p>
    </div>
  );
};

export default SidebarButton;
