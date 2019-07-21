import React from 'react';
import Loadable, { OptionsWithRender } from 'react-loadable';
import { Switch, Route } from 'react-router';

import Loading, { IProps } from './lego/Loading'

const loadableHome: OptionsWithRender<IProps, any> = {
  loader: () => import(/* webpackChunkName: "Home" */ './containers/Home'),
  loading: Loading,
  render(loaded: any, props: IProps) {
      const Component: any = loaded.default;
      return <Component {...props} />;
  },
};
const LoadableHome = Loadable(loadableHome);

const loadableProduct: OptionsWithRender<IProps, any> = {
  loader: () => import(/* webpackChunkName: "Product" */ './containers/Product'),
  loading: Loading,
  render(loaded: any, props: IProps) {
      const Component: any = loaded.default;
      return <Component {...props} />;
  },
};
const LoadableProduct = Loadable(loadableProduct);

const loadableNotFound: OptionsWithRender<IProps, any> = {
  loader: () => import(/* webpackChunkName: "NotFound" */ './containers/NotFound'),
  loading: Loading,
  render(loaded: any, props: IProps) {
      const Component: any = loaded.default;
      return <Component {...props} />;
  },
};
const LoadableNotFound = Loadable(loadableNotFound);

interface RoutesProps {
  history?: any
}

const Routes = (props: RoutesProps) =>
  <Switch>
    <Route exact path='/' component={LoadableHome}/>
    <Route path='/product' component={LoadableProduct}/>
    <Route component={LoadableNotFound} />
  </Switch>;

export default Routes;