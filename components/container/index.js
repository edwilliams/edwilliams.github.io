const Container = ({ children }) => {
  return (
    <div className="font-body">
      <div className="absolute p-2 w-full flex justify-between items-center ">
        {/* todo: hide home if on home */}
        <h2 className="text-2xl">Ed Williams</h2>
        {/* <ul className="flex-center text-xl">
          {true && <li className="mr-2">Home</li>}
          <li className="mr-2">About</li>
          <li className="mr-2">Projects</li>
          <li className="mr-2">Social</li>
        </ul> */}
      </div>
      <div className="pt-5">{children}</div>
    </div>
  )
}

export default Container
