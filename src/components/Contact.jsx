import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "dba4f85e-5a75-406f-a0b3-c88fafb729c2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact">
      <div className="bg-bg py-16 px-4 sm:px-8 font-inter">
      <div className="max-w-xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-semibold text-heading mb-6 text-center">
          Contact Us
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-heading mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300/30 bg-white/20 text-heading rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-heading/70"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-heading mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300/30 bg-white/20 text-heading rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-heading/70"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-heading mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300/30 bg-white/20 text-heading rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-heading/70"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-service text-heading font-semibold py-2 rounded-md hover:bg-opacity-90 transition duration-200"
          >
            Submit Form
          </button>
        </form>
        <p className="text-sm text-center text-heading mt-4">{result}</p>
      </div>
    </div>
    </section>
    
  );
}
