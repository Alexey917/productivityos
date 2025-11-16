import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPath, setColorByPath } from '@/features';
import { useEffect } from 'react';

export const RouterSync = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPath(location.pathname));
    dispatch(setColorByPath());
  }, [location, dispatch]);

  return null;
};
