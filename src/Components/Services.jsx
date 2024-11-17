import React from 'react'
import {
  FaShoppingCart,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle
} from "react-icons/fa"

const ServicesData = [
  {
    id: 1,
    icon: <FaShoppingCart className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free shipping on All Orders",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 days Money Back Gaurentee",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support",
    description: "Technical Support 24/7",
  }
]

const Services = () => {
  return (
    <div>
      <div className="bg-color p-5 rounded-3xl mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServicesData.map((items) => (
            <div className='flex flex-col items-start sm:flex-row gap-4' key={items.id}>
              {items.icon}
              <div>
                <h1 className="text-lg font-bold">{items.title}</h1>
                <h1 className="text-sm text-gray-600">{items.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Services