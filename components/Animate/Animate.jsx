import cx from 'classnames';
import aos from 'aos/dist/aos.js';

const Animate = (props) => {

  const {children, duration, delay, easing, type} = props;
  return (
    <div data-aos={type} data-aos-easing={easing} data-aos-duration={duration} data-aos-delay={delay}>
      {children}
    </div>
  )
}

Animate.defaultProps = {
  type: 'fade-up'
}
export default Animate
