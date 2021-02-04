import { getAllUserInfo } from '@src/services/api/user';
import { useRequest } from 'ahooks';
import React, { useEffect } from 'react';

const Home = props => {
  const data = useRequest(() => getAllUserInfo());
  console.log(data);

  return <div>Home</div>;
};

export default Home;
