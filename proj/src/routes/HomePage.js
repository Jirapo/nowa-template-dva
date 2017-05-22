import React from 'react';
import { Link } from 'dva/router';

function HomePage() {
  return (
    <div >
      <h1>Hello Antd.</h1>
      <hr />
      <ul >
        <li>You can go to <Link to="/users">/users</Link></li>
      </ul>
    </div>
  );
}

HomePage.propTypes = {
};

export default HomePage;