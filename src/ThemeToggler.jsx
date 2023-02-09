// import React, { useState } from 'react';
// import lightStyles from './light-theme.css';
// import darkStyles from './dark-theme.css';

// function ThemeToggler() {
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

// export default ThemeToggler;












// import React, { useState } from 'react';
// import lightStyles from './light-theme.css';
// import darkStyles from './dark-theme.css';

// function ThemeToggler() {
//   const [theme, setTheme] = useState('light');

//   function toggleTheme() {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   }

//   return (
//     <div className={`App ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       {theme === 'light' ? <style>{lightStyles}</style> : <style>{darkStyles}</style>}
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

// export default ThemeToggler;























// import React, { useState } from 'react';
// import lightStyles from './light-theme.css';
// import darkStyles from './dark-theme.css';

// function ThemeToggler() {
//   const [theme, setTheme] = useState('light');

//   function toggleTheme() {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   }

//   return (
//     <div className={`App ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       {theme === 'light' ? <style jsx>{lightStyles.toString()}</style> : <style jsx>{darkStyles.toString()}</style>}
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

// export default ThemeToggler;

















import React, { useState } from 'react';

const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      outline: 'none',
    },
    codeContainer: {
      backgroundColor: '#f2f2f2',
      padding: '20px',
      borderRadius: '10px',
      overflow: 'auto',
      textAlign:'left',
    },
  };
  

const lightStyles = {
  backgroundColor: '#fff',
  color: '#000'
};

const darkStyles = {
  backgroundColor: '#000',
  color: 'gray'
};

function ThemeToggler() {
    const [theme, setTheme] = useState('light');
  
    function toggleTheme() {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  
    const themeStyles = theme === 'light' ? lightStyles : darkStyles;
  
    return (
      <div style={{ ...styles.container, ...themeStyles }}>
        <h2>Use this code to add functionality of dark mode in your Web</h2>
        <button style={styles.button} onClick={toggleTheme}>Toggle Theme</button>
        <pre style={styles.codeContainer}>
          <code>
            {`
            /* CSS for light theme */
            const lightStyles = {
              backgroundColor: '#fff',
              color: '#000'
            };
            
            /* CSS for dark theme */
            const darkStyles = {
              backgroundColor: '#000',
              color: 'gray'
            };
            
            /* Logic to switch between themes */
            function toggleTheme() {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }
            `}
          </code>
        </pre>
      </div>
    );
  }

export default ThemeToggler;
