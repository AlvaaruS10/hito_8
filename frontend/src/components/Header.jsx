const Header = ({ title, description }) => {
  return (
    <header style={{
      backgroundImage: "url('https://fotografias.lasexta.com/clipping/cmsimages02/2024/04/12/02FCC28C-5308-4137-BD8E-A9CECCAAE7D7/pizza_69.jpg?crop=2121,1193,x0,y109&width=1280&height=720&optimize=low&format=webply')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 0',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '400px'  
    }}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '8px', textAlign: 'center' }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default Header;
