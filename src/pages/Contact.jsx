export default function Contact() {
  return (
    <div className="w-full">

      {/* HEADER */}
      <section className="bg-pink-50 py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-4">
          Get in Touch With Us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          We’re here to listen, support, and respond. Reach out to us for
          inquiries, partnerships, support, or awareness programs.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Contact support"
            className="rounded-2xl shadow-lg"
          />

          {/* CONTACT DETAILS */}
          <div>
            <h3 className="text-2xl font-bold text-pink-700 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                <span className="font-semibold text-pink-700">Email:</span>{" "}
                info@breastcare.org
              </p>

              <p>
                <span className="font-semibold text-pink-700">Phone:</span>{" "}
                +234 800 000 0000
              </p>

              <p>
                <span className="font-semibold text-pink-700">Office Hours:</span>{" "}
                Monday – Friday, 9:00 AM – 5:00 PM
              </p>

              <p>
                <span className="font-semibold text-pink-700">Location:</span>{" "}
                Lagos, Nigeria
              </p>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you are a survivor, caregiver, volunteer, or partner,
              your message matters to us. We respond to all inquiries with
              care and confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-pink-100 py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-center text-pink-700 mb-8">
            Send Us a Message
          </h3>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border p-3 rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border p-3 rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="bg-pink-700 text-white py-3 rounded-lg font-semibold hover:bg-pink-800 transition md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
