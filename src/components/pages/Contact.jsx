const Contact = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-10 
      bg-[url('https://images.pexels.com/photos/7562342/pexels-photo-7562342.jpeg')]
      bg-contain">
        <p className="text-3xl font-bold text-blue-950 bg-yellow-400 rounded-xl px-4">Contact Us</p>
      <form className="h-2/3 w-1/3 bg-white rounded-xl flex flex-col justify-evenly items-center
        text-lg font-semibold">
        <div className="h-2/10 w-full flex justify-between items-center px-2">
            <label htmlFor="name" className="h-1/2 w-1/3">Enter full name: </label>
            <input type="text" name="name" id="name" className="h-1/2 w-2/3 bg-neutral-200 rounded-xl focus:outline-yellow-600 outline-1 pl-3 text-neutral-800" />
        </div>
        <div className="h-2/10 w-full flex justify-between items-center px-2">
            <label htmlFor="email" className="h-1/2 w-1/3">Enter email: </label>
            <input type="email" name="email" id="email" className="h-1/2 w-2/3 bg-neutral-200 
                rounded-xl focus:outline-yellow-600 outline-1 pl-3 text-neutral-800" />
        </div>
        <div className="h-2/10 w-full flex justify-between items-center px-2">
            <label htmlFor="contact" className="h-1/2 w-1/3">Enter Contact: </label>
            <input type="tel" name="contact" id="contact" className="h-1/2 w-2/3 bg-neutral-200 
                rounded-xl focus:outline-yellow-600 outline-1 pl-3 text-neutral-800" />
        </div>
        <div className="h-2/10 w-full flex justify-between items-center px-2">
            <label htmlFor="message" className="h-1/2 w-1/3">Enter your message: </label>
            <textarea name="message" id="message" className="h-1/2 w-2/3 bg-neutral-200 
                rounded-xl focus:outline-yellow-600 outline-1 pl-3 text-neutral-800">
            </textarea>
        </div>
        <button className="h-1/10 w-1/2 bg-blue-950 rounded-xl text-white">Submit</button>
      </form>
    </div>
  )
}

export default Contact
