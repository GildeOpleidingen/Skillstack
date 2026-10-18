
import { db, connectDatabase } from "../../prisma/db";

export default async function user() {
        
        await connectDatabase();

        const users = await db.User.findMany();
        
        return (
                <main>
                        <h1>Users</h1>
                        <a href="\">Home</a>
                        <ul>
                        {
                                users.map( (user) => (
                                        <li key={user.github_id}>{user.email}</li>
                                ))
                        }
                        </ul>
                </main>
        );
}
