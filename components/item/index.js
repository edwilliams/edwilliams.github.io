const Item = ({ img, title, url, subTitle }) => {
  return (
    <div className="mb-4" onClick={() => (window.location.hash = `#/projects/${url}`)}>
      <div className="text-center">
        <img className="mb-2" src={img} />
      </div>

      <div className="px-2">
        <h3 className="mb-2 underline">{title}</h3>
        <h4 className="mb-4">{subTitle}</h4>
        <hr />
      </div>
    </div>
  )
}

export default Item
