const About = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="h-1/10 text-2xl font-bold flex flex-col gap-1 justify-center
            items-center group">
            <p className="group-hover:text-yellow-500 duration-500">About Us</p>
            <div className="h-1 w-1/2 bg-yellow-500 group-hover:w-full group-hover:bg-black
                duration-500"></div>
            <div className="h-1 w-full bg-yellow-500 group-hover:w-1/2 group-hover:bg-black
                duration-500"></div>
        </div>
      <div className="h-7/10 w-full flex justify-center items-center">
        <div className="h-full w-2/5">
        <p className="text-xl font-bold">About Shoplix</p><br />
        <p>“Founded in 2011 as an IT consulting service provider and system integrator, we evolved into a product-centric organization in 2015. Today, we proudly offer four enterprise-scale digital platforms across the Travel, Tax & e-Invoicing, e-Governance & Freezone, and Agriculture sectors.</p><br />
        <p>As a hybrid organization, we seamlessly combine products and services to become a one-stop shop for all our customers' needs.</p><br />
        <p>At LenoraSoft, we offer a full range of IT services alongside innovative enterprise-scale digital platforms that empower businesses in the Travel, Tax & e-Invoicing, e-Governance & Freezone, and Agriculture sectors. Our combination of cutting-edge technology and dedicated customer support provides tailored solutions that streamline operations, improve efficiency, and drive sustainable growth, delivering long lasting value to our clients.</p>
      </div>
      <div className="h-full w-2/5"><img src="https://lenorasoft.com/img/content-left-02.jpg" alt="" className="h-full w-full" /></div>
      </div>
    </div>
  )
}

export default About
