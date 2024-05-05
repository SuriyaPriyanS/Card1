import React from 'react';
import Card from './Components/Card';

const App = () => {
  const data = [
    {
      title: "FREE",
      price: "$0",
      features: [
        { icon: "fas fa-check", text: "Single User" },
        { icon: "fas fa-check", text: "5GB Storage" },
        { icon: "fas fa-check", text: "Unlimited Public Projects" },
        { icon: "fas fa-check", text: "Community Access" },
        { icon: "fas fa-times", text: "Unlimited Private Projects", className: "text-muted" },
        { icon: "fas fa-times", text: "Dedicated Phone Support", className: "text-muted" },
        { icon: "fas fa-times", text: "Free Subdomain", className: "text-muted" },
        { icon: "fas fa-times", text: "Monthly Status Reports", className: "text-muted" }
      ]
    },
    {
      title: "PLUS",
      price: "$9",
      features: [
        { icon: "fas fa-check", text: " User" },
        { icon: "fas fa-check", text: "5GB Storage" },
        { icon: "fas fa-check", text: "Unlimited Public Projects" },
        { icon: "fas fa-check", text: "Community Access" },
        { icon: "fas fa-times1", text: "Unlimited Private Projects", className: "text-muted" },
        { icon: "fas fa-times1", text: "Dedicated Phone Support", className: "text-muted" },
        { icon: "fas fa-times1", text: "Free Subdomain", className: "text-muted" },
        { icon: "fas fa-times1", text: "Monthly Status Reports", className: "text-muted" }
      ]
    },
    {
      title: "PRO",
      price: "$49",
      features: [
        { icon: "fas fa-check", text: "Unlimited User" },
        { icon: "fas fa-check", text: "5GB Storage" },
        { icon: "fas fa-check", text: "Unlimited Public Projects" },
        { icon: "fas fa-check", text: "Community Access" },
        { icon: "fas fa-times", text: "Unlimited Private Projects", className: "text-muted" },
        { icon: "fas fa-times", text: "Dedicated Phone Support", className: "text-muted" },
        { icon: "fas fa-times", text: "Free Subdomain", className: "text-muted" },
        { icon: "fas fa-times", text: "Monthly Status Reports", className: "text-muted" }
      ]
    }
    // Add more data objects for PLUS and PRO plans
  ];

  return (
    <div className="card">
      <div id="root">
        <section className="pricing py-5 bg-primary">
          <div className="container">
            <div className="row">
              {data.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <Card title={item.title} price={item.price} features={item.features} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
