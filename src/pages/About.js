// ________________________________________________________________| Imports
import React, { Fragment } from "react";

// __________________f_____________________________________________| Style
import "../css/About.css";

// ________________________________________________________________| About
const About = () => {
   return (
      <div className='about-wrapper'>
         <div className='about-meat-wrapper'>
            <h1 className='about-h1'>Greetings.</h1>
            <div className='about-paragraphs'>
               <p className='about-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus
                  orci ac auctor. Nibh ipsum consequat nisl vel pretium lectus quam id.
                  Arcu odio ut sem nulla pharetra diam sit amet nisl. Commodo odio aenean
                  sed adipiscing diam donec adipiscing. Facilisi nullam vehicula ipsum a.
                  Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Feugiat
                  nisl pretium fusce id. Lacus laoreet non curabitur gravida arcu ac.
                  Ultrices sagittis orci a scelerisque purus. Nisi lacus sed viverra
                  tellus in. Eleifend quam adipiscing vitae proin sagittis nisl.
               </p>
               <p className='about-p'>
                  Leo in vitae turpis massa sed elementum tempus egestas. Odio ut sem
                  nulla pharetra diam. Elementum facilisis leo vel fringilla est
                  ullamcorper eget. Leo duis ut diam quam nulla porttitor massa. Venenatis
                  a condimentum vitae sapien. Aliquam ultrices sagittis orci a scelerisque
                  purus semper eget. Faucibus et molestie ac feugiat. Sit amet purus
                  gravida quis blandit turpis cursus in. Maecenas accumsan lacus vel
                  facilisis volutpat. Fringilla phasellus faucibus scelerisque eleifend
                  donec pretium vulputate sapien nec. Lorem mollis aliquam ut porttitor
                  leo a diam. Suspendisse interdum consectetur libero id faucibus nisl.
                  Risus sed vulputate odio ut enim blandit volutpat. Nulla aliquet enim
                  tortor at auctor urna. Mi sit amet mauris commodo quis imperdiet massa.
                  In hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
               </p>
               <br></br>
               <p className='about-p right'>Thanks for coming to my TED Talk.</p>
            </div>
         </div>
      </div>
   );
};

export default About;
