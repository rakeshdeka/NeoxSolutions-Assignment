

function App() {
  return (
    <>
      <header className="bg-gray-200 p-4 text-center">
        <nav className="flex justify-around bg-[#ff5722] text-white p-2">

          <a href="#home" className="hover:text-gray-300 ">Home</a>
          <a href="#clients" className="hover:text-gray-300">Our Clients</a>
          <a href="#projects" className="hover:text-gray-300">Previous Projects</a>
          <a href="#services" className="hover:text-gray-300">Our Services</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>

        </nav>
      </header>

      <section id="home" className=" flex flex-col justify-center items-center p-4 text-center h-[700px] bg-[#00000031]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        <h1 className="text-6xl font-bold text-[#ff5722]">Welcome to Maharashtra Ltd.</h1>
        <p className="mt-2 text-white font-semibold text-2xl">Dream It. Build It. We Make It Happen...</p>
      </section>
      <section id="clients" className="h-60 bg-[#ffff0050]">
        <h1 className="text-3xl font-bold mt-4 text-center">Our Clients</h1>

      </section>
      <section id="projects" className="h-60 bg-[#ff00003d]">
        <h1 className="text-3xl font-bold mt-4 text-center">Previous Projects</h1>

      </section>

      <section id="services" className="h-60 bg-[#00800042]">
        <h1 className="text-3xl font-bold mt-4 text-center">Our Services</h1>

      </section>


      <section id="about" className="h-60 bg-[#ee82ee49]">
        <h1 className="text-3xl font-bold mt-4 text-center">About Us</h1>

      </section>

      <section id="contact" className="bg-[#ffa60046] p-4">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <div className="max-w-md mx-auto mt-4">
          <form action="#" method="post">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded mb-4" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded mb-4" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded mb-4" required></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
          </form>
        </div>
      </section>



      <footer className="bg-gray-200 p-4 text-center">
        <p>Email: your.email@example.com</p>
        <p>Phone: +123 456 7890</p>
        <div>
          {/* <!-- Include social links --> */}
        </div>
      </footer>
    </>
  );
}

export default App;
