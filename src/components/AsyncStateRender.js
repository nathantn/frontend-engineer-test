import React from 'react';

const AsyncStateRender = props => {
  if (props.state.get('isFetching')) return props.loading();
  if (props.state.get('error')) return props.error();
  if (props.state.get('data')) return props.render();

  return props.fallback();
}

AsyncStateRender.defaultProps = {
  fallback: () => false,
};

export default AsyncStateRender;
