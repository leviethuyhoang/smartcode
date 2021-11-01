
import Modal from './Modal';
import classes from './Problemdetial.module.css';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const ProblemDetail = useSelector(state=>state.problem.ListProblemDetail);


  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Đề bài</span>
        <div>{ProblemDetail.title}</div>
      </div>
      <div className={classes.total}>
        <div>Miêu tả</div>
        <div>{ProblemDetail.content}</div>
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
