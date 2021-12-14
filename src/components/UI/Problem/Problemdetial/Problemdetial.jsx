
import Modal from './Modal';
import classes from './Problemdetial.module.css';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const ProblemDetail = useSelector(state=>state.problem.showDetail);
  console.log('show',ProblemDetail);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Đề bài</span>
        <div>{ProblemDetail.name}</div>
      </div>
      <div className={classes.total}>
        <div>Miêu tả</div>
        <div>{ProblemDetail.description}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
