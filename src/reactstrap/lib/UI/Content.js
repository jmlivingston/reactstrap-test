import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// import '../../../styles/components/_forms.scss'
// import '../../../styles/components/_nav.scss'
// import '../../../styles/components/_navbar.scss'

const propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  title: PropTypes.string,
};

function Content({ items, children, title }) {
  return (
    <Container className="content" fluid={true}>
      <Row>
        <Col tag="main" md={{ size: 3, order: 2 }}>
          <div className="docs-sidebar mb-3">
            <h1 className="h5">{title}</h1>
            <Nav className="flex-column">
              {items.map(item => (
                <NavItem key={item.to}>
                  <NavLink tag={Link} to={item.to} activeClassName="active">
                    {item.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        </Col>
        <Col tag="aside" md={{ size: 9, order: 1 }} className="docSearch-content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

Content.propTypes = propTypes;
export default Content;
