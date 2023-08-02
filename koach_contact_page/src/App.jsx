import { ContactForm, CTA, Footer, Navbar } from "./components";

const App = () => (
  <div>
    <div className="bg-navbar">
      <Navbar />
    </div>
    <div className="bg-main">
      <div className="container main-flex">
        <CTA />
        <ContactForm />
      </div>
    </div>
    <div className="bg-footer">
      <Footer />
    </div>
  </div>
);

export default App;
