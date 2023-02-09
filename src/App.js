// import React, { useState } from 'react';
// import ClipboardJS from 'clipboard';
// import './App.css'

// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const [lightColor, setLightColor] = useState('white');
//   const [darkColor, setDarkColor] = useState('black');
//   const [code, setCode] = useState(`
//     <div style={{ backgroundColor: theme === 'light' ? lightColor : darkColor, color: theme === 'light' ? darkColor : lightColor }}>
//       <h1>Current theme: {theme}</h1>
//       <button onClick={toggleTheme}>Toggle theme</button>
//       <br />
//       <br />
//       <div>
//         <p>Light color:</p>
//         <input type="color" value={lightColor} onChange={(e) => setLightColor(e.target.value)} />
//       </div>
//       <div>
//         <p>Dark color:</p>
//         <input type="color" value={darkColor} onChange={(e) => setDarkColor(e.target.value)} />
//       </div>
//       <br />
//       <br />
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
//         vulputate tellus vel vestibulum. Sed vel libero vel sapien fringilla
//         rutrum. Donec volutpat ligula erat, vitae porttitor neque egestas a.
//       </p>
//     </div>
//   `);

//   const handleCopy = () => {
//     new ClipboardJS('.btn');
//   };




//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//     setCode(`
//       <div style={{ backgroundColor: theme === 'light' ? lightColor : darkColor, color: theme === 'light' ? darkColor : lightColor }}>
//         <h1>Current theme: {theme}</h1>
//         <button onClick={toggleTheme}>Toggle theme</button>
//         <br />
//         <br />
//         <div>
//           <p>Light color:</p>
//           <input type="color" value={lightColor} onChange={(e) => setLightColor(e.target.value)} />
//         </div>
//         <div>
//           <p>Dark color:</p>
//           <input type="color" value={darkColor} onChange={(e) => setDarkColor(e.target.value)} />
//         </div>
//         <br />
//         <br />
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
//           vulputate tellus vel vestibulum. Sed vel libero vel sapien fringilla
//           rutrum. Donec volutpat ligula erat, vitae porttitor neque egestas a.
//         </p>
//       </div>
//     `);
//   };

//   return (
//     <>




//       <div className="container" style={{ backgroundColor: theme === 'light' ? lightColor : darkColor, color: theme === 'light' ? darkColor : lightColor }}>
//         <h1>Current theme: {theme}</h1>
//         {/* <button onClick={toggleTheme}>Toggle theme</button> */}

//         {/* <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
//           {theme === 'light' ? <MoonIcon /> : <SunIcon />}
//         </div> */}

// <div
//           onClick={toggleTheme}
//           style={{
//             cursor: 'pointer',
//             display: 'inline-block',
//             width: '60px',
//             height: '30px',
//             borderRadius: '10%',
//             backgroundColor: theme === 'light' ? darkColor : lightColor,
//             color: 'white',
//             textAlign: 'center',
//             lineHeight: '30px',
//           }}
//         >
//           {theme === 'light' ? '☀️' : '🌙'}
//         </div>

//         <br />
//         <br />
//         <div className="color-selectors">
//           <div className="color-selector">
//             <p>Light color:</p>
//             <input type="color" value={lightColor} onChange={(e) => setLightColor(e.target.value)} />
//           </div>
//           <div className="color-selector">
//             <p>Dark color:</p>
//             <input type="color" value={darkColor} onChange={(e) => setDarkColor(e.target.value)} />
//           </div>
//         </div>
//         <br />
//         <br />
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
//           vulputate tellus vel vestibulum. Sed vel libero vel sapien fringilla
//           rutrum. Donec volutpat ligula erat, vitae porttitor neque egestas a.
//         </p>
//       </div>
//       <br />
//       <br />
//       <div className='hh'>
//       <h1>Here is the code</h1>
//       </div>
//       <pre>
//         <code>
//           {code}
//         </code>
//       </pre>

//       <br />
//       <br />
//       <button className="btn" data-clipboard-text={code} onClick={handleCopy}>Copy to Clipboard</button>


// </>
// );
// };

// export default App;




























// import React, { useState } from 'react';
// import lightStyles from './light-theme.css';
// import darkStyles from './dark-theme.css';

// function App() {
//   const [theme, setTheme] = useState('light');

//   function toggleTheme() {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   }

//   return (
//     <div className={`App ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <style jsx>{`
//         .App {
//           background-color: #fff;
//           color: #000;
//         }
//         .dark {
//           background-color: #000;
//           color: #fff;
//         }
//       `}</style>
//       {theme === 'light' ? <style jsx>{lightStyles}</style> : <style jsx>{darkStyles}</style>}
//       <pre>
//         <code>
//           {`
//           /* CSS for light theme */
//           .light {
//             background-color: #fff;
//             color: #000;
//           }
          
//           /* CSS for dark theme */
//           .dark {
//             background-color: #000;
//             color: #fff;
//           }
//           `}
//         </code>
//       </pre>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ThemeToggler from './ThemeToggler'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ThemeToggler/>
      <Footer/>
    </div>
  )
}

export default App