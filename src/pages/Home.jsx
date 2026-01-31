import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
       <motion.div
        initial={{ opacity: 0, x: -100 }} // start hidden off-screen left
        whileInView={{ opacity: 1, x: 0 }} // animate when in view
        viewport={{ once: false, amount: 0.3 }} // trigger every time 30% of element is visible
        transition={{ duration: 0.8 }}
        className="p-8 text-center bg-pink-50 rounded"
      >
      <section className="bg-pink-50 py-20 px-6 text-center">
        <h2 className="text-5xl font-extrabold text-pink-700 mb-6">
          Together We Fight Breast Cancer
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          Empowering women with knowledge, early detection, and compassionate
          support to save lives and build healthier communities.
        </p>

        <img
          src="https://images.unsplash.com/photo-1580281658629-ffbfc9c3a3c8"
          alt="Breast cancer awareness"
          className="mx-auto rounded-2xl shadow-lg max-w-4xl w-full"
        />
      </section>
</motion.div>
      {/* ABOUT SECTION */}
       <motion.div
        initial={{ opacity: 0, x: -100 }} // start hidden off-screen left
        whileInView={{ opacity: 1, x: 0 }} // animate when in view
        viewport={{ once: false, amount: 0.3 }} // trigger every time 30% of element is visible
        transition={{ duration: 0.8 }}
        className="p-8 text-center bg-pink-50 rounded"
      >
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Women support"
            className="rounded-xl shadow-md"
          />

          <div>
            <h3 className="text-3xl font-bold text-pink-700 mb-4">
              Why Breast Cancer Awareness Matters
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Breast cancer is one of the most common cancers affecting women
              worldwide. Early detection and education can significantly improve
              survival rates and quality of life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to educate, support, and inspire action through
              awareness campaigns, screenings, survivor stories, and access to
              care.
            </p>
          </div>
        </div>
      </section>
</motion.div>
      {/* SERVICES / IMPACT */}
       
      <section className="bg-pink-100 py-16 px-6">
        <h3 className="text-3xl font-bold text-center text-pink-800 mb-12">
          What We Stand For
        </h3>
       
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
        initial={{ opacity: 0, x: -100 }} // start hidden off-screen left
        whileInView={{ opacity: 1, x: 0 }} // animate when in view
        viewport={{ once: false, amount: 0.3 }} // trigger every time 30% of element is visible
        transition={{ duration: 0.8 }}
        className="p-8 text-center bg-pink-50 rounded"
      >
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://images.unsplash.com/photo-1584467735871-b4fdb4b62b7c"
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-pink-700 mb-2">
              Early Detection
            </h4>
            <p className="text-gray-600">
              Promoting regular screening, self-examinations, and timely medical
              attention.
            </p>
          </div>
</motion.div>
 <motion.div
        initial={{ opacity: 0, x: -100 }} // start hidden off-screen left
        whileInView={{ opacity: 1, x: 0 }} // animate when in view
        viewport={{ once: false, amount: 0.3 }} // trigger every time 30% of element is visible
        transition={{ duration: 0.8 }}
        className="p-8 text-center bg-pink-50 rounded"
      >
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-pink-700 mb-2">
              Survivor Support
            </h4>
            <p className="text-gray-600">
              Standing with survivors and families through emotional and
              community support.
            </p>
          </div>
</motion.div>
<motion.div
        initial={{ opacity: 0, x: -100 }} // start hidden off-screen left
        whileInView={{ opacity: 1, x: 0 }} // animate when in view
        viewport={{ once: false, amount: 0.3 }} // trigger every time 30% of element is visible
        transition={{ duration: 0.8 }}
        className="p-8 text-center bg-pink-50 rounded"
      >
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-pink-700 mb-2">
              Education & Advocacy
            </h4>
            <p className="text-gray-600">
              Spreading accurate information and advocating for accessible
              healthcare services.
            </p>
          </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-pink-700 text-white text-center">
        <h3 className="text-4xl font-bold mb-4">
          Your Awareness Can Save a Life
        </h3>
        <p className="max-w-xl mx-auto mb-8 text-lg">
          Join us in spreading awareness, supporting survivors, and encouraging
          early detection in every community.
        </p>

        <button className="bg-white text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition">
          Learn More
        </button>
      </section>

    </div>
  );
}
