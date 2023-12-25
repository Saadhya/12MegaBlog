import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

// usecontext is to maintain global state.
export const UsersDashboard = (props) => {
  return (
    <div>UsersDashboard</div>
  )
}

UsersDashboard.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UsersDashboard)