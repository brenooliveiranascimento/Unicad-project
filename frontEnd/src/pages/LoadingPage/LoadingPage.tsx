import React from "react";
import Lottie from "react-lottie";
import animationLoading from "../../images/lottie/96365-delivery-service-delivery-man.json";
import styles from "./styles.module.css";

const defaultOptionsLoading: any = {
  loop: true,
  autoplay: true,
  animationData: animationLoading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};


export default function LoadingPage() {
  return (
    <section className={styles.lloading_container}>
      <h1>Unicad</h1>
      <h1>Delivery</h1>
      <Lottie
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: 400,
          height: 400
        }}
        options={defaultOptionsLoading}
      />
    </section>
  );
}
