import Link from 'next/link';

const UserNotFound = () => {
	return (
		<div>
			<h1>User not found!</h1>
			<div>
				<Link href={'/users'}>Go to users page</Link>
			</div>
		</div>
	)
}

export default UserNotFound;
