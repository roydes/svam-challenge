import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import api from '../AppGlobals'
import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
} from '../redux/appActions';
import Detail from './Detail';
import List from './List';

const Container = () => {
  const result = useSelector((state: any) => state.data.results);
  const loading = useSelector((state: any) => state.data.loading);
  const error = useSelector((state: any) => state.data.error);
  const dispatch = useDispatch();
  const { id } = useParams();
  const path = useLocation().pathname.substring(1);

  useEffect(() => {
    dispatch(fetchRequest());

    fetch(`${api.url}${path}`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchSuccess(data)))
      .catch((error) => dispatch(fetchFailure(error)));
    }, []
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      { id ? <Detail detail={result}></Detail> : <List list={result}></List> }
    </div>
  );
};

export default Container;