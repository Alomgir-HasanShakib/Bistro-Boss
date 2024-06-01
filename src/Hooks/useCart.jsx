import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Context/Authentication";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loader } = useContext(AuthContext);
  console.log(user?.email)
  //   tanstack query code here
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
