import './index.css'

const LanguageFilterItem = props => {
  const {id, language, changeActiveTab, activeTab} = props
  const changeTab = () => {
    console.log(id)
    changeActiveTab(id)
  }

  const clsName = activeTab === id ? 'active' : 'text'

  return (
    // <div className="background">
    <button type="button" onClick={changeTab} className={clsName}>
      {language}
    </button>
    /* </div> */
  )
}

export default LanguageFilterItem
