import '../../public/assets/css/animate.min.css';
import '../../public/assets/css/bootstrap-datepicker.css';
import '../../public/assets/css/bootstrap.min.css';
import '../../public/assets/css/fontawesome-all.css';
import '../../public/assets/scss/style.scss';
// rtl
// import '../public/assets/rtl/scss/style.scss';

import '../styles/globals.css';
import { useEffect } from "react";

function NeonApp({ Component, pageProps }) {
    useEffect(() => {
        require("../../public/assets/js/jquery-3.3.1.min.js");
        require("../../public/assets/js/jquery.validate.min.js");
        require("../../public/assets/js/bootstrap-datepicker.min.js");
        require("../../public/assets/js/main.js");
    }, []);

    return <Component {...pageProps} />
}

export default NeonApp