import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import SectionTitle from "../../Component/Section Title/SectionTitle";
const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
  return (
    <>
      <SectionTitle head="Payment Now" subHead="Pay first"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </>
  );
};

export default Payment;
