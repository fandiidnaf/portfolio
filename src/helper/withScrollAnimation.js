// withScrollAnimation.js
export function withScrollAnimation(Component) {
    return function WrappedComponent(props) {
      return (
        <div data-scroll-animate>
          <Component {...props} />
        </div>
      );
    };
  }
  