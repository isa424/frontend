'use client';

type IProps = {
	error: Error
	reset: () => void
};

const UsersError = ({error, reset}: IProps) => {
	return (
		<div>
			<div>Users page error</div>
			<div>{error.message}</div>
			<div><button onClick={() => reset()}>Reset</button></div>
		</div>
	);
}

export default UsersError;
