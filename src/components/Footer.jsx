import React from 'react'

const Footer = () => {
  return (
    <footer style={{backgroundImage: "url('/src/assets/background2.jpg')"}}
    className='bg-white border-t'>

      <div className="bg-slate-700/60 backdrop-blur-2xl text-white">
          <section id="footercontent" className="flex flex-col lg:flex-row lg:justify-between p-5 space-y-5">
          {/* Product info */}
          <div className="w-3/5">
            <h3 className="text-xl font-bold uppercase mt-5">AR Sales</h3>
            <p className="mt-4 leading-loose text-sm text-justify lg:mr-6">
              At AR Sales, we are committed to delivering top-quality products and exceptional customer experiences. 
              Our team combines innovation, strategy, and personalized support to help businesses grow and succeed 
              in a competitive market.
            </p>
          </div>

          {/* Footer List Menu */}
          <div className="flex flex-col md:flex-row md:grow md:justify-between space-y-10 md:space-y-0">
            <div>
              <h3 className="font-bold uppercase">Company</h3>
              <ul className="text-sm space-y-2">
                <li>About</li>
                <li>Features</li>
                <li>Work</li>
                <li>Cover</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold uppercase">Help</h3>
              <ul className="text-sm space-y-2">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold uppercase">Resources</h3>
              <ul className="text-sm space-y-2">
                <li>Free eBooks</li>
                <li>Development Tutorials</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="copyright">
          <div className="border border-white my-5 w-11/12 mx-auto"></div>

          <div className="flex flex-col md:flex-row md:justify-between p-3 space-y-4 md:space-y-0">
            <div>&copy; Copyright 2025. All Rights Reserved</div>
            <img
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/footer/1/payment-methods.png"
              alt=""
              className="w-72"
            />
          </div>
        </section>

      </div>
      
    </footer>
  )
}

export default Footer
