import {Link, useNavigate} from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();
  const logoutUser = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    navigate('/');
    
  }

  return (
    <>
      <nav style={styles.nav} className="container-fluid">
        <Link to='/' >
          <button style = {styles.heading}>
              Bikekart
          </button>
        </Link>
        {localStorage.getItem('token') ? 
            <div style={styles.rightNav}>
            <Link to='/profile'>
              <button style={{...styles.links, borderRadius: '50%'}}>
                <img src="/images/user.png" alt="" style={{width: 25, height: 25}}/>
              </button>  
            </Link> 
              <button style={styles.links} onClick={logoutUser}>Logout</button>
          </div>  
        : 
          <div style={styles.rightNav}>
          <Link to='/login'>
            <button style={styles.links}>Login</button>  
          </Link> 
          <Link to='/register'>
            <button style={styles.links}>Register</button>
          </Link>
        </div>
        }
        
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
