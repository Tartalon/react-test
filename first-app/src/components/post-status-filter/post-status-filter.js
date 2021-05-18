import React from 'react';
import { Button } from 'reactstrap';
import './post-status-filter';

const PostStastusFilter = () => {
  return (
    <div className="btn-group">
      <Button color="info">Все</Button>
      <button className="btn btn-info">Все</button>
      <button className="btn btn-outline-secondary">Понравилось</button>
    </div>
  );
};

export default PostStastusFilter;
