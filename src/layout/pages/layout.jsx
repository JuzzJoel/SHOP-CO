import Alert from '../components/alert/Alert';
import Breadcrumbs from '../components/breadcrumbs/BreadCrumbs';
import Footer from '../components/footer/Footer';
import Header from '../components/header/pages/Header';
import { CartProvider } from '../../context/cartContext';
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from 'react';
import { useAnchorLinks } from '../../hooks/useAnchorLinks';

gsap.registerPlugin(ScrollSmoother);
  
  
function Layout({ children }) {
  useAnchorLinks();
//   useEffect(() => {
//   const intervalId = setInterval(() => {
//     if (document.querySelector("#wrapper") && document.querySelector("#content")) {
//       const smoother = ScrollSmoother.create({
//         wrapper: "#wrapper",
//         content: "#content",
//         smooth: 10,
//       });
//       clearInterval(intervalId);
//     }
//   }, 100);

//   return () => {
//     clearInterval(intervalId);
//   };
// }, []);
  return (
     <div id="wrapper">
      <div id="content">
           <CartProvider>

        <Alert/>
      < Header />
      <Breadcrumbs />
      <main>{children}</main>
          <Footer />
           </CartProvider>

      </div>

    </div>
  );
};

export default Layout;