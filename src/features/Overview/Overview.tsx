import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/Users";

export const Overview = () => {
  const data = useQuery({ queryKey: ["users"], queryFn: getUsers });

  return <div>Overview</div>;
};
