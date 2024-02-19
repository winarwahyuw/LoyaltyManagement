/* eslint-disable react/prop-types */
import { Nav } from "react-bootstrap";

const SecondaryAppBar = ({ menu }) => {
  return (
    <nav className='secondary-app-bar fixed-top' style={{ backgroundColor: '#fff',  zIndex: '1032', height: '64px'}}>
      <div className="container">
        <Nav variant="underline" defaultActiveKey="general">
          {
            menu?.map(( m, key) => (
              <Nav.Item key={key}>
                <Nav.Link href={m.value} eventKey={m.value}>{m.name}</Nav.Link>
              </Nav.Item>
            ))
          }
        </Nav>  
      </div>
    </nav>
  );
};

export default SecondaryAppBar;