function Contact() {
  return <div className="max-w-6xl mx-auto flex flex-col place-items-center py-20">
    <div className="flex flex-row flex-wrap justify-center items-center gap-7">
      <div className="bg-neutral-100 text-neutral-700 p-4 rounded-lg flex flex-col gap-4 font-semibold">
        <h1 className="text-3xl font-bold text-neutral-900">Get in touch:</h1>
        <p className="">Fill in the form to start a conversation</p>
        <div>
          <p>Acme Inc, Street</p>
          <p>State, Postal Code</p>
        </div>
        <div>
          <p>+8801927-481-890</p>
        </div>
        <div>
          <p>info@acme.org</p>
        </div>
      </div>

      <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full Name" className="py-2 px-3 rounded-lg border-2 border-neutral-200 w-80" />
        <input type="email" placeholder="Email" className="py-2 px-3 rounded-lg border-2 border-neutral-200 w-80" />
        <input type="number" placeholder="Telephone Number" className="py-2 px-3 rounded-lg border-2 border-neutral-200 w-80" />
        <button className="py-2 px-5 bg-orange-700 text-white rounded-lg font-semibold w-fit">Submit</button>
      </form>
    </div>
  </div>;
}

export default Contact;
