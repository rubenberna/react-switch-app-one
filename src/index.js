// import React from 'react'
// import { App } from './components/App'
// import PropTypes from 'prop-types'
// import styles from './styles.module.scss'
//
// export const AppOne = ({ text, searchInput }) => {
//   return <App text={text} searchInput={searchInput} />
// }
//
// App.propTypes = {
//   searchInput: PropTypes.string,
//   text: PropTypes.string
// }

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import axios from 'axios'
import BeatLoader from 'react-spinners/ClipLoader'

const Header = ({ text }) => (
  <div className={styles.textCenter}>
    <h2 className={styles.header}>App One</h2>
    <p>{text}</p>
  </div>
)

export const GithubProfileSearch = ({ searchInput, text }) => {
  const [profile, setProfile] = useState()
  const [loading, setLoading] = useState(false)

  const fetchProfile = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${searchInput}`)
    setLoading(false)
    setProfile(res.data)
  }

  const renderProfile = () => (
    <div className={styles.githubProfile}>
      <img
        className={styles.githubProfileAvatar}
        src={profile.avatar_url}
        alt='github avatar'
      />
      <div>
        <p>
          <span style={{ fontWeight: 600 }}>Name: </span>
          <span>{profile.name}</span>
        </p>
        <p>
          <span style={{ fontWeight: 600 }}>Login: </span>
          <span>{profile.name}</span>
        </p>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <Header text={text} />
      <div className={styles.flexColumnCentered}>
        {searchInput && (
          <p>
            Search input: <span className={styles.italic}>{searchInput}</span>
          </p>
        )}
        <button onClick={fetchProfile} type={'submit'}>
          Search Github profiles
        </button>
        <BeatLoader size={70} color='#399D8B' loading={loading} />
        {profile && renderProfile()}
      </div>
    </React.Fragment>
  )
}

GithubProfileSearch.propTypes = {
  searchInput: PropTypes.string,
  text: PropTypes.string
}

