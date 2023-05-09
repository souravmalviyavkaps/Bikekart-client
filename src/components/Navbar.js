import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav style={styles.nav} className="container-fluid">
        <Link to='/' >
          <button style = {styles.heading}>
              Bikekart
          </button>
        </Link>

        <div style={styles.rightNav}>
            <Link to='/login'>
              <button style={styles.links}>Login</button>  
            </Link> 
            <Link to='/register'>
              <button style={styles.links}>Register</button>
            </Link>
        </div>
      </nav>
    </>
  )
}

const styles = {
  nav: {
    color: 'white',
    height: 50,
    backgroundColor: 'purple',
    padding: 5,
    marginBottom: 25
  },

  heading: {
    fontSize: 30,
    display: 'inline-block',
    color: 'white',
    border: 'none',
    backgroundColor: 'transparent'
  },

  rightNav: {
    position: "absolute",
    right: 20,
    display: "inline-block"
  },
  links: {
    margin: 10,
    color: "white",
    textDecoration: "none",
    fontSize: 18,
    backgroundColor: 'transparent',
    border: 'none'
  }
}

export default Navbar;
