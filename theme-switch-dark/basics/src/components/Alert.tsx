import { ReactNode } from "react";

interface Props {
	// "children" prop is a pre-defined prop used to contain child components inside them
	// "ReactNode" is a special type that allows html content as well
	children: ReactNode;
	onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
	return (
		<div className="alert alert-primary alert-dismissible">
			{children}
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
				onClick={onClose}
			></button>
		</div>
	);
};

export default Alert;
