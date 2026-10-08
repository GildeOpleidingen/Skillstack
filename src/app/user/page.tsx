
import { db, connectDatabase } from "../../prisma/db";




export default async function user() {
        
        await connectDatabase();

        const users = await db.orm.public.User.all();
        
        return (
                <main>
                        <h1>Users</h1>
                        <a href="\">Home</a>
                        <ul>
                        {
                                users.map( (user) => (
                                        <li key={user.id}>{user.email}</li>
                                ))
                        }
                        </ul>
                </main>
        );
}
