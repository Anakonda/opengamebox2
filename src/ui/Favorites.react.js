import _ from 'lodash';
import React from 'react';
import {ListGroup, ListGroupItem, Button, Image, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import FavoritesAdd from './FavoritesAdd.react';

const Favorite = ({
  img, createEntity
}) => {
  return (
    <ListGroupItem>
      <Row>
        <Col xs={2}>
          <Image src={img.thumbnail} responsive />
        </Col>
        <Col xs={8}>
          {img.imgHash}
        </Col>
        <Col xs={2}>
          <Button bsStyle="primary" onClick={() => { createEntity(img.imgHash); }}>
            Create
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

const Favorites = ({
  createEntity, images
}) => {
  return (
    <div>
      <h2>Add new favorite</h2>
      <FavoritesAdd />
      <hr />
      <h2>Favorites</h2>
      <ListGroup>
        {
          images.map(img => {
            return (<Favorite key={img.imgHash}
                              img={img}
                              createEntity={createEntity} />);
          })
        }
      </ListGroup>
    </div>
  );
};

const mapStateToProps = state => {
  const images = [];
  Object.keys(state.settings.images).forEach(imgHash => {
    images.push({imgHash, thumbnail: state.settings.images[imgHash].thumbnail});
  });
  return {
    images
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createEntity: (imgHash) => {
      dispatch({
        type: 'ENTITY_CREATE_REQUEST',
        data: [{
          pos: {x: 100, y: 100},
          imgHash,
          selectedClientId: null
        }]
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
