import { ReactComponent as CloseIcon } from '../assets/images/icon-close.svg';

const Sidebar = ({ className, NavLinks, hideSidebar }) => {
	return (
		<div className={className}>
			<CloseIcon
				className='nav-sidebar-close-icon'
				onClick={() => hideSidebar()}
			/>
			<NavLinks />
		</div>
	);
};

export default Sidebar;
