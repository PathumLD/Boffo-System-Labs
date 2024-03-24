import React from 'react';

const Footer = () => {
  const iframeHtml = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0518700998955!2d79.88504861088408!3d6.884390393085857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ba0b65ceee1%3A0x219d43219df170f1!2sBoffo%20System%20Labs%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1711094212930!5m2!1sen!2slk" width="400" height="300" style="border:4px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <footer className="grid w-full grid-cols-4 gap-4 py-6 bg-emerald-900">
      <div className="container col-span-1 px-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white ">
            {/* <p>&copy; {new Date().getFullYear()} Boffo System Labs. All rights reserved.</p> */}
            <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
          </div>    
        </div>
      </div>

      <div className="col-span-1 text-white">
        <ul className="block">
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              Facebook
            </a>
          </li>
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              Twitter
            </a>
          </li>
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-1 text-white">
        <ul className="block">
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              Facebook
            </a>
          </li>
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              Twitter
            </a>
          </li>
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-1 text-white">
        <ul className="block">
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              Facebook
            </a>
          </li>
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              Twitter
            </a>
          </li>
          <li className="mr-3">
            <a href="#" className="text-white hover:text-white">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;