export async  function getUserById(id: string) {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const user = await response.json();

    return user?.data;
}