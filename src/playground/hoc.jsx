import React from 'react';
export const hoc = Component => {
  return props => <Component {...props} injected={'boom'} />;
};
//the hoc needs to return a component so we
//could return class x extends component
//here we just return a functional component and
//pass down the props.

//we could make a configurator hoc

export const hocWithConfig = config => Component => {
  return props => <Component {...props} {...config} />;
};

//This is a component that takes a component to render
//IT is not a HOC - this kind of wraps
// export const MyComponent = props => {
//   const { as: Component, ...rest } = props;
//   return <Component {...rest} />;
// };

export const MyComponent = props => {
  return React.createElement(props.as, props);
};
