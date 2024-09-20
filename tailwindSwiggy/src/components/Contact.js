const Contact = () => {
  return (
    <div className="text-center bg-gray-100 w-6/12 mx-auto shadow-lg">
      <h1 className="font-bold p-8">Contact Us</h1>
      <form>
        <input type="text" className="border border-black p-1 m-1 rounded-lg" placeholder="name"/>
        <input type="text" className="border border-black p-1 m-1 rounded-lg" placeholder="message"/>
        <button className="border border-black p-1 m-1 rounded-lg bg-slate-200">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
