import './index.css'

const RepositoryItem = props => {
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = props
  return (
    <div className="item">
      <img src={avatarUrl} alt="" className="avatar" />
      <p className="name">{name}</p>
      <div className="stars">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt=""
          className="image"
        />
        <p className="para">{starsCount}</p>
      </div>
      <div className="stars">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt=""
          className="image"
        />
        <p className="para">{forksCount}</p>
      </div>
      <div className="stars">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt=""
          className="image"
        />
        <p className="para">{issuesCount}</p>
      </div>
    </div>
  )
}

export default RepositoryItem
