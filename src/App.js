import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <About />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Gallery />
        currentCategory={currentCategory};
        
      default:
        return <About />;
    }
  };


  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Screenshots of sample projects in my portfolio',
    },
    // { name: 'portraits', description: 'Portraits of people in my life' },
    // { name: 'food', description: 'Delicious delicacies' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Resume></Resume>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <ContactForm></ContactForm>

        )}
      </main> */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
          <Footer></Footer>
    </div>
  );
}

export default App;
