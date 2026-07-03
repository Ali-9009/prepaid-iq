import { Copy, Check, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

export default function Inventory() {

  const [copiedUrl, setCopiedUrl] = useState("");

  const url1 = "https://ontheflypos.com/pax-a-77/";
  const url2 = "https://ontheflypos.com/pax-a-920/";
  const url3 = "https://ontheflypos.com/pax-e-700/";

  const handleCopy = async (link) => {
    await navigator.clipboard.writeText(link);
    setCopiedUrl(link);

    setTimeout(() => {
      setCopiedUrl("");
    }, 2000);
  };


  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center lg:justify-start">
            <img
              src="/assets/inv-1.png"
              alt="home"
              className=""
            />
          </div>

          <div className="text-center md:text-left" data-aos="fade-left">
            <h2 className="primary-heading text-white!">
              PAX A77 POS Android MiniPOS+
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              The A77 has a stunning 5.5-inch color touch-screen, a powerful processor and
              a long-lasting battery life. Designed to reduce environmental footprint as
              well as stationery costs, the A77 does not come with an inbuilt printer, but
              can be paired up to one via Bluetooth connectivity. If customers need a
              receipt, it can be delivered by SMS or email.
            </p>

            <button onClick={() => handleCopy(url1)} className="mx-auto mt-6 flex w-full max-w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-left backdrop-blur-xl transition-all duration-300 hover:border-(--primary-color) hover:bg-(--primary-color)/10 sm:max-w-xl md:mx-0 md:w-fit md:max-w-none md:px-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary-color)/20 text-(--primary-color)">
                <LinkIcon size={20} />
              </div>

              <div className="min-w-0">
                <p className="max-w-45 truncate text-sm text-white sm:max-w-90 md:max-w-[320px]">
                  {url1}
                </p>
              </div>

              {copiedUrl === url1 ? (
                <Check className="shrink-0 text-green-400" size={20} />
              ) : (
                <Copy className="shrink-0 text-gray-300 transition group-hover:text-(--primary-color)" size={20} />
              )}
            </button>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left" data-aos="fade-left">
            <h2 className="primary-heading text-white!">
              Process payments onthe spot, anytime, anywhere
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              The revolutionary terminal that started it all. The A920 combines the full features of an Android tablet with a powerful POS payment terminal, all in a sleek and compact design. The A920 integrates, in a handheld terminal, an entire point of sale to support merchant business. Taking advantage of Android environment, A920 can enrich checkout services thanks to the most open set of business applications on the market. Safe and secure payment Relying on international payment security certifications such as PCI-PTS 5.x, the A920 delivers a secure payment acceptance service.
            </p>

            <button onClick={() => handleCopy(url2)} className="mx-auto mt-6 flex w-full max-w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-left backdrop-blur-xl transition-all duration-300 hover:border-(--primary-color) hover:bg-(--primary-color)/10 sm:max-w-xl md:mx-0 md:w-fit md:max-w-none md:px-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary-color)/20 text-(--primary-color)">
                <LinkIcon size={20} />
              </div>

              <div className="min-w-0">
                <p className="max-w-45 truncate text-sm text-white sm:max-w-90 md:max-w-[320px]">
                  {url2}
                </p>
              </div>

              {copiedUrl === url2 ? (
                <Check className="shrink-0 text-green-400" size={20} />
              ) : (
                <Copy className="shrink-0 text-gray-300 transition group-hover:text-(--primary-color)" size={20} />
              )}
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/inv-2.png"
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
              src="/assets/inv-3.png"
              alt="home"
              className=""
            />
          </div>

          <div className="text-center md:text-left" data-aos="fade-left">
            <h2 className="primary-heading text-white!">
              PAX E700 SmartECR Large screens and small footprint
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              The E700 terminal combines Electronic Cash Register (ECR) and Consumer Payments functionality into a single, ergonomic solution that is ideal for retail, restaurants, hospitality, and entertainment. The PAXBiz® platform, powered by Android™, coupled with the the 12.5″ HD touchscreen tablet display is designed to handle any POS application while simultaneously improving the customer and merchant user experience. Built with a hybrid card reader, dual cameras, and multiple security layers, customers can pay quickly and securely, using traditional or alternative payment methods.
            </p>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
              Cash register and payment terminal in one device. E700 is ideal for shops, restaurants and hotels who want a modern check-out system.
            </p>

            <button onClick={() => handleCopy(url3)} className="mx-auto mt-6 flex w-full max-w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-left backdrop-blur-xl transition-all duration-300 hover:border-(--primary-color) hover:bg-(--primary-color)/10 sm:max-w-xl md:mx-0 md:w-fit md:max-w-none md:px-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary-color)/20 text-(--primary-color)">
                <LinkIcon size={20} />
              </div>

              <div className="min-w-0">
                <p className="max-w-45 truncate text-sm text-white sm:max-w-90 md:max-w-[320px]">
                  {url3}
                </p>
              </div>

              {copiedUrl === url3 ? (
                <Check className="shrink-0 text-green-400" size={20} />
              ) : (
                <Copy className="shrink-0 text-gray-300 transition group-hover:text-(--primary-color)" size={20} />
              )}
            </button>
          </div>

        </div>
      </section>
    </>
  )
}
