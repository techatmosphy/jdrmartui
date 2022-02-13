import React from 'react';
import {useBarcode} from 'react-barcodes';

const withHook = (Component, useHook, hookName = 'hookvalue') => {
    return function WrappedComponent(props) {
      const hookValue = useHook();
      return <Component {...props} {...{[hookName]: hookValue}} />;
    };
  };

  class MyComponent extends React.Component {
    render(){
      const myUseHookValue = this.props.myUseHookValue;
      return <div>{myUseHookValue}</div>;
    }
  }

export default withHook(MyComponent, useHook, 'myUseHookValue');