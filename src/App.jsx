import { useState } from "react";
import {    
  NavBar,
  Hero,
  Footer,
  Stats,
  Bussines,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-[1280px] w-full ">
            < NavBar />

          </div>
        </div>
        <div className="bg-primary flex justify-center items-start">
          <div className="xl:max-[1280px] w-full ">
          < Hero />
          </div>
        </div>

        <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
          <div className="xl:max-[1280px] w-full ">
            < Stats />
            < Bussines/>
            < Billing  />
            < CardDeal  />
            < Testimonials />
            < Clients  />
            < CTA  />
            < Footer />
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
