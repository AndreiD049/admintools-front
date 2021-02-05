import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import PageHeader from '../../components/shared/page-header';
import HomePlannedItems from '../../components/widgets/home-planned-items';

const HomePage = () => (
  <>
    <PageHeader text="Home Page" />
    <Container fluid>
      <Row>
        <Col sm={6} xs={12}>
          <HomePlannedItems />
        </Col>
      </Row>
    </Container>
  </>
);

export default HomePage;
