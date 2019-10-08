import React, { Component } from "react";

// const withClass = (WrappedComponent, classname) => {
//   return props => (
//     <div className={classname}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

const withClass = (WrappedComponent, classname) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={classname}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  };
  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />;
  });
};
// const withClass = props => (
//   <div className={props.classes}>{props.children}</div>
// );

export default withClass;
