// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Student, Todo } = initSchema(schema);

export {
  Student,
  Todo
};