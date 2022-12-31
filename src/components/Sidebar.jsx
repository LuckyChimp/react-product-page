import { ReactComponent as CloseIcon } from '../assets/images/icon-close.svg';

const Sidebar = ({ visible, NavLinks, hideSidebar }) => {
	return (
		<div className={visible ? 'nav-sidebar nav-sidebar--active' : 'nav-sidebar'}>
			<CloseIcon
				className='nav-sidebar-close-icon'
				onClick={() => hideSidebar()}
			/>
			<NavLinks />
		</div>
	);
};

export default Sidebar;
