import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "ESPRIT, Tunis, Ghazela — 1st/2nd cycle of engineering (2023-2025)",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "02 users",
      "Point of sale",
      "Customers",
    ],
    href: "#",
    cta: "Buy Hobby",
    mostPopular: false,
  },
  {
    title: "Industrial Space EL Azib Bizerte-Tunisia. 01/08/2024 to 15/09/2024",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Integration of SharePoint with Microsoft Business Central",
    features: [
      "Unlimited vouchers ∞",
      "02 users",
      "Point of sale",
      "Customers",
    ],
    href: "#",
    cta: "Buy Hobby",
    mostPopular: false,
  },
  {
    title: "Institute of Technological Studies of Bizerte 2022 - 2nd/3rd year System Development in Computer Science.",
    price: 24,
    currency: "$",
    frecuency: "month",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "04 users",
      "02 warehouses",
      "Dashboard",
      "Point of sale",
    ],
    href: "#",
    cta: "Buy Freelancer",
    mostPopular: false,
  },
  {
    title: "Technopark El Ghazela 2088 Ariana 06/02/2023 to 27/05/2023",
    price: 240,
    currency: "$",
    frecuency: "year",
    description: "Development of a web and mobile application for queue management",
    features: [
      "Unlimited vouchers ∞",
      "04 users",
      "02 warehouses",
      "Dashboard",
      "Point of sale",
    ],
    href: "#",
    cta: "Buy Freelancer",
    mostPopular: false,
  },
  {
    title: "Institute of Technological Studies of Bizerte 2021 - 1st year Information Technology.",
    price: 32,
    currency: "$",
    frecuency: "month",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "08 users",
      "04 warehouses",
      "Dashboard",
      "Point of sale",
      "Finance",
      "mobile App",
    ],
    href: "#",
    cta: "Buy Startup",
    mostPopular: false,
  },
  {
    title: "Cement Bizerte Jan. 2022",
    price: 320,
    currency: "$",
    frecuency: "year",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "08 users",
      "04 warehouses",
      "Dashboard",
      "Point of sale",
      "Finance",
      "mobile App",
    ],
    href: "#",
    cta: "Buy Startup",
    mostPopular: false,
  },
  {
    title: "Menzel Jemil High School, Bizerte Baccalaureate in Technical Sciences (with Honors)",
    price: 48,
    currency: "$",
    frecuency: "month",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "16 users",
      "08 warehouses",
      "Dashboard",
      "Point of sale",
      "Inventory",
      "Shopping",
      "Finance",
      "mobile App",
    ],
    href: "#",
    cta: "Buy Enterprice",
    mostPopular: false,
  },
  {
    title: "STIR of Bizerte July 2021",
    price: 480,
    currency: "$",
    frecuency: "year",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "16 users",
      "08 warehouses",
      "Dashboard",
      "Point of sale",
      "Inventory",
      "Shopping",
      "Finance",
      "mobile App",
    ],
    href: "#",
    cta: "Buy Enterprice",
    mostPopular: false,
  },
];


type BillingInterval = "year" | "month";

export default function Pricing() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Education & Experience</h2>

        {/*<p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          We have the perfect product for your business, choose the product that
          best suits you, Try Halley free for 14 days.
        </p>*/}
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Education
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={`${
              billingInterval === "year"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Experience
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map(
          ({
            title,
            mostPopular,
            description,
            currency,
            price,
            frecuency,
            cta,
            features,
            href,
          }) => {
            return (
              <>
                {billingInterval === frecuency ? (
                  <div
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-rose-300 border-2 border-solid dark:border-rose-500"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                   
                  </div>
                ) : null}
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
