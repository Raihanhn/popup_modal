import { Fragment, useState } from 'react'
import Modal from '@/components/Modal'

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <Fragment>
      <div className=" p-10 text-center ">
        <h1 className=" text-3xl "> Custom modal created using Nextjs. </h1>
        <button onClick={() => setShowModal(true) } className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 mt-2 ">Text Modal</button>
        <button onClick={() => setShowModal2(true) } className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 mt-2 ">Video Modal</button>
        <button onClick={() => setShowModal3(true) } className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 mt-2 ">Form Modal</button>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false) } >
          <div className="p-6">
          <h3 className=" text-xl font-semibold text-gray-900 mb-5 ">Modal Title</h3>
          <p className=" mb-5 font-normal text-gray-500 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore delectus saepe, reiciendis possimus, iusto sed ipsa rem temporibus fugit voluptate expedita neque officia dignissimos ipsam, tempore velit ut. Excepturi, tenetur!
          </p>
          </div>
        </Modal>

        <Modal isVisible={showModal2} onClose={() => setShowModal2(false) } >
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/MY2Mi7qv-bE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal>
        <Modal isVisible={showModal3} onClose={() => setShowModal3(false) } >
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
           <div className="mb-6">
         <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
           </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
         <div className="flex items-center justify-between">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
           Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
           Forgot Password?
           </a>
          </div>
        </form>
        </Modal>

    </Fragment>
  )
}
