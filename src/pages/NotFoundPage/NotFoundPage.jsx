import { Link } from 'react-router-dom';
// import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <p>
        Page is not found!
        <br />
        <Link to="/">Go to Home</Link>!
      </p>
    </div>
  );
};
export default NotFoundPage;
