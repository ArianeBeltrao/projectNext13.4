import OtherUsers from '../components/other-users';
import { getUserById } from '../services/get-user-by-id';

export default async function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUserById(params.id);
  
  console.log('teste user by id no UserDetailsPage', user)

  return (
    <>
      <h2>
        Usuário: {user.first_name} {user.last_name}
      </h2>
      <span>{user.email}</span>
      <hr />
      {user.body}
      <hr />
      <h2>Outros Usuários</h2>
      <OtherUsers currentUserId={params.id} />
    </>
  );
}