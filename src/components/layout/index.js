import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags top-tag-html">&lt;html&gt;</span>
        <br />
        <span className="tags top-tags">&lt;body&gt;</span>
        <div className='content-container'>
          <Outlet />
        </div>
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br />
        <span className="tags bottom-tag-html">&lt;/html&gt;</span>
      </div>
    </div>
  );
};
export default Layout;
