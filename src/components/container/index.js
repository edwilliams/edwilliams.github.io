import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="">
      <div className="h-5 absolute bg-red-500 px-2 w-full flex justify-between items-center text-xl">
        <h2>Ed Williams</h2>
        <ul className="flex-center">
          {/* todo: hide home if on home */}
          {true && <li className="mr-2">home</li>}
          <li className="mr-2">about</li>
          <li className="mr-2">projects</li>
          <li className="mr-2">social</li>
        </ul>
      </div>
      <div className="pt-5">{children}</div>
    </div>
  )
}

export default Container
