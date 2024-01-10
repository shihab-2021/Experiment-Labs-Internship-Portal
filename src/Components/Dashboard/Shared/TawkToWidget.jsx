// import React, { useEffect } from "react";

// const TawkToWidget = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://embed.tawk.to/659d0f388d261e1b5f511008/1hjmo6tsh";
//     script.charset = "UTF-8";
//     script.setAttribute("crossorigin", "*");
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return <div>{/* Your component content */}</div>;
// };

// export default TawkToWidget;

// import React, { useContext, useEffect } from "react";
// import { AuthContext } from "../../../Contexts/AuthProvider";

// const TawkToWidget = () => {
//   const { userInfo } = useContext(AuthContext);
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://embed.tawk.to/659d0f388d261e1b5f511008/1hjmo6tsh";
//     script.charset = "UTF-8";
//     script.setAttribute("crossorigin", "*");
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (typeof Tawk_API !== "undefined") {
//         // Set user data
//         Tawk_API.onLoad = function () {
//           Tawk_API.setAttributes({
//             name: `${userInfo?.firstName} ${userInfo?.lastName}`,
//             email: userInfo?.email,
//             phone: userInfo?.phone,
//           });
//         };
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [userInfo]);

//   return <div>{/* Your component content */}</div>;
// };

// export default TawkToWidget;

import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const TawkToWidget = () => {
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/659d0f388d261e1b5f511008/1hjmo6tsh";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    script.onload = () => {
      if (typeof Tawk_API !== "undefined") {
        // Use setAttributes directly for reliable data sending
        Tawk_API.setAttributes({
          name: `${userInfo?.firstName} ${userInfo?.lastName}`,
          email: userInfo?.email,
          phone: userInfo?.phone,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [userInfo]);

  return <div>{/* Your component content */}</div>;
};

export default TawkToWidget;
