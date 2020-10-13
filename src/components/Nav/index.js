import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';



function Nav(props) {
  const tabs = ['About Me', 'Contact', 'Resume', 'Portfolio'];
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          {/* <span role="img" aria-label="camera"> 📸</span> Oh Snap! */}
          Laura Fry's Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2"> */}
            {/* <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li> */}
          {/* added the following 5 lines */}
          {/* <li className="mx-2"> 
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>

          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
