import { remultExpress } from 'remult/remult-express'
import { Task } from 'src/shared/Task';

export const api = remultExpress({
    entities: [Task]
});
