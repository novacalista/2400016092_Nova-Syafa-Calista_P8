export default function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}