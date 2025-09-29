import {useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './animated-script.css';

function Laptop() {

  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "const <span class = 'function'>greet</span><span class ='equalSign'> = </span><span class = 'function' () </span> => <span class = 'funcion'>{</span>\n  <span class = 'console'>console</span>.<span class = 'function'>log</span>(<span class= 'string'>'Welcome!'</span>);\n};\n\ngreet();",
        "<div class='hero'>\n  <h1 class ='output'>Welcome</h1>\n</div>"
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typedInstance.current.destroy(); // Cleanup on unmount
    };
  }, []);

  
  return (
    <>
    {/*///// right-side */}
        <div className="right-half">
            <div className="laptop">
                <div className="laptop-screen">
                    <div className="code-container">
                        <pre id="code-animation" ref={typedRef}></pre>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}
export default Laptop;

