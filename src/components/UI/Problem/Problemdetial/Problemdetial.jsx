
import Modal from './Modal';
import classes from './Problemdetial.module.css';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const ProblemDetail = useSelector(state=>state.problem.ProblemDetail);


  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Đề bài</span>
        <span>{ProblemDetail.title}</span>
      </div>
      <div className={classes.total}>
        <span>Miêu tả</span>
        <span>{ProblemDetail.content}</span>
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
