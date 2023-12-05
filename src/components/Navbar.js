// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom text-center">
      <ul className="nav justify-content-center">
        <Link className="navbar-brand fs-2 fw-bolder" to="/general">KnowNews</Link>
      </ul>               
    </header>

    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <Link className="navbar-brand active" to="/general">General</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-4 my- mb-lg-0 fs-5 fw-medium">
        <li className="nav-item">
          <Link className="nav-link active" to="/sport">Sport</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/business">Business</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/health">Health</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/science">Science</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
      </div>
    </nav>
      </div>
    )
  }
}

export default Navbar