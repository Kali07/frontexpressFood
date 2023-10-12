import React from "react";
import Navbar from "../components/Navbar";
import OrderHistory from "../components/OrderHistory";
import PersonalInformation from "../components/PersonalInformation";
import Footer from "../components/Footer";

const Account = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <PersonalInformation />
      <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Commande(s) en cours
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Découvrez où en est votre festin, de la cuisine à votre porte.
          </p>
        </div>
      </div>
      <OrderHistory />
      <Footer />
    </div>
  );
};

export default Account;
