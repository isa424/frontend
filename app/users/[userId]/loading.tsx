import { Spinner } from '@/components/spinner/spinner';

const UserLoading = () => {
	return (
		<div>
			<div>Loading user profile...</div>
			<Spinner/>
		</div>
	)
}

export default UserLoading;
