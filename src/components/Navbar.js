const Navbar = () => {
  return (
    <>
      <nav style={styles.nav} className="container-fluid">
        <button style = {styles.heading}>
            Bikekart
        </button>

        <div style={styles.rightNav}>
            <button style={styles.links}>Login</button> 
            <button style={styles.links}>Register</button>
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
    color: "inherit",
    textDecoration: "none",
    fontSize: 18,
    backgroundColor: 'transparent',
    border: 'none'
  }
}

export default Navbar;
