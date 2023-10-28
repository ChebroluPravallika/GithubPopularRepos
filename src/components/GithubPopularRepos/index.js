import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    repoData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getRepoData()
  }

  changeActiveTab = id => {
    this.setState({isLoading: true})
    this.getGitData(id)
  }

  getGitData = async id => {
    const url = `https://apis.ccbp.in/popular-repos?language=${id}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const items = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({repoData: items, isLoading: false})
    }
  }

  getRepoData = async () => {
    // console.log(activeTab)
    const url = 'https://apis.ccbp.in/popular-repos?language=ALL'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const items = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      //   this.setState({repoData: items, isLoading: false})
      this.setState(prevState => ({
        repoData: items,
        isLoading: !prevState.isLoading,
      }))
    }
  }

  render() {
    const {isLoading, repoData} = this.state
    console.log(isLoading)
    return (
      <div className="title">
        <h1>Popular</h1>
        <div className="background">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              id={each.id}
              language={each.language}
              changeActiveTab={this.changeActiveTab}
            />
          ))}
        </div>
        <div>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <div className="items">
              {repoData.map(each => (
                <RepositoryItem
                  name={each.name}
                  key={each.id}
                  issuesCount={each.issuesCount}
                  forksCount={each.forksCount}
                  starsCount={each.starsCount}
                  avatarUrl={each.avatarUrl}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
