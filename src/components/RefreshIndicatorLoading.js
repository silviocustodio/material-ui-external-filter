import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const RefreshIndicatorLoading = () => (
  <div  style={style.container}>
    <RefreshIndicator
      size={60}
      left={600}
      top={100}
      status="loading"
      style={style.refresh}
      />
  </div>

);

export default RefreshIndicatorLoading;