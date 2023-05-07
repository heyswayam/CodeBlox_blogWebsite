import React from "react";
export default function contact_us() {
  let sendData = async (event) => {
    // 'use-server'
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const concern = event.target.concern.value;
    let url = await fetch("http://localhost:3000/api/contact-us", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, email, phone, concern }),
    }).then(()=>{
      alert("success")
      event.reset;
      event.target.name.value = " ";
      event.target.email.value = " ";
      event.target.phone.value = " ";
      event.target.concern.value = " ";
    })

  };


  return (
    <>
      <form onSubmit={sendData}>
        {
          <div className='w-9/12 mx-auto grid grid-cols-1 justify-items-center mt-10 gap-6'>
            <div className='w-full md:w-1/3'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='name'>
                Name
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                type='text'
                name="name"
                placeholder='Enter your name'
                id='name'
              />
            </div>
            <div className='w-full md:w-1/3'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='email'>
                email
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                type='text'
                name="email"
                placeholder='Enter your email'
                id='email'
              />
            </div>
            <div className='w-full md:w-1/3'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='phone'>
                phone
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                type='text'
                name="phone"

                placeholder='Enter your phone'
                id='phone'
              />
            </div>
            <div className='w-full md:w-1/3'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='concern'>
                concern
              </label>
              <textarea
                className='flex h-32 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                type='text'
                name="concern"
                placeholder='Enter your concern'
                id='concern'
                rows='2'
              />
            </div>

            <button
              type='submit'
              className='inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-600/80'>
              Submit
            </button>
          </div>
        }
      </form>
    </>
  );
}
