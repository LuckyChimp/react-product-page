import { ReactComponent as CloseIcon } from '../assets/images/icon-close.svg';

const Sidebar = ({ visible, NavLinks, hideSidebar }) => {
	return (
		<div className={visible ? 'nav-sidebar-container nav-sidebar-container--active' : 'nav-sidebar-container'}>
			<div className='nav-sidebar'>
				<CloseIcon
					className='nav-sidebar-close-icon'
					onClick={() => hideSidebar()}
				/>
				<NavLinks />
			</div>
		</div>
	);
};

export default Sidebar;
