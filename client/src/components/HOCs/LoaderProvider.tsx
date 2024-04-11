import React from 'react';
import AppSpinner from '../ui/AppSpinner';

type LoaderProviderProps = {
  children: JSX.Element;
  isLoading: boolean;
};

export default function LoaderProvider({ children, isLoading }: LoaderProviderProps): JSX.Element {
  return <div>{isLoading ? <AppSpinner /> : children}</div>;
}
