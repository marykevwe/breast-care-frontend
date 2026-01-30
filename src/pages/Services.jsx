export default function Services() {
  return (
    <div className="w-full">

      {/* HEADER */}
      <section className="bg-pink-50 py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-4">
          Our Programs & Services
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          We provide life-saving programs focused on prevention, education,
          emotional support, and community empowerment.
        </p>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* PROGRAM 1 */}
          <div className="bg-pink-50 p-6 rounded-2xl shadow-md text-center">
            <img
              src="https://images.unsplash.com/photo-1580281657527-47b0a5c7a2cf"
              alt="Breast screening"
              className="h-48 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold text-pink-700 mb-3">
              Free Breast Screening
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We organize free and subsidized breast screening programs to
              encourage early detection and timely medical intervention,
              especially in underserved communities.
            </p>
          </div>

          {/* PROGRAM 2 */}
          <div className="bg-pink-50 p-6 rounded-2xl shadow-md text-center">
            <img
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
              alt="Awareness campaign"
              className="h-48 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold text-pink-700 mb-3">
              Awareness Campaigns
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Through workshops, outreach programs, and digital campaigns, we
              educate women and families about breast cancer risks, symptoms,
              and prevention.
            </p>
          </div>

          {/* PROGRAM 3 */}
          <div className="bg-pink-50 p-6 rounded-2xl shadow-md text-center">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="Support group"
              className="h-48 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold text-pink-700 mb-3">
              Survivor Support Groups
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We provide safe spaces for survivors to share experiences,
              receive emotional support, and build strength together during
              and after treatment.
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-pink-700 py-20 px-6 text-center text-white">
        <h3 className="text-4xl font-bold mb-4">
          Join Us in Making a Difference
        </h3>
        <p className="max-w-xl mx-auto mb-8 text-lg">
          Whether you want to volunteer, partner, or support our mission,
          your involvement helps save lives.
        </p>

        <button className="bg-white text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition">
          Get Involved
        </button>
      </section>

    </div>
  );
}
