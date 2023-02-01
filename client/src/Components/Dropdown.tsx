import React from 'react';
const Dropdown = ({ trigger, menu }: any) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div
			className='dropdown'
			style={{
				paddingTop: '10px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '10px',
			}}
		>
			{React.cloneElement(trigger, {
				onClick: handleOpen,
			})}
			{open ? (
				<div className='menu'>
					{menu.map((menuItem: any, index: any) => (
						<div
							key={index}
							className='menu-item'
							style={{ marginBottom: '5px' }}
						>
							{React.cloneElement(menuItem, {
								onClick: () => {
									menuItem.props.onClick();
									setOpen(false);
								},
							})}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};
export default Dropdown;
