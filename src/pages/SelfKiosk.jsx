import Button from "../components/PrimaryBtn";

export default function SelfKiosk() {

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
        <div className="grid lg:grid-cols-[30%_70%] gap-12 items-center">

          <div className="flex justify-center lg:justify-start">
            <img
              src="/assets/self-1.png"
              alt="home"
              className=""
            />
          </div>

          <div className="text-center lg:text-left" data-aos="fade-left">
            <h2 className="primary-heading text-white!">
              Global Self
              Service-Kiosk?
            </h2>

            <p className="mx-auto mt-5 text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              Self-kiosk ordering enables patrons to independently place their orders via a kiosk terminal, bypassing the need for assistance from a store attendant. This streamlines operations for businesses, allowing staff to allocate their time to other duties like attending to customers and enhancing the overall in-store experience.
            </p>

            <div className="mt-7 flex justify-center lg:justify-start">
              <Button text="Schedule a Conversation" />
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-center lg:text-left" data-aos="fade-left">
            <h2 className="primary-heading text-white!">
              How Does it Integrate with OTF Cloud-based POS?
            </h2>

            <p className="mx-auto mt-5 text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              The self-kioskiQ ordering seamlessly integrates with On The Fly cloud-based POS systems. These kiosks are linked to the cloud-based POS system, enabling instant updates and reporting. As customers place orders, the information is transmitted directly to your customers carrier. Concurrently, the system updates sales data automatically. This enables your business to effortlessly oversee operations, while staff can utilize data insights to enhance service and inventory management
            </p>

          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/self-2.png"
              alt="home"
              className=""
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center lg:justify-start">
            <img
              src="/assets/self-3.png"
              alt="home"
              className=""
            />
          </div>

          <div className="text-center lg:text-left" data-aos="fade-left">
            <h2 className="primary-heading text-white!">
              Enrich customer experience and increase revenue
            </h2>

            <p className="mx-auto mt-5 text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              The SK700 can be used as a wall-mounted or free-standing solution to increase revenue without hiring additional staff. With On The Fly POS, you can easily install relevant business apps to help your customers activate a mobile device pay their phone bill while effectively up-selling and allow them to pay using their preferred payment option.
            </p>

            <h3 className="text-white font-semibold text-2xl mt-4 mb-2">
              Cost Savings :
            </h3>

            <p className="mx-auto text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              Implementing self-kiosks can lead to significant reductions in labor costs, allowing business owners to allocate resources elsewhere
            </p>

            <h3 className="text-white font-semibold text-2xl mt-4 mb-2">
              Data Insights:
            </h3>

            <p className="mx-auto text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              Implementing self-kiosks can lead to significant reductions in labor costs, allowing business owners to allocate resources elsewhere
            </p>

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-center lg:text-left" data-aos="fade-left">
            <h2 className="primary-heading text-white!">
              The Flexible Kiosk Solution
            </h2>

            <p className="mx-auto mt-5 text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              With a large 21.5-inch IPS screen, the SK700 provides brilliant viewing experience and makes your brand stand out. This device integrates seamlessly with the needs of your business with an all-day battery life.
            </p>

            <p className="mx-auto mt-5 text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              Unlike the other products in the series, it doesn't have a payment module. It is designed to be paired with PAX IM30 to offer the same seamless payment experience.
            </p>

            <div className="mt-7 flex justify-center lg:justify-start">
              <Button text="Schedule a Conversation" />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/self-4.png"
              alt="home"
              className=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
