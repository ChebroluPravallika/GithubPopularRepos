import './index.css'

const LanguageFilterItem = props => {
  const {id, language, changeActiveTab} = props
  const changeTab = () => {
    console.log(id)
    changeActiveTab(id)
  }
  return (
    // <div className="background">
    <button type="button" onClick={changeTab} className="text">
      {language}
    </button>
    /* </div> */
  )
}

export default LanguageFilterItem
