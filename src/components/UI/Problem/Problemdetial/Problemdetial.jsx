
import Modal from './Modal';
import classes from './Problemdetial.module.css';

const Cart = (props) => {

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Đề bài</span>
        <span>{props.title}</span>
      </div>
      <div className={classes.total}>
        <span>Miêu tả</span>
        <span>{props.content}</span>
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
